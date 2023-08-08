function CarSearch() {
  return (
    <div className="flex flex-row justify-between">
      <h1 className="text-3xl">My Cars</h1>
      <form>
        <label htmlFor="search" className="mr-2 text-xl">
          Search
        </label>
        <input name="search" id="search" className="p-2 border border-black" />
      </form>
    </div>
  )
}

export default CarSearch
