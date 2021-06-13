import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	body{
		background: ${({theme}) => theme.body};
		transition:0.9s ease;
		color:${({theme})=>theme.text};
	}
	.todo-container{
		background: ${({theme}) => theme.card};
		transition:0.9s ease;
		margin:20px auto;
	}
	input{
		background: ${({theme}) => theme.card};
		transition:0.9s ease;
	}
	.heading{
		text-shadow:${({theme}) => theme.shadow};
		transition:0.9s ease;
	}

	@media(max-width: 800px){
		.heading{
			font-size:30px;
		}
	}
	
`;

export const lightTheme = {
	body:'#f1f1f1',
	text:'#141414',
	card:"#fff",
	shadow:"0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)",
	bgShadow:"0px 3px 12px rgb(0 0 0 / 20%)"
}

export const darkTheme = {
	body:'#141414',
	text:'#f1f1f1',
	card:"#242424",
	shadow:"0 1px 3px rgba(255, 255, 255, 0.12), 0 1px 2px rgba(255, 255, 255, 0.24)",
	bgShadow:"0px 3px 12px rgb(255 255 255 / 20%)"
}