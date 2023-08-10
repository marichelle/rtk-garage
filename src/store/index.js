import { configureStore } from '@reduxjs/toolkit'

import {
  carFormReducer,
  changeName,
  changeValue,
  clearForm,
} from './slices/carFormSlice'
import {
  carListReducer,
  changeSearchTerm,
  addCar,
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
  clearForm,
  removeCar,
  store,
}
