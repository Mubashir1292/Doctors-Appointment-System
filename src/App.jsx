import React from "react";
import AppRoutes from "./pages/Routing/Routing";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <React.Fragment>
      <div className="mx-4 sm:mx-[10%]">
        <Navbar />
        <AppRoutes />
      </div>
    </React.Fragment>
  );
}

export default App;
