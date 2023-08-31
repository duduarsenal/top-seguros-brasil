import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

import { useState } from "react";
import { TriangleTop, WavesOpacityBottom } from "./components/Shapes/Shapes";
function App() {
  const [error, setError] = useState({ state: false, message: "Teste" });

  return (
    <>
      <ErrorPopup error={error} setError={setError} />
      <Header />
      <div className="relative m-auto py-4 bg-regular-green-opacity z-0">
        <TriangleTop />
        <div className="max-w-[1360px] m-auto">
          <Outlet context={[error, setError]} />
        </div>
        <WavesOpacityBottom />
      </div>
      <Footer />
    </>
  );
}

export default App;
