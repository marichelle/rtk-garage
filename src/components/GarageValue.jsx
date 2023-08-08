import { USDollar } from '../utils/currency'

function GarageValue() {
  return (
    <div className="flex flex-row justify-end gap-3 text-2xl font-semibold">
      <span>Total Value:</span>
      <span>{USDollar.format(22500)}</span>
    </div>
  )
}

export default GarageValue
