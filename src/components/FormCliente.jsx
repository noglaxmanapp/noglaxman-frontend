import * as React from "react";
import { Box, Button, Dialog, DialogContent, DialogTitle, TextField, Typography, CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import Error from "./Error";
import Swal from "sweetalert2";

function FormCliente({ updateClient, client, open, handleClose, getAllClient }) {
  const [id, setId] = useState("");
  const [dni, setDni] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState(false);

  useEffect(()=> {
    if (updateClient) {
      setId(client.client_id)
      setDni(client.dni)
      setName(client.name)
      setLastname(client.lastname)
      setUsername(client.username)
      setPass(client.pass)
    }
  }, [client])

  useEffect(()=>{
    if (!updateClient){
      setId("")
      setDni("")
      setName("")
      setLastname("")
      setUsername("")
      setPass("")
    }
  }, [updateClient])

  const token = window.localStorage.getItem('token');

  const createNewClient = async(newClient) =>{
    try{
      const resolve = await fetch('https://noglaxman.onrender.com/auth/register',{
      method: 'POST',
      body: JSON.stringify(newClient),
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      });
      const data = await resolve.json();
      if (data.message){
        setLoading(false)
        Swal.fire({
          text: "Cliente creado con éxito!",
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
          text: "El usuario ya existe.",
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
  }

  const updateNewClient = async(newClient) => {
    
    try {
      const resolve = await fetch(`https://noglaxman.onrender.com/client/${newClient.id}`,{
      method: 'PUT',
      body: JSON.stringify(newClient),
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
    });
      const data = await resolve.json();
      if (data.message) {
        setLoading(false)
        Swal.fire({
          text: "Cliente actualizado con éxito!",
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
          text: "No se pudo actualizar el cliente.",
          icon: 'error',
          confirmButtonText: 'Ok',
        })
      }
  }

  async function handleSubmit (e) {
    e.preventDefault();

    if ([dni, name, lastname, username, pass].includes("")) {
      setError(true);
      setLoading(false);
      return;
    } else {
      setError(false);
    }
    
    const newClient = {
      id,
      dni,
      name: name[0].toUpperCase() + name.substring(1),
      lastname: lastname[0].toUpperCase() + lastname.substring(1),
      username,
      pass,
    }

    if(updateClient){
      await updateNewClient(newClient)
      getAllClient()
      handleClose()
    }
    else{
      await createNewClient(newClient)
      getAllClient()
      handleClose()
    }
    
    setId("")
    setDni("")
    setName("")
    setLastname("")
    setUsername("")
    setPass("")
  }

  return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{updateClient ? 'Actualizar cliente' : 'Agregar cliente'}</DialogTitle>
        <DialogContent>
            <form action="" onSubmit={handleSubmit} style={{ width: "100%" }}>
              <TextField
                sx={{ marginBottom: "24px", marginTop:"12px", width: "100%" }}
                type="number"
                label="DNI"
                name="dni"
                value={dni}
                onChange={(e) => setDni(e.target.value)}
              />
              <TextField
                sx={{ marginBottom: "24px", width: "100%" }}
                type="text"
                label="Nombre"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextField
                sx={{ marginBottom: "24px", width: "100%" }}
                type="text"
                label="Apellido"
                name="lastname"
                value={lastname}
                onChange={(e) => setLastname(e.target.value)}
              />
              <TextField
                sx={{ marginBottom: "24px", width: "100%" }}
                type="text"
                label="Usuario"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                sx={{ marginBottom: "24px", width: "100%" }}
                type="password"
                id="outlined-multiline-flexible"
                label="Contraseña"
                name="pass"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <Button
                sx={{ width: "100%" }}
                color="secondary"
                variant="contained"
                type="submit"
                onClick={()=>{
                  setLoading(true)
                }}
              >
                {loading ? <CircularProgress size={20} sx={{ color:'#fff'}}/> : (updateClient ? "Editar cliente" : "Agregar Cliente")}
              </Button>
              {error && (
                <Error>
                  <p>*** Todos los campos son requeridos ***</p>
                </Error>
              )}
            </form>
        </DialogContent>
    </Dialog>
  );
}

export default FormCliente;