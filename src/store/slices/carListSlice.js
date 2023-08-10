import { createSlice, nanoid } from '@reduxjs/toolkit'
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
        id: nanoid(),
        name: payload.name,
        value: payload.value,
      })
    },

    /*
     * Assumption:
     * The action payload will have a specific shape, e.g.
     * action.payload === id
     */
    removeCar: (state, { payload }) => {
      state.cars = state.cars.filter(car => car.id !== payload)
    },
  },
  extraReducers: builder => {
    builder.addCase(changeName, state => {
      // do something
    })
  },
})

export const { changeSearchTerm, addCar, removeCar } = carListSlice.actions
export const carListReducer = carListSlice.reducer
