import styled from 'styled-components';

const Container = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	margin: 80px auto;
	border-radius: 4px;
	width: 1000px;
	max-width: 100%;
	background-color: #fff;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
	}
`;

export default Container;
