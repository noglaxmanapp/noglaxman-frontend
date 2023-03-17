import {
  TextField,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import Swal from "sweetalert2";
import Error from "./Error";

const FormNewAccount = ({ open, handleClose, client, buscarCuentas }) => {

  const [dataAccount, setDataAccount] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)

  const dataNewAccount = {
    clientID: client.id,
    account_id: dataAccount
  }

  const token = window.localStorage.getItem('token');

  const createAccount = async () => {
    try{
        const resolve = await fetch("https://noglaxman.onrender.com/account", {
          method: "POST",
          body: JSON.stringify(dataNewAccount),
          headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
        });
        const data = await resolve.json();
        if (data.message){
          setLoading(false)
          setDataAccount('')
          Swal.fire({
            text: "Cuenta agregada con éxito!",
            icon: 'success',
            confirmButtonText: 'Ok',
            confirmButtonColor: "#1b9e17",
            background: "#eaeaea",
            backdrop: "rgba(0, 0, 0, 0.8)"
          })
        }
    } catch (error) {
        setLoading(false)
        Swal.fire({
          title: 'Error!',
          text: "No se pudo crear la cuenta.",
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
  };

  const handleSumbit = async (e) =>{
    e.preventDefault()
    if ([dataAccount].includes("")) {
      setError(true);
      setLoading(false)
      return;
    }else{ 
      setLoading(true)
      await createAccount();
      buscarCuentas(client.id);
      setDataAccount('')
      handleClose()
    }
  }

  const handleInput = (event) => {
    setDataAccount(event.target.value);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Agregar nueva cuenta a {client.lastname} {client.name}</DialogTitle>
        <form action="" onSubmit={handleSumbit} >
          <DialogContent>
            <TextField
              color="secondary"
              sx={{ mt: 2, mb: 2 }}
              label="Numero de cuenta"
              variant="outlined"
              onChange={handleInput}
              name="account"
              fullWidth
              type='number'
              required
            />
          </DialogContent>
          <DialogActions sx={{ mb: 2, mr: 2 }}>
            <Button variant="outlined" color="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button
              variant="contained"
              color="secondary"
              type='sumbit'
              >
              {loading ? <CircularProgress size={25} sx={{color:'#fff'}}/> : ('Agregar cuenta')}
            </Button>
            {error && (
            <Error>
              <p>Ingrese un número de cuenta</p>
            </Error>
          )}
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
};

export default FormNewAccount;
