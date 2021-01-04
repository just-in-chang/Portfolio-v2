import Job from "./Job";

function Experience() {
    return (
        <div className="experience">
            <div className="experience-label">Experience</div>
            <div className="experience-jobs">
                <Job
                    title="Software Engineer"
                    company="Ortexo"
                    start="July 2020"
                    end="September 2020"
                    description="Worked with a scrum team in biweekly sprints to develop products including NPO Core, the company blog, and the company website. "
                    src="./experience/ortexo.png"
                    skills={["reactjs", "expressjs", "mongodb"]}
                />
                <Job
                    title="Front-end Web Development Intern"
                    company="SUSTaiN"
                    start="March 2019"
                    end="July 2019"
                    description="Developed the front-end of the company website. "
                    src="./experience/sustain.png"
                    skills={["reactjs"]}
                />
            </div>
        </div>
    );
}

export default Experience;
