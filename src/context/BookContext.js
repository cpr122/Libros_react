import { createContext, useContext } from "react"

export const BookContext = createContext()
export const useBooks = () => useContext(BookContext)

