import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "./layouts/authLayout/AuthLayout";
import MainLayout from "./layouts/mainLayout/MainLayout";
import Dashboard from "./pages/Dashboard";
import DemoPage from "./pages/DemoPage";
import SamplePage from "./pages/SamplePage";
import LoginPage from "./pages/auth/LoginPage";
import RegisterPage from "./pages/auth/RegisterPage";
import FormEmploy from "./pages/form/FormEmploy";
import FormEventRegister from "./pages/form/FormEventRegister";
import FormStudent from "./pages/form/FormStudent";
import EmployTable from "./pages/table/EmployTable";
import RegisterTable from "./pages/table/RegisterTable";
import StudentTable from "./pages/table/StudentTable";

const App = () => {
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
          <Route path="table-student" element={<StudentTable />} />
          <Route path="table-register" element={<RegisterTable />} />
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
