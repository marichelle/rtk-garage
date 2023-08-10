import { configureStore } from '@reduxjs/toolkit'

import { carFormReducer, changeName, changeValue } from './slices/carFormSlice'
import {
  addCar,
  carListReducer,
  changeSearchTerm,
  garageValue,
  matchedCars,
  removeCar,
} from './slices/carListSlice'

const store = configureStore({
  reducer: {
    carForm: carFormReducer,
    carList: carListReducer,
  },
})

export {
  addCar,
  changeName,
  changeSearchTerm,
  changeValue,
  garageValue,
  matchedCars,
  removeCar,
  store,
}
