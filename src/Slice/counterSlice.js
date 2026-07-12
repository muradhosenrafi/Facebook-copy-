import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: 0,
  },
  reducers: {
    activeuser: (state, action) => {
     console.log(state.value);
     console.log(action.payload);
     
     

      state.value += 1
    },
    
  },
})


export const { activeuser } = counterSlice.actions

export default counterSlice.reducer