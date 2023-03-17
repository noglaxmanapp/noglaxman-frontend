import { Box, Grid} from "@mui/material";
import InfoNoglaxman from "./InfoNoglaxman";
import InfoRentabilidad from "./InfoRentabilidad";
import InfoSeguros from "./InfoSeguros";
import InfoPerdidas from "./InfoPerdidas";

const Nosotros = () => {

  return (
    <div
      id="Nosotros"
      className="seccion"
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaeaea",
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Box sx={{ width: "80%", marginBottom: '5rem' }}>
        <InfoNoglaxman/>
        <Grid
          container rowSpacing={3}
          columnSpacing={{ xs: 1, md: 8 }}
        >
          <Grid item xs={12} md={4}>
            <InfoRentabilidad/>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoSeguros/>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoPerdidas/>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Nosotros;
