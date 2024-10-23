import { ChangeEvent } from "react"
import { useApi } from "./hooks/useApi";
import { useCiudad } from "./hooks/useCiudad";
import { useDataClima } from "./hooks/useDataClima";


export const WheatherApp = () => {

    const {urlBase, API_KEY, difCelvin} = useApi()

    const { ciudad, handleChangeCity } =  useCiudad()

    const { dataClima, fetchClima } = useDataClima(urlBase, ciudad, API_KEY)
    


    const handleSubmit = (event: ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (ciudad.length > 0) fetchClima();
    }

    return (
        <>
            <div className="container">
                <h1>Aplicacion del Clima</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        value={ciudad}
                        onChange={handleChangeCity}
                        placeholder="Ingresa una ciudad"
                    />
                    <button type="submit">Buscar</button>
                </form>
                {
                    dataClima && (
                        <div>
                            <h2>{dataClima.name}</h2>
                            <p>Temperatura: {Math.round(dataClima.main.temp - difCelvin)}°C</p>
                            <p>condicion meteorologica: {dataClima.weather[0].description}</p>
                            <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                        </div>
                    )
                }
            </div>

        </>
    )
}
