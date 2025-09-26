import { Navigate, Routes, Route } from 'react-router-dom'
import { Button } from '@mui/material'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Button variant='contained' color='primary'>Teste</Button>} />
    
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )

}

export default AppRoutes
