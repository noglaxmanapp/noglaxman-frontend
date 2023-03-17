import { Box, Typography } from "@mui/material";
import "./Contacto.css";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';


const Contacto = () => {
  return ( 
    <Box sx={{ bgcolor:'#000', display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center", 
    minHeight: "95vh" }} id="Contacto"
    className="seccion">
      <Typography
          variant="h4"
          sx={{
            color: "#fff",
            fontWeight: "bold",
            fontSize: "35px",
            fontFamily: "'Proza Libre', sans-serif",
            letterSpacing: 2.5,
            mb: "-10rem",
            mt: "-10rem"
          }}
        >
          CONTACTO
        </Typography>
      <div className="contenedor-contactos">
        <Box sx={{marginX: {xs: "8px", sm: "16", md: "32px", lg: "64px"}}}>
          <a
            href="https://walink.co/b222ce"
            className="contenedor-icon contenedor-whatsapp"
            target="blank"
            rel="noreferrer"
          >
            <WhatsAppIcon sx={{ fontSize: { xs: "64px", sm: "80", md: "96px", lg: "112px" } }} className="icon-contacto icon-whatsapp" />
          </a>
          <Typography sx={{width: "100%", mt: "18px", color: "#8c8888", textAlign: "center"}}>WhatsApp</Typography>
        </Box>
        <Box sx={{marginX: {xs: "8px", sm: "16", md: "32px", lg: "64px"}}}>
          <a
            href="https://www.instagram.com/noglaxman/"
            className="contenedor-icon contenedor-instagram"
            target="blank"
            rel="noreferrer"
          >
            <InstagramIcon sx={{ fontSize: { xs: "64px", sm: "80", md: "96px", lg: "112px" } }} className="icon-contacto icon-instagram" />
          </a>
          <Typography sx={{width: "100%", mt: "18px", color: "#8c8888", textAlign: "center"}}>Instagram</Typography>
        </Box>
        <Box sx={{marginX: {xs: "8px", sm: "16", md: "32px", lg: "64px"}}}>
          <a
            href="https://t.me/+w1lGMNPGVuBmMzQx"
            className="contenedor-icon contenedor-trading"
            target="blank"
            rel="noreferrer"
          >
            <TelegramIcon sx={{ fontSize: { xs: "64px", sm: "80", md: "96px", lg: "112px" } }} className="icon-contacto icon-email" />
          </a>
          <Typography sx={{width: "100%", mt: "18px", color: "#8c8888", textAlign: "center"}}>Telegram</Typography>
        </Box>
        <Box sx={{marginX: {xs: "8px", sm: "16", md: "32px", lg: "64px"}}}>
          <a
            href="https://es.tradingview.com/u/GonzaOzan/"
            className="contenedor-icon contenedor-trading"
            target="blank"
            rel="noreferrer"
          >
            <CloudQueueIcon sx={{ fontSize: { xs: "64px", sm: "80", md: "96px", lg: "112px" } }} className="icon-contacto icon-trading" />
          </a>
          <Typography sx={{width: "100%", mt: "18px", color: "#8c8888", textAlign: "center"}}>TradingView</Typography>
        </Box>     
      </div>
    </Box>
   );
}
 
export default Contacto;