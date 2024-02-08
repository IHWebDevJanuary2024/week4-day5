import { Link } from "react-router-dom";

function Navbar() {
    return (
        <ul>
            <li>
                <Link to="/">
                    🏠
                </Link>
            </li>
            <li>
                <Link to="/tasks">
                    📃
                </Link>
            </li>
        </ul>
    )
}

export default Navbar;