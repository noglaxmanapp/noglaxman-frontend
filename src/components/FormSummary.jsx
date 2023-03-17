import {
  Button,
  CircularProgress,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
} from "@mui/material";
import { useState } from "react";
import Swal from "sweetalert2";
import { uploadFile } from "../firebase/config";
import Error from "./Error";
import { API_NOGLAXMAN } from "../utils/config";

const FormSummary = ({ open, handleClose, buscarResumenes, accountId }) => {
  const [file, setFile] = useState("");
  const [date, setDate] = useState("");
  const [profit, setProfit] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const token = window.localStorage.getItem('token');

  const createNewSummary = async (newSummary) => {
    try{
      const resolve = await fetch(`${API_NOGLAXMAN}/summary`, {
        method: "POST",
        body: JSON.stringify(newSummary),
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}`},
      });
      const data = await resolve.json();
      return data;
    }
    catch(error){
      return (error)
    }
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if ([file, date, profit].includes("")) {
      setError(true);
      setLoading(false);
      return;
    } else {
      setError(false);
      const summary = await uploadFile(file);
      const newSummary = {
        accountID: accountId,
        summary_url: summary[1],
        summary_date: date,
        profit: profit,
      };
      const data = await createNewSummary(newSummary);
      if (data){
        setLoading(false)
        Swal.fire({
          text: "Resumen creado con éxito!",
          icon: "success",
          confirmButtonText: "Ok",
          confirmButtonColor: "#1b9e17",
          background: "#eaeaea",
          backdrop: "rgba(0, 0, 0, 0.8)",
        });
      }
      else{
        setLoading(false)
      }
      buscarResumenes(accountId);
      handleClose();
  
      setFile("");
      setProfit("");
      setDate("");
    }

  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Agregar resumen</DialogTitle>
      <DialogContent>
        <form action="" onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            sx={{ marginBottom: "24px", width: "100%" }}
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
          <TextField
            sx={{ marginBottom: "24px", marginTop: "12px", width: "100%" }}
            type="date"
            id="outlined-required"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <TextField
            sx={{ marginBottom: "24px", width: "100%" }}
            type="number"
            id="outlined-required"
            label="Profit"
            name="profit"
            value={profit}
            onChange={(e) => setProfit(e.target.value)}
          />
          <Button
            sx={{ width: "100%" }}
            color="secondary"
            variant="contained"
            type="submit"
            onClick={() => {setLoading(true)}}
          >
            {loading ? <CircularProgress size={20} sx={{color:'#fff'}}/> : ('Agregar Resumen')}
          </Button>
          {error && (
            <Error>
              <p>Todos los campos son requeridos</p>
            </Error>
          )}
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default FormSummary;
