import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer</h4>
                <h5>Wipro</h5>
              </div>
              <h3>2013</h3>
            </div>
            <p>
              Managed enterprise Hadoop infrastructure powering large-scale data processing.
              Oversaw 15 Hadoop clusters handling ~500 TB of distributed data, led cluster
              provisioning and deployment, ensured high availability of HDFS and YARN
              workloads, and optimized large-scale ETL and analytics pipelines.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Vice President</h4>
                <h5>Synchrony</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Contributing to strategic cloud migration initiatives at Synchrony, leveraging
              AWS (EC2, S3, EMR, SageMaker, Redshift) and big data expertise. Aligning
              business strategies with technological execution using Agile and SAFe
              methodologies in a remote capacity from Hyderabad.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
