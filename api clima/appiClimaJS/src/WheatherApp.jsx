import { useState } from "react";

export const WheatherApp = () => {

    const urlBase = `https://api.openweathermap.org/data/2.5/weather`;
    const API_KEY = `daa781742f3b486d8c5ef09a23055deb`;
    const difCelvin = 273.15;

    const [ciudad, setCiudad] = useState("");
    const [dataClima, setDataClima] = useState(null);

    const handleCambioCiudad = (e) => {
        setCiudad(e.target.value);
    };
    
    const onSubmit = (e) => {
        e.preventDefault();
        if (ciudad.length > 0) fetchClima();
    };
    
        const fetchClima = async () => {
            try {
                // Corrección en la URL: agregamos q= correctamente
                const response = await fetch(`${urlBase}?q=${ciudad}&appid=${API_KEY}`); //&units=metric&lang=es
                const data = await response.json();
                console.log(data)
                setDataClima(data);
            } catch (err) {
                console.error('Ocurrió el siguiente problema: ', err);
            }
        };

    return (
        <div className="container">
            <h1>Aplicación de Clima</h1>
            <form onSubmit={onSubmit}>
                <input 
                    type="text"
                    value={ciudad}
                    onChange={handleCambioCiudad}
                    placeholder="Ingresa una ciudad"
                />
                <button type="submit">Buscar</button>
            </form>
            {
                dataClima && (
                    <div>
                        <h2>{dataClima.name}</h2>
                        <p>Temperatura: {parseInt(dataClima?.main?.temp - difCelvin)}°C</p>
                        <p>condicion meteorologica: {dataClima.weather[0].description}</p>
                        <img src={`https://openweathermap.org/img/wn/${dataClima.weather[0].icon}@2x.png`} alt="" />
                    </div>
                )
            }
        </div>
    );
};
