import { Box, Typography } from "@mui/material";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const InfoRentabilidad = () => {
  return (
    <Box sx={{
      padding: "24px",
      boxShadow: "0 0 2px #000",
      fontSize: "14px",
      minHeight: "30rem"
    }}>
      <Box sx={{ marginBottom: "16px" }}>
        <Box>
          <AttachMoneyIcon
          sx={{
            mb: "16px",
            padding: "20px",
            color: "#9567A7",
            height: "60px",
            width: "60px",
            borderRadius: "50%",
            backgroundColor: "rgba(0,0,0,0.1)",
            boxShadow: "0 0 0.9px #000"
          }}
        />
        </Box>
        <Typography>Rentabilidad</Typography>
      </Box>
      <hr/>
      <Box>
        <Typography
          variant="body1"
          align='justify'
          sx={{ 
            marginTop: "16px",
            lineHeight: "28px",
            fontSize: "14px"
          }}
        >
          La rentabildad se efectúa en el contrato según los términos aplicados en tal. Contamos con un porcentaje estable de aproximadamente un 86.6% de efectividad, porcentaje obtenido por cuentas fondeadas con más de 6 meses invirtiendo mes a mes con una estrategia sólida y confiable.
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoRentabilidad;