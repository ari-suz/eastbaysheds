import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Nav/>
      <div>
        <Routes>        
          <Route path="/"  element={<Home />} />
          <Route path="/contact"  element={<Form />}/>
          <Route path="/pricing" element={<Pricing />}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
