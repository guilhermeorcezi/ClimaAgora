import React, { useState, createContext} from 'react';
import axios from 'axios';

export const WeatherContext = createContext();

const WeatherContextProvider = (props) => {
	const [cityWeather, setCityWeather] = useState('');

	async function addCity(city) {
		try {
			const response = await axios.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city},br&appid=531a125eabbef01c0a15891c5e5f73b9&units=metric`
			);

			const {
				name,
				main: { temp, feels_like, humidity }
			} = response.data;

			await setCityWeather({ name, temp, feels_like, humidity });
		} catch (er) {
			console.log(er);
		}
	}

	return (
		<WeatherContext.Provider value={{ cityWeather, addCity }}>
			{props.children}
		</WeatherContext.Provider>
	);
};

export default WeatherContextProvider;
