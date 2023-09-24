import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";

export default function Perfil() {
  const { setIsLogged, user, setUser} = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("tjwt");
    localStorage.removeItem("udt");
    navigate("/login");
  }

  return (
    <div className="flex items-center left-0">
      <Sidebar logout={handleLogout} />
      <Profile handleLogout={handleLogout} user={user} setUser={setUser}/>
    </div>
  );
}


