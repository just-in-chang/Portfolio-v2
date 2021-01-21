import Job from "./Job";

function Projects() {
    return (
        <div className="experience">
            <div className="experience-label">Projects</div>
            <div className="experience-jobs">
                <Job
                    title="Jelli"
                    start="September 2020"
                    description="Jelli is a full-stack web application to help its users manage their projects and tasks through a card based organization system. "
                    src="./experience/jelli.jpg"
                    skills={["reactjs", "django", "heroku"]}
                    link="https://just-in-chang.github.io/jelli-client"
                />
                <Job
                    title="Pathfinder"
                    start="July 2020"
                    description="A widget that utilizes Dijkstra's, A*, and Kruskal's algorithm to generates and solves mazes. "
                    src="./experience/pathfinder.jpg"
                    skills={["javascript", "html", "css"]}
                    link="/#/pathfinder"
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
