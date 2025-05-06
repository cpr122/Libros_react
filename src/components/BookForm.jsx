import { useState, useContext } from "react"
import { BookContext } from "../context/BookContext"

const BookForm = ({ bookToEdit, onCancel }) => {
  const { addBook, updateBook } = useContext(BookContext)
  const [book, setBook] = useState(bookToEdit || {
    title: "",
    author: "",
    genre: "",
    year: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (bookToEdit) {
      updateBook(bookToEdit.id, book)
    } else {
      addBook(book)
    }
    setBook({ title: "", author: "", genre: "", year: "" })
    if (onCancel) onCancel()
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">
        {bookToEdit ? "Editar Libro" : "Agregar Nuevo Libro"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label className="block mb-2 font-medium">Título</label>
          <input
            type="text"
            name="title"
            value={book.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Autor</label>
          <input
            type="text"
            name="author"
            value={book.author}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Género</label>
          <input
            type="text"
            name="genre"
            value={book.genre}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-medium">Año</label>
          <input
            type="number"
            name="year"
            value={book.year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>
      <div className="flex justify-end space-x-2 mt-4">
        {bookToEdit && (
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancelar
          </button>
        )}
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {bookToEdit ? "Actualizar" : "Agregar"}
        </button>
      </div>
    </form>
  )
}

export default BookForm