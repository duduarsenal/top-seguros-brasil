import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../components/Sidebar/Sidebar";
import Profile from "../../components/Profile/Profile";
import CompleteRegister from "../../components/CompleteRegister/CompleteRegister";

export default function Perfil({path}) {
  const { setIsLogged, user, setUser} = useContext(UserContext);
  const navigate = useNavigate();
  // const path = useLocation().pathname.split('/').at(2);

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("tjwt");
    localStorage.removeItem("udt");
    navigate("/login");
    setUser([])
  }

  // useEffect(() => {
  //   console.log(path);
  // }, [])

  return (
    <div className="flex items-center left-0">
      <Sidebar logout={handleLogout} />
      {path == 'perfil' ? <Profile handleLogout={handleLogout} user={user} setUser={setUser}/>: 
      path == 'cadastro' ? <CompleteRegister /> :
      path == 'serviços' ? "<Services />" : navigate("/error")
      }
    </div>
  );
}


