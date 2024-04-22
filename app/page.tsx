import Image from "next/image";
import Index from "../components/Index";
import Button from "@/components/Button";
import logo from "../public/Logo list.png"
import Head from "next/head";

export default function Home () {
  return (
    <div style={{display:"flex"}} >
      {/* <Head>
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      </Head> */}
    <Index/>
    
    {/* <Input  hasIconLeft hasIconRight placeholder="informe seu melhor email/> */}
    <div className="btns">
    {/* <p className="items-center"> <Image width="200" height="200" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'/> <g fill='none' stroke='%236C22A6' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M10 10h180H10z'/><path d='M50 50h100v100H50z'/><path d='M80 80h40v40H80z'/></g></svg>" alt={""}> </p> */}
      <Image src={logo} alt="" className="w-50 h-22 " height={300} width={300}/>
      <Button title="login"  />
      <Button title="cadastrar"/>
      
    </div>

    
    </div>
  );
}

