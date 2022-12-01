import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { initialState } from './initialState';

const userSlice = createSlice({ name: 'users', initialState, reducers: {} });

export const selectUsers = ({ user: { users } }: RootState) => users;

export const { reducer: userReducer } = userSlice;
