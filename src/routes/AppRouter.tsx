import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "./ProtectedRoute";
import AddServices from "../pages/AddServices";

const ROUTES = {
  HOME: "/home",
  ADD_SERVICES: "/home/add-services",
};

const AppRouter = () => (
  <Routes>
    <Route
      path={ROUTES.HOME}
      element={
        <ProtectedRoute>
          <HomePage />
        </ProtectedRoute>
      }
    />
    <Route
      path={ROUTES.ADD_SERVICES}
      element={
        <ProtectedRoute>
          <AddServices />
        </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRouter;
