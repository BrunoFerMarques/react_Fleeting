import Modal from './Modal'
import { useState } from "react";


export default function Button(){
    const[open, setOpen] = useState<boolean>(false)

    return(
    <div className="text-center">
        <button className= "cursor-pointer rounded-md bg-blue-700 text-white"
        onClick={()=> setOpen(!open)}>
            Criar+
            {open ? <Modal></Modal> : ""}
        </button>
    </div>
    )
}
    