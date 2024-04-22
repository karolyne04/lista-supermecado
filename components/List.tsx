import Button from "./Button";
import Link, {LinkProps} from "next/link";
import Nav from "./Nav";
import { usePathname } from "next/navigation";
import "../public/styles/List.css";
import { GiFruitBowl } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { GiSlicedBread } from "react-icons/gi";
import { MdCleanHands } from "react-icons/md";
import { Children } from "react";


export default function List() {
   
    return (
        <>
        <Nav/>
        <div className="list-container">
            <h2>lista sugerida</h2>
            
                <ul className="list-category">
                    <li>todos</li>
                    <li> <GiFruitBowl/></li>
                    <li> <TbMeat/>carne</li>
                    <li>Mercearia</li>
                    <li>Frios</li>
                    <li> <GiSlicedBread/> Padaria</li>
                    <li>
                        {/* <Link></Link> */}
                    </li>
                    <li>Laticínios</li>
                    <li><MdCleanHands/>Limpeza e higiene pessoal</li> 
                </ul>

            
            <div className="car-item">
                <p>banana</p>
                <input type="file" />
                <input type="datetime-local" />
                <input type="number" placeholder="valor unitario" />
                <div className="flex flex-col">
                    <Button title="-"/>
                    <input type="number" placeholder="quantidade em grmas ou quilo"/>
                    <Button title="+"/>
                </div>
            </div>
        </div>
        </>
    )
}