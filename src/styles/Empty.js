import styled from 'styled-components';

const List = styled.h1`
	padding-bottom: 20px;
	color: rgb(121, 144, 158);
	padding: 130px 0 0 30px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		margin: 30px auto;
	}
`;
export default List;
