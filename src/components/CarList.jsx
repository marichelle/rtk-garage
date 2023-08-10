import { useDispatch, useSelector } from 'react-redux'
import { USDollar } from '../utils/currency'
import { removeCar } from '../store/slices/carListSlice'

function CarList() {
  const dispatch = useDispatch()
  const { cars, searchTerm } = useSelector(state => state.carList)

  const handleClick = id => dispatch(removeCar(id))

  return (
    <ul className="flex flex-col my-6 gap-y-3">
      {cars
        .filter(car =>
          searchTerm.length
            ? car.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
            : true
        )
        .map(({ id, name, value }) => (
          <li
            key={id}
            className="flex flex-row items-center justify-between px-3 py-4 border border-black"
          >
            <span className="text-xl">
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
        ))}
    </ul>
  )
}

export default CarList
