import { INPUT_NAME, INPUT_PASSWORD, INPUT_REPEAT_PASSWORD, SIGN_IN, SIGN_UP } from "../../../common/constant";

export const DATA_LAYOUT = {
    [SIGN_UP]: {
        title: 'Hello, Friend!',
        content: 'Enter your personal details and start journey with us',
        btnTxt: 'Sign Up',
        classList: 'overlay_left'
    },
    [SIGN_IN]: {
        title: 'Welcome Back!',
        content: 'To keep connected with us please login with your personal info',
        btnTxt: 'Sign In',
        classList: 'overlay_right'
    }
}

export const DATA_FORM = {
    [SIGN_UP]: {
        title: 'Create Account',
        btnTxt: 'Sign Up',
        link: '',
        inputs: [INPUT_NAME, INPUT_PASSWORD, INPUT_REPEAT_PASSWORD]
    },
    [SIGN_IN]: {
        title: 'Sign in',
        btnTxt: 'Sign In',
        link: 'Forgot your password?',
        inputs: [INPUT_NAME, INPUT_PASSWORD]
    }
}

export const DEFAULT_USER_DATA = {
    [INPUT_NAME]: '',
    [INPUT_PASSWORD]: '',
    [INPUT_REPEAT_PASSWORD]: '',
}

export const MESSAGE_ERROR_USER_NAME = 'Username is a required field!'
export const MESSAGE_ERROR_PASSWORD = 'Password is a required field!'
