import axios from "axios";

// Create an Axios instance for API calls
export const api = axios.create({
  // baseURL: `https://tanami.betadelivery.com/api/v1`,
  baseURL: `https://sprint4.tanami.betadelivery.com/api/v1`, // Replace with your API base URL
  timeout: 10000, // Adjust timeout as needed
  headers: {
    "Content-Type": "application/json",
  },
});

// Add Axios request interceptor to refresh token if expired
api.interceptors.request.use(
  (config) => {
    console.log(config);
    // Modify headers or add tokens as needed
    // const token = localStorage.getItem("accessToken");
    // if (token) {
    //   config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

//   // Add Axios response interceptor to handle token refreshing
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // Example logic for handling token expiration and refreshing
    if (
      error.response.status === 401 &&
      !originalRequest._retry &&
      localStorage.getItem("refreshToken")
    ) {
      originalRequest._retry = true;

      try {
        const response = await api.post("/refresh_token", {
          refreshToken: localStorage.getItem("refreshToken"),
        });

        if (response.status === 200) {
          // Update tokens in local storage
          localStorage.setItem("accessTokenn", response.data.accessToken);
          localStorage.setItem("refreshTokenn", response.data.refreshToken);

          // Retry the original request with the new tokens
          return api(originalRequest);
        }
      } catch (error) {
        console.error("Failed to refresh token:", error);
        // Handle token refresh failure (e.g., redirect to login)
      }
    }

    return Promise.reject(error);
  }
);
