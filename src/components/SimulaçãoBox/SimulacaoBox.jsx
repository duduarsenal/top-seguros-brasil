import { BsFire, BsFillBuildingFill, BsWind, BsPeopleFill, BsLightningFill, BsShieldFill } from "react-icons/bs";

import { Listbox } from "@headlessui/react";

import { useEffect, useState } from "react";


export default function SimulacaoBox(props) {
  // const pricesList = (props.priceList);
  const [selectedPrice, setSelectedPrice] = useState(props.priceList[0]);

  // useEffect(() => {
  //   console.log(selectedPrice)
  //   console.log((parseFloat(selectedPrice.value) / props.numberOfMonths) * props.sinistroTax)
  // }, [selectedPrice])

  return (
    <section className="flex flex-col gap-4 p-4 items-center w-max min-w-[20rem] h-max bg-light-green-opacity rounded-lg">
      <div className="w-full flex flex-col gap-2 items-center">
        <BsFire className="text-[3rem]" />
        <p className="text-[1.05rem] font-[500]">{props.title}</p>
      </div>
      <div className="relative bg-white border border-gray-500 rounded-tr-md rounded-tl-md w-full h-max">
        <Listbox value={selectedPrice} onChange={setSelectedPrice}>
          <Listbox.Button className="flex h-full w-full p-2">{selectedPrice.text}</Listbox.Button>
          <Listbox.Options className="absolute z-10 bg-white border-r border-l border-b border-gray-500 rounded-bl-md rounded-br-md w-full scale-[1.005]">
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
      <p className="bg-white border border-gray-500 rounded-md px-4 py-2 w-full text-center">
        Mensalidade: {parseFloat(selectedPrice.value) ? ' 12x de ' +
        ((parseFloat(selectedPrice.value) / props.numberOfMonths) * props.sinistroTax)
          .toLocaleString('pt-BR', {
            style: "currency",
            currency: "BRL"
          })
         : "R$0,00"}
      </p>
    </section>
  );
}