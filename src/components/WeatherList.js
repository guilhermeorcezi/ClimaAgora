import React, { useContext } from 'react';
import { WeatherContext } from './WeatherContext';
import List from '../styles/List';
import Empty from '../styles/Empty';
import { MdLocationOn } from 'react-icons/md/index.esm';
import { FaTemperatureLow } from 'react-icons/fa';
import { GiThermometerHot } from 'react-icons/gi';
import { WiHumidity } from 'react-icons/wi';

const WeatherList = () => {
	const { cityWeather } = useContext(WeatherContext);
	return cityWeather ? (
		<List>
			<li>
				<strong>
					Localização <MdLocationOn size={24} color="#114b70" />
				</strong>
				<hr />
				<p>{cityWeather.name}</p>
			</li>
			<li>
				<strong>
					Temperatura <FaTemperatureLow size={24} color="#114b70" />
				</strong>
				<hr />
				<p>{cityWeather.temp}°</p>
			</li>
			<li>
				<strong>
					Sensação Térmica <GiThermometerHot size={30} color="#114b70" />
				</strong>
				<hr />
				<p>{cityWeather.feels_like}°</p>
			</li>
			<li>
				<strong>
					Umidade <WiHumidity size={32} color="#114b70" />{' '}
				</strong>
				<hr />
				<p>{cityWeather.humidity}%</p>
			</li>
		</List>
	) : (
		<Empty>Procure por uma cidade</Empty>
	);
};

export default WeatherList;
