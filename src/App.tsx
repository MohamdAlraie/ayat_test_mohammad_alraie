import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import RootLayout from "./app/layout/RootLayout";
import LanguageProvider from "./app/layout/Navbar/LanguageProvider";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/Home/HomePage";
import Trips from "./pages/Home/Trips";
import TripDetails from "./pages/Home/TripDetails";
import NewReservations from "./pages/Home/NewReservations";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="home/" element={<LoginPage />} />
          <Route
            path="/home"
            element={
              // <ProtectedRoute>
              <RootLayout />
              // </ProtectedRoute>
            }
          >
            <Route index element={<HomePage />} />
            <Route path="/home/:tripName" element={<Trips />} />
            <Route
              path="/home/trip_details/:tripId"
              element={<TripDetails />}
            />
            <Route
              path="/home/trip_details/:tripId/new_reservations"
              element={<NewReservations />}
            />
            {/* <Route path="profile" element={<Profile />}>
          <Route path="edit_personal_info" element={<EditPersonalInfo />} />
          </Route> */}
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;
