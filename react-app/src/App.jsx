import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Dashboard from "./pages/Dashboard";
import DemoPage from "./pages/DemoPage";
import SamplePage from "./pages/SamplePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import FormEmploy from "./pages/form/FormEmploy";
import EmployTable from "./pages/table/EmployTable";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Navigate to={"/dash"} replace />} />
          <Route path="dash" element={<Dashboard />} />
          <Route path="/form/:id" element={<FormEmploy />} />
          <Route path="table/:id" element={<EmployTable />} />

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
