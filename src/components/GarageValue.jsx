import { useSelector } from 'react-redux'
import { USDollar } from '../utils/currency'
import { garageValue } from '../store'

function GarageValue() {
  /* FIXME: "Selector unknown returned a
   * different result when called with
   * the same parameters. This can lead
   * to unnecessary rerenders."
   */
  const totalValue = useSelector(garageValue)

  return (
    <div className="flex flex-row justify-end gap-3 text-2xl font-semibold">
      <span>Total Value:</span>
      <span>{USDollar.format(totalValue)}</span>
    </div>
  )
}

export default GarageValue
