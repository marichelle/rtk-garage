import { useSelector } from 'react-redux'
import { USDollar } from '../utils/currency'

function GarageValue() {
  /* FIXME: "Selector unknown returned a
   * different result when called with
   * the same parameters. This can lead
   * to unnecessary rerenders."
   */
  const totalValue = useSelector(({ carList: { cars, searchTerm } }) =>
    cars
      .filter(car => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
      .reduce((acc, car) => acc + car.value, 0)
  )

  return (
    <div className="flex flex-row justify-end gap-3 text-2xl font-semibold">
      <span>Total Value:</span>
      <span>{USDollar.format(totalValue)}</span>
    </div>
  )
}

export default GarageValue
