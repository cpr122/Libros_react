import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const FilterControls = () => {
  const { filters, setFilters } = useContext(BookContext)

  const handleFilterChange = (e) => {
    const { name, value } = e.target
    setFilters({ ...filters, [name]: value })
  }

  return (
    <div className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Filtrar Libros</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block mb-2 font-medium">Título</label>
          <input
            type="text"
            name="title"
            value={filters.title}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Autor</label>
          <input
            type="text"
            name="author"
            value={filters.author}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div>
          <label className="block mb-2 font-medium">Género</label>
          <input
            type="text"
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
            className="w-full p-2 border rounded"
          />
        </div>
      </div>
    </div>
  )
}

export default FilterControls;