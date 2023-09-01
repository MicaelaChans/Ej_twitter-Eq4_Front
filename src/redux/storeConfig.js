import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "./tweetSlice";

const store = configureStore({
  reducer: { tweet: tweetReducer },
});

export default store;
