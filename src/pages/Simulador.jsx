import { Typography, Box, Card, TextField, Button, Grid } from "@mui/material";
import { useState } from "react";
import Empresas from "./Empresas";

const Simulador = () => {

  const [ganancia, setGanancia] = useState(0)
  const [totalNeto, setTotalNeto] = useState(0)

  const [data, setData] = useState({
    capital: "",
    plazo: ""
  })

  const handleInput = (event) => { 
    setData({
      ...data,
      [event.target.name] : event.target.value
    })
  }

  const calcularGanancia = (event) => {
    event.preventDefault();
    const porcentaje = 0.12;
    const capital = parseFloat(data.capital)
    const plazo = parseInt(data.plazo)

    if (data.plazo !== '' && data.capital !== ''){
      
      if (plazo === 1){
        setGanancia(capital * porcentaje);
        setTotalNeto((capital * porcentaje ) + capital)
      } 
      else{
        let mensual = capital
        for (let i = 1; i <= plazo; i++){
          mensual = mensual * 1.12;
        }
        setGanancia((mensual - capital).toFixed(2));
        setTotalNeto(mensual.toFixed(2));
      }
    }
  }

  const resetearSimulador = () => {
    setData({
      capital: "",
      plazo: ""
    });
    setGanancia(0);
    setTotalNeto(0);
  }

  return (
    <div id="Simulador"
      className="seccion"
      style={{
        minHeight: "100vh",
        backgroundColor: "#eaeaea",
        display: "flex",
        flexDirection:'column',
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: {xs:'80%', md:"60%"}, marginBottom: "5rem"}}>
        <Typography
          variant="h4"
          sx={{
            color: "#000",
            fontWeight: "bold",
            fontFamily: "'Proza Libre', sans-serif",
            letterSpacing: 2.5,
            mt: "5rem",
            fontSize: { xs:'30px', sm: "40px"},
            mb: "2rem",
          }}
        >
          SIMULADOR
        </Typography>
        <Card sx={{ padding: "2rem" }}>
          <Grid container rowSpacing={3} columnSpacing={3}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                sx={{
                  color: "#000",
                  fontFamily: "Montserrat",
                  fontSize: { xs:'18px', sm: "20px", md: '24px'}
                }}
              >
                Simulá tus ganancias
              </Typography>
            </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "100%", fontSize: { xs:'18px', sm: "20px", md: '24px'}  }}
                  name='capital'
                  label="Capital a invertir"
                  type="number"
                  color="secondary"
                  value={data.capital !== '' ? data.capital : ""}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  sx={{ width: "100%",fontSize: { xs:'18px', sm: "20px", md: '24px'}  }}
                  name='plazo'
                  label="Plazo en meses"
                  type="number"
                  color="secondary"
                  value={data.plazo !== '' ? data.plazo : ""}
                  onChange={handleInput}
                />
              </Grid>
              <Grid item xs={12}>
                <Box sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center"
                    }}>
                  <Typography
                    sx={{
                      margin: "16px 0",
                      mr: "8px",
                      fontFamily: "Montserrat",
                      color: '#9567A7',
                      fontWeight:'bold'
                    }}>
                    Total ganancia: 
                  </Typography>
                  <Typography
                    sx={{
                      margin: "16px 0",
                      mr: "8px",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: "#555"
                    }}>
                      ${ganancia}
                    </Typography>
                </Box>
                <Box sx={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                  <Typography
                    sx={{
                      margin: "16px 0",
                      mr: "8px",
                      fontFamily: "Montserrat",
                      color: '#9567A7',
                      fontWeight:'bold'
                    }}>
                    Total neto:
                  </Typography>
                  <Typography
                    sx={{
                      mr: "8px",
                      margin: "16px 0",
                      fontFamily: "Montserrat",
                      fontWeight: "bold",
                      color: "#555"
                    }}>
                      ${totalNeto}
                    </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  onClick={resetearSimulador}
                  sx={{width: '100%'}}
                  type='submit'
                  variant="contained"
                  size="medium"
                  color="error"
                >
                  Resetear simulador
                </Button>
              </Grid>
              <Grid item xs={12} lg={6}>
                <Button
                  sx={{width: '100%'}}
                  onClick={calcularGanancia}
                  type='submit'
                  variant="contained"
                  size="medium"
                  color="primary"
                >
                  Calcular ganancias
                </Button>
              </Grid>
            </Grid>
        </Card>
      </Box>
      <hr style={{width: '80%'}}/>
      <div style={{width: '80%'}}>
        <Empresas/>
      </div>
    </div>

  );
};

export default Simulador;
