import { AiFillHome } from "react-icons/ai";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
} from "react-icons/ai";

import { BsAndroid2, BsApple } from "react-icons/bs";

import { ImLocation } from "react-icons/im";
import { FaHeadphonesAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { AiFillPhone } from "react-icons/ai";
import { BsFillPersonFill, BsExclamationCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="flex w-full items-center justify-evenly flex-wrap px-8 py-2 gap-4">
      <div className="footer 1 flex flex-wrap items-center gap-4">
        <div>
          <Link to="/" className="flex items-center text-[1.5rem]">
            <AiFillHome />
            <h2 className="font-[600] leading-none">TSB</h2>
          </Link>
          <div>
            <p>Nossas redes sociais</p>
            <div className="flex w-full justify-between text-[2.2rem]">
              <a href="https://facebook.com" target="_blank" className="hover:text-regular-green transition-all">
                <AiFillFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" className="hover:text-regular-green transition-all">
                <AiFillInstagram />
              </a>
              <a href="https://youtube.com" target="_blank" className="hover:text-regular-green transition-all">
                <AiFillYoutube />
              </a>
              <a href="https://twitter.com" target="_blank" className="hover:text-regular-green transition-all">
                <AiFillTwitterSquare />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div className="flex items-center border-2 border-black rounded-sm px-2">
            <BsAndroid2 />
            <div>
              <p>App top android</p>
              <h4>Android</h4>
            </div>
          </div>
          <div className="flex items-center border-2 border-black rounded-sm px-2">
            <BsApple />
            <div>
              <p>App top apple</p>
              <h4>apple</h4>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------- CONTATOS --------------------------------------------------*/}
      {/*----------------------------------------------- CONTATOS --------------------------------------------------*/}
      {/*----------------------------------------------- CONTATOS --------------------------------------------------*/}
      <div className="footer 2 flex flex-col gap-1">
        <h1 className="text-[1.5rem]">Contatos</h1>
        <div className="flex flex-wrap sm:gap-4">
          <div>
            <div className="flex items-center gap-1">
              <BsExclamationCircleFill />
              <p>Denúncia</p>
            </div>
            <div className="flex items-center gap-1">
              <ImLocation />
              <p>Endereço</p>
            </div>
            <div className="flex items-center gap-1">
              <IoIosMail />
              <p>E-mail</p>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <AiFillPhone />
              <p>SAC</p>
            </div>
            <div className="flex items-center gap-1">
              <FaHeadphonesAlt />
              <p>Ouvidoria</p>
            </div>
            <div className="flex items-center gap-1">
              <BsFillPersonFill />
              <p>Encontre um corretor</p>
            </div>
          </div>
        </div>
      </div>
      {/*----------------------------------------------- TRANSPARÊNCIA --------------------------------------------------*/}
      {/*----------------------------------------------- TRANSPARÊNCIA --------------------------------------------------*/}
      {/*----------------------------------------------- TRANSPARÊNCIA --------------------------------------------------*/}
      <div className="footer 3 flex flex-col gap-1">
        <h1 className="text-[1.5rem]">Transparência</h1>
        <div className="flex flex-wrap sm:gap-4">
          <div>
            <p>Quem somos</p>
            <p>Trabalhe Conosco</p>
            <p>Nosso Blog</p>
          </div>
          <div>
            <p>Termos de uso</p>
            <p>Dicas de Segurança</p>
            <p>Politicas de Privacidade</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
