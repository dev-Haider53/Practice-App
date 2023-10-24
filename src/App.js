import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sale from "./pages/sale/Sale";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Sale />} />
          <Route path="/sale" element={<Sale />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;