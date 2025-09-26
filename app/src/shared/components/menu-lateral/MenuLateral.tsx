import { Avatar, Divider, Drawer, Icon, List, ListItemButton, ListItemIcon, ListItemText, useMediaQuery, useTheme } from '@mui/material'
import { Box } from '@mui/system'
import { useDrawerContext } from '../../contexts/DrawerContext'
import type React from 'react'

interface IMenuLateralProps {
  children?: React.ReactNode; // children é opcional
}

export const MenuLateral: React.FC<IMenuLateralProps> = ({ children }) => {
 
   const theme = useTheme()

   //Controla a responsividades
   const smDown = useMediaQuery(theme.breakpoints.down('sm'))

   const { isDrawerOpen, toggleDrawerOpen } = useDrawerContext();

   return (
    <>
      <Drawer variant={smDown ? 'temporary' : 'permanent'} open={isDrawerOpen} onClose={toggleDrawerOpen }>
        <Box width={theme.spacing(30)} display='flex' flexDirection='column' height='100%'>

         <Box width='100%' height={theme.spacing(20)}  display='flex' alignItems='center' justifyContent='center'>
            <Avatar 
               sx={{ height: theme.spacing(12), width: theme.spacing(12) }}
               alt='Remy Sharp' 
               src='https://mui.com/static/images/avatar/1.jpg'/>
         </Box>

         <Divider/>

         <Box flex={1}>
            <List component='nav'>
               <ListItemButton>
                  <ListItemIcon>
                     <Icon>home</Icon>
                  </ListItemIcon>
                  <ListItemText primary="Página inicial"/>
               </ListItemButton>
            </List>
         </Box>

        </Box>
      </Drawer>

      <Box height="100vh" marginLeft={smDown ? 0 : theme.spacing(30)} >
         {children}
      </Box>
      
    </>
  )
}
