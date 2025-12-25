import "../styles/Experience.css";
import pipelineImg from "../assets/DataPipelines.jpeg";
import serverlessImg from "../assets/serverless.jpg";
import batchprocessing from "../assets/batch_processing.png";
import dataStorage from "../assets/dataStorage.jpg";
import infrastructure_as_code from "../assets/infrastructure_as_code.jpg";
import CI_CD from "../assets/CI-CD.webp";
import Monitoring_Reliability from "../assets/monitoringReliability.jpg";

function Experience() {
  return (
    <section className="experience" id="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-card">
        {/* Header */}
        <div className="experience-header">
          <h3>AWS Data Engineer</h3>
          <p className="company">Fosterate</p>
          <p className="location">Bangalore, India</p>
          <span className="duration-badge">
            Aug 2021 – July 2023 · 2 years
          </span>
        </div>

        {/* Responsibilities */}
        <div className="responsibilities">
          {/* LEFT */}
          <div className="responsibility-block">
            <h4>1) Data Pipelines</h4>
            <img src={pipelineImg} alt="Data Pipelines" className="datapipelines"/>
            <p>
              Built scalable ETL pipelines on AWS using Glue, Lambda, and
              Python to process structured and semi-structured data.
            </p>
          </div>

          {/* RIGHT */}
          <div className="responsibility-block">
            <h4>2) Serverless Processing</h4>
            <img src={serverlessImg} alt="Serverless Processing" className="serverless"/>
            <p>
              Developed event-driven serverless workflows using AWS Lambda,
              API Gateway, and S3 for data ingestion and transformation.
            </p>
          </div>
        </div>
        <div className="responsibilities">
          {/* LEFT */}
          <div className="responsibility-block">
            <h4>3) Real-Time & Batch Data</h4>
            <img src={batchprocessing} alt="Data Pipelines" className="batchprocessing"/>
            <p>
              Implemented real-time data ingestion with Kinesis and DynamoDB Streams, and batch processing using EMR and PySpark.
            </p>
          </div>

          {/* RIGHT */}
          <div className="responsibility-block">
            <h4>4) Data Storage & Analytics</h4>
            <img src={dataStorage} alt="Serverless Processing" className="dataStorage"/>
            <p>
              Designed data models and stored processed data in S3, DynamoDB, and Redshift to support analytics and reporting.
            </p>
          </div>
        </div>
        <div className="responsibilities">
          {/* LEFT */}
          <div className="responsibility-block">
            <h4>5) Infrastructure as Code</h4>
            <img src={infrastructure_as_code} alt="Infrastructure as Code" className="Infrastructure"/>
            <p>
              Provisioned cloud resources using CloudFormation and AWS CDK for repeatable and secure deployments.
            </p>
          </div>

          {/* RIGHT */}
          <div className="responsibility-block">
            <h4>6) CI/CD Automation</h4>
            <img src={CI_CD} alt="Serverless Processing" className="CI_CD"/>
            <p>
              Automated deployments using AWS CodePipeline, CodeBuild, and CodeDeploy for data and serverless applications.
            </p>
          </div>
        </div>
        <div className="responsibilities">
          {/* LEFT */}
          <div className="responsibility-block">
            <h4>7) Monitoring & Reliability</h4>
            <img src={Monitoring_Reliability} alt="Infrastructure as Code" className="Monitoring_Reliability"/>
            <p>
              Configured CloudWatch logs, metrics, and alarms to monitor data pipelines and ensure reliability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
