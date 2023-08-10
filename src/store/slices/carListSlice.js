import { createSlice } from '@reduxjs/toolkit'
import { changeName } from './carFormSlice'

const carListSlice = createSlice({
  name: 'carList',
  initialState: {
    cars: [],
    searchTerm: '',
  },
  reducers: {
    changeSearchTerm: (state, { payload }) => {
      state.searchTerm = payload
    },
    /*
     * Assumption:
     * The action payload will have a specific shape, e.g.
     * action.payload === {name: 'Test Car', value: 999 }
     */
    addCar: (state, { payload }) => {
      state.cars.push({
        id: Date.now(),
        name: payload.name,
        value: payload.value,
      })
    },
    removeCar: (state, { payload }) => {
      state.cars.splice(state.cars.indexOf(payload), 1)
    },
  },
  extraReducers: builder => {
    builder.addCase(changeName, state => {
      // do something
      console.log('🚀 -> state:', state)
    })
  },
})

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions
export const carListReducer = carListSlice.reducer
