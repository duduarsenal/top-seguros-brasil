import { Listbox } from "@headlessui/react";
import { useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";

export default function CompleteRegister() {
  const pixValues = [
    { value: "email", name: "E-mail" },
    { value: "cpf", name: "Documento" },
    { value: "tel", name: "Telefone" },
    { value: "Random", name: "Aleatório" },
  ];
  const [pixValue, setPixValue] = useState(pixValues[0]);
  const [selectArrow, setSelectArrow] = useState(false);
  const [userInfos, setUserInfos] = useState({})
  const [failed, setFailed] = useState({status: false, message: ""}) //Aviso caso tenha algum erro

  const [rua, setRua] = useState("")
  const [numero, setNumero] = useState("")
  const [complemento, setComplemento] = useState("")
  const [bairro, setBairro] = useState("")
  const [cep, setCep] = useState("")
  const [cidade, setCidade] = useState("")
  const [estado, setEstado] = useState("")
  const [chavePix, setChavePix] = useState({chaveValue: "", chaveTipo: ""})

  function handleSelectArrow() {
    setSelectArrow(!selectArrow);
  }

  function handleFullRegister(){
    if (!rua || !numero || !bairro || !cep || !cidade || !estado || !chavePix.chaveValue) {

      setFailed({status: false})
      setTimeout(() => {
          setFailed({status: true, color: 'red', message: "Preencha todos os campos"})
      }, 0)
      console.log("Preencha todos os campos")

    } else {
      setUserInfos({rua, numero, complemento, bairro, cep, cidade, estado, chavePix})
      console.log(userInfos)
    }
  }

  function handleError(target){
    if (!target.value){
      target.setAttribute('style', 'border-color: #FF000080');
    } else {
      target.setAttribute('style', 'border-color: none');
    }
  }

  async function getViaCep(){
    try {
        const urlResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        const response = await urlResponse.json();
    
        setRua(response.logradouro)
        setBairro(response.bairro)
        setCidade(response.localidade)
        setEstado(response.uf)
    } catch (error) {
        console.log(error)
    }
  }

  return (
    <article className="relative ml-[210px] p-4 my-2 rounded-lg bg-regular-green-opacity min-h-[calc(100vh-200px)] h-full w-full flex flex-col items-center justify-start">
      <h1 className="my-2 font-[500] text-[1.5rem] rounded-md w-max leading-none text-dark-green">Finalize seu Cadastro</h1>
      <div className="w-full flex justify-center my-2 h-[1.75rem]">
         <div className={`h-full ${failed.status ? 'initial' : 'hidden'} flex items-center animate-wiggle bg-red-200 w-max px-4 py-1 font-[500] rounded-md text-red-600 text-[1.1rem]`}>{failed.message}</div>
      </div> 
      <div className="flex w-full justify-evenly gap-8">
        <section className="w-[45%]">
          <form>
            <h1 className="text-[1.25rem] font-[500]">Endereço</h1>
            <div className="w-full flex flex-col">
              <label htmlFor="">Rua</label>
              <input
                type="text"
                value={rua}
                onChange={(e) => setRua(e.target.value)}
                onKeyUp={(e) => handleError(e.target)}
                className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[30%] flex flex-col">
                <label htmlFor="">Número</label>
                <input
                  type="text"
                  onChange={(e) => setNumero(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[60%] flex flex-col">
                <label htmlFor="">Complemento</label>
                <input
                  type="text"
                  onChange={(e) => setComplemento(e.target.value)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[45%] flex flex-col">
                <label htmlFor="">Bairro</label>
                <input
                  type="text"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="">CEP</label>
                <input
                  type="text"
                  onChange={(e) => setCep(e.target.value)}
                  onBlur={() => cep && getViaCep()}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[30%] flex flex-col">
                <label htmlFor="">Cidade</label>
                <input
                  type="text"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[60%] flex flex-col">
                <label htmlFor="">Estado</label>
                <input
                  type="text"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
            </div>
          </form>
        </section>
        <section className="w-[45%]">
          <h1 className="text-[1.25rem] font-[500]">Chave PIX</h1>
          <div className="flex flex-col w-[50%]">
            <label>Tipo</label>
            <div className="relative w-full h-full">
              <Listbox value={pixValue} onChange={setPixValue}>
                <Listbox.Button
                  className="flex w-full h-8 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                  onClick={handleSelectArrow}
                >
                  <p className="w-full h-full flex items-center justify-start px-1">
                    {pixValue.name}
                  </p>
                  <MdKeyboardArrowDown
                    className={`${
                      selectArrow ? "hidden" : "block"
                    } absolute top-0 right-0 text-[2rem]`}
                  />
                  <MdKeyboardArrowUp
                    className={`${
                      selectArrow ? "block" : "hidden"
                    } absolute top-0 right-0 text-[2rem]`}
                  />
                </Listbox.Button>
                <Listbox.Options className="absolute top-0 mt-7 bg-white rounded-bl-sm rounded-br-sm w-full cursor-pointer">
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
          <div className="w-full flex flex-col">
            <label htmlFor="">Chave</label>
            <input
              type="text"
              onChange={(e) => setChavePix({chaveValue: e.target.value, chaveTipo: pixValue.value})}
              onKeyUp={(e) => handleError(e.target)}
              className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
            />
          </div>
        </section>
      </div>
      <button className="absolute bg-light-green-opacity hover:bg-light-green transition-all duration-150 text-[1.1rem] font-[500] px-6 py-2 rounded-md bottom-0 right-0 m-8" onClick={handleFullRegister}>Completar Registro</button>
    </article>
  );
}
