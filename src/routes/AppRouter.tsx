import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

const ROUTES = {
  HOME: "/",
};

const AppRouter = () => (
  <Routes>
    <Route
      path={ROUTES.HOME}
      element={
        //  <ProtectedRoute>
        <HomePage />
        // </ProtectedRoute>
      }
    />
  </Routes>
);

export default AppRouter;
