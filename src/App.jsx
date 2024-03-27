import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./views";
import { PatientDetails } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {/* Define route for PatientDetails */}
          <Route
            path="/patient-details/:registrationId"
            element={<PatientDetails />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
