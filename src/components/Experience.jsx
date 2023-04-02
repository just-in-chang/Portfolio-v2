import React from 'react';
import Job from './Job';

function Experience() {
  return (
    <div className="experience">
      <div className="experience-label">Experience</div>
      <div className="experience-jobs">
        <Job
          title="Software Engineer Intern"
          company="AppLovin"
          start="January 2023"
          end="March 2023"
          description="Investigated and implemented features for a Data Lakehouse architecture in the AppLovin data stack to optimize data storage and query performance. "
          src="./experience/applovin.png"
          skills={['iceberg', 'spark', 'gcp', 'hdfs']}
        />
        <Job
          title="Undergraduate Researcher"
          company="UCSB NLP Group"
          start="September 2021"
          end="Present"
          description="Researching natural language processing (NLP) topics with a focus in Question Answering (QA) advised by Professor William Wang. "
          src="./experience/ucsb.png"
          skills={['pytorch', 'rails', 'postgres']}
        />
        <Job
          title="Software Engineer"
          company="Sei Labs"
          start="June 2022"
          end="September 2022"
          description="Helped develop the DeFi infrastructure and ecosystem on Sei. "
          src="./experience/sei.png"
          skills={['rust', 'golang', 'nodejs', 'reactjs']}
        />
        <Job
          title="Software Engineer Intern"
          company="AppLovin"
          start="June 2022"
          end="September 2022"
          description="Developed an ETL pipelines and additional tooling to automate the flow of data and improve the developer experience. "
          src="./experience/applovin.png"
          skills={['spark', 'airflow', 'gcp', 'jenkins']}
        />
        <Job
          title="Software Engineer Intern"
          company="AppLovin"
          start="June 2021"
          end="September 2021"
          description="Introduced test-driven development into the data aggregation projects and designed the testing framework used to provide to provide a simple and standardized method to test all third-party data collection. "
          src="./experience/applovin.png"
          skills={['java', 'maven', 'jenkins', 'mysql']}
        />
      </div>
    </div>
  );
}

export default Experience;
