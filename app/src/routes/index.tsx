import { Navigate, Routes, Route } from 'react-router-dom'
import { Button } from '@mui/material'
import { useAppThemeContext } from '../shared/contexts'

const AppRoutes = () => {
  const { toggleTheme } = useAppThemeContext();
  return (
    <Routes>
      <Route path="/" element={<Button variant='contained' color='primary' onClick={toggleTheme}>TOGGLE THEME</Button>} />
    
      <Route path="*" element={<Navigate to="/"/>} />
    </Routes>
  )

}

export default AppRoutes
