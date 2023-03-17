import { Typography } from "@mui/material";
import fondo from '../images/fondo-principal1.jpg'

const Home = () => {
  return ( 
    <div
      id="Inicio"
      className="seccion"
      style={{
        background: `linear-gradient(rgba(149, 103, 167, 0.3), rgba(0, 0, 0, 1)), url(${fondo})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'top right',
        height: '100vh', width:'100%',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        
        <Typography
          variant='h2'
          align='center'
          sx={{
            color: "#fff",
            fontWeight: "bold",
            textShadow: "1px 1px 5px #000",
            fontFamily: "Proza Libre, sans-serif",
            letterSpacing: 2.5,
            fontSize: { xs:'24px', sm: "48px", md: '72px'}
          }}>
          HACE CRECER TU CAPITAL
        </Typography>
        <Typography
          variant='h4'
          sx={{
            color: "#26b97b",
            textShadow: "1px 1px 2px #000",
            fontFamily: "'Ubuntu', sans-serif",
            fontSize: { xs:'18px', sm: "30px", md: '34px'}
          }}>
          Inversiones en trading
        </Typography>
    </div>
   );
}
 
export default Home;