import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Signup = () => {
  const [credentials, setCredentials] = useState({name: "",branch: "",DateofJoining: "",email: "",password: ""});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        DateofJoining : credentials.DateofJoining.toISOString()

      })
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter valid credentials");
    }
  };

  const handleDateChange = (date) => {
    setCredentials({
      ... credentials,
      DateofJoining : date
    });
  }

  const handleChange = (event) => {
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input type="text" className="form-control" name="name" value={credentials.name} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" name="email" value={credentials.email} onChange={handleChange} />
          <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" name="password" value={credentials.password} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="branch" className="form-label">Branch</label>
          <input type="text" className="form-control" name="branch" value={credentials.branch} onChange={handleChange} />
        </div>
        <div className="mb-3">
          <label htmlFor="DateofJoining" className="form-label">Date of Joining</label>
         <DatePicker 
           selected = {credentials.DateofJoining}
           onChange = {handleDateChange}
           dateFormat="MM/dd/yyyy"
           />
        </div>
        <button type="submit" className="m-3 btn btn-primary">Submit</button>
        <Link to="/login" className="btn btn-danger">Already a User?</Link>
      </form>
    </div>
  );
};

export default Signup;