import { useEffect, useState } from "react";
import SimulacaoBox from "../../components/SimulaçãoBox/SimulacaoBox";
import { GetPriceSelector } from "../../api/getPriceSelector";
import { useOutletContext } from "react-router-dom";


export default function Simulacao() {
  
  const [priceSelector, setPriceSelector] = useState([]);
  const [error, setError] = useOutletContext()

  useEffect(() => {
    GetPriceSelector()
    .then((data) => setPriceSelector(data) )
    .catch((error) => setError({state: true, message: "Erro na conexão com o Banco de Dados"}) )
  }, [])

  return (
      <div className="min-h-[calc(100vh-220px)] flex flex-col px-8">
        <h1 className="text-[1.5rem] font-[500] text-center py-4">
          Personalize seu plano de seguro com o preço que cabe no seu bolso!
        </h1>
        <div className="w-full items-center justify-center flex flex-wrap gap-8 py-4">
        {
            priceSelector.map((item) => (
              <SimulacaoBox 
              key={item.title}
              title={item.title} 
              montlyPayment={item.montlyPayment} 
              numberOfMonths={item.numberOfMonths} 
              sinistroTax={item.sinistroTax}
              priceList={item.priceList}
              />
            ))
          }
        </div>
      </div>
  );
}
