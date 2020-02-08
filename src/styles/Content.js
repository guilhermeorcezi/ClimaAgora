import styled from 'styled-components';

const Content = styled.div`
	background: #fff;
	height: 600px;
	max-height: 100%;
	border-radius: 4px;
	-webkit-box-shadow: 0px 6px 5px -3px rgba(92, 92, 92, 1);
	-moz-box-shadow: 0px 6px 5px -3px rgba(92, 92, 92, 1);
	box-shadow: 0px 6px 5px -3px rgba(92, 92, 92, 1);
	padding: 50px 100px;

	@media (max-width: 1024px) {
		padding: 0;
		display: grid;
		grid-template-columns: 1fr;
	}
`;

export default Content;
