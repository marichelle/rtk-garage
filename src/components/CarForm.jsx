function CarForm() {
  return (
    <form className="flex flex-row items-end gap-2">
      <div className="flex flex-col w-full">
        <label htmlFor="name">Car Name</label>
        <input
          name="name"
          id="name"
          className="w-full p-2 border border-black"
        />
      </div>
      <div className="flex flex-col w-full">
        <label htmlFor="value">Car Value</label>
        <input name="value" id="value" className="p-2 border border-black" />
      </div>
      <button type="submit" className="px-3 py-2.5 text-white bg-black">
        Add
      </button>
    </form>
  )
}

export default CarForm
