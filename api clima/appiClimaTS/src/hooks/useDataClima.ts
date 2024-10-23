import { useState } from "react";
import { IClimaData } from "../interface/IClimaData";

export const useDataClima = (url: string, ciudad: string, key: string) => {

    const [dataClima, setDataClima] = useState<IClimaData | null>(null);
    
    const fetchClima = async () => {
        try {
            const response = await fetch(`${url}?q=${ciudad}&appid=${key}`)
            const data = await response.json();
            console.log(data)
            setDataClima(data)
        } catch (err) {
            console.error("Ocurrio el siguiente problema: ", err)
        }
    }


    return {
        dataClima,
        fetchClima
    }
}
