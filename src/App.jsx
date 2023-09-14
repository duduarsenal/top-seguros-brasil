import { useContext, useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

import { TriangleTop, WavesOpacityBottom } from "./components/Shapes/Shapes";
import { AuthUser } from "./api/authUser";
import { UserContext } from "./context/UserContext";
function App() {
  const [error, setError] = useState({ state: false, message: "Error Message" });
  const {setIsLogged} = useContext(UserContext);
  const path = useParams();

  useEffect(() => {
    setIsLogged(AuthUser());
  }, [])

  useEffect(() => {
    console.log(path)
  }, [path])

  return (
    <div className="min-h-screen h-max flex flex-col">
      <ErrorPopup error={error} setError={setError} />
        <Header page={path}/>
        <main className="w-full min-h-[calc(100vh-180px)] h-max relative bg-regular-green-opacity z-0">
          <TriangleTop />
          <div className="max-w-[1360px] mx-auto h-full">
            <Outlet context={[ error, setError]} />
          </div>
          <WavesOpacityBottom />
        </main>
        <Footer page={path}/>
    </div>
  );
}

export default App;
