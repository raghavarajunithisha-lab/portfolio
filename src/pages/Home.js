import "../styles/Home.css";
import mailIcon from "../assets/email.png";
import linkedinIcon from "../assets/linkedin.png";

const skills = [
  "Amazon Connect",
  "MuleSoft Anypoint Studio",
  "Salesforce",
  "AWS Bedrock (Claude 3 Haiku)",
  "Amazon Aurora Serverless v2",
  "AWS Lambda (Python)",
  "Amazon API Gateway",
  "Langfuse (LLM Observability)",
  "AWS Transform",
  "AWS Application Migration Service (MGN)",
  "VMware Workstation",
  "Ubuntu Linux",
  "PostgreSQL",
  "Flask",
  "Nginx",
  "Gunicorn",
  "AWS IAM Identity Center",
  "AWS Secrets Manager",
  "AWS Systems Manager (Hybrid Activations)",
  "AWS Migration Hub",
  "VPC Design (Subnets, Internet Gateways)",
  "UFW (Uncomplicated Firewall)",
  "FHIR (Fast Healthcare Interoperability Resources)",
  "RESTful APIs",
  "PostgreSQL Full-Text Search",
  "Docker"
];

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <span className="intro">Hello, I’m</span>

        <h1 className="name">NITHISHA RAGHAVARAJU</h1>
        <h2 className="title">Data & Cloud Engineer</h2>

        <p className="description">
          I design and deploy robust cloud architectures that transform raw data
          into actionable intelligence. Let’s build scalable systems together.
        </p>

        <div className="divider"></div>

        {/* Skills Section */}
        <div className="skills-section">
          <h3 className="skills-title">Skills & Technologies</h3>
          <div className="skills-list">
            {skills.map((skill, index) => (
              <span key={index} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="divider"></div>

        {/* Contact links */}
        <div className="contact">
          <a href="mailto:nithisha2201@gmail.com" className="contact-item">
            <img src={mailIcon} alt="Email" />
            <span>Email</span>
          </a>

          <a
            href="https://www.linkedin.com/in/r-nithisha/"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
