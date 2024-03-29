import './App.css';
import MemberForm from './Components/MemberForm/MemberForm';
import AddMember from './Pages/AddMember/AddMember';
import HomePage from './Pages/HomePage/HomePage';
import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom"
import MemberList from './Pages/MembersList.js/MemberList';
import Layout from './Components/Layout/Layout';
import SingleMember from './Pages/SingleMember/SingleMember';
import UpdateMember from './Pages/UpdateMember/UpdateMember';
import CoronaInformation from './Pages/CoronaInformation/CoronaInformation';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/members" element={<MemberList />} />
            <Route path="/add-member" element={<AddMember />} />
            <Route path="/members/:id" element={<SingleMember />} />
            <Route path="/members/:id/edit" element={<UpdateMember />} />
            <Route path='/Corona-information' element={<CoronaInformation />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
