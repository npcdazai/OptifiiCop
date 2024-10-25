// investorDetails.service.js
import { createApi } from "@reduxjs/toolkit/query/react";
// import { api } from "./api.service";
import { baseQuery } from "./token.serivce";

// const baseUrl = api?.defaults.baseURL;

// Define a service using a base URL and expected endpoints
export const onBoarding = createApi({
  reducerPath: "onBoarding",
  baseQuery: baseQuery,
  tagTypes: ["prePop"],
  
  endpoints: (builder) => ({


    getPrePop: builder.query({
        // query: (searchData) => `/corporate/admin`,
        query: () => `/corporate/pre-populate`,
        providesTags: ["prePop"],
      }),





    corpReggister: builder.mutation({
      query: (data) => ({
        url: "/corporate/register-with-code",
        method: "POST",
        body: data ,
      }),
    }),



    
  
    
  }),
});

// Export hooks for usage in functional components
export const { useGetPrePopQuery, useCorpReggisterMutation } = onBoarding;
