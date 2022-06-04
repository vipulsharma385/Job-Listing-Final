import React, { useEffect, useState } from "react";
import { getJobOpenings } from "./data/jobOpenings";
import { getUserDetails } from "./data/userDetails";
import "./css/styles.css";

const App = () => {
  const [jobData, setJobData] = useState([]);
  const [userData, setUserData] = useState({});

  useEffect(() => {
    getUserDetails(setUserData);
    getJobOpenings(setJobData);
  }, []);

  return (
    <div className="container">
      <div className="user">
        <h1>My Profile</h1>
        <div>
          <img src={userData.pictureUrl} alt="" />
          <h2>
            <span className="bold">NAME:</span> {userData.name}
          </h2>
          <h2>
            <span className="bold">COLLEGE:</span> {userData.college}
          </h2>
        </div>
      </div>
      <div className="jobs">
        <h1>Job Openings</h1>
        {jobData.map(
          ({ id, company, designation, location, min_experience, skills }) => (
            <div className="opening" key={id}>
              <h2>{company}</h2>
              <h3>
                <span className="bold">Designation:</span> {designation}
              </h3>
              <h3>
                <span className="bold">Job Location:</span> {location}
              </h3>
              <h3>
                <span className="bold">Experience Required:</span>{" "}
                {min_experience === 0
                  ? "Fresher"
                  : min_experience === 1
                  ? min_experience + " year"
                  : min_experience + " years"}
              </h3>
              <h3>
                <span className="bold">Skills:</span>{" "}
                {skills.map((item) => (
                  <span className="skill">{item}&nbsp;</span>
                ))}
              </h3>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default App;