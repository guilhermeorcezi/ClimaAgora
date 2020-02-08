import React from 'react';
import Container from '../styles/Container';
import Aside from '../styles/Aside';
import Content from '../styles/Content';
import WeatherContextProvider from './WeatherContext';
import WeatherForm from './WeatherForm';
import WeatherList from './WeatherList';

export default function components() {
	return (
		<WeatherContextProvider>
			<Container>
				<Aside>
					<strong>Clima Agora</strong>
					<p>
						Descubra a temperatura e as condições climáticas atuais de qualquer
						cidade.
					</p>
				</Aside>
				<Content>
					<WeatherForm></WeatherForm>
					<WeatherList></WeatherList>
				</Content>
			</Container>
		</WeatherContextProvider>
	);
}
