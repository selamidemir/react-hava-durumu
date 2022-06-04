/* List of Cities of Türkiye in A Select Box */

import CITIES from '../assets/cities_of_turkey';
import React from 'react';
import { useCityContext } from '../context/CityContext';

function Cities() {
    const {setCity} = useCityContext();

    function cityChanged(e) {
        setCity(e.target.value);
    }

    return (
        <div className='cities'>
            <form>
                <select name='cities' onChange={cityChanged} defaultValue='41'>
                    {
                        CITIES.map((city) => <option key={`city_id_${city.id}`} value={city.id}>{city.name}</option>)
                    }
                </select>
            </form>
        </div>
    )
}

export default Cities;