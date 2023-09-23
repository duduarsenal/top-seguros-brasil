import { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate, useParams, useSearchParams } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ErrorPopup from "./components/ErrorPopup/ErrorPopup";

import { TriangleTop, WavesOpacityBottom } from "./components/Shapes/Shapes";
import { AuthUser } from "./api/authUser";
import { UserContext } from "./context/UserContext";
function App() {
  const [error, setError] = useState({ state: false, message: "Error Message" });
  const {setIsLogged} = useContext(UserContext);

  useEffect(() => {
    setIsLogged(AuthUser());
  }, [])

  // useEffect(() => {
  //   console.log(path)
  // }, [path])

  return (
    <div className="min-h-screen h-max flex flex-col">
      <ErrorPopup error={error} setError={setError} />
        <Header />
        <main className="w-full min-h-[calc(100vh-180px)] h-max relative bg-regular-green-opacity z-0">
          <TriangleTop />
          <div className="max-w-[1360px] mx-auto h-full">
            <Outlet context={[ error, setError]} />
          </div>
          <WavesOpacityBottom />
        </main>
        <Footer page={window.location.pathname}/>
    </div>
  );
}

export default App;
