import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.selfTweets.push(action.payload);
      state.userFound.tweetsList.push(action.payload);
    },
    deleteTweet(state, action) {
      return state.filter((tweet) => action.payload !== tweet.id);
    },
    likeTweet(state, action) {
      const likedTweet = state.userFound.tweetsList.find(
        (tweet) => tweet.id === action.payload
      );
      const likedSelfTweet = state.selfTweets.find(
        (tweet) => tweet.id === action.payload
      );
      likedTweet.likes.push(action.payload);
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { loginUser, logout, createTweet, deleteTweet } = actions;
export default reducer;
