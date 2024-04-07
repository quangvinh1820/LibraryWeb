import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const bookSlide = createSlice({
  name: 'book',
  initialState,
  reducers: {
    searchBook: (state, action) => {
      state.search = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchBook } = bookSlide.actions

export default bookSlide.reducer