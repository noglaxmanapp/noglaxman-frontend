import { Box, Typography } from "@mui/material";
// import Manos from "../images/Manos.png";

const InfoNoglaxman = () => {
  return (
    <Box sx={{ mb: "3rem", mt: "5rem" }}>
      <Typography
        variant='h4'
        sx={{ fontWeight: 'bold', fontFamily: "'Proza Libre', sans-serif", letterSpacing: 2.5, fontSize: { xs:'30px', sm: "40px"}
      }}
      >
        NOGLAXMAN
      </Typography>
      <Typography variant="body1" align="center" sx={{ mt: "1rem" }}>
        Es una pequeña empresa, conformada por un grupo de inversores con más de
        4 años en el mercado, que tiene como CEO a Ozán Gonzalo Agustín.
      </Typography>
    </Box>
  );
};

export default InfoNoglaxman;
