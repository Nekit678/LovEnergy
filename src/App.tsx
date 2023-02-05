import LoginPage from './Login/LoginPage';
import MainApp from './MainApp';
import Header from './mainsite/Header/Header';
import Navbar from './mainsite/Navbar/Navbar';
import Profile from './mainsite/Profile/Profile';
import { Navigate, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/app"></Navigate>} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/app/*' element={<MainApp></MainApp>} />
      </Routes>

    </div>

  );
}

export default App;
