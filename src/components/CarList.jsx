import { useDispatch, useSelector } from 'react-redux'
import { matchedCars, removeCar } from '../store/slices/carListSlice'
import { USDollar } from '../utils/currency'

function CarList() {
  const dispatch = useDispatch()
  // NOTE: An optimal location for derived state is within `useSelector()`
  const { filteredCars, formName } = useSelector(matchedCars)

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
