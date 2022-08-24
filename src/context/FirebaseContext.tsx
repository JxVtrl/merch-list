import React, { createContext, useContext, useEffect, useState, useRef, SetStateAction } from 'react'

const FirebaseContext = createContext({})

interface iValue {

}

export function FirebaseProvider({ children }: any) {


    const value: iValue = {

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
