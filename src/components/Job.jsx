import React from "react";

function Job(props) {
  return (
    <div
      className={`job-container ${props.link == null ? "" : "job-link"}`}
      onClick={() => {
        if (props.link != null) {
          window.open(props.link);
        }
      }}
    >
      <div className="job">
        <div className="job-text">
          <div className="job-title">{props.title}</div>
          <div className="job-details">
            <div className="job-company">
              {props.company != null && props.company}
            </div>
            {(props.company == null ? "" : ": ") +
              props.start +
              (props.end === undefined ? "" : ` - ${props.end}`)}
          </div>
          <div className="job-description">
            {props.description != null && props.description}
          </div>
          <div className="job-skills">
            {props.skills != null &&
              props.skills.map((skill) => (
                <img src={`./experience/skills/${skill}.png`} alt="Skill" />
              ))}
          </div>
        </div>
        <div className="job-image-container">
          <img className="job-image" src={props.src} alt="Job" />
        </div>
      </div>
    </div>
  );
}

export default Job;
