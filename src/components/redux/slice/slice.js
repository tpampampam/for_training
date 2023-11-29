import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useGetUsers } from "../../../hooks/useGetUsers";

export const fetchPost = createAsyncThunk(
    'posts/fetchPost',
    async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
        return data.slice(0,10)
    }
)


const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null
    },
    reducers: {},
    extraReducers: (builder) => [
        builder
            .addCase(fetchPost.pending, state => {state.status = 'loading'})
            .addCase(fetchPost.fulfilled, (state, action) => {
                state.status = 'resolved'
                state.posts = action.payload })
            .addCase(fetchPost.rejected, state => {state.status = 'error'})
            
    ]
})

const {actions, reducer} = postSlice
export default reducer
