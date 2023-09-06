import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    loginUser(state, action) {
      return action.payload;
    },
    logout(state, action) {
      return null;
    },
  },
});

const { actions, reducer } = userSlice;
export const { loginUser, logout } = actions;
export default reducer;
