import { configureStore, createSlice } from "@reduxjs/toolkit"; // we would create store using "configureStore"

// creating a Slice
const counterSlice = createSlice({
  name: "counter",
  initalState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++; // we can't have hardcoded values here
    },
    decrement(state, action) {
      state.counter--; // we can't have hardcoded values here
    },
    addBy(state, action) {
      state.counter += action.payload; // we can't have hardcoded values here
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer // we are providing the "reducer" properties in the "counterSlice"
});

export default store;
