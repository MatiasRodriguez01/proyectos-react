import { ChangeEvent, useState } from "react";

export const useCiudad = () => {

    const [ciudad, setCiudad] = useState<string>("");
    
    const handleChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
        setCiudad(event.target.value)
    }
    
    return {
        ciudad,
        handleChangeCity
    }
}
