import { title } from "process";
import "../public/styles/Button.css"
// import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base';

type Pros ={
    title: string;
    // onClick: Function;
};
export default function Button({ title}: Pros)  {
    return (

        <button className="btn-primary"> {title}</button>

    )
};