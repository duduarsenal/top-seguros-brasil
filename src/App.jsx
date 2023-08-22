import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <div className="bg-red-50 max-w-[1360px] m-auto py-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}

export default App;
