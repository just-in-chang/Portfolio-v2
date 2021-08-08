import Job from "./Job";

function Experience() {
    return (
        <div className="experience">
            <div className="experience-label">Experience</div>
            <div className="experience-jobs">
                <Job
                    title="Web Apps Intern"
                    company="AppLovin"
                    start="June 2021"
                    end="Present"
                    description="Introduced test-driven development into the data aggregation projects and designed the tesing framework used to provide to provide a simple and standardized method to test all third-party data collection. "
                    src="./experience/applovin.png"
                    skills={["java", "maven", "jenkins"]}
                />
                <Job
                    title="Software Engineer Intern"
                    company="Ortexo"
                    start="July 2020"
                    end="September 2020"
                    description="Worked with a scrum team in biweekly sprints to develop products including NPO Core, the company blog, and the company website. "
                    src="./experience/ortexo.png"
                    skills={["reactjs", "expressjs", "mongodb"]}
                />
                <Job
                    title="Software Engineer Intern"
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
