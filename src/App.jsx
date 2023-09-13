import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { RatingProvider } from './context/RatingContext'

const App = () => {
  return (
    <RatingProvider>
      <Navbar/>
      <Home/>
      
    </RatingProvider>
  )
}

export default App
