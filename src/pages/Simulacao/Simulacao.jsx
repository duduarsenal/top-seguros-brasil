import { useContext, useEffect, useState } from "react";
import SimulacaoBox from "../../components/SimulaçãoBox/SimulacaoBox";
import { GetPriceSelector } from "../../api/getPriceSelector";
import { useOutletContext } from "react-router-dom";

import { UserContext } from '../../context/UserContext'


export default function Simulacao() {
  
  const pricesTotal = {};

  const [priceSelector, setPriceSelector] = useState([]);
  const [error, setError] = useOutletContext()

  useEffect(() => {
    GetPriceSelector()
    .then((data) => setPriceSelector(data) )
    .catch((error) => setError({state: true, message: "Erro na conexão com o Banco de Dados"}) )
  }, [])

  // useEffect(() => {
  //   console.log(pricesTotal)
  // }, [pricesTotal])

  const {userID} = useContext(UserContext)

  return (
      <div className="flex flex-col justify-start items-start px-8">
        <h1 className="text-[1.5rem] font-[500] text-center py-4">
          Personalize seu plano de seguro com o preço que cabe no seu bolso!
        </h1>
        {/* <h2>{userID}</h2> */}
        <div className="w-full items-center justify-center flex flex-wrap gap-8 py-4">
        {
            priceSelector.map((item, index) => (
              <SimulacaoBox 
              key={index}
              id={item.id}
              title={item.title}
              index={index}
              pricesTotal={pricesTotal}
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
