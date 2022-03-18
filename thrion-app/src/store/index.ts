import { createSlice, configureStore } from "@reduxjs/toolkit";

// FIXME: Implement a real authentication method
const auth = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: true
  },
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    }
  }
});

const store = configureStore({
  reducer: auth.reducer
});

export const { login, logout } = auth.actions;
export default store;
