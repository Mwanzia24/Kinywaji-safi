import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUpForm.css"; // Import CSS module styles
const SignUpForm = () => {
  const navigate = useNavigate(); // Get the navigate function from React Router
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:9292/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data); // Handle success, e.g., redirect to another page
        navigate("/login"); // Navigate to the "/drinks" route
      } else {
        throw new Error("Failed to sign up");
      }
    } catch (error) {
      console.error(error); // Handle error, e.g., display error message
    }
  };
  return (
    <form className= 'formContainer' onSubmit={handleSignUp}>
      <h2>Sign Up</h2>
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
      <button type="submit">Sign Up</button>
    </form>
  );
};
export default SignUpForm;