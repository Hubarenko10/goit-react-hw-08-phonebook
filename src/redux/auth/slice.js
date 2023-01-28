import { createSlice } from "@reduxjs/toolkit";
import { register,logIn,logOut,refreshUser } from "./operations";

const initialState = {
user: {name:null, email:null},
token:null,
isLoggedIn:false,
isRefreshing:false,
}

const logInOrRegisterFullfilled = (state,action) => {
state.user = action.payload.user
state.token = action.payload.token
state.isLoggedIn = true
}

const logOutFullfilled = state => {
state.user = {name:null, email:null}
state.token = null
state.isLoggedIn = false
}

const refreshUserFullfilled = (state,action) => {
state.user = action.payload
state.isLoggedIn = true,
state.isRefreshing = false
}

const refreshPending = state => {
state.isRefreshing = true;
}

const refreshRejected = state => {
state.isRefreshing = false;
}



const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers: (builder) => {
    builder
    .addCase(register.fulfilled,logInOrRegisterFullfilled)
    .addCase(logIn.fulfilled,logInOrRegisterFullfilled)
    .addCase(logOut.fulfilled,logOutFullfilled)
    .addCase(refreshUser.fulfilled,refreshUserFullfilled)
    .addCase(refreshUser.pending,refreshPending)
    .addCase(refreshUser.rejected,refreshRejected)
    }
})

export const authReducer = authSlice.reducer;