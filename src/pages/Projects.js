import { Link } from "react-router-dom";
import "../styles/Projects.css";

import healthcareImg from "../assets/health_project1.png";
import VMwaretoAWS from "../assets/VMwaretoAWS.png";
import gtuexpert from "../assets/GTU_expert.png";

function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Projects</h2>
      <div className="project-card">
        <div className="project-image">
          <img
            src={healthcareImg}
            alt="Digital Healthcare Front Door"
          />
        </div>

        <div className="project-content">
          <h3>Digital Healthcare Front Door</h3>

          <ul>
            <li>
              <strong>End-to-End Patient Journey:</strong> Built a “Digital Front Door”
              using Amazon Connect to route calls and automate appointment scheduling.
            </li>

            <li>
              <strong>Seamless Data Integration:</strong> Leveraged MuleSoft to sync
              patient data with Salesforce using FHIR-compliant standards.
            </li>

            <li>
              <strong>Rapid Full-Stack Delivery:</strong> Developed a custom agent web
              app and integrated three major platforms from scratch in one week.
            </li>

            <li>
              <strong>Platforms:</strong> Amazon Connect (IVR/Routing), Salesforce
              (Health Cloud/Lightning UI), MuleSoft (API-led Connectivity)
            </li>

            <li>
              <strong>Standards & Tech:</strong> FHIR Compliance, REST APIs,
              Integration Architecture, Web Development
            </li>
          </ul>

          <div className="project-buttons">

            <a
              href="https://www.linkedin.com/posts/r-nithisha_cloud-based-healthcare-activity-7406694594735726592-pj4I?utm_source=share&utm_medium=member_desktop&rcm=ACoAADG_C5IBqoJjZdIBsJVl0o7k1rV7G5BIN1A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Project Case Study
            </a>
          </div>
        </div>
      </div>

      {/* ================= Project 2 ================= */}
      <div className="project-card">
        <div className="project-image">
          <img
            src={VMwaretoAWS}
            alt="VMware to AWS Migration"
          />
        </div>

        <div className="project-content">
          <h3>VMware to AWS Migration Using AWS Transform</h3>

          <ul>
            <li>
              <strong>End-to-End Migration:</strong> Planned and executed a safe
              migration of on-prem VMware workloads to AWS using AWS Transform
              and Application Migration Service (MGN).
            </li>

            <li>
              <strong>Enterprise Workload Simulation:</strong> Built a realistic
              two-tier VMware environment with Ubuntu app (Flask, Gunicorn,
              Nginx) and PostgreSQL database servers.
            </li>

            <li>
              <strong>Discovery & Wave Planning:</strong> Performed agent-based
              discovery, collected metadata in AWS Migration Hub, and created
              dependency-aware migration waves using AWS Transform.
            </li>

            <li>
              <strong>Secure & Cost-Aware Execution:</strong> Migrated workloads
              using Hybrid Activations, Secrets Manager, and right-sized EC2
              instances to avoid over-provisioning.
            </li>

            <li>
              <strong>Validation & Cutover:</strong> Conducted test launches,
              validated application and database functionality post-migration,
              and completed clean agent decommissioning.
            </li>
          </ul>

          <div className="project-buttons">

            <a
              href="https://www.linkedin.com/posts/r-nithisha_vmware-aws-migration-activity-7408935972026916864-SqN-?utm_source=share&utm_medium=member_desktop&rcm=ACoAADG_C5IBqoJjZdIBsJVl0o7k1rV7G5BIN1A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Project Case Study
            </a>
          </div>
        </div>
      </div>

      {/* ================= Project 3 ================= */}
      <div className="project-card">
        <div className="project-image">
          <img
            src={gtuexpert}
            alt="AI-Powered Vehicle Inspection Assistant"
          />
        </div>

        <div className="project-content">
          <h3>AI-Powered Vehicle Inspection Assistant</h3>

          <ul>
            <li>
              <strong>Real-Time GenAI Guidance:</strong> Built an AI-powered vehicle
              inspection assistant using Amazon Bedrock to deliver contextual,
              on-demand guidance for inspectors.
            </li>

            <li>
              <strong>Structured Knowledge Retrieval (RAG):</strong> Designed a
              PostgreSQL-backed knowledge base with full-text search
              (tsvector + GIN indexes) for fast, accurate AI-assisted responses.
            </li>

            <li>
              <strong>Production-Grade Serverless Architecture:</strong> Implemented
              a fully serverless, VPC-isolated backend using API Gateway,
              AWS Lambda, and Aurora Serverless v2 following AWS Well-Architected
              principles.
            </li>

            <li>
              <strong>Secure, Scalable & Observable AI:</strong> Enforced
              least-privilege IAM, KMS encryption, Secrets Manager, and
              NAT-controlled egress, while integrating Langfuse for LLM tracing
              and feedback-driven observability.
            </li>

            <li>
              <strong>End-to-End GenAI Delivery:</strong> Delivered a lightweight
              React + Tailwind frontend and an auditable, debuggable AI system
              aligned with real-world enterprise GenAI deployments.
            </li>
          </ul>

          <div className="project-buttons">

            <a
              href="https://www.linkedin.com/posts/r-nithisha_mini-version-of-slaloms-gt%C3%BC-coexpert-ai-activity-7407145865259384832-v1Rd?utm_source=share&utm_medium=member_desktop&rcm=ACoAADG_C5IBqoJjZdIBsJVl0o7k1rV7G5BIN1A"
              target="_blank"
              rel="noopener noreferrer"
              className="btn secondary"
            >
              Project Case Study
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
