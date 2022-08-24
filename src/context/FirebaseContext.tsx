import React, { createContext, useContext, useEffect, useState, useRef, SetStateAction } from 'react'
import { db } from '../services'
import { doc, collection, getDocs, addDoc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'

const FirebaseContext = createContext({})

interface iSelected {
    id?: number
    src?: string
    price?: string
    name?: string
}

interface iValue {
    selectedOptions: object
    setSelectedOptions: React.Dispatch<SetStateAction<iSelected>>
    createItem: () => void
    items: object[]

}

export function FirebaseProvider({ children }: any) {
    const [selectedOptions, setSelectedOptions] = useState<iSelected>({})
    const [items, setItems] = useState<object[]>([])
    const itemsCollectionRef = collection(db, 'items')

    useEffect(() => {
        getItems()
    }, [])
    
    useEffect(() => {
        console.log(items)
    },[items])

    const getItems = () => {
        const getData = async () => {
            const data = await getDocs(itemsCollectionRef)
            setItems(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        
        getData()
    }
    
    const createItem = () => {
        const sendData = async () => {
            await addDoc(itemsCollectionRef, selectedOptions)
        }

        sendData()
        getItems()
    }



    const value: iValue = {
        selectedOptions,
        setSelectedOptions,
        createItem,
        items

    }

    return (
        <FirebaseContext.Provider value={value}>
            {children}
        </FirebaseContext.Provider>
    )
}

export function useFirebase() {
    return useContext(FirebaseContext)
}
