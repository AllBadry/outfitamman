import { createContext, useContext } from 'react'

export const LangContext = createContext(null)
export const useLang = () => useContext(LangContext)

export const CartContext = createContext(null)
export const useCart = () => useContext(CartContext)

export const DataContext = createContext(null)
export const useData = () => useContext(DataContext)

export const UIContext = createContext(null)
export const useUI = () => useContext(UIContext)
