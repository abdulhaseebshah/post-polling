import React, { useState } from "react";
import "./App.css";
import Post from "./components/Post";
import PhoneSignIn from "./components/Phone-Input/PhoneSignIn";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="container">
      <h1>Post UI</h1>
      <main>
        <Post isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      </main>
      {isModalOpen && <PhoneSignIn  setIsModalOpen={setIsModalOpen}  />}
    </div>
  );
}

export default App;
