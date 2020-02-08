import styled from 'styled-components';

const Form = styled.form`
    margin-bottom:50px;

	input {
		margin-right: 10px;
		height: 48px;
		padding: 15px;
		border: 0;
		border-bottom: 1px solid rgba(0, 97, 249, 1);
		font-size: 16px;
		color: #666;
	}

	button {
		padding: 5px 15px;
		border: 0;
		height: 48px;
		cursor: pointer;
		background-color: rgba(0, 97, 249, 1);
		color: #fff;
    }
    
    button:hover{
        background-color:rgb(5, 131, 221);
        transition: 1s ease-in;
    }
`;

export default Form;
