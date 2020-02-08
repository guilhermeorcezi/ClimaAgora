import React from 'react';

import Container from '../styles/Container';
import Aside from '../styles/Aside';
import Content from '../styles/Content';
import Form from '../styles/Form';
import List from '../styles/List';

export default function components() {
	return (
		<>
			<Container>
				<Aside>
					<strong>Clima Agora</strong>
					<p>
						Descubra a temperatura e as condições climáticas atuais de qualquer
						cidade.
					</p>
				</Aside>
				<Content>
					<Form>
						<input type="text" placeholder="Digitar cidade" />
						<button>Verificar</button>
					</Form>
					<List>
						<li>
							<strong>Localização</strong>
							<p>São Paulo</p>
						</li>
						<li>
							<strong>Temperatura</strong>
							<p>27°C</p>
						</li>
						<li>
							<strong>Umidade</strong>
							<p>96%</p>
						</li>
					</List>
				</Content>
			</Container>
		</>
	);
}
