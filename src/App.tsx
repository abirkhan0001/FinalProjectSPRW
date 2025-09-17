
import React, { useState } from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./pages/Routes";

const AppContent: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };
  
  const hideNavbarPaths = ["/login", "/register", "/forgot-password"];
const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);


  return (
    <>
      {!shouldHideNavbar && <Navbar onSearch={handleSearch} />}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <AppRoutes searchQuery={searchQuery} />
        </main>
        <Footer />
      </div>
    </>
  );
};

const App: React.FC = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
