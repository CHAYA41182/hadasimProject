import './App.css';
import MemberForm from './Components/MemberForm/MemberForm';
import AddMember from './Pages/AddMember/AddMember';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/members" element={<h1>Members</h1>} />
          <Route path="/add-member" element={<AddMember />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;