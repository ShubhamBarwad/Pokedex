import { createSlice } from "@reduxjs/toolkit";

export const viewSwitcherSlice = createSlice({
    name: 'viewSwitcher',
    initialState: {
        view: 'grid',
    },
    reducers: {
        setView(state, action){
            state.view = action.payload;
        },
    },
});
export const { setView } = viewSwitcherSlice.actions;

export default viewSwitcherSlice.reducer;