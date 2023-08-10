import { useDispatch, useSelector } from 'react-redux'
import { USDollar } from '../utils/currency'
import { removeCar } from '../store/slices/carListSlice'

function CarList() {
  const dispatch = useDispatch()
  // NOTE: An optimal location for derived state is within `useSelector()`
  const { filteredCars, formName } = useSelector(
    ({ carForm: { name }, carList: { cars, searchTerm } }) => {
      const filteredCars = cars.filter(car =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

      return {
        filteredCars,
        formName: name,
      }
    }
  )

  const handleClick = id => dispatch(removeCar(id))

  const renderedCars = filteredCars.map(({ id, name, value }) => {
    // Highlight car if partial match exists
    const isMatchExists =
      formName && name.toLowerCase().includes(formName.toLowerCase())
    return (
      <li
        key={id}
        className="flex flex-row items-center justify-between px-3 py-4 border border-black"
      >
        <span className={`text-xl ${isMatchExists ? 'font-medium' : ''}`}>
          {name} &mdash; {USDollar.format(value)}
        </span>
        <button
          type="button"
          className="text-white bg-black px-3 py-2.5"
          onClick={() => handleClick(id)}
        >
          Delete
        </button>
      </li>
    )
  })

  return <ul className="flex flex-col my-6 gap-y-3">{renderedCars}</ul>
}

export default CarList
