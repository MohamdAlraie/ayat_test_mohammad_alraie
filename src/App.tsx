import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageProvider from "./components/common/LanguageProvider";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AddServices from "./pages/AddServices";
import ProtectedRoute from "./routes/ProtectedRoute";
import RootLayout from "./app/layout/RootLayout";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <RootLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="add-services" element={<AddServices />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
