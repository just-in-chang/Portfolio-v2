import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
    return (
        <div className="navbar">
            <a href="#" className="navbar-section">
                <FontAwesomeIcon className="navbar-icon" icon={faSortUp} />
            </a>
        </div>
    );
}

export default Navbar;
