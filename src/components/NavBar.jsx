import { NavLink } from "react-router-dom"

function NavBar() {
    return (
        <nav className="navbar">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/admin">Admin</NavLink>
            <NavLink to="/assistant">Assistant</NavLink>
        </nav> 
    )
}

export default NavBar;