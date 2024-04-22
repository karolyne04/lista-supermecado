import Image from "next/image"
import  "../public/styles/Index.css"
export default function Index() {

    return (
        <div className="main-1">
            <Image src="/Groceries.svg" alt="ilu" width={1000} height={1000} priority />
        </div>
    )
}