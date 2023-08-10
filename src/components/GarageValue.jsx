import { useSelector } from 'react-redux'
import { USDollar } from '../utils/currency'

function GarageValue() {
  const { cars, searchTerm } = useSelector(state => state.carList)

  const totalValue = cars
    .filter(car =>
      searchTerm.length
        ? car.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        : true
    )
    .reduce((prev, car) => prev + parseInt(car.value, 10), 0)

  return (
    <div className="flex flex-row justify-end gap-3 text-2xl font-semibold">
      <span>Total Value:</span>
      <span>{USDollar.format(totalValue)}</span>
    </div>
  )
}

export default GarageValue
