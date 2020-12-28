import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Icons() {
    return (
        <div className="icon-container">
            <FontAwesomeIcon
                className="icon"
                icon={faGithub}
                onClick={() => {
                    window.open("https://github.com/just-in-chang");
                }}
            />
            <FontAwesomeIcon
                className="icon"
                icon={faLinkedin}
                onClick={() => {
                    window.open("https://www.linkedin.com/in/just-in-chang");
                }}
            />
        </div>
    );
}

export default Icons;
