import { useRoutes } from "react-router-dom";
import RootRoutes from "./RootRoutes";
import AuthRoutes from "./AuthRoutes";

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes([AuthRoutes, RootRoutes]);
}
