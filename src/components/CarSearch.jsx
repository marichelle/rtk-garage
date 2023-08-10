import { useDispatch, useSelector } from 'react-redux'

import { changeSearchTerm } from '../store'

function CarSearch() {
  const dispatch = useDispatch()
  const { searchTerm } = useSelector(state => state.carList)

  const handleSearchTermChange = e => dispatch(changeSearchTerm(e.target.value))

  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-3xl">My Cars</h1>
      <form>
        <label htmlFor="searchTerm" className="mr-2 text-xl">
          Search
        </label>
        <input
          name="searchTerm"
          id="searchTerm"
          value={searchTerm}
          onChange={handleSearchTermChange}
          className="p-2 border border-black"
        />
      </form>
    </div>
  )
}

export default CarSearch
