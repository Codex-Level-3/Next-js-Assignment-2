"use client";

import { useState } from "react";

export default function UserForm() {
  const [username, setUsername] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    alert(`Welcome ${username}!`);
  };

  return (
    <form onSubmit={handleSubmission}>
      <label>
        Your Name:
        <input onChange={handleUsername} type="text" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
