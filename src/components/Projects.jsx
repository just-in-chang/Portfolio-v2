import React from "react";
import Job from "./Job";

function Projects() {
  return (
    <div className="experience">
      <div className="experience-label">Projects</div>
      <div className="experience-jobs">
        <Job
          title="Wibble"
          start="August 2021"
          description="Wibble is an app that helps software engineers track the progress of their job applications. "
          src="./experience/wibble.png"
          skills={["elixir", "phoenix", "reactjs", "postgres"]}
          link="https://wibble.justinchang.dev/"
        />
        <Job
          title="Monopl.io"
          start="January 2021"
          description="Monopl.io is an .io style, open source Monopoly, featuring quick, easy game setup and simple, self-explanatory controls. "
          src="./experience/monoplio.png"
          skills={[
            "reactjs",
            "rails",
            "graphql",
            "apollo",
            "postgres",
            "redis",
          ]}
          link="https://monopl.io/"
        />
        <Job
          title="Jelli"
          start="September 2020"
          description="Jelli is a full-stack web application to help its users manage their projects and tasks through a card based organization system. "
          src="./experience/jelli.jpg"
          skills={["reactjs", "django", "postgres", "heroku"]}
          link="https://just-in-chang.github.io/jelli-deploy"
        />
        <Job
          title="Pathfinder"
          start="July 2020"
          description="A widget that utilizes Dijkstra's, A*, and Kruskal's algorithm to generates and solves mazes. "
          src="./experience/pathfinder.jpg"
          skills={["javascript", "html", "css"]}
          link="/pathfinder"
        />
        <Job
          title="Akira Bot"
          start="August 2019"
          description="A discord bot that helped manage the point system for a 100+ player game. "
          src="./experience/akira.jpg"
          skills={["nodejs"]}
          link="https://github.com/just-in-chang/Akira-Bot"
        />
        <Job
          title="Cookie IDE"
          start="April 2019"
          description="A JavaFX drag and drop development environment for JavaFX GUI components and applications. "
          src="./experience/cookieide.jpg"
          skills={["java"]}
          link="https://youtu.be/5Gmh-W4f8nI"
        />
      </div>
    </div>
  );
}

export default Projects;
