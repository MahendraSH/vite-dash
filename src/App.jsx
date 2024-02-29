import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from "./layouts/mainLayout/MainLayout";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import Dashboard from "./pages/Dashboard";
import SamplePage from "./pages/SamplePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import DemoPage from "./pages/DemoPage";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import FormEmploy from "./pages/form/FormEmploy";
import FormStudent from "./pages/form/FormStudent";
import FormEventRegister from "./pages/form/FormEventRegister";
import EmployTable from "./pages/table/EmployTable";

const App = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
    }
  }, [user?.email]);
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to={"/dash"} replace />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="/form-employ" element={<FormEmploy />} />
          <Route path="/form-student" element={<FormStudent />} />
          <Route path="/event-register" element={<FormEventRegister />} />
          <Route path="table-employ" element={<EmployTable />} />
          <Route path="table-student" element={<SamplePage />} />
          <Route path="table-register" element={<SamplePage />} />
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
