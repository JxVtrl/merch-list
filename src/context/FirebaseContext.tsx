import React, { createContext, useContext, useEffect, useState, useRef, SetStateAction } from 'react'
import { db } from '../services'
import { doc, collection, getDocs, addDoc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'

const FirebaseContext = createContext({})

export interface iSelected {
    id?: number
    src?: string
    price?: string
    name?: string
}

interface iItem {
    name: string
    src: string
    price: string
}[]

interface iValue {
    selectedOptions: object
    setSelectedOptions: React.Dispatch<SetStateAction<iSelected>>
    createItem: () => void
    items: iItem[]
    totalPrice: number
    removeItem: (id: string) => void

}

export function FirebaseProvider({ children }: any) {
    const [selectedOptions, setSelectedOptions] = useState<iSelected>({})
    const [items, setItems] = useState<iItem[]>([])
    const [totalPrice, setTotalPrice] = useState<number>(0)
    const itemsCollectionRef = collection(db, 'items')

    useEffect(() => {
        getItems()
    }, [])
    
    useEffect(() => {
        if (items) {
            let total = 0
            items.map((item) => {
                total += Number(item?.price.replace(',', '.'))
            })
            setTotalPrice(total)
        }
    }, [items])

    const getItems = () => {
        const getData = async () => {
            const data = await getDocs(itemsCollectionRef)
            setItems(data.docs.map(doc => ({ ...doc.data(), id: doc.id })) as any)
        }
        
        getData()
    }

    const removeItem = (id: string) => {
        console.log(id) 
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
        removeItem,
        items,
        totalPrice

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
