import "../public/styles/Input.css";

type Pros ={
    placeholder: "placeholder";
    type: string;
};
export default function Input({placeholder, type}: Pros) {
    return (
        
            <input className="input-pri" >{type} {placeholder}</input>
        

    )
}