import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function LogoutButton() {
    const navigate = useNavigate();

    function handleLogout() {
        console.log("Logging out...");
        localStorage.removeItem("userRole");
        navigate("/LogIn");
        window.location.reload();
    }

    return (
        <Button variant="primary" onClick={handleLogout}>
            LogOut
        </Button>
    );
}

export default LogoutButton;
