import styled from 'styled-components';
import bg from '../assets/bg.png';

const Aside = styled.div`
	background: url(${bg}) no-repeat;
	background-size: cover;
	height: 600px;
	max-height: 100%;
	border-radius: 4px 0 0 4px;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	-webkit-box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);
	-moz-box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);
	box-shadow: -1px 6px 14px -3px rgba(92, 92, 92, 1);

	p,
	strong {
		color: #114b70;
	}
	strong {
		font-size: 42px;
	}

	p {
		text-align: center;
		font-size: 23px;
	}
`;

export default Aside;
