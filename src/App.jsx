import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import Dashboard from "./pages/Dashboard";
import SamplePage from "./pages/SamplePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DemoPage from "./pages/DemoPage";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to={"/dash"} replace />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="sample-page" element={<SamplePage />} />
          <Route path="*" element={<DemoPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
