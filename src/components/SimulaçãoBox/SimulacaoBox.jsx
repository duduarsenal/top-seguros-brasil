import {
  BsFire,
  BsFillBuildingFill,
  BsWind,
  BsPeopleFill,
  BsLightningFill,
  BsShieldFill,
} from "react-icons/bs";

import { Listbox } from "@headlessui/react";

import { useEffect, useState } from "react";

export default function SimulacaoBox(props) {
  const [selectedPrice, setSelectedPrice] = useState(props.priceList[0]);
  const [selectedPlan, setSelectedPlan] = useState("Assinatura");

  useEffect(() => {
    props.pricesTotal[props.index] = { value: selectedPrice.text, assinatura: selectedPlan, secure: props.id};
    console.log(props.pricesTotal);
  }, [selectedPrice, selectedPlan])

  return (
    <section className="flex flex-col gap-4 p-3 items-center w-max min-w-[20rem] h-max bg-light-green-opacity rounded-lg">
      <div className="w-full flex flex-col gap-2 items-center">
        <BsFire className="text-[3rem]" />
        <p className="text-[1.05rem] font-[500]">{props.title}</p>
      </div>

      <div className="relative flex gap-1 w-full h-max">
        <div className="w-[65%]">
          <Listbox value={selectedPrice} onChange={setSelectedPrice}>
            <Listbox.Button className="flex h-full w-full p-2 bg-white border border-gray-500 rounded-tr-md rounded-tl-md">
              {selectedPrice.text}
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 bg-white border-r border-l border-b border-gray-500 rounded-bl-md rounded-br-md w-[63.5%] scale-[1.005]">
              {props.priceList.map((price, index) => (
                <Listbox.Option
                  key={index}
                  value={price}
                  disabled={false}
                  className="p-2 hover:bg-light-green-opacity cursor-pointer"
                >
                  {price.text}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </div>
        <div className="w-[35%]">
          <Listbox value={selectedPlan} onChange={setSelectedPlan}>
            <Listbox.Button className="flex h-full w-full p-2 bg-white border border-gray-500 rounded-tr-md rounded-tl-md">
              {selectedPlan}
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 bg-white border-r border-l border-b border-gray-500 rounded-bl-md rounded-br-md w-[35%] scale-[1.005]">
                <Listbox.Option value="Mensal" className="p-2 hover:bg-light-green-opacity cursor-pointer" >
                  Mensal
                </Listbox.Option>
                <Listbox.Option value="Anual" className="p-2 hover:bg-light-green-opacity cursor-pointer" >
                  Anual
                </Listbox.Option>
            </Listbox.Options>
          </Listbox>
        </div>
      </div>
      <div className="bg-white border border-gray-500 rounded-md px-4 py-1 h-max w-full text-center">
        <p>
          <span className="text-[1.1rem]">{selectedPlan == "Anual" ? "12x de " : ""}</span>
          <span className="text-[1.4rem] tracking-tighter font-[500]">        
            {selectedPlan == "Mensal" ?
            parseFloat(selectedPrice.value)
            ? ((parseFloat(selectedPrice.value) / props.numberOfMonths) * props.sinistroTax)
              .toLocaleString("pt-BR", { style: "currency", currency: "BRL", }) : "R$0,00" 
            : selectedPlan == "Anual" ? ((parseFloat(selectedPrice.value*0.90) / props.numberOfMonths) * props.sinistroTax)
            .toLocaleString("pt-BR", { style: "currency", currency: "BRL", }) : "R$0,00"}
          </span> 
          <span className="text-[1.1rem]">{selectedPlan == "Mensal" ? " por mês" : selectedPlan == "Anual" ? ", por ano" : ""}</span>
        </p>
      </div>
    </section>
  );
}
