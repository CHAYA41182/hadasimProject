import './App.css';
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<h1>Members</h1>} />
          <Route path="/add-member" element={<h1>Add Member</h1>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
