import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/HomePages";
import MentorPage from "./pages/MentorPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mentor" element={<MentorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
