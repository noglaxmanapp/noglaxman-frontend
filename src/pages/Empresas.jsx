import { CardMedia, Grid } from "@mui/material";
import duoMarkets from "../images/empresas/duoMarkets.png";
import icMarkets from "../images/empresas/icMarkets.png";
import iStock from "../images/empresas/iStock.png";
import persona from "../images/empresas/persona.png";
import skrill from "../images/empresas/skrill.png";

const Empresas = () => {
  return (
    <Grid
      sx={{
        mt: "48px",
        mb: "78px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      container
      spacing={4}
    >
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        sm={4}
        lg={2}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "32px",
            transition: "transform .2s",
            ":hover": {
              boxShadow: 5, // theme.shadows[20]
              transform: "scale(1.08)",
            },
          }}
          component="img"
          image={duoMarkets}
          alt="DuoMarkets"
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        sm={4}
        lg={2}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "32px",
            transition: "transform .2s",
            ":hover": {
              boxShadow: 5, // theme.shadows[20]
              transform: "scale(1.08)",
            },
          }}
          component="img"
          image={icMarkets}
          alt="icMarkets"
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        sm={4}
        lg={2}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "32px",
            transition: "transform .2s",
            ":hover": {
              boxShadow: 5, // theme.shadows[20]
              transform: "scale(1.08)",
            },
          }}
          component="img"
          image={iStock}
          alt="iStock"
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        sm={4}
        lg={2}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "32px",
            transition: "transform .2s",
            ":hover": {
              boxShadow: 5, // theme.shadows[20]
              transform: "scale(1.08)",
            },
          }}
          component="img"
          image={persona}
          alt="personas"
        />
      </Grid>
      <Grid
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        item
        xs={12}
        sm={4}
        lg={2}
      >
        <CardMedia
          sx={{
            width: 150,
            height: 150,
            borderRadius: "32px",
            transition: "transform .2s",
            ":hover": {
              boxShadow: 5, // theme.shadows[20]
              transform: "scale(1.08)",
            },
          }}
          component="img"
          image={skrill}
          alt="Skrill"
        />
      </Grid>
    </Grid>
  );
};

export default Empresas;
