import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import QuotePage from "./pages/QuotePage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import AdminQuotesPage from "./pages/AdminQuotesPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/quote" element={<QuotePage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/admin/quotes" element={<AdminQuotesPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
