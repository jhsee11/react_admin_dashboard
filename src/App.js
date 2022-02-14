import Topbar from './components/topbar/Topbar';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';
import './app.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import UserList from './pages/userList/UserList';

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="users/" element={<UserList />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
