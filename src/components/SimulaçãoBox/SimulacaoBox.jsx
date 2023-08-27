import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import {
  BsFire,
  BsFillBuildingFill,
  BsWind,
  BsPeopleFill,
  BsLightningFill,
  BsShieldFill,
} from "react-icons/bs";

export default function SimulacaoBox() {

  
  return (
    <section className="flex flex-col gap-4 p-4 items-center w-max min-w-[20rem] h-max bg-light-green-opacity rounded-lg">
      <div className="w-full flex flex-col gap-2 items-center">
        <BsFire className="text-[3rem]" />
        <p className="text-[1.05rem] font-[500]">Incêndio, Raio e Explosão</p>
      </div>

      <FormControl fullWidth>
        <InputLabel>Escolha um Valor</InputLabel>
        <Select
            label="Escolha um Valor"
        >
          <MenuItem value={0}>R$10.000</MenuItem>
          <MenuItem value={1}>R$50.000</MenuItem>
          <MenuItem value={2}>R$150.000</MenuItem>
          <MenuItem value={3}>R$500.000</MenuItem>
        </Select>
      </FormControl>
      <p className="border border-gray-500 rounded-md px-4 py-2 w-full text-center">Mensalidade: R$10.500</p>

      {/* <div className="w-full flex flex-col gap-2 items-center">
                <select name="securesValues" className="w-full border-2 rounded-md border-black appearance-none p-1 text-[1.05rem] outline-none">
                    <option value="0" selected>R$0</option>
                    <option value="100">R$100</option>
                    <option value="10000">R$10.000</option>
                    <option value="20000">R$20.000</option>
                    <option value="300000">R$300.000</option>
                </select>
            </div> */}
    </section>
  );
}
