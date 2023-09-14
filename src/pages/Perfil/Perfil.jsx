import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { useNavigate, useOutletContext, useParams, useSearchParams } from "react-router-dom";
import { getProfile } from "../../api/getInfos";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Listbox } from "@headlessui/react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

export default function Perfil() {
  const [user, setUser] = useState({});
  const { setIsLogged } = useContext(UserContext);
  const navigate = useNavigate();

  const [error, setError] = useOutletContext();
  const { path } = useParams();
  const useSearch = useSearchParams();

  useEffect(() => {
    getProfile()
      .then((response) => {
        setUser(response);
      })
      .catch((error) => {
        console.log(error);
        setError({
          state: true,
          message: "Erro na conexão, tente novamente mais tarde",
        });
        handleLogout();
      });
      console.log(path);
      console.log(useSearch);
  }, []);

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("tjwt");
    navigate("/login");
  }

  return (
    <div className="flex items-center left-0">
      <Sidebar logout={handleLogout} />
      {/* <h1 className="w-full flex justify-center text-[1.5rem] font-[600]">
        Gerencie seu perfil, {user.username}
      </h1> */}
      <div className="ml-[210px] p-4 my-4 gap-8 rounded-lg bg-regular-green-opacity min-h-[calc(100vh-180px)] h-full w-full flex flex-col items-start justify-start">
        <form className="gap-16 flex justify-evenly">
          <DadosPessoais
            name={user.name}
            username={user.username}
            email={user.email}
          />
          <Endereco />
        </form>
        <form className="gap-12 flex justify-evenly">
          <SeusSeguros />
          <Endereco />
        </form>
      </div>
      {/* <button className="bg-light-green-opacity px-4 py-2 hover:bg-light-green rounded-md transition-all" onClick={handleLogout}>Sair</button> */}
    </div>
  );
}

export function DadosPessoais({ name, username, email, chavePix }) {
  const pixValues = [
    {
      value: "email",
      name: "E-mail",
    },
    {
      value: "cpf",
      name: "Documento",
    },
    {
      value: "tel",
      name: "Telefone",
    },
    {
      value: "Random",
      name: "Aleatório",
    },
  ];
  const [pixValue, setPixValue] = useState(pixValues[0]);
  const [selectArrow, setSelectArrow] = useState(false);

  function handleSelectArrow() {
    setSelectArrow(!selectArrow);
  }

  return (
    <article className="flex flex-col gap-4">
      <section>
        <h1 className="text-[1.25rem] font-[500]">Dados Pessoais</h1>
        <div className="w-full flex flex-col">
          <label htmlFor="">Nome Completo</label>
          <input
            type="text"
            defaultValue={name}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm w-full"
          />
        </div>
        <div className="flex flex-wrap justify-between">
          <div className="w-[45%] flex flex-col">
            <label htmlFor="">Documento</label>
            <input
              type="text"
              className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
            />
          </div>
          <div className="w-[45%] flex flex-col">
            <label htmlFor="">Telefone</label>
            <input
              type="text"
              className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
            />
          </div>
        </div>
        <div className="w-full flex flex-col">
          <label htmlFor="">E-mail</label>
          <input
            type="text"
            defaultValue={email}
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </section>
      <section>
        <h1 className="text-[1.25rem] font-[500]">Chave PIX</h1>
        <div className="flex justify-between">
          <div className="w-[32%] flex flex-col">
            <label htmlFor="">Tipo</label>
            <div className="relative w-full h-full">
              <Listbox value={pixValue} onChange={setPixValue}>
                <Listbox.Button
                  className="flex w-full h-full bg-regular-green-opacity border-2 border-regular-green-opacity border-gray-500 rounded-sm"
                  onClick={handleSelectArrow}
                >
                  <p className="w-full h-full flex items-center justify-start px-1">
                    {pixValue.name}
                  </p>
                  <MdKeyboardArrowDown
                    className={`${
                      selectArrow ? "hidden" : "block"
                    } absolute top-0 right-0 text-[2rem] pt-[2px] pr-[2px]`}
                  />
                  <MdKeyboardArrowUp
                    className={`${
                      selectArrow ? "block" : "hidden"
                    } absolute top-0 right-0 text-[2rem] pt-[2px] pr-[2px]`}
                  />
                </Listbox.Button>
                <Listbox.Options className="absolute top-0 mt-8 bg-white rounded-bl-sm rounded-br-sm w-full cursor-pointer">
                  {pixValues.map((item, index) => (
                    <Listbox.Option
                      key={index}
                      value={item}
                      className="hover:bg-light-green-opacity px-1 py-1"
                      onClick={handleSelectArrow}
                    >
                      {item.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Listbox>
            </div>
          </div>
          <div className="w-[58%] flex flex-col">
            <label htmlFor="">Chave</label>
            <input
              type="text"
              defaultValue={chavePix ? chavePix : email}
              className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
            />
          </div>
        </div>
      </section>
    </article>
  );
}

export function Endereco() {
  return (
    <section>
      <h1 className="text-[1.25rem] font-[500]">Endereço</h1>
      <div className="w-full flex flex-col">
        <label htmlFor="">Rua</label>
        <input
          type="text"
          className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
        />
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Número</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Complemento</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">Bairro</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[45%] flex flex-col">
          <label htmlFor="">CEP</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="w-[30%] flex flex-col">
          <label htmlFor="">Cidade</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
        <div className="w-[60%] flex flex-col">
          <label htmlFor="">Estado</label>
          <input
            type="text"
            className="outline-none h-8 px-1 bg-regular-green-opacity border-2 border-regular-green-opacity rounded-sm"
          />
        </div>
      </div>
    </section>
  );
}

export function SeusSeguros() {
  return (
    <section>
      <h1 className="text-[1.25rem] font-[500]">Seus Seguros</h1>
    </section>
  );
}
