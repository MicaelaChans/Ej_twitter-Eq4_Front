import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    createTweet(state, action) {
      state.tweetsList.push(action.payload);
      state.allTweets.push(action.payload);
    },
    deleteTweet(state, action) {
      return state.filter((tweet) => action.payload !== tweet.id);
    },
    likeTweet(state, action) {
      console.log(action.payload);
      const tweet = state.likedTweets.find(
        (tweet) => tweet._id === action.payload
      );
      console.log(tweet);
      if (!tweet.likes.includes(state.user.id)) {
        tweet.likes.push(state.user.id);
      } else {
        tweet.likes.pull(state.user.id);
      }
      return state.filter((tweet) => action.payload !== tweet.id);
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { loginUser, logout, createTweet, deleteTweet, likeTweet } =
  actions;
export default reducer;
