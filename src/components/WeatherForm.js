import React, { useContext, useState } from 'react';
import { WeatherContext } from './WeatherContext';
import Form from '../styles/Form';

const WeatherForm = () => {
	const { addCity } = useContext(WeatherContext);
	const [city, setCity] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();

		addCity(city);
		setCity('');
	}

	return (
		<Form onSubmit={handleSubmit}>
			<input
				type="text"
				placeholder="Digitar cidade"
				value={city}
				onChange={(e) => setCity(e.target.value)}
				required
			/>
			<button>Verificar</button>
		</Form>
	);
};

export default WeatherForm;
