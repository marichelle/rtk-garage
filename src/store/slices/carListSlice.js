import { createSelector, createSlice, nanoid } from '@reduxjs/toolkit'
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

// memoized custom selector to optimize redux store functionality
export const garageValue = createSelector(
  /*
   * Array of input selector(s)
   * As long as these don't change, the
   * component will not re-render and,
   * in turn, the provided resolve
   * function will not be re-run
   */
  [rootState => rootState.carList],
  // resolve function
  ({ cars, searchTerm }) =>
    cars
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.value, 0)
)

export const matchedCars = createSelector(
  [rootState => rootState.carForm.name, rootState => rootState.carList],
  (name, { cars, searchTerm }) => {
    const filteredCars = cars.filter(car =>
      car.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return {
      filteredCars,
      formName: name,
    }
  }
)

export const { addCar, changeSearchTerm, removeCar } = carListSlice.actions
export const carListReducer = carListSlice.reducer
