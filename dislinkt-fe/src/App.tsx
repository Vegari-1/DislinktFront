import { Fragment, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthPage from "./pages/AuthPage/AuthPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/actions/auth-actions";
import ProfilePage from "./pages/ProfileSkillsPage/ProfileSkillsPage";
import ProfileSkillsPage from "./pages/ProfileSkillsPage/ProfileSkillsPage";
import ProfileEducationPage from "./pages/ProfileEducationPage/ProfileEducationPage";
import ProfileWorkPage from "./pages/ProfileWorkPage/ProfileWorkPage";
import ProfilePostsPage from "./pages/ProfilePostsPage/ProfilePostsPage";

function App() {
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(autoLogin({ navigate }));
  // }, [dispatch, navigate]);

  return (
    <Fragment>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
        closeOnClick={true}
        pauseOnHover={true}
        closeButton={false}
        icon={false}
      />
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfileSkillsPage />} />
        <Route path="/profile/edu" element={<ProfileEducationPage />} />
        <Route path="/profile/work" element={<ProfileWorkPage />} />
        <Route path="/profile/posts" element={<ProfilePostsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
