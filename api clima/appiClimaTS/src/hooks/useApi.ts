export const useApi = () => {

    const urlBase: string = `https://api.openweathermap.org/data/2.5/weather`;
    const API_KEY: string = `daa781742f3b486d8c5ef09a23055deb`;
    const difCelvin: number = 273.15;

    return {
        urlBase,
        API_KEY,
        difCelvin
    }
}
