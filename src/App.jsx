import { useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

import { UserProvider } from "./context/UserContext";

import { TriangleTop, WavesOpacityBottom } from "./components/Shapes/Shapes";
function App() {
  const [error, setError] = useState({ state: false, message: "Teste" });

  return (
    <div className="min-h-screen h-max flex flex-col justify-between">
      <ErrorPopup error={error} setError={setError} />
      <Header />
      <main className="w-full min-h-[calc(100vh-220px)] relative py-4 bg-regular-green-opacity z-0">
        <TriangleTop />
        <div className="max-w-[1360px] m-auto">
          <UserProvider>
            <Outlet context={[error, setError]} />
          </UserProvider>
        </div>
        <WavesOpacityBottom />
      </main>
      <Footer />
    </div>
  );
}

export default App;
