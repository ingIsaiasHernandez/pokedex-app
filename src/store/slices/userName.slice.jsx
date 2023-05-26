import { createSlice } from '@reduxjs/toolkit';

export const userNameSlice = createSlice({
    name: 'userName',
    initialState: "Angel",
    reducers: {
        changeUserName: (state, action) => {
            const inputValue = action.payload;
            return inputValue
        }
    }
})

export const { changeUserName } = userNameSlice.actions;

export default userNameSlice.reducer;