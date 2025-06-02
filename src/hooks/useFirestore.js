import { useState, useCallback } from 'react'
import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  addDoc, 
  updateDoc, 
  deleteDoc, 
  query, 
  where, 
  orderBy, 
  limit,
  serverTimestamp
} from 'firebase/firestore'
import { db } from '../firebase/config'

export const useFirestore = () => {
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  // Get a single document
  const getDocument = useCallback(async (collectionName, id) => {
    try {
      setError(null)
      setLoading(true)
      
      const docRef = doc(db, collectionName, id)
      const docSnap = await getDoc(docRef)
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() }
      } else {
        return null
      }
    } catch (err) {
      setError(err.message)
      console.error('Error getting document:', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // Get multiple documents with optional query
  const getDocuments = useCallback(async (collectionName, queryOptions = null) => {
    try {
      setError(null)
      setLoading(true)
      
      let q = collection(db, collectionName)
      
      if (queryOptions) {
        const { filters, sort, limitTo } = queryOptions
        
        // Apply filters if provided
        if (filters && filters.length > 0) {
          filters.forEach(filter => {
            q = query(q, where(filter.field, filter.operator, filter.value))
          })
        }
        
        // Apply sorting if provided
        if (sort) {
          q = query(q, orderBy(sort.field, sort.direction || 'asc'))
        }
        
        // Apply limit if provided
        if (limitTo) {
          q = query(q, limit(limitTo))
        }
      }
      
      const querySnapshot = await getDocs(q)
      const documents = []
      
      querySnapshot.forEach((doc) => {
        documents.push({ id: doc.id, ...doc.data() })
      })
      
      return documents
    } catch (err) {
      setError(err.message)
      console.error('Error getting documents:', err)
      return []
    } finally {
      setLoading(false)
    }
  }, [])

  // Add a document
  const addDocument = useCallback(async (collectionName, data) => {
    try {
      setError(null)
      setLoading(true)
      
      // Add timestamp
      const dataWithTimestamp = {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp()
      }
      
      const docRef = await addDoc(collection(db, collectionName), dataWithTimestamp)
      return { id: docRef.id, ...data }
    } catch (err) {
      setError(err.message)
      console.error('Error adding document:', err)
      return null
    } finally {
      setLoading(false)
    }
  }, [])

  // Update a document
  const updateDocument = useCallback(async (collectionName, id, data) => {
    try {
      setError(null)
      setLoading(true)
      
      // Add updated timestamp
      const dataWithTimestamp = {
        ...data,
        updatedAt: serverTimestamp()
      }
      
      const docRef = doc(db, collectionName, id)
      await updateDoc(docRef, dataWithTimestamp)
      return true
    } catch (err) {
      setError(err.message)
      console.error('Error updating document:', err)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  // Delete a document
  const deleteDocument = useCallback(async (collectionName, id) => {
    try {
      setError(null)
      setLoading(true)
      
      const docRef = doc(db, collectionName, id)
      await deleteDoc(docRef)
      return true
    } catch (err) {
      setError(err.message)
      console.error('Error deleting document:', err)
      return false
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    getDocument,
    getDocuments,
    addDocument,
    updateDocument,
    deleteDocument,
    error,
    loading
  }
}
