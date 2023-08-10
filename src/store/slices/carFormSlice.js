import { createSlice } from '@reduxjs/toolkit'
import { addCar } from './carListSlice'

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
  },
  extraReducers: builder => {
    builder.addCase(addCar, state => {
      state.name = ''
      state.value = 0
    })
  },
})

export const { changeName, changeValue } = carFormSlice.actions
export const carFormReducer = carFormSlice.reducer
