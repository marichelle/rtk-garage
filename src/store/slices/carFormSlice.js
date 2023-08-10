import { createSlice } from '@reduxjs/toolkit'

const carFormSlice = createSlice({
  name: 'carForm',
  initialState: {
    name: '',
    value: 0,
  },
  reducers: {
    changeName: (state, { payload }) => {
      state.name = payload
    },
    changeValue: (state, { payload }) => {
      state.value = payload
    },
    clearForm: state => {
      state.name = ''
      state.value = 0
    },
  },
})

export const { changeName, changeValue, clearForm } = carFormSlice.actions
export const carFormReducer = carFormSlice.reducer
