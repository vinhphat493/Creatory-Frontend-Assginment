import React, { useCallback, useMemo, useState } from 'react'
import PropTypes from 'prop-types';

import Button from '../../../common/button/Button'
import { DATA_FORM, DEFAULT_USER_DATA, MESSAGE_ERROR_PASSWORD, MESSAGE_ERROR_USER_NAME } from './const'
import { FormContainer, Form, Input, InputError, InputWrapper } from './style'
import { INPUT_NAME, INPUT_PASSWORD, INPUT_REPEAT_PASSWORD, SIGN_IN } from '../../../common/constant';
import ProductController from '../../../provider/index'
import { useHistory } from 'react-router-dom';

const FormLogin = ({ layoutAction }) => {
    const data = useMemo(() => DATA_FORM[layoutAction], [layoutAction])
    const { title, btnTxt, link, inputs } = data

    const [user, setUser] = useState(DEFAULT_USER_DATA)
    const [error, setError] = useState({})

    const { signIn, errorFetch, resetTextError } = ProductController.useContainer()
    const history = useHistory()

    const handleChange = useCallback((event, element) => {
        const value = event.target.value
        setUser(prev => ({ ...prev, [element]: value }))
    }, [])

    const renderInput = useCallback(() => inputs.map(element => {
        const typeInput = [INPUT_PASSWORD, INPUT_REPEAT_PASSWORD].includes(element) ? INPUT_PASSWORD : 'text'
        return (
            <InputWrapper key={element}>
                <Input
                    type={typeInput}
                    placeholder={element}
                    value={user[element]}
                    onChange={(event) => handleChange(event, element)}
                    onKeyUp={() => setError(prev => ({ ...prev, [element]: '' }))} />
                <InputError>{error[element]}</InputError>
            </InputWrapper>
        )
    }), [inputs, handleChange, user, error])

    const checkValidForm = () => {
        let isValid = true

        if (!user[INPUT_NAME]) {
            isValid = false
            setError(prev => ({ ...prev, [INPUT_NAME]: MESSAGE_ERROR_USER_NAME }))
        }

        if (!user[INPUT_PASSWORD]) {
            isValid = false
            setError(prev => ({ ...prev, [INPUT_PASSWORD]: MESSAGE_ERROR_PASSWORD }))
        }

        return isValid
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        resetTextError()

        const isValid = checkValidForm()
        if (!isValid) return

        signIn(user, history)
    }

    return (
        <FormContainer className={layoutAction}>
            <Form action="#" onSubmit={handleSubmit}>
                <h1>{title}</h1>

                {renderInput()}

                <InputError className="global">{errorFetch}</InputError>

                <span style={{ margin: '10px' }}>{link}</span>

                <Button>{btnTxt}</Button>
            </Form>
        </FormContainer>
    )
}

FormLogin.propTypes = {
    layoutAction: PropTypes.string,
};

FormLogin.defaultProps = {
    layoutAction: SIGN_IN,
}

export default React.memo(FormLogin)