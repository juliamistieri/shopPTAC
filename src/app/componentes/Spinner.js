import Image from "next/image";
import style from "./spinner.module.css";

export default function Spinner() {
    return (
        <div className={style.centralizar}>
            <Image width={100} height={100} alt="" src={"/wind-toy.svg"}/>
        </div>
    )
}