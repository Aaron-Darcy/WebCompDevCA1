//Imports
import './App.css';
import Login from './components/LogIn';
import AdminDashboard from './components/AdminDashboard'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import AdminRoute from './components/AdminRoute'; 

//Main Function 
function App() {

  // Retrieve the user's role from local storage if it exists
  const userRoleFromLocalStorage = localStorage.getItem("userRole");
  // Set the user object based on the retrieved role, or set to null if no role was found
  const user = userRoleFromLocalStorage ? { role: userRoleFromLocalStorage } : null;

  return (
    <Router>
      <Routes>
        <Route path="/LogIn" element={<Login />} /> 
        <Route path="/AdminDashboard" element={
            <AdminRoute user={user}>
                <AdminDashboard />
            </AdminRoute>
        } />
        <Route path="/MainMenu" element={<MainMenu />} /> 
      </Routes>
    </Router>
  );
}

export default App;
