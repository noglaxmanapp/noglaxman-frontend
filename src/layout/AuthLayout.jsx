import Home from "../pages/Home";
import Nosotros from "../pages/Nosotros";
import Simulador from "../pages/Simulador";
import InfoCeo from "../pages/InfoCeo";
import Contacto from "../pages/Contacto";
import { useEffect } from "react";

const AuthLayout = () => {

  window.localStorage.removeItem("token");

  return ( 
    <div className="App">
      <Home />
      <Nosotros />
      <InfoCeo />
      <Simulador />
      <Contacto />
    </div>
   );
}
 
export default AuthLayout;