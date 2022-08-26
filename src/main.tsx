import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { Home } from './pages'
import { AppProvider, FirebaseProvider } from './context'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <FirebaseProvider>
        <AppProvider>
          <Home />
        </AppProvider>
      </FirebaseProvider>
    </ChakraProvider>
  </React.StrictMode>
)
