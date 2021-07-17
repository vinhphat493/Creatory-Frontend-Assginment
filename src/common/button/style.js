import styled from "styled-components";

export const StyledButton = styled.button`
	border-radius: 20px;
	border: 1px solid #FF4B2B;
	background-color: #FF4B2B;
	color: #FFFFFF;
	font-size: 12px;
	font-weight: bold;
	padding: 12px 45px;
	letter-spacing: 1px;
	text-transform: uppercase;
	transition: transform 80ms ease-in;
	cursor: pointer;

    &.outline {
        background-color: transparent;
        border-color: #FFFFFF;
    }

    &:active {
	    transform: scale(0.95);
    }

    &:focus {
	    outline: none;
    }

	&:hover {
	    box-shadow: inset 0px 0px 150px 200px rgba(0,0,0,0.1)
    }
`