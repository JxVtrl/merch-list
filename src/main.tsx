import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppRoutes } from './routes'
import { AppProvider, FirebaseProvider } from './context'
import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <FirebaseProvider>
        <AppProvider>
          <AppRoutes />
        </AppProvider>
      </FirebaseProvider>
    </ChakraProvider>
  </React.StrictMode>
)
