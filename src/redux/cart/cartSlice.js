import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [],
  },
  reducers: {
    addCart: (state, action) => {
      const itemIndex = state.list.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.list[itemIndex].count += 1;
      } else {
        state.list.push({ ...action.payload, count: 1 });
      }
    },
    removeCart: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload);
    },
    changeCount: (state, action) => {
      const { id, count } = action.payload;
      const item = state.list.find((item) => item.id === id);
      if (item && count > 0) {
        item.count = count;
      }
    },
  },
});

export const { addCart, removeCart, changeCount } = cartSlice.actions;
export default cartSlice.reducer;