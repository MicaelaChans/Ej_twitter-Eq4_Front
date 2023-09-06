import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: null,
  reducers: {
    loginTweet(state, action) {
      return action.payload;
    },
  },
});

const { actions, reducer } = tweetSlice;
export const { loginTweet, logout } = actions;
export default reducer;
