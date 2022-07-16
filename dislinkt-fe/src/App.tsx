import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";

import "./App.css";
import AuthPage from "./pages/AuthPage/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
