import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {},
});

const { actions, reducer } = tweetSlice;
export const { login, logout } = actions;
export default reducer;
