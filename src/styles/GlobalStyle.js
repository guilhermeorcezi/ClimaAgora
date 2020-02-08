import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

html,body,#root{
    min-height:100%;
}

html,input,button{
    font-family:'Roboto',sans-serif;
}

body {
	-webkit-font-smoothing: antialised !important;
	background: rgb(11,173,189);
    background: linear-gradient(0deg, rgba(11,173,189,1) 0%, rgba(0,97,249,1) 100%);
}

ul{
	list-decoration:none;
    list-style: none;
    display:grid
	flex: 1;
}

`;
