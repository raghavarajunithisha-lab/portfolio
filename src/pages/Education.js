import "../styles/Education.css";
import albanyLogo from "../assets/suny-logo.jpg";

function Education() {
  return (
    <>
      <section className="education" id="education">
        <h2 className="section-title">Education</h2>
        <div className="education-bg">
        <div className="education-card">
          <img src={albanyLogo} alt="University at Albany" />

          <div className="education-content">
            <h3>Master’s in Data Science</h3>

            <p className="university">
              State University of New York at Albany
            </p>

            <div className="duration-box">
              Aug 2023 – May 2025
            </div>
          </div>
        </div>
        <ul className="details-list">
          <li>
            <strong>GPA:</strong> 3.8/4.0
          </li>

          <li>
            <strong>Relevant Coursework:</strong> Advanced Data Modeling, Cloud
            Computing for Data Science, Database Management Systems,
            Data Warehousing
          </li>
        </ul>
        </div>

        
      </section>

      {/* Quote section — separate */}
      <p className="education-quote">
        Before deciding I’m “just a fresher,” I invite you to explore my
        projects, because experience begins with opportunity.
      </p>
    </>
  );
}

export default Education;
