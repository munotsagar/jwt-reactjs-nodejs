import { Route, Routes } from 'react-router-dom';
import Headers from './pages/header/Header';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Dashboard from './pages/dashboard/Dashboard';
// import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/register' element={<Signup />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
