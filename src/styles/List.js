import styled from 'styled-components';

const List = styled.ul`
	li {
		flex-direction: column;
		margin-bottom: 30px;
		padding-bottom: 20px;
	}

	strong {
		font-size: 24px;
		color: #114b70;
	}

	p {
		font-size: 18px;
		color: #666;
	}

	hr {
		border: 1px solid #114b70;
		margin: 5px 0;
	}
`;
export default List;
