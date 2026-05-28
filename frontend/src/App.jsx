import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import StartPage from "./pages/StartPage.jsx";
import ClientCategoryPage from "./pages/ClientCategoryPage.jsx";
import WeddingBuilderPage from "./pages/WeddingBuilderPage.jsx";
import PackagesPage from "./pages/PackagesPage.jsx";
import ComparePage from "./pages/ComparePage.jsx";
import QuotePage from "./pages/QuotePage.jsx";
import ThankYouPage from "./pages/ThankYouPage.jsx";
import AdminQuotesPage from "./pages/AdminQuotesPage.jsx";
import AdminQuoteDetailPage from "./pages/AdminQuoteDetailPage.jsx";
import PhotographerPlaceholderPage from "./pages/PhotographerPlaceholderPage.jsx";

function App() {
  return (
    <div className="min-h-screen bg-charcoal text-ivory">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/start" element={<StartPage />} />
          <Route path="/client" element={<ClientCategoryPage />} />
          <Route path="/client/wedding" element={<WeddingBuilderPage />} />
          <Route path="/photographer" element={<PhotographerPlaceholderPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/quote" element={<WeddingBuilderPage />} />
          <Route path="/thank-you" element={<ThankYouPage />} />
          <Route path="/admin/quotes" element={<AdminQuotesPage />} />
          <Route path="/admin/quotes/:id" element={<AdminQuoteDetailPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
