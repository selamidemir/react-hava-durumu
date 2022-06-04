import { useContext, createContext, useState, useEffect } from "react";
import axios from "axios";

import CITIES from "../assets/cities_of_turkey";
import { API_URL, API_KEY } from "../assets/constants";

const CityContext = createContext();


export const CityProvider = ({ children }) => {

    const [city, setCity] = useState(41);
    const [weather, setWeather] = useState("");

    const values = { city, setCity, weather, setWeather };

    useEffect(() => {
        const cityInfo = CITIES.filter((c) => parseInt(c.id) === parseInt(city))
        let url = `${API_URL}lat=${cityInfo[0].latitude}&lon=${cityInfo[0].longitude}&lang=tr&key=${API_KEY}`;

        console.log(url)
        axios(url)
            .then((res) => setWeather(res.data))
            .catch((e) => console.log(e));

    }, [city]);

    return <CityContext.Provider value={values}>{children}</CityContext.Provider>
}

export const useCityContext = () => useContext(CityContext);
