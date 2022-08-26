import React, { createContext, useContext, useEffect, useState, useRef, SetStateAction } from 'react'

const AppContext = createContext({})

interface iValue {
    setImageSelection: React.Dispatch<SetStateAction<object[]>>
    imageSelection: object[]
    openModal: boolean
    setOpenModal: React.Dispatch<SetStateAction<boolean>>
}

export function AppProvider({ children }: any) {
    const [imageSelection, setImageSelection] = useState<object[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)

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

    const value: iValue = {
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
