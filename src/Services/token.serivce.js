import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const baseQuery = async (args, api, extraOptions) => {
  let result = await fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("x-auth-token", token);
      }
      return headers;
    },
  })(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // Handle token refresh
    // const refreshToken = localStorage.getItem("refreshToken");
    // if (refreshToken) {
    //   try {
    //     const refreshResult = await fetchBaseQuery({
    //       baseUrl: import.meta.env.VITE_BASE_URL,
    //     })(
    //       {
    //         url: "/regenerate-token",
    //         method: "POST",
    //         body: { refreshToken },
    //       },
    //       api,
    //       extraOptions
    //     );

    //     if (refreshResult.data) {
    //       // Save new tokens
    //       localStorage.setItem("accessToken", refreshResult.data.access.token);
    //       localStorage.setItem(
    //         "refreshToken",
    //         refreshResult.data.refresh.token
    //       );
    //       localStorage.setItem(
    //         "refreshTokenExp",
    //         refreshResult.data.refresh.expires
    //       );

    //       // Retry the original request with the new token
    //       result = await fetchBaseQuery({
    //         baseUrl: import.meta.env.VITE_BASE_URL,
    //         prepareHeaders: (headers) => {
    //           const token = localStorage.getItem("accessToken");
    //           if (token) {
    //             headers.set("x-auth-token", token);
    //           }
    //           return headers;
    //         },
    //       })(args, api, extraOptions);
    //     }
    //   } catch (err) {
    //     console.error("Failed to refresh token:", err);
    //     // Handle refresh failure (e.g., redirect to login)
    //   }
    // }


    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    Cookies.remove("isAuthenticated", { path: '/login' });
  }

  return result;
};

// Create an RTK Query API slice
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/auth/admin",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          // Store tokens in local storage
          localStorage.setItem("accessToken", data?.data?.access?.token);
          localStorage.setItem("refreshToken", data?.data?.refresh?.token);
          // localStorage.setItem('refreshTokenExp', data?.data?.refresh?.expires);
          localStorage.setItem("accessTokenExp", data?.data?.access?.expires);
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),

    refreshToken: builder.mutation({
      query: (refreshToken) => ({
        url: "/auth/user/regenerate-token",
        method: "POST",
        body: { refreshToken },
      }),
    }),


    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/admin/forget-password",
        method: "POST",
        body: data ,
      }),
    }),




    resetPassword: builder.mutation({
      query: (data) => ({
        url: "/auth/admin/reset-password",
        method: "POST",
        body: data ,
      }),
    }),

    setOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/admin/verify-otp",
        method: "POST",
        body: data ,
      }),
    }),





    resendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/admin/resend-otp",
        method: "POST",
        body: data ,
      }),
    }),




    sentFile: builder.mutation({
      query: ({data, code}) => ({
        url: "/auth/admin/file-upload",
        method: "POST",
        body: data ,
        headers: {
          'x-auth-code': code, // Set your custom header here
        },
      }),
    }),


    



  }),
});

export const { useLoginMutation, useRefreshTokenMutation, useForgotPasswordMutation, useResetPasswordMutation,useResendOtpMutation, useSetOtpMutation, useSentFileMutation } = apiSlice;
