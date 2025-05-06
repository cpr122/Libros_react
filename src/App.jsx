import { useState } from "react"
import { BookContext } from "./context/BookContext"
import { useBooks } from "./hooks/useBooks"
import BookForm from "./components/BookForm"
import BookList from "./components/BookList"
import ReadBooksSection from "./components/ReadBooksSection"
import FilterControls from "./components/FilterControls"

function App() {
  const bookContextValue = useBooks()
  const [showForm, setShowForm] = useState(false)

  return (
    <BookContext.Provider value={bookContextValue}>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Gestión de Libros</h1>
        
        <button
          onClick={() => setShowForm(!showForm)}
          className="mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          {showForm ? "Ocultar Formulario" : "Agregar Libro"}
        </button>
        
        {showForm && <BookForm onCancel={() => setShowForm(false)} />}
        
        <FilterControls />
        
        <BookList />
        
        <ReadBooksSection />
      </div>
    </BookContext.Provider>
  )
}

export default App;