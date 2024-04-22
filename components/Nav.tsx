import Image from "next/image"
import logo from "../public/Logo list.png"
import { ImSearch } from "react-icons/im";
import "../public/styles/Nav.css";
import { CiViewList } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { FaHistory } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { FaListCheck } from "react-icons/fa6";

import { FaRegCalendarAlt } from "react-icons/fa";



export default function Nav() {
    return (
        <div className="header-container">
            <nav className="header-navigation justify-center items-center">
                    <Image  src={logo} alt="" className="rounded-full items-center justify-center" height={70} width={70}/>  
                
                <div className="search-navigation">
                    {<ImSearch className="text-white"/> }
                        
                    <input type="text" placeholder="o que voce deseja hoje" />
                </div>
                <ul className="header-list">
                    <li><FaListCheck/> <a href="">Fazer lista</a></li>
                    <li><FaHistory/><a href="">Historico de lista</a></li>
                    <li><MdCategory/><a href="">Categoria</a></li>
                    <li><FaRegCalendarAlt/><a href="">Calendario</a></li>
                    <li><MdAccountCircle/><a href="">conta</a></li>
                </ul>
            </nav>
        </div>
    )
}