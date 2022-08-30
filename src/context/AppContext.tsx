import React, { createContext, useContext, useEffect, useState, useRef, SetStateAction } from 'react'
import { db, useGoogleSearch } from '../services'
import { doc, collection, getDocs, addDoc, deleteDoc, updateDoc, setDoc } from 'firebase/firestore'

const AppContext = createContext({})

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
    handleSearch: () => void
    setImageSelection: React.Dispatch<SetStateAction<object[]>>
    imageSelection: object[]
    openModal: boolean
    setOpenModal: React.Dispatch<SetStateAction<boolean>>

}

export function AppProvider({ children }: any) {
    const [imageSelection, setImageSelection] = useState<object[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
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

    useEffect(() => {
        if (imageSelection?.length > 0){
            setOpenModal(true)
        }
    }, [imageSelection])
    
    useEffect(() => {
        if (!openModal){
            setImageSelection([])
        }
    },[openModal])


    const handleSearch = async () => {
        if (selectedOptions?.name) {
            setOpenModal(true)
            setImageSelection(await useGoogleSearch(selectedOptions.name))
        }
    }




    const value: iValue = {
        selectedOptions,
        setSelectedOptions,
        createItem,
        removeItem,
        items,
        totalPrice,
        handleSearch,
        setImageSelection,
        imageSelection,
        setOpenModal,
        openModal,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export function useApp() {
    return useContext(AppContext)
}
