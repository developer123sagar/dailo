import { createSlice } from '@reduxjs/toolkit';

const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
const userEmail = localStorage.getItem("userEmail") || "";
const isAdmin = localStorage.getItem("isAdmin") === "true";

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: isLoggedIn,
    userEmail: userEmail,
    isAdmin: isAdmin,
  },
  reducers: {
    setLoginStatus(state, action) {
      state.isLoggedIn = action.payload;
    },
    setUserEmail(state, action) {
      state.userEmail = action.payload;
    },
    setAdminStatus(state, action) {
      state.isAdmin = action.payload;
    },
  },
});

export const { setLoginStatus, setUserEmail, setAdminStatus } = AuthSlice.actions;
export default AuthSlice.reducer;