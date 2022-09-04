import { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import AuthPage from "./pages/AuthPage/AuthPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import ProfileSkillsPage from "./pages/ProfileSkillsPage/ProfileSkillsPage";
import ProfileEducationPage from "./pages/ProfileEducationPage/ProfileEducationPage";
import ProfileWorkPage from "./pages/ProfileWorkPage/ProfileWorkPage";
import ProfilePostsPage from "./pages/ProfilePostsPage/ProfilePostsPage";
import ProfileInfoPage from "./pages/ProfileInfoPage/ProfileInfoPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import ConnRequestsPage from "./pages/ConnRequestsPage/ConnRequestsPage";
import SystemEventsPage from "./pages/SystemEventsPage/SystemEventsPage";
import MessagesPage from "./pages/MessagesPage/MessagesPage";
import JobOffersPage from "./pages/JobOffersPage/JobOffersPage";
import PeoplePage from "./pages/PeoplePage/PeoplePage";
import AddJobOfferPage from "./pages/AddJobOfferPage/AddJobOfferPage";
import AddPostPage from "./pages/AddPostPage/AddPostPage";

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
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/conn-requests" element={<ConnRequestsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
        <Route path="/people" element={<PeoplePage />} />

        <Route path="/job-offers" element={<JobOffersPage />} />
        <Route path="/job-offers/add" element={<AddJobOfferPage />} />

        <Route path="/profile/:id" element={<ProfileSkillsPage />} />
        <Route path="/profile/:id/edu" element={<ProfileEducationPage />} />
        <Route path="/profile/:id/work" element={<ProfileWorkPage />} />
        <Route path="/profile/:id/posts" element={<ProfilePostsPage />} />
        <Route path="/profile/:id/posts/add" element={<AddPostPage />} />
        <Route path="/profile/:id/info" element={<ProfileInfoPage />} />

        <Route path="/events" element={<SystemEventsPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
