import { createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        loading: false
    },
    reducers: {
        categoriesRequested: (categories, action) => {
            categories.loading = true;
        },
        categoriesReceived: (categories, action) => {
            categories.list = action.payload;
            categories.loading = false;
        },
        categoriesRequestFailed: (categories, action) => {
            categories.loading = false;
        }
    }
});

export const {
    categoriesReceived,
    categoriesRequested,
    categoriesRequestFailed
} = slice.actions;
export default slice.reducer;

// Action Creators

const url = '/categories';

export const loadCategories = () => 
    apiCallBegan({
        url,
        method: 'get',
        onStart: categoriesRequested.type,
        onSuccess: categoriesReceived.type,
        onError: categoriesRequestFailed.type
    });