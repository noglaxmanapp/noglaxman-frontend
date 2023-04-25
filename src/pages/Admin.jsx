import {
  Typography,
  Button,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import FormNewAccount from "../components/FormNewAccount";
import FormCliente from "../components/FormCliente";
import DetailsAccount from "./DetailsAccount";
import Swal from "sweetalert2";
import { API_NOGLAXMAN } from "../utils/config.js";

const Admin = () => {
  const [clientes, setClientes] = useState("");
  const [accounts, setAccounts] = useState();
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [openNewAccount, setOpenNewAccount] = useState(false);
  const [clientNewAccount, setClientNewAccount] = useState({});
  const [client, setClient] = useState();
  const [updateClient, setUpdateClient] = useState(false);

  const [accountsLoaded, setAccountsLoaded] = useState([]);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    if (isExpanded && !accountsLoaded.includes(panel)) {
      buscarCuentas(panel);
      setAccountsLoaded((prevState) => {
        const newState = [...prevState, panel];
        console.log(newState);
        return newState;
      });
    }
  };
  
  useEffect(()=>{
    if (window.location.pathname === '/admin'){
      window.onpopstate = e => {
        window.localStorage.removeItem('token')
      };
    }
  })

  const token = window.localStorage.getItem("token");

  const getAllClient = async () => {
    const resolve = await fetch(`${API_NOGLAXMAN}/client`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resolve.json();
    const dataOrder = data.sort(function (a, b) {
      if (a.lastname > b.lastname) {
        return 1;
      }
      if (a.lastname < b.lastname) {
        return -1;
      }
      return 0;
    });
    if (data) {
      setClientes(dataOrder);
    }
  };

  const getClient = async (id) => {
    const resolve = await fetch(`${API_NOGLAXMAN}/client/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resolve.json();
    if (data) {
      setClient(data[0]);
    } else {
      console.log("error");
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpenNewAccount = () => {
    setOpenNewAccount(true);
  };

  const handleCloseNewAccount = () => {
    setOpenNewAccount(false);
  };

  useEffect(() => {
    getAllClient();
    // eslint-disable-next-line
  }, []);


  const buscarCuentas = async (id) => {
    if (accountsLoaded.includes(id)){
      setAccountsLoaded((prevState) => {
        const newState = [...prevState, id];
        console.log(newState);
        return newState;
      });
    }
    else{
      const dataUser = {
        client_id: id,
      };
      const resolve = await fetch(`${API_NOGLAXMAN}/client/accounts`, {
        method: "POST",
        body: JSON.stringify(dataUser),
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await resolve.json();
      if (data) {
        setAccounts((prevState) => ({
          ...prevState,
          [id]: data,
        }));
        return true;
      } else {
        return false;
      }
    }
  };

  const buscarCuentasCrud = async (id) => {
   
    const dataUser = {
      client_id: id,
    };
    const resolve = await fetch(`${API_NOGLAXMAN}/client/accounts`, {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resolve.json();
    if (data) {
      setAccounts((prevState) => ({
        ...prevState,
          [id]: data,
      }));
      return true;
    } else {
      return false;
    }
    
  };
  
  

  const deleteAccount = async (id) => {
    try{
      const resolve = await fetch(`${API_NOGLAXMAN}/account/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await resolve.json()
    if(data){
      return('Cuenta eliminada con éxito')
    }
    }
    catch (error){
      return (error)
    }
  };

  const deleteClient = async (id) => {
    const resolve = await fetch(`${API_NOGLAXMAN}/client/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    await resolve.json();
  };

  const confirmDelete = async (id) => {
    await deleteClient(id);
    getAllClient();
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: {xs: "90%", sm: "80%" }}}>
        <Box
          sx={{
            marginTop: "32px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              display: {xs: "block", sm: "inline"},
              fontWeight: "bold",
              fontSize: {xs: "18px", sm: "18px", md: "20px", lg: "20px"},
            }}>
            Clientes
          </Typography>
          <Button
            color="secondary"
            sx={{
              fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px"},
              fontWeight: "bold",
              border: "1px solid #9565a7"
            }}
            onClick={() => {
              handleClickOpen();
              setUpdateClient(false);
            }}
          >
            Agregar cliente
          </Button>
        </Box>
        <div
          style={{ marginTop: "16px", maxHeight: "70vh", overflowY: "scroll" }}
        >
          {clientes ? (
            clientes.map((cliente) => {
              return cliente.role === "user" ? (
                <Accordion
                  key={cliente.client_id}
                  disableGutters={true}
                  sx={{ bgcolor: "#efefef" }}
                  expanded={expanded === cliente.client_id}
                  onChange={handleChange(cliente.client_id)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    onClick={() => buscarCuentas(cliente.client_id)}
                    aria-controls={`${cliente.client_id}-content`}
                    id={`${cliente.client_id}-header`}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <div>
                        <Typography
                          sx={{
                            display: "inline",
                            fontSize: {xs: "16px", sm: "18px", md: "20px", lg: "20px"},
                            fontWeight: "bold",
                            color: "#9565a7",
                          }}
                        >
                          {cliente.dni}:{" "}
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: {xs: "16px", sm: "18px", md: "20px", lg: "20px"},
                            display: "inline"
                          }}>
                          {cliente.lastname} {cliente.name}
                        </Typography>
                      </div>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    {!accounts ? (
                      <>Cargando...</>
                    ) : (
                      accounts.length !== 0 ? (
                        accounts[cliente.client_id] &&
                        accounts[cliente.client_id].map((ac) => {
                        return (
                          <DetailsAccount
                            key={ac.account_id}
                            ac={ac}
                            deleteAccount={deleteAccount}
                            buscarCuentas={buscarCuentasCrud}
                            cliente_id={cliente.client_id}
                          />
                        );
                      })
                      ) : (
                      <Typography
                        align='center'
                        sx={{
                          display:'flex',
                          alignItems:'center',
                          justifyContent: 'center',
                          width:'100%',
                          height:'40px',
                          color: "#b00b0b",
                          marginY: {xs: "8px", md: "16px"}, 
                          fontSize: {xs: "14px", sm: "14px", md: "16px", lg: "18px"},
                          backgroundColor:'#eaeaea',
                          borderBottom: "0.1px solid #d2cdcd"
                        }}
                      >
                        *** No hay cuentas registradas. ***
                      </Typography>)
                    )}
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: {xs: "column", md: "row"},
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{
                          width: {xs: "100%", md: "50%"},
                          marginY: {xs: 0, md: "16px"}
                        }}>
                        <Button
                          color="success"
                          variant="contained"
                          size="small"
                          sx={{
                            width: {xs: "100%", md: "50%"},
                            marginBottom: {xs: "8px", sm: ""},
                            fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "14px"},
                          }}
                          onClick={() => {
                            handleClickOpenNewAccount();
                            setClientNewAccount({
                              id: cliente.client_id,
                              name: cliente.name,
                              lastname: cliente.lastname,
                            });
                          }}
                        >
                          Agregar cuenta
                        </Button>
                      </Box>
                      <Box
                        sx={{
                          width:  {xs: "100%", md: "60%"},
                          display: "flex",
                          flexDirection: {xs: "column", sm: "row"},
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <Button
                          onClick={async () => {
                            await getClient(cliente.client_id);
                            handleClickOpen();
                            setUpdateClient(true);
                          }}
                          startIcon={<EditIcon />}
                          color="info"
                          variant="outlined"
                          size="small"
                          sx={{
                            width: {xs: "100%", sm: "50%"},
                            marginBottom: {xs: "8px", sm: ""},
                            marginRight: {sm: "4px"},
                            fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "14px"},
                          }}
                        >
                          Editar cliente
                        </Button>
                        <Button
                          onClick={() => {
                            Swal.fire({
                              text: `¿Desea eliminar el cliente ${cliente.dni}: ${cliente.lastname}, ${cliente.name}?`,
                              icon: "warning",
                              showCancelButton: true,
                              confirmButtonText: "Aceptar",
                              cancelButtonText: "Cancelar",
                              cancelButtonColor: "#aB0e0e",
                              confirmButtonColor: "#1b9e17",
                              background: "#eaeaea",
                              backdrop: "rgba(0, 0, 0, 0.8)",
                              reverseButtons: true
                            }).then((result) => {
                              if (result.isConfirmed) {
                                confirmDelete(cliente.client_id);
                                Swal.fire({
                                  text: "Cliente eliminado con éxito!",
                                  icon: "success",
                                  confirmButtonText: "Ok",
                                  confirmButtonColor: "#1b9e17",
                                  background: "#eaeaea",
                                  backdrop: "rgba(0, 0, 0, 0.8)",
                                });
                              }
                            });
                          }}
                          startIcon={<DeleteIcon />}
                          color="error"
                          variant="outlined"
                          size="small"
                          sx={{
                            width: {xs: "100%", sm: "50%"},
                            marginBottom: {xs: "8px", sm: ""},
                            marginLeft: {sm: "4px"},
                            fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "14px"},
                          }}
                        >
                          Eliminar cliente
                        </Button>
                      </Box>
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ) : (
                <></>
              );
            })
          ) : (
            <>Cargando...</>
          )}
        </div>
      </Box>
      <FormNewAccount
        open={openNewAccount}
        handleClose={handleCloseNewAccount}
        client={clientNewAccount}
        buscarCuentas={buscarCuentasCrud}
      />
      <FormCliente
        updateClient={updateClient}
        open={open}
        handleClose={handleClose}
        getAllClient={getAllClient}
        client={client}
      />
    </div>
  );
};

export default Admin;
