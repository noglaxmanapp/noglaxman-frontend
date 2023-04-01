import {
  AppBar,
  styled,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Manos.png";
import Draw from "./Draw";
import FormLogin from "./FormLogin.jsx";
import Swal from "sweetalert2";
import LogoutIcon from "@mui/icons-material/Logout";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

const Nav = () => {
  window.onscroll = function() {
    var y = window.scrollY;
    if ((0 < y) && (y < 700)){
      setValue(0)
    }
    else if ((700 < y) && (y < 2150)){
      setValue(1)
    }
    else if ((2150 < y) && (y < 3150)){
      setValue(2)
    }
    else if (y > 3200){
      setValue(3)
    }
  };
  
  const [value, setValue] = useState();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const path = window.location.pathname;
  
  const logOut = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{ background: "#e2e2e2", display: "flex", alignItems: "center" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
            padding: 0,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <img alt="Logo Noglaxman" src={logo} style={{ width: "50px" }} />

            <Typography
              variant="h6"
              sx={{
                fontSize: { xs: "16px", sm: "20px", md: "22px", lg: "28px" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".10rem",
                color: "#9567A7",
                textDecoration: "none",
              }}
            >
              NOGLAXMAN
            </Typography>
          </div>
          <Toolbar>
            {path !== "/" ? (
              <></>
            ) : (
              <Tabs
                sx={{ display: { xs: "none", md: "flex" } }}
                textColor="secondary"
                TabIndicatorProps={{
                  style: {
                    backgroundColor: "#9567A7",
                  },
                }}
                onChange={(e, value) => {
                  setValue(value);
                  console.log(value);
                }}
                value={value === undefined ? 0 : value}
              >
                <Tab
                  sx={{fontSize: {xs: "10px", sm: "12px", md: "12px", lg: "16px"}}}
                  style={{ fontWeight: "bold" }}
                  label="Inicio"
                  href="#Inicio"
                />
                <Tab
                  sx={{fontSize: {xs: "10px", sm: "12px", md: "12px", lg: "16px"}}}
                  style={{ fontWeight: "bold" }}
                  label="Nosotros"
                  href="#Nosotros"
                />
                <Tab
                  sx={{fontSize: {xs: "10px", sm: "12px", md: "12px", lg: "16px"}}}
                  style={{ fontWeight: "bold" }}
                  label="Simulador"
                  href="#Simulador"
                />
                <Tab
                  sx={{fontSize: {xs: "10px", sm: "12px", md: "12px", lg: "16px"}}}
                  style={{ fontWeight: "bold" }}
                  label="Contacto"
                  href="#Contacto"
                />
              </Tabs>
            )}
          </Toolbar>
          {path !== "/" ? (
            <>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: "80%",
                  display: { xs: "none", sm: "flex" },
                  fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "16px" },
                  fontWeight: "bold",
                }}
                onClick={() => {
                  Swal.fire({
                    text: "¿Desea cerrar sesión?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    cancelButtonColor: "#aB0e0e",
                    confirmButtonColor: "#1b9e17",
                    background: "#eaeaea",
                    backdrop: "rgba(0, 0, 0, 0.8)",
                    reverseButtons: true,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logOut();
                    }
                  })}}
              >
                Cerrar sesión
              </Button>
              <LogoutIcon
                variant="contained"
                color="secondary"
                sx={{
                  display: { xs: "flex", sm: "none"}
                }}
                onClick={() => {
                  Swal.fire({
                    text: "¿Desea cerrar sesión?",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonText: "Aceptar",
                    cancelButtonText: "Cancelar",
                    cancelButtonColor: "#aB0e0e",
                    confirmButtonColor: "#1b9e17",
                    background: "#eaeaea",
                    backdrop: "rgba(0, 0, 0, 0.8)",
                    reverseButtons: true,
                  }).then((result) => {
                    if (result.isConfirmed) {
                      logOut();
                    }
                  });
                }}
              />
            </>
          ) : (
            <>
              <Button
                variant="contained"
                color="secondary"
                sx={{
                  height: "80%",
                  fontSize: { xs: "10px", sm: "12px", md: "12px", lg: "16px" },
                  fontWeight: "bold",
                  display: { xs: "none", md: "flex" },
                }}
                onClick={handleClickOpen}
              >
                Iniciar sesión
              </Button>
              <Draw handleClickOpen={handleClickOpen} />
            </>
          )}
        </div>
      </AppBar>
      <FormLogin setOpen={setOpen} open={open} handleClose={handleClose} />
      <Offset />
    </div>
  );
};

export default Nav;
