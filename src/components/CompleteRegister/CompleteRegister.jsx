import { Listbox } from "@headlessui/react";
import { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { cRegister } from "../../api/cRegister";
import InputMask from "react-input-mask";

export default function CompleteRegister() {
  const pixValues = [
    { value: "email", name: "E-mail" },
    { value: "cpf", name: "Documento" },
    { value: "tel", name: "Telefone" },
    { value: "Random", name: "Aleatório" },
  ];
  const [pixValue, setPixValue] = useState(pixValues[0]);
  const [selectArrow, setSelectArrow] = useState(false);
  const [userInfos, setUserInfos] = useState();
  const [failed, setFailed] = useState({ status: false, message: "" }); //Aviso caso tenha algum erro

  const [doc, setDoc] = useState("");
  const [tel, setTel] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [chavePix, setChavePix] = useState({ chaveValue: "", chaveTipo: "" });

  function handleSelectArrow() {
    setSelectArrow(!selectArrow);
  }

  function handleFullRegister() {
    if (
      !doc ||
      !tel ||
      !rua ||
      !numero ||
      !bairro ||
      !cep ||
      !cidade ||
      !estado ||
      !chavePix.chaveValue
    ) {
      setFailed({ status: false });
      setTimeout(() => {
        setFailed({
          status: true,
          color: "red",
          message: "Preencha todos os campos",
        });
      }, 0);
      console.log("Preencha todos os campos");
    } else {
      setUserInfos({
        doc,
        tel,
        endereco: { rua, numero, complemento, bairro, cep, cidade, uf: estado },
        chavePix,
      });
    }
  }

  function handleError(target) {
    if (!target.value) {
      target.setAttribute("style", "border-color: #FF000080");
    } else {
      target.setAttribute("style", "border-color: none");
    }
  }

  async function getViaCep() {
    try {
      const urlResponse = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const response = await urlResponse.json();

      setRua(response.logradouro);
      setBairro(response.bairro);
      setCidade(response.localidade);
      setEstado(response.uf);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (userInfos) {
      cRegister(userInfos);
    } else {
      console.log("vazio");
    }
  }, [userInfos]);

  return (
    <article className="ml-[210px] p-4 my-2 rounded-lg bg-regular-green-opacity min-h-[calc(100vh-200px)] h-max w-full flex flex-col items-center justify-evenly">
      <h1 className="font-[500] text-[1.5rem] rounded-md w-max leading-none text-dark-green">
        Finalize seu Cadastro
      </h1>
      <div className="w-full flex justify-center h-[1.75rem]">
        <div
          className={`h-full ${
            failed.status ? "initial" : "hidden"
          } flex items-center animate-wiggle bg-red-200 w-max px-4 py-1 font-[500] rounded-md text-red-600 text-[1.1rem]`}
        >
          {failed.message}
        </div>
      </div>
      <div className="flex flex-row-reverse flex-wrap w-full justify-center gap-8">
        <section className="min-w-[45%]">
          <form>
            <h1 className="text-[1.25rem] font-[500]">Endereço</h1>
            <div className="w-full flex flex-col">
              <label htmlFor="">Rua</label>
              <input
                type="text"
                placeholder="Rua Joaquim da Serra"
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
                  placeholder="105"
                  onChange={(e) => setNumero(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[60%] flex flex-col">
                <label htmlFor="">Complemento</label>
                <input
                  type="text"
                  placeholder="Casa 2"
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
                  placeholder="Jabaquara"
                  value={bairro}
                  onChange={(e) => setBairro(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="">CEP</label>
                <InputMask 
                  mask="99999-999"
                  placeholder="11085-080" 
                  onChange={(e) => setCep(e.target.value)}
                  maskChar={null}
                  onBlur={() => cep && getViaCep()}
                  onKeyUp={(e) => handleError(e.target)}>
                    {(inputProps) => <input {...inputProps} type="text"
                    className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"/>}
                </InputMask>
              </div>
            </div>
            <div className="flex justify-between">
              <div className="w-[55%] flex flex-col">
                <label htmlFor="">Cidade</label>
                <input
                  type="text"
                  placeholder="São Bernardo do Campo"
                  value={cidade}
                  onChange={(e) => setCidade(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
              <div className="w-[35%] flex flex-col">
                <label htmlFor="">Estado</label>
                <input
                  type="text"
                  placeholder="Rio Grande do Norte"
                  value={estado}
                  onChange={(e) => setEstado(e.target.value)}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                />
              </div>
            </div>
          </form>
        </section>
        <article className="min-w-[45%] flex flex-col justify-between">
          <section className="">
            <h1 className="text-[1.25rem] font-[500]">Dados Pessoais</h1>
            <div className="flex justify-between">
              <div className="flex flex-col w-[45%]">
                <label>Documento</label>
                  <InputMask
                    mask="999.999.999-99"
                    placeholder="123.456.789-10"
                    maskChar={null}
                    type="text"
                    onChange={(e) => setDoc(e.target.value.replace(/[/. -]/g, ''))}
                    onKeyUp={(e) => handleError(e.target)}
                    className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                  >
                </InputMask>
              </div>
              <div className="w-[45%] flex flex-col">
                <label htmlFor="">Telefone</label>
                <InputMask
                  mask="(99) 99999-9999"
                  placeholder="(11) 98179-1234"
                  maskChar={null}
                  type="text"
                  onChange={(e) => setTel(e.target.value.replace(/[( ) -]/g, ''))}
                  onKeyUp={(e) => handleError(e.target)}
                  className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
                  >
                </InputMask>
              </div>
            </div>
          </section>
          <section className="">
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
                placeholder={
                pixValue.name == 'Documento' ? '123.456.789-10' : 
                pixValue.name == 'Telefone' ? '(11) 98179-1234' : 
                pixValue.name == 'E-mail' ? 'email@gmail.com' : 'dbbf965d-677c-49ff-b9da-5131da15'} 
                onChange={(e) =>
                  setChavePix({
                    chaveValue: e.target.value,
                    chaveTipo: pixValue.name,
                  })
                }
                onKeyUp={(e) => handleError(e.target)}
                className="outline-none h-8 px-1 bg-[#ffffff] border-2 border-dark-green-opacity rounded-[0.2rem]"
              />
            </div>
          </section>
        </article>
      </div>
      <button
        className="mt-16 w-max bg-light-green-opacity hover:bg-light-green transition-all duration-150 text-[1.1rem] font-[500] px-6 py-2 rounded-md"
        onClick={handleFullRegister}
      >
        Completar Registro
      </button>
    </article>
  );
}
