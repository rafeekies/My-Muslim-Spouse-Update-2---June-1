import React, { createContext, useContext } from 'react'
import { useFirestore } from '../hooks/useFirestore'

const FirestoreContext = createContext()

export const useFirestoreContext = () => {
  return useContext(FirestoreContext)
}

export const FirestoreProvider = ({ children }) => {
  const firestoreService = useFirestore()
  
  return (
    <FirestoreContext.Provider value={firestoreService}>
      {children}
    </FirestoreContext.Provider>
  )
}
