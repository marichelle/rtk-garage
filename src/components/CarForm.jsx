import { useDispatch, useSelector } from 'react-redux'

import { addCar, changeName, changeValue, clearForm } from '../store'

function CarForm() {
  const dispatch = useDispatch()
  const { name, value } = useSelector(state => state.carForm)

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(
      addCar({
        name,
        value,
      })
    )
    dispatch(clearForm())
  }

  return (
    <>
      <form className="flex flex-row items-end gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col w-full">
          <label htmlFor="name">Car Name</label>
          <input
            name="name"
            id="name"
            value={name}
            onChange={e => dispatch(changeName(e.target.value))}
            className="w-full p-2 border border-black"
          />
        </div>
        <div className="flex flex-col w-full">
          <label htmlFor="value">Car Value</label>
          <input
            type="number"
            name="value"
            id="value"
            value={value}
            onChange={e => dispatch(changeValue(e.target.value))}
            className="p-2 border border-black"
          />
        </div>
        <button type="submit" className="px-3 py-2.5 text-white bg-black">
          Add
        </button>
      </form>
      <hr className="my-6" />
    </>
  )
}

export default CarForm
