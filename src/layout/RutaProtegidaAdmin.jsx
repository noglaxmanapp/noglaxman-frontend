import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { API_NOGLAXMAN } from '../utils/config';

const RutaProtegidaAdmin = () => {
  
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  const [role, setRole] = useState()
  
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const authUser = async () => {
      if (!token || token === undefined){
        setLoading(false)
        return
      }
      try {
        const result = await fetch(`${API_NOGLAXMAN}/client/role`, {
        method: "POST",
        body: JSON.stringify({token:`${token}`}),
        headers: {"Content-Type": "application/json", Authorization: `Bearer ${token}`}
      })
        const data = await result.json() 
        if (data){
          setRole(data)
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false)
    }
    authUser()
    // eslint-disable-next-line
  },[]
  )
  

  if (loading){
    return <div>Cargando...</div>;
  }

  if (!token || token === 'undefined'){
    return <Navigate replace to='/'/>
  }

  if (error){
    return <Navigate replace to='/'/>;
  }

  if (role && role.role !== "admin"){
    return <Navigate replace to ='/client' />
  }

  return  <Outlet/>;
}
 
export default RutaProtegidaAdmin;