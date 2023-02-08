import { createSlice } from '@reduxjs/toolkit'

export const savedReducer = createSlice({
    name: 'Save',
    initialState: {
        save: {
            saveItems: localStorage.getItem("saveItems")
                ? JSON.parse(localStorage.getItem("saveItems"))
                : [],
        },
    },
    reducers: {
        savedRecipe: (state, action) => {
            const newItem = action.payload;
            const existsItem = state.save.saveItems.find(
                (item) => item._id === newItem._id
            );
            const saveItems = existsItem
                ? state.save.saveItems.map((item) =>
                    item._id === existsItem._id ? newItem : item
                )
                : [...state.save.saveItems, newItem];
            localStorage.setItem("saveItems", JSON.stringify(saveItems));
            return {
                ...state,
                save: {
                    ...state.save,
                    saveItems,
                },
            };
        },
        deleteRecipe: (state, action) => {
            const saveItems = state.save.saveItems.filter(
                (item) => item._id !== action.payload._id
            );
            localStorage.setItem("saveItems", JSON.stringify(saveItems));
            return {
                ...state,
                save: {
                    ...state.save,
                    saveItems,
                },
            };
        }
    },
})

export const { savedRecipe, deleteRecipe } = savedReducer.actions
export default savedReducer.reducer;