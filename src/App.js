//Imports
import './App.css';
import Login from './components/LogIn';
import AdminDashboard from './components/AdminDashboard'; 
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import ColdDrinks from './components/MenuItem/ColdDrinks';
import Food from './components/MenuItem/Food';
import HotDrinks from './components/MenuItem/HotDrinks';
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import { OrderProvider } from './components/OrderContext';

//Main Function 
function App() {
  // Retrieve the user's role from local storage if it exists
  const userRoleFromLocalStorage = localStorage.getItem("userRole");
  // Set the user object based on the retrieved role, or set to null if no role was found
  const user = userRoleFromLocalStorage ? { role: userRoleFromLocalStorage } : null;

  return (
    <OrderProvider>
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

          {/* Routes for Cold Drinks, Food, and Hot Drinks */}
          <Route path="/cold-drinks" element={user && user.role.toLowerCase() === "customer" ? <ColdDrinks /> : <Navigate to="/LogIn" />} />
          <Route path="/food" element={user && user.role.toLowerCase() === "customer" ? <Food /> : <Navigate to="/LogIn" />} />
          <Route path="/hot-drinks" element={user && user.role.toLowerCase() === "customer" ? <HotDrinks /> : <Navigate to="/LogIn" />} />
          <Route path="/checkout" element={user && user.role.toLowerCase() === "customer" ? <Checkout /> : <Navigate to="/LogIn" />} />
        </Routes>
      </Router>
    </OrderProvider>
  );
}

export default App;
