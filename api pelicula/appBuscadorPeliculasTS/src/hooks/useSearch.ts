import { ChangeEvent, useState } from "react";

export const useSearch = () => {

    const [busqueda, setBusqueda] = useState<string>("");

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setBusqueda(event.target.value)
    }

    return {
        busqueda,
        handleInputChange
    }
}
