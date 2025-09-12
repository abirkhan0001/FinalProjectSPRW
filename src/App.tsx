/*import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Navbar onSearch={handleSearch} />
      <Home searchQuery={searchQuery} />
      <Footer />
    </div>
  );
};

export default App;



// import React, { useState } from "react";
// import { BrowserRouter as Router,  } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AppRoutes from "./pages/Routes"; // ✅ ঠিক


// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };

//   return (
//     <Router>
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar *}
//         <Navbar onSearch={handleSearch} />

//         {/* Main Content *}
//         <main className="flex-1">
//           <AppRoutes searchQuery={searchQuery} />
//         </main>

//         {/* Footer }
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

// import React, { useState } from "react";
// import { BrowserRouter as Router } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import AppRoutes from "./pages/Routes";

// const App: React.FC = () => {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (query: string) => {
//     setSearchQuery(query);
//   };
//    const hideNavbarPaths = ["/login", "/register", "/forgot-password"];

//   const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);

//   return (
//     <Router>
//       {!shouldHideNavbar && <Navbar onSearch={setSearchQuery} />}
//       <div className="flex flex-col min-h-screen">
//         {/* Navbar *}
//         <Navbar onSearch={handleSearch} />

//         {/* Main Content *}
//         <main className="flex-1">
//           <AppRoutes searchQuery={searchQuery} />
//         </main>

//         {/* Footer *}
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;

*/
// App.tsx
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

  // Navbar hide করা path
  const hideNavbarPaths = ["/login", "/register", "/forgot-password"];
const shouldHideNavbar = hideNavbarPaths.includes(location.pathname);


  return (
    <>
      {!shouldHideNavbar && <Navbar onSearch={handleSearch} />}
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <main className="flex-1">
          <AppRoutes searchQuery={searchQuery} />
        </main>

        {/* Footer */}
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
