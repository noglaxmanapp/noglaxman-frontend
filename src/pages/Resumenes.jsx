import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { List, ListItemButton, Typography, Divider, Button, Box } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FormSummary from "../components/FormSummary";
import Swal from "sweetalert2";
import { API_NOGLAXMAN } from "../utils/config";

const Resumenes = () => {
  const [summary, setSummary] = useState();

  const token = window.localStorage.getItem('token');

  const { accountId } = useParams();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const eliminarResumen = async (resumenId) => {
    try {
      const resolve = await fetch(`${API_NOGLAXMAN}/summary/${resumenId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      });
      await resolve.json();
    } catch (error) {
      Swal.fire({
        text: `Ocurrió un error`,
        icon: "error",
        showCancelButton: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "#1b9e17",
        background: "#eaeaea",
        backdrop: "rgba(0, 0, 0, 0.8)",
        reverseButtons: true
      })
    } 
  };

  const buscarResumenes = async (accountId) => {
    const dataAccount = {
      account_id: accountId,
    };
    const resolve = await fetch(`${API_NOGLAXMAN}/summary/account`, {
      method: "POST",
      body: JSON.stringify(dataAccount),
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
    });
    const data = await resolve.json();
    if (data) {
      setSummary(data);
    }
  };

  useEffect(() => {
    buscarResumenes(accountId);
    // eslint-disable-next-line
  }, [accountId]);

  const confirmDelete = async (summary_id, accountId) => {
    await eliminarResumen(summary_id);
    buscarResumenes(accountId);
  }

  const deleteSummary = (summary_date, summary_id) => {
    Swal.fire({
      text: `¿Desea eliminar el resumen de la fecha ${summary_date.substring(0, 10)}?`,
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
        confirmDelete(summary_id, accountId);
        Swal.fire({
          text: "Resumen eliminado con éxito!",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#1b9e17",
          background: "#eaeaea",
          backdrop: "rgba(0, 0, 0, 0.8)",
        });
      }
    })
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: "80%" }}>
        <Box
          sx={{
            marginTop: "32px",
            display: "flex",
            flexDirection: {xs: "column", md: "row"},
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              textAlign:{ xs: "center", md: "start"},
              width: {xs: "100%", md: "50%"},
              fontWeight: "bold",
              fontSize: {xs: "16px", sm: "18px", md: "20px", lg: "20px"},
            }}>
            Resúmenes de la cuenta {accountId}
          </Typography>
          <Button
            onClick={() => {
              handleClickOpen();
            }}
            color="secondary"
            variant="outlined"
            sx={{
              width: {xs: "100%", sm:'80%', md: "30%", lg: "25%"},
              fontSize: {xs: "10px", sm: "12px", md: "14px", lg: "16px"},
              border: "1px solid #9565a7",
              fontWeight: "bold"
            }}
          >
            Agregar resumen
          </Button>
        </Box>
        <div
          style={{ marginTop: "16px", maxHeight: "70vh", overflowY: "scroll" }}
        >
          {summary ? (
            summary.map((sum) => {
              return (
                <List
                  key={sum.summary_id}
                  sx={{ width: "100%", backgroundColor: "#efefef" }}
                  component="nav"
                  aria-label="mailbox folders"
                >
                  <ListItemButton>
                    <a
                      href={sum.summary_url}
                      target="_ blank"
                      rel="noreferrer"
                      style={{
                        width: "100%",
                        color: "#000",
                        textDecoration: "none",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <Typography
                          sx={{
                            display: "inline",
                            fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px"},
                            }}>
                          Resumen del{" "}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "bold",
                            display: "inline",
                            fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px"},
                          }}
                        >
                          {sum.summary_date.substring(0, 10)}
                        </Typography>
                      </div>
                    </a>
                    <DeleteIcon
                      sx={{
                        fontSize: {xs: "18px", sm: "20px", md: "22px", lg: "24px"},
                        color: "#000",
                        transition: "0.1s",
                        ":hover": {
                          color: "#d32f2f",
                          transform: "scale(1.15)",
                        }
                      }}
                      onClick={() => deleteSummary(sum.summary_date, sum.summary_id)}
                    />
                  </ListItemButton>
                  <Divider />
                </List>
              );
            })
          ) : (
            <>Cargando...</>
          )}
        </div>
        <FormSummary
          buscarResumenes={buscarResumenes}
          open={open}
          handleClose={handleClose}
          accountId={accountId}
        />
      </div>
    </div>
  );
};

export default Resumenes;
