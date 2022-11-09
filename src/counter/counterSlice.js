import { createSlice } from '@reduxjs/toolkit';

/* creating a slice requires a STRING NAME to identify the slice
an INITIAL STATE value, and one or more REDUCER functions to define 
how the state can be updated
*/

/* once a slice is created, we can Export the generated Redux ACTION creators 
and the reducer function for the whole slice
*/

// Redux requires that we write all state updates IMMUTABLE, by making cioies of data and updating the copies

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
