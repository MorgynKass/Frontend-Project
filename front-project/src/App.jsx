/* eslint-disable no-unused-vars */
import "bootswatch/dist/darkly/bootstrap.min.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import RecordList from "./components/RecordList";
import Create from "./components/Create";
import Edit from "./components/Edit";
import Price from "./components/Pricing";
import About from "./components/About";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<RecordList />} />
        <Route path="/contacts/create" element={<Create />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/pricing" element={<Price />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
