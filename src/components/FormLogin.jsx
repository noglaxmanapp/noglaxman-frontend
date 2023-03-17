import Swal from 'sweetalert2'
import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress
} from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const FormLogin = ({ open, setOpen, handleClose }) => {
  
  const [loading, setLoading] = useState(false)
  
  const navigate = useNavigate();

  const { setAuth } = useAuth();

  const [dataUser, setDataUser] = useState({
    username: "",
    pass: "",
  });

  const loginClient = async (e) => {
    e.preventDefault()
    try {
      const resolve = await fetch("https://noglaxman.onrender.com/auth/login", {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: { "Content-Type": "application/json" },
      });
      const data = await resolve.json();
      window.localStorage.setItem("token", data.tokenSession);
      if (data.data) {
        setLoading(false)
        setDataUser({
          username: "",
          pass: "",
        });
        handleClose()
        setAuth(data.data);
        const result = await fetch("https://noglaxman.onrender.com/client/role", {
          method: "POST",
          body: JSON.stringify({ token: data.tokenSession }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${data.tokenSession}`,
          },
        });
        const role = await result.json();
        if (role.role === "user") {
          navigate("/client");
        } else {
          navigate("/admin");
        }
      }
      if (data.error){
        setLoading(false)
        handleClose()
        Swal.fire({
          text: "Los datos ingresados no son correctos.",
          icon: 'error',
          confirmButtonText: 'Ok',
          confirmButtonColor: "#f44336",
          background: "#eaeaea",
          backdrop: "rgba(0, 0, 0, 0.8)"
        }).then((result) => {
          if (result.isConfirmed) {
            setOpen(true)
          }
        })
      }
    } catch (error) {
      setLoading(false)
      handleClose()
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Ok',
      })
    }
  };

  const handleInput = (event) => {
    setDataUser({
      ...dataUser,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div>
      <Dialog open={open} onClose={() => {handleClose(); setDataUser({username:"", pass:""})}} >
        <DialogTitle>Inicie Sesión</DialogTitle>
        <form onSubmit={loginClient}>
          <DialogContent>
            <TextField
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
              label="Usuario"
              variant="outlined"
              onChange={handleInput}
              name="username"
              fullWidth
              required
            />
            <TextField
              sx={{ mt: 2, mb: 2 }}
              color="secondary"
              label="Contraseña"
              variant="outlined"
              onChange={handleInput}
              name="pass"
              fullWidth
              required
              type="password"
            />
          </DialogContent>
          <DialogActions sx={{ mb: 2, mr: 2 }}>
            <Button variant="outlined" color="secondary" onClick={() => {handleClose(); setDataUser({username:"", pass:""})}}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
              onClick={() => {setLoading((!dataUser.username && dataUser.pass ) || (dataUser.username && !dataUser.pass) || (!dataUser.username && !dataUser.pass ) ? (false) : (true))}}
            >
              {loading ? <CircularProgress size={25} sx={{color:'#fff'}}/> : ("Iniciar Sesión")}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormLogin;
