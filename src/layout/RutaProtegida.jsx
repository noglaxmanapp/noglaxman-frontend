import { Navigate, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { API_NOGLAXMAN } from '../utils/config';

const RutaProtegida = () => {

  const [loading, setLoading] = useState(true)

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
        
      }
      setLoading(false)
    }
    authUser()
  }, [token])

  if (loading){
    return
  }

  if (!token || token === 'undefined'){
    return <Navigate replace to='/'/>
  }

  if (role.role !== "user"){
    return <Navigate replace to ='/admin' />
  }

  return  <Outlet/>;
}
 
export default RutaProtegida;