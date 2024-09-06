import React, { useState } from "react";
import axios from "axios";

const ComplaintForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    name: "",
    email: "",
    department: "",
    complaint: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        process.env.REACT_APP_POST_COMPLIANT,
        formData
      );
      if (response.status >= 200 && response.status < 300) {
        setResponseMessage("Complaint submitted successfully!");

        setFormData({
          title: "",
          name: "",
          email: "",
          department: "",
          complaint: "",
        });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("Failed to submit complaint. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-5 futuristic-card">
        <h2 className="mb-4 text-center futuristic-title">Complaint Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label futuristic-label">
              Title of Complaint
            </label>
            <input
              type="text"
              className="form-control futuristic-input"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="name" className="form-label futuristic-label">
              Name
            </label>
            <input
              type="text"
              className="form-control futuristic-input"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label futuristic-label">
              Email
            </label>
            <input
              type="email"
              className="form-control futuristic-input"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label htmlFor="department" className="form-label futuristic-label">
              Department
            </label>
            <select
              className="form-select futuristic-input"
              id="department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              required
            >
              <option value="">Select One</option>
              <option value="Planning">Planning</option>
              <option value="Finance">Finance</option>
              <option value="Transportation">Transportation</option>
              <option value="Customer Service">Customer Service</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="complaint" className="form-label futuristic-label">
              Complaint Body
            </label>
            <textarea
              className="form-control futuristic-input"
              id="complaint"
              name="complaint"
              rows="5"
              value={formData.complaint}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-block futuristic-button"
          >
            Submit Complaint
          </button>
        </form>
        {responseMessage && (
          <div className="alert mt-3 alert-info text-center">
            {responseMessage}
          </div>
        )}
      </div>

      <style jsx="true">{`
        .futuristic-card {
          background: #1a1a1a;
          border: 1px solid #0ff;
          border-radius: 10px;
          box-shadow: 0 0 15px #0ff;
        }

        .futuristic-title {
          color: #0ff;
          font-size: 2rem;
          text-shadow: 0px 0px 10px #0ff;
          font-weight: bold;
        }

        .futuristic-label {
          color: #0ff;
          font-weight: bold;
          letter-spacing: 1px;
        }

        .futuristic-input {
          background: #111;
          color: #fff;
          border: 1px solid #0ff;
          transition: all 0.3s ease-in-out;
        }

        .futuristic-input:focus {
          box-shadow: 0px 0px 10px #0ff;
        }

        .futuristic-button {
          background-color: #0ff;
          color: #000;
          font-weight: bold;
          transition: all 0.3s ease-in-out;
          border: none;
        }

        .futuristic-button:hover {
          background-color: #00d9d9;
          color: #fff;
        }

        .alert-info {
          background-color: #0ff;
          color: #000;
          border: none;
          box-shadow: 0 0 10px #0ff;
        }
      `}</style>
    </div>
  );
};

export default ComplaintForm;
