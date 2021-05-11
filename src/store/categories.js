import { createSelector, createSlice } from '@reduxjs/toolkit';
import { apiCallBegan } from './api';

const slice = createSlice({
    name: 'categories',
    initialState: {
        list: [],
        loading: false,
        openModal: false,
        product: null,
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
        },
        toggleModal: (categories, action) => {
            categories.openModal = !categories.openModal;
        },
        setProductOnModal: (categories, action) => {
            categories.product = action.payload
        },
    }
});

export const {
    categoriesReceived,
    categoriesRequested,
    categoriesRequestFailed,
    toggleModal,
    setProductOnModal,
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

// Selectors

export const getMenuCategories = createSelector(
        state => state.entities.categories,
        categories => categories.list
    );

export const shouldOpen = createSelector(
        state => state.entities.categories,
        categories => categories.openModal
    );

export const getProduct = createSelector(
    state => state.entities.categories,
    categories => categories.product
);