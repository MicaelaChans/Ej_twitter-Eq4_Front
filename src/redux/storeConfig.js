import { configureStore } from "@reduxjs/toolkit";
import tweetReducer from "./tweetSlice";
import UserReducer from "./userSlice";

const store = configureStore({
  reducer: { tweet: tweetReducer, user: UserReducer },
});

export default store;
