// LogoutButton.js
// Imports
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'; 

// LogoutButton function
function LogoutButton() {
    // Hook to get the navigate function
    const navigate = useNavigate(); 

    // handleLogout function that will be triggered on button click
    function handleLogout() {
        console.log("Logging out..."); 
        localStorage.removeItem("userRole"); 
        navigate("/LogIn"); 
        window.location.reload();
    }

    
    return (
        // Button event that triggers the handleLogout function
        <Button variant="danger" onClick={handleLogout}>
            Log Out
        </Button>
    );
}


export default LogoutButton;
