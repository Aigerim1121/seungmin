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
      const item = state.list.find((i) => i.id === action.payload.id);
      if (item) {
        item.count = action.payload.count;
      }
    },
    // ✅ жаңы экшен — корзинаны толугу менен тазалайт
    clearCart: (state) => {
      state.list = [];
    },
  },
});

export const { addCart, removeCart, changeCount, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
