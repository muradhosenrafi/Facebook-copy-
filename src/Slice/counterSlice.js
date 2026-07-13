import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'user',
  initialState: {
    value: null,
  },
  reducers: {
    activeuser: (state, action) => {
     state.value=action.payload

    //  console.log(state.value);
    //  console.log(action.payload);
     
     

    
    },
    
  },
})


export const { activeuser } = counterSlice.actions

export default counterSlice.reducer