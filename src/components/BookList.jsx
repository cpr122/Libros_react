import { useState, useContext } from "react"
import { BookContext } from "../context/BookContext"
import BookForm from "./BookForm"

const BookList = () => {
  const { filteredBooks, deleteBook, toggleReadStatus } = useContext(BookContext)
  const [editingBook, setEditingBook] = useState(null)

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Todos los Libros</h2>
      {editingBook && (
        <BookForm 
          bookToEdit={editingBook} 
          onCancel={() => setEditingBook(null)} 
        />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredBooks.map(book => (
          <div key={book.id} className="border p-4 rounded-lg shadow hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold">{book.title}</h3>
            <p className="text-gray-600">Autor: {book.author}</p>
            <p className="text-gray-600">Género: {book.genre}</p>
            <p className="text-gray-600">Año: {book.year}</p>
            <p className={`font-bold ${book.read ? "text-green-500" : "text-red-500"}`}>
              {book.read ? "Leído ✅" : "No leído ❌"}
            </p>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => toggleReadStatus(book.id)}
                className={`px-3 py-1 rounded text-white ${book.read ? "bg-yellow-500 hover:bg-yellow-600" : "bg-green-500 hover:bg-green-600"}`}
              >
                {book.read ? "No leído" : "Leído"}
              </button>
              <div className="space-x-2">
                <button
                  onClick={() => setEditingBook(book)}
                  className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList;