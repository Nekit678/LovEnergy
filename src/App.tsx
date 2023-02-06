import LoginPage from './Login/LoginPage';
import MainApp from './MainApp';
import Header from './mainsite/Header/Header';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom"

import { useEffect } from 'react';
import ErrorPage from './ErrorPage';
import LoadingPage from './LoadingPage';
import { useAuthMeQuery, useRegistrationMutation } from './redux/backend/api';

function App() {
  const { isLoading, isError, data } = useAuthMeQuery(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (data?.error.error_code == 1) {
      navigate("/login")
    }
    if (data?.error.error_code == 0) {
      navigate("/")
    }
    if (isError){
      navigate("/error")
    }
  },[isLoading])

  return (
    <div>
      {isLoading ? <LoadingPage/> : <Routes>
        <Route path="/" element={<Navigate to="/app"></Navigate>} />
        <Route path="/error" element={<ErrorPage/>}/>
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/app/*' element={<MainApp></MainApp>} />
      </Routes>}
    </div>

  );
}

export default App;
