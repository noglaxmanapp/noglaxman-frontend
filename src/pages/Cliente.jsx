import {
  AccordionSummary,
  Accordion,
  Typography,
  AccordionDetails,
  List,
  ListItem,
  ListItemButton,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as React from "react";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth.jsx";
import { API_NOGLAXMAN } from "../utils/config.js";

const Cliente = () => {
  const [accounts, setAccounts] = useState();
  const [summary, setSummary] = useState();
  const [open, setOpen] = useState(false);
  const { auth } = useAuth();

  const token = window.localStorage.getItem("token");

  const [expanded, setExpanded] = useState(false);

  useEffect(()=>{
    if (window.location.pathname === '/client'){
      window.onpopstate = e => {
        window.localStorage.removeItem('token')
      };
    }
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const buscarCuentas = async () => {
    const dataUser = {
      client_id: auth.client_id,
    };
    const resolve = await fetch(`${API_NOGLAXMAN}/client/accounts`, {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Baerer ${token}`,
      },
    });
    const data = await resolve.json();
    if (data) {
      setAccounts(data);
    }
  };

  const buscarResumenes = async (account_id) => {
    const dataUser = {
      account_id: account_id,
    };
    const resolve = await fetch(`${API_NOGLAXMAN}/summary/account`, {
      method: "POST",
      body: JSON.stringify(dataUser),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Baerer ${token}`,
      },
    });
    const data = await resolve.json();
    if (data) {
      setSummary(data);
    }
  };

  useEffect(() => {
    buscarCuentas();
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "80vh",
        width: "100%",
        flexDirection: "column",
      }}
    >
      <div style={{ width: "80%" }}>
        <Typography
          variant="h5"
          sx={{
            alignSelf: "flex-start",
            mb: "12px",
            fontFamily: "proza-libre",
          }}
        >
          Mis cuentas
        </Typography>
        {!accounts ? (
          <>Cargando...</>
        ) : accounts.length !== 0 ? (
          accounts.map((ac) => {
            return (
              <Accordion
                key={ac.account_id}
                sx={{ bgcolor: "#efefef" }}
                expanded={expanded === ac.account_id}
                onChange={handleChange(ac.account_id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  onClick={() => buscarResumenes(ac.account_id)}
                >
                  <Typography sx={{ fontWeight: "bold", color: "#9567a7" }}>
                    {ac.account_id}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: "column",
                  }}
                >
                  {!summary ? (
                    <>Cargando...</>
                  ) : (
                    summary.map((sum) => {
                      return sum.accountID === ac.account_id ? (
                        <>
                          <List
                            sx={{ width: "100%" }}
                            component="nav"
                            aria-label="mailbox folders"
                          >
                            <a
                              href={sum.summary_url}
                              target="_ blank"
                              rel="noreferrer"
                              style={{ color: "#000", textDecoration: "none" }}
                            >
                              <ListItemButton>
                                <div>
                                  <Typography sx={{ display: "inline" }}>
                                    Resumen del{" "}
                                  </Typography>
                                  <Typography
                                    sx={{
                                      fontWeight: "bold",
                                      display: "inline",
                                    }}
                                  >
                                    {sum.summary_date.substring(0, 10)}
                                  </Typography>
                                </div>
                              </ListItemButton>
                            </a>
                            <Divider />
                          </List>
                        </>
                      ) : (
                        <></>
                      );
                    })
                  )}
                </AccordionDetails>
              </Accordion>
            );
          })
        ) : (
          <Typography
            align="center"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              height: "40px",
              color: "#b00b0b",
              marginY: { xs: "8px", md: "16px" },
              fontSize: { xs: "14px", sm: "14px", md: "16px", lg: "18px" },
              backgroundColor: "#eaeaea",
              borderBottom: "0.1px solid #d2cdcd",
            }}
          >
            *** No hay cuentas registradas. ***
          </Typography>
        )}
      </div>
    </div>
  );
};

export default Cliente;
