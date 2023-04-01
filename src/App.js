import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav'
import { AuthProvider } from './context/AuthProvider';
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from './layout/RutaProtegida';
import RutaProtegidaAdmin from './layout/RutaProtegidaAdmin';
import Admin from './pages/Admin';
import Cliente from './pages/Cliente';
import NotFound from './pages/NotFound';
import Resumenes from './pages/Resumenes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Nav/>
        <Routes>
          <Route path='/' element={<AuthLayout/>} />
          <Route element={<RutaProtegida/>}>
            <Route path='/client' element={<Cliente/>} />
          </Route>
          <Route element={<RutaProtegidaAdmin/>}>
            <Route path='/admin' element={<Admin/>} />
            <Route path='/admin/:accountId' element={<Resumenes/>} />
          </Route>
          <Route path='/*' element={<NotFound/>}/>
        </Routes>      
      </AuthProvider>
    </Router>
  );
}

export default App;
