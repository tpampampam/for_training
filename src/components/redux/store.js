import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import numer from '../redux/clear/reducers/numer'
import users from '../redux/clear/reducers/users'
import posts from '../redux/slice/slice'

export const numerSelector = state => state.numer.count
export const usersSelector = state => state.users.users
export const postsSelector = state => state.posts.posts

const store = configureStore({
    reducer: {numer, users, posts},
    middleware: getDefaultMiddleware => getDefaultMiddleware()
})

export default store