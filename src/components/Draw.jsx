import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ContactMailRoundedIcon from '@mui/icons-material/ContactMailRounded';
import LoginIcon from '@mui/icons-material/Login';


const Draw = ( { handleClickOpen } ) => {

  const [openDrawer,  setOpenDrawer] = useState(false)

  return ( 
    <>
      <Drawer open={openDrawer} anchor='right'
      onClose={()=> setOpenDrawer(false)}
      >
        <List>

        <ListItemButton href="#Inicio" onClick={() => {handleClickOpen(); setOpenDrawer(false)}}>
            <ListItemIcon>
              <LoginIcon sx={{marginRight: '10px'}}/>
              <ListItemText>
                Iniciar sesión
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton href="#Inicio" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <HomeIcon sx={{marginRight: '10px'}}/>
              <ListItemText>
                Inicio
              </ListItemText>
            </ListItemIcon>
          </ListItemButton>
          
          <ListItemButton href="#Nosotros" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <GroupsIcon sx={{marginRight: '10px'}}/>
              <ListItemText>Nosotros</ListItemText>
            </ListItemIcon>
          </ListItemButton> 
          <ListItemButton href="#Simulador" onClick={() => setOpenDrawer(false)}>
            <MonetizationOnIcon sx={{marginRight: '10px'}} color='action'/>
            <ListItemIcon>
              <ListItemText>Simulador</ListItemText>
            </ListItemIcon>
          </ListItemButton>

          <ListItemButton href="#Contacto" onClick={() => setOpenDrawer(false)}>
            <ListItemIcon>
              <ContactMailRoundedIcon sx={{marginRight: '10px'}}/>
              <ListItemText>Contacto</ListItemText>
            </ListItemIcon>
          </ListItemButton>

        </List>
      </Drawer>
      <IconButton sx={{ display: { xs: "flex", md: "none" }}} onClick={() => setOpenDrawer(!openDrawer)}>
        <MenuIcon sx={{color:'#9567A7', display: { xs: "flex", md: "none" }, fontSize:35}}/>
      </IconButton>
    </>
   );
}
 
export default Draw;