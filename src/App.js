//App.js
//Imports
import Login from './components/Authentication/LogIn';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import ColdDrinks from './components/MenuItem/ColdDrinks';
import Food from './components/MenuItem/Food';
import HotDrinks from './components/MenuItem/HotDrinks';
import Checkout from './components/Checkout';
import { ToastContainer } from 'react-toastify';
import { MenuOrderProvider } from './components/MenuOrderManager';

//Main Function 
function App() {
  // Retrieve the user's role from local storage
  const userRoleFromLocalStorage = localStorage.getItem("userRole");

  // Set the user object based on the retrieved role, or set to null if no role was found
  const user = userRoleFromLocalStorage ? { role: userRoleFromLocalStorage } : null;

  return (
    <MenuOrderProvider>
      <Router>
        <ToastContainer />
        <Routes>
          {/* Default page is LogIn */}
          <Route path="/" element={<Navigate to="/LogIn" />} />

          {/* Login Route: Check if user is authenticated */}
          <Route path="/LogIn" element={user ? <Navigate to="/RestaurantMenu" /> : <Login /> } />

          {/* Routes for RestaurantMenu,Cold Drinks, Food, Hot Drinks, and Checkout */}
          <Route path="/cold-drinks" element={user ? <ColdDrinks userRole={user.role} /> : <Navigate to="/LogIn" />} />
          <Route path="/food" element={user ? <Food userRole={user.role} /> : <Navigate to="/LogIn" />} />
          <Route path="/hot-drinks" element={user ? <HotDrinks userRole={user.role} /> : <Navigate to="/LogIn" />} />
          <Route path="/checkout" element={user ? <Checkout /> : <Navigate to="/LogIn" />} />
          <Route path="/RestaurantMenu" element={user ? <RestaurantMenu userRole={user.role} /> : <Navigate to="/LogIn" />} />
        </Routes>
      </Router>
    </MenuOrderProvider>
  );
}

export default App;