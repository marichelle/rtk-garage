import { USDollar } from '../utils/currency'

const cars = [
  {
    name: 'Ford Focus',
    value: 15000,
  },
  {
    name: 'Subaru WRX',
    value: 7500,
  },
]

function CarList() {
  return (
    <ul className="flex flex-col my-6 gap-y-3">
      {cars.map(({ name, value }) => (
        <li
          key={name}
          className="flex flex-row items-center justify-between px-3 py-4 border border-black"
        >
          <span className="text-xl">
            {name} &mdash; {USDollar.format(value)}
          </span>
          <button className="text-white bg-black px-3 py-2.5">Delete</button>
        </li>
      ))}
    </ul>
  )
}

export default CarList
