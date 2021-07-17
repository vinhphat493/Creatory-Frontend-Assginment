import styled, { keyframes } from "styled-components";
import { OVERLAY_ACTIVE, SIGN_IN, SIGN_UP } from "../../../common/constant";

const LoginLayout = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, .6);
`

const LoginContainer = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    width: 830px;
    max-width: 100%;
    height: 480px;
    border-radius: 10px;
  	box-shadow: 0 14px 28px rgba(0,0,0,0.25), 
			0 10px 10px rgba(0,0,0,0.22);
	overflow: hidden;
    font-family: 'Roboto', sans-serif;
`

const show = keyframes`
    0%, 49.99% {
        opacity: 0;
        z-index: 1;
    }

    50%, 100% {
        opacity: 1;
        z-index: 5;
	}
`

const FormContainer = styled.div`
    position: absolute;
	top: 0;
	height: 100%;
	transition: all 0.6s ease-in-out;
    width: 50%;

    &.${SIGN_IN} {
        left: 0;
        width: 50%;
        z-index: 2;
    }

    &.${SIGN_UP} {
        left: 0;
        width: 50%;
        opacity: 0;
        z-index: 1;
        transform: translateX(100%);
        opacity: 1;
        z-index: 5;
        animation: ${show} 0.6s;
    }
`

const Form = styled.form`
    background-color: #fff;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 50px;
	height: 100%;
	text-align: center;
`

const InputWrapper = styled.div`
    position: relative;
    width: 100%;
`

const Input = styled.input`
    background-color: #eee;
	border: none;
	padding: 12px 15px;
	margin: 8px 0;
	width: 100%;

    ::-webkit-input-placeholder {
        text-transform: capitalize;
    }

    :-ms-input-placeholder {
        text-transform: capitalize;
    }

    ::placeholder {
        text-transform: capitalize;
    }
`

const InputError = styled.span`
    color: red;
    font-size: 9px;
    position: absolute;
    bottom: -2px;
    left: 0;

    &.global {
        position: static;
    }
`

const OverlayContainer = styled.div`
    position: absolute;
	top: 0;
	left: 50%;
	width: 50%;
	height: 100%;
	overflow: hidden;
	transition: transform 0.6s ease-in-out;
	z-index: 100;

    &.${OVERLAY_ACTIVE} {
        transform: translateX(-100%);

        .overlay {
            transform: translateX(50%);
        }

        .overlay_right {
	        transform: translateX(20%);
        }

        .overlay_left {
	        transform: translateX(0);
        }
    }
`

const Overlay = styled.div`
    background: #FF416C;
	background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);
	background: linear-gradient(to right, #FF4B2B, #FF416C);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: 0 0;
	color: #FFFFFF;
	position: relative;
	left: -100%;
	height: 100%;
	width: 200%;
  	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

    ${props => props.theme.isSignUp && `transform: translateX(-100%);`}

`

const OverlayPanel = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	padding: 0 40px;
	text-align: center;
	top: 0;
	height: 100%;
	width: 50%;
	transform: translateX(0);
	transition: transform 0.6s ease-in-out;

    &.overlay_left {
	    transform: translateX(-20%);
    }

    &.overlay_right {
        right: 0;
        transform: translateX(0);
    }
`

export { LoginLayout, LoginContainer, FormContainer, Form, InputWrapper, Input, InputError, OverlayContainer, Overlay, OverlayPanel }