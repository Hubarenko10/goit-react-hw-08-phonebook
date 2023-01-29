import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
// add JWT
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
// remove JWT
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};
// Post users/signup
export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/signup', credentials);
      //After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      return res.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
// Post users/login

export const logIn = createAsyncThunk(
    'auth/login',
    async(credentials,thunkAPI) => {
    try {
        const res = await axios.post('/users/login',credentials)
        setAuthHeader(res.data.token)
        return res.data
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
    }
    )
// post users/logOut
export const logOut =createAsyncThunk(
    'auth/logout',
    async(_,thunkAPI) => {
    try {
        await axios.post('/users/logout')
        clearAuthHeader();
    } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
    }
    }
    ) 

// get users/current

export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async(_,thunkAPI) => {
     const state = thunkAPI.getState();
     const persistedToken = state.auth.token;

     if(persistedToken === null) {
    return thunkAPI.rejectWithValue('Unable to fetch users')
    }
    
    try {
        setAuthHeader(persistedToken);
        const res = await axios.get('/users/current')
        return res.data
    } catch (e) {
        thunkAPI.rejectWithValue(e.message)
    }

    }

    )