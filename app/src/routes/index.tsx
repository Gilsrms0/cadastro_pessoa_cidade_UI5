import React from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<p>pagina Inicial</p>} />
    
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )

}

export default AppRoutes
