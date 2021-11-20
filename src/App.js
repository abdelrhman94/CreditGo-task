import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import UserDetailsPage from './pages/UserDetails'
import UsersPage from './pages/Users'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<UsersPage />} />
        <Route path='/:id' element={<UserDetailsPage />} />
      </Routes>
    </Router>
  )
}

export default App
