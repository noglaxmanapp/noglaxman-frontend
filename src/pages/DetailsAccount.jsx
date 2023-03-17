import { List, ListItemButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/system";

const DetailsAccount = ( { ac, buscarCuentas, deleteAccount, cliente_id }) => {
  const navigate = useNavigate()

  const confirmDelete = async (account_id, cliente_id) => {
    await deleteAccount(account_id);
    buscarCuentas(cliente_id);
  }
  
  return (
    <List sx={{ width: "100%" }} component="nav" aria-label="mailbox folders">
      <ListItemButton
        divider
        sx={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor:'#eaeaea',
        }}
      >
         <a
          href={`/admin/${ac.account_id}`}
          style={{
            width: "100%",
            color: "#000",
            textDecoration: "none",
            ":link": { textDecoration: "none" },
            ":active": { textDecoration: "none" },
            ":visited": { textDecoration: "none" },
          }}>
          <Typography
            sx={{
              fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px"},
              display: "inline",
              fontWeight: "bold",
            }}
          >
            Nro. cuenta
          </Typography>
          <Typography
            sx={{
              fontSize: {xs: "12px", sm: "14px", md: "16px", lg: "18px"},
              display: "inline",
              fontWeight: "700",
              color: "#666",
            }}
          >
            : {ac.account_id}
          </Typography>
        </a>
        <DeleteIcon
          sx={{
            fontSize: {xs: "18px", sm: "20px", md: "22px", lg: "24px"},
            color: "#000",
            transition: "0.1s",
            ":hover": {
              color: "#d32f2f",
              transform: "scale(1.15)",
            },
          }}
          onClick={async () => {
            Swal.fire({
              text: `¿Desea eliminar la cuenta ${ac.account_id}?`,
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
                confirmDelete(ac.account_id, cliente_id);
                Swal.fire({
                  text: "Cuenta eliminada con éxito!",
                  icon: "success",
                  confirmButtonText: "Ok",
                  confirmButtonColor: "#1b9e17",
                  background: "#eaeaea",
                  backdrop: "rgba(0, 0, 0, 0.8)",
                });
              }
            });
          }}
        ></DeleteIcon>
      </ListItemButton>
    </List>
  );
};

export default DetailsAccount;
