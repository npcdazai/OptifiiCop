
import { configureStore } from "@reduxjs/toolkit";
import { onBoarding } from "../Services/on.board.service";
import { apiSlice, baseQuery } from "../Services/token.serivce";
import { setupListeners } from "@reduxjs/toolkit/query";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [onBoarding.reducerPath]: onBoarding.reducer,
    // Add other reducers as needed
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: baseQuery, // Pass Axios instance as extra argument
      },
    }).concat(
      apiSlice.middleware,
      onBoarding.middleware,
    ),
});

setupListeners(store.dispatch);

export default store;




