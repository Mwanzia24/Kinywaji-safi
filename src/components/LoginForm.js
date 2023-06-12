import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginForm.css"; // Import CSS module styles
const LoginForm = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("Login request:", { name, email }); // Log the request data
      const response = await fetch("http://localhost:9292/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success, e.g., redirect to another page
        navigate("/drinks"); // Navigate to the "/drinks" route
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
      console.error(error); // Handle error, e.g., display error message
    }
  };
  return (
    <form className='formContainer'  onSubmit={handleLogin}>
      <h2>Login</h2>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;