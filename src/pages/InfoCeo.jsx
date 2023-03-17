import { Box, CardMedia, Typography } from "@mui/material";
import imagenCeo from "../images/perfil-ceo.png";
import fondo from "../images/fondo-ceo.jpg";

const InfoCeo = () => {
  return (
    <Box
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85)), url(${fondo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "top right",
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundAttachment: "fixed",
      }}
    >
      <Typography
        variant="h4"
        align='center'
        sx={{
          width: '80%',
          color: "#fff",
          fontWeight: "bold",
          fontFamily: "'Proza Libre', sans-serif",
          letterSpacing: 2.5,
          mt: "5rem",
          mb: "5rem",
          fontSize: { xs:'20px', sm: "28px", md: '40px'}
        }}
      >
        CEO Y FUNDADOR DE NOGLAXMAN IT
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection:{xs:'column',sm:'column', md:'row'},
          bgcolor: "rgba(250,250,250,0.08)",
          boxShadow: "0 0 2px #999",
          padding: {xs:'1rem', md:"2rem"},
          maxWidth: "80%",
          mb:{xs:'40px', md:0}
        }}
      >
        <CardMedia
          sx={{ width: {xs:'%60', md:"30%"}, bgcolor: "drakgreen", borderRadius: "50%", boxShadow:'0 0 2px #000' }}
          component="img"
          image={imagenCeo}
        />
        <Box
          sx={{
            padding: "1rem",
            width: {xs:'100%', md:"70%"},
            height: "100%",
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "column",
            ml:{md:'24px'}
          }}
        >
          <Typography variant="h4" sx={{ color: "#fff", fontFamily: "Montserrat", fontWeight: "bold", fontSize: { xs:'24px', sm: "28px", md: '30px'} }}>
            Ozán Gonzalo Agustín
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", width: "100%", fontFamily: "Montserrat", fontSize: { xs:'18px', sm: "20px", md: '24px'} }}
          >
            Trader e inversor con más de 3 años de experiencia (2018 - 2022)
            en los mercados financieros
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", width: "100%", fontFamily: "Montserrat",fontSize: { xs:'18px', sm: "20px", md: '24px'} }}
          >
            Educado financieramente por ICB (Instituto de Capacitaciones
            Bursátiles - Buenos Aires)
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "#fff", width: "100%", fontFamily: "Montserrat",fontSize: { xs:'18px', sm: "20px", md: '24px'} }}
          >
            Título certificado de AGI (Inversor y Asesor Global de
            inversiones).
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCeo;
