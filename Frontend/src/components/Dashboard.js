import "./Dashboard.css";
import React, { useEffect, useState } from "react";

function Dashboard() {
  const [employees, setEmployees] = useState(null);
  const [greeting, setGreeting] = useState("");
  const [stressLevel, setStressLevel] = useState(1);
  const [feelings, setFeelings] = useState("");
  const [acknowledgment, setAcknowledgment] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("employees");
    if (storedUser) {
      setEmployees(JSON.parse(storedUser));
    } else {
      window.location.href = "/login";
    }

    const currentHour = new Date().getHours();
    if (currentHour >= 5 && currentHour <= 11) {
      setGreeting("Good Morning");
    } else if (currentHour >= 12 && currentHour <= 16) {
      setGreeting("Good Afternoon");
    } else if (currentHour >= 17 && currentHour <= 20) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Hello");
    }
  }, []);

  const handleStressChange = (event) => {
    setStressLevel(event.target.value);
  };

  const handleFeelingsChange = (event) => {
    setFeelings(event.target.value);
  };

  const handleSubmit = () => {
    
    setAcknowledgment(true);

  
    setFeelings("");
    setTimeout(() => setAcknowledgment(false), 3000); 
  };

  const isSubmitDisabled = feelings.trim().split(" ").length < 5;

  if (!employees) {
    return <div>Loading...</div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-main">
      
        <div className="dashboard-header">
          <h2>
            {greeting}, {employees.name}
          </h2>
          <div className="dashboard-profile">
            <i className="fas fa-bell"></i>
            <img
              src="https://storage.googleapis.com/a1aa/image/7H3BTjyibEJICpe6sed171IVyiMIaHYfb3SqILnCuaRf9KXPB.jpg"
              alt="Profile"
            />
          </div>
        </div>

      
        <div className="dashboard-chart">
          <div className="dashboard-emotion-form">
            <h2>How Are You Feeling Today?</h2>

            <div className="dashboard-input-group">
              <label htmlFor="stress">Current Stress Level (1-10)</label>
              <input
                type="range"
                id="stress"
                name="stress"
                min="1"
                max="10"
                value={stressLevel}
                onChange={handleStressChange}
              />
              <span className="dashboard-slider-value">
                Level {stressLevel}
              </span>
            </div>

            <div className="dashboard-input-group">
              <label htmlFor="feelings">How are you feeling?</label>
              <textarea
                id="feelings"
                placeholder="Write about your feelings..."
                rows="4"
                value={feelings}
                onChange={handleFeelingsChange}
              ></textarea>
              <small>
                {isSubmitDisabled &&
                  "Please write at least 5 words to describe your feelings."}
              </small>
            </div>

            <button
              className="dashboard-submit-btn"
              type="button"
              onClick={handleSubmit}
              disabled={isSubmitDisabled}
            >
              Submit
            </button>
          </div>
        </div>

        
        {acknowledgment && (
          <div className="dashboard-acknowledgment">
            Thank you for sharing your feelings! Your response has been saved.
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
