import { useState, useEffect } from "react"

export const useBooks = () => {
  const [books, setBooks] = useState(() => {
    const savedBooks = localStorage.getItem("books")
    return savedBooks ? JSON.parse(savedBooks) : []
  })

  const [filteredBooks, setFilteredBooks] = useState([])
  const [filters, setFilters] = useState({
    title: "",
    author: "",
    genre: ""
  })

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
    filterBooks()
  }, [books, filters])

  const filterBooks = () => {
    let result = books
    if (filters.title) {
      result = result.filter(book => 
        book.title.toLowerCase().includes(filters.title.toLowerCase())
      )
    }
    if (filters.author) {
      result = result.filter(book => 
        book.author.toLowerCase().includes(filters.author.toLowerCase())
      )
    }
    if (filters.genre) {
      result = result.filter(book => 
        book.genre.toLowerCase().includes(filters.genre.toLowerCase())
      )
    }
    setFilteredBooks(result)
  }

  const addBook = (book) => {
    setBooks([...books, { ...book, id: Date.now(), read: false }])
  }

  const updateBook = (id, updatedBook) => {
    setBooks(books.map(book => book.id === id ? { ...updatedBook, id } : book))
  }

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id))
  }

  const toggleReadStatus = (id) => {
    setBooks(books.map(book => 
      book.id === id ? { ...book, read: !book.read } : book
    ))
  }

  return {
    books,
    filteredBooks,
    filters,
    setFilters,
    addBook,
    updateBook,
    deleteBook,
    toggleReadStatus
  }
}