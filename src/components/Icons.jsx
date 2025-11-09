import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Icons() {
  return (
    <div className="icon-container">
      <a href="mailto:justin_chang@ucsb.edu">
        <FontAwesomeIcon className="icon" icon={faEnvelope} />
      </a>
      <FontAwesomeIcon
        className="icon"
        icon={faFile}
        onClick={() => {
          window.open("./resume.pdf");
        }}
      />
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
      <FontAwesomeIcon
        className="icon"
        icon={faGoogleScholar}
        onClick={() => {
          window.open("https://scholar.google.com/citations?user=ArgoXO0AAAAJ");
        }}
      />
    </div>
  );
}

export default Icons;
