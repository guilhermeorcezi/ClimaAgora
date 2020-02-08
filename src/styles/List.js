import styled from 'styled-components';

const List = styled.ul`
	li {
		flex-direction: column;
        margin-bottom: 100px;
        padding-bottom:20px;
        border-bottom: 1px solid #114b70;
	}

	strong {
		font-size: 24px;
		color: #114b70;
	}

	p {
        font-size: 16px;
        color:#666;
	}
`;
export default List;
