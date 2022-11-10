// named exports inside the curly braces DO need to match the function/variable from the file you are exporting
import { configureStore } from '@reduxjs/toolkit';

// name of the default import/export doesnt matter, this is equivalent to the counterSlice.reducer
import counterReducer from './counter/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
