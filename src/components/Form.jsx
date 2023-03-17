import { Grid, TextField, Button, Card, CardContent, Typography} from "@mui/material";
import React, {useState} from "react";

const FormLogin = () => {
  const [dataUser, setDataUser] = useState({
    username: '',
    pass: '',
  })

  const handleInput = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name] : event.target.value
    })
  }

  return ( 
    <div >
        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontSize: 25,
            fontFamily: "monospace",
            fontWeight: 700,
            textDecoration: "none",
            color: "black",
            mt: "20px",
            mb:"20px"
          }}
        >
          Ingrese sus datos
        </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto", boxShadow:'0px 0px 4px #999' }}>
          <CardContent>
            <form onSubmit={sendData}>
                <Grid container spacing={1}>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Ingrese su usuario" label="Usuario" variant="outlined" onChange={handleInput} name="username" fullWidth required />
                  </Grid>
                  <Grid xs={12} sm={6} item>
                    <TextField placeholder="Ingrese su contraseña" label="Contraseña" variant="outlined" onChange={handleInput} name="pass" fullWidth required />
                  </Grid>
                  <Grid item xs={12}>
                    <Button 
                      type="submit"
                      variant="contained" 
                      fullWidth
                      color='secondary'
                    >
                      Iniciar sesión
                    </Button>
                  </Grid>
                </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </div>
   );
}
 
export default Form;