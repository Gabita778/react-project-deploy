import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Error from './pages/Error';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={ <Login></Login>}></Route>
        <Route path="*" element={ <Error />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
