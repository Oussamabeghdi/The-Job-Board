import React from "react";
import "./App.css";
import Jobs from "./components/Jobs";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import Title from "./components/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <Jobs />
      <Footer />
    </div>
  );
}

export default App;
