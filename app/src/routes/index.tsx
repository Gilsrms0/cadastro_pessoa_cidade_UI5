import { Navigate, Routes, Route } from 'react-router-dom'
import { Button } from '@mui/material'
import {  useDrawerContext } from '../shared/contexts'

const AppRoutes = () => {
  const { toggleDrawerOpen } = useDrawerContext();
  return (
    <Routes>
      <Route path="/" element={<Button variant='contained' color='primary' onClick={toggleDrawerOpen}>TOGGLE Drawer</Button>} />
    
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )

}

export default AppRoutes
