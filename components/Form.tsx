import '../public/styles/form.css'
import Button from './Button'

import { TfiEmail } from "react-icons/tfi";


export default function Form() {
    return (
        <>
        
        <div className="form-container">
            <h2>Cadrastro</h2>
            <label htmlFor="">Nome</label>
            <input  className='input-pri' type="text" />
            <label htmlFor="">Email <TfiEmail/></label>
            <input className='input-pri' type="text"  />
            <Button title='Salvar'/>
        </div>
        </>
    )
}