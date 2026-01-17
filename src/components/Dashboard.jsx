import React from "react";

function Dashboard ({ personName , personPassword }) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Dashboard 🎉</h1>
      <p>You are logged in {personName}</p>
      <p>Your password is {personPassword}</p>
    </div>
  );
};

export default Dashboard;
