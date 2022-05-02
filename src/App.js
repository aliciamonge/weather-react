import React from "react";
import "./App.css";
import Weather from "./Weather";
import Footer from "./footer";

function App() {
  return (
    <div>
      <div className="container">
        <header>
          <Weather />
        </header>
      </div>
      <Footer />
    </div>
  );
}

export default App;
