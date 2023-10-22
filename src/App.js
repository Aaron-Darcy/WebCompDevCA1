//Imports
import './App.css';
import Login from './components/LogIn';
import AdminDashboard from './components/AdminDashboard'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import { ToastContainer } from 'react-toastify';

//Main Function 
function App() {
  // Retrieve the user's role from local storage if it exists
  const userRoleFromLocalStorage = localStorage.getItem("userRole");
  // Set the user object based on the retrieved role, or set to null if no role was found
  const user = userRoleFromLocalStorage ? { role: userRoleFromLocalStorage } : null;

  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* Default page is LogIn*/}
        <Route path="/" element={<Navigate to="/LogIn" />} />

        {/* Login Route: Check if user is authenticated */}
        <Route path="/LogIn" element={
            user ? 
            (user.role.toLowerCase() === "admin" ? <Navigate to="/AdminDashboard" /> : <Navigate to="/RestaurantMenu" />)
            : <Login />
        } />

        {/* Admin Route: Check if user is an Admin */}
        <Route path="/AdminDashboard" element={
            user && user.role.toLowerCase() === "admin" ? 
            <AdminDashboard />
            : <Navigate to="/LogIn" />
        } />

        {/* RestaurantMenu Route: Check if user is a Customer */}
        <Route path="/RestaurantMenu" element={user && user.role.toLowerCase() === "customer" ? <RestaurantMenu /> : <Navigate to="/LogIn" />} />
      </Routes>
    </Router>
  );
}

export default App;
