import { useContext } from "react"
import { BookContext } from "../context/BookContext"

const ReadBooksSection = () => {
  const { books } = useContext(BookContext)
  const readBooks = books.filter(book => book.read)

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Libros Leídos</h2>
      {readBooks.length === 0 ? (
        <p className="text-gray-500">No hay libros marcados como leídos.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {readBooks.map(book => (
            <div key={book.id} className="border p-4 rounded-lg shadow bg-green-50">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="text-gray-600">Autor: {book.author}</p>
              <p className="text-gray-600">Género: {book.genre}</p>
              <p className="text-gray-600">Año: {book.year}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default ReadBooksSection;