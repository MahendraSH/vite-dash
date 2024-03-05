import { Outlet, useNavigate } from "react-router-dom";
import AuthWrapper from "./auth-components/AuthWrapper";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const AuthLayout = () => {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.email) {
      navigate("/");
    }
  }, [user?.email]);
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
