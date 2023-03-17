import { Box, Typography } from "@mui/material";
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const InfoPerdidas = () => {
  return (
    <Box sx={{
      padding: "24px",
      boxShadow: "0 0 2px #000",
      fontSize: "14px",
      minHeight: "30rem"
    }}>
      <Box sx={{ marginBottom: "16px" }}>
        <TrendingDownIcon
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
        <Typography>Pérdidas y comisiones</Typography>
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
          Las pérdidas son inevitables como en toda inversión, en el trading dan un lugar estadístico y porcentual, en el cual NOGLAXMAN IT trabaja con un 4% de riesgo sobre el capital invertido.
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoPerdidas;