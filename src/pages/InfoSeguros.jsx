import { Box, Typography } from "@mui/material";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const InfoSeguros = () => {
  return (
    <Box sx={{
      padding: "24px",
      boxShadow: "0 0 2px #000",
      fontSize: "14px",
      minHeight: "30rem"
    }}>
      <Box sx={{ marginBottom: "16px" }}>
        <AdminPanelSettingsIcon
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
        <Typography>Seguros</Typography>
      </Box>
      <hr />
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
          La empresa ofrece tanto un seguro de inversión como una garantía de
          prestación cambiaria. Estos seguros son aportados tanto como por
          NOGLAXMAN IT, DUOMARKETS y también por nuestro CEO, abalados por el
          broker utilizado y el BCRA.
        </Typography>
      </Box>
    </Box>
  );
};

export default InfoSeguros;
