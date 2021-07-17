import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

import FromLogin from './FormLogin'
import LayoutOver from './LayoutOver'
import { LoginContainer, LoginLayout } from './style'
import { SIGN_IN } from '../../../common/constant'
import ProductController from '../../../provider'

const Login = () => {
    const [layoutAction, setLayoutAction] = useState(SIGN_IN)
    const history = useHistory()
    const { checkRedirect } = ProductController.useContainer()

    useEffect(() => {
        checkRedirect(history)
        // eslint-disable-next-line
    }, [])

    const handleChangeAction = (newAction) => {
        setLayoutAction(newAction)
    }

    return (
        <LoginLayout id="login">
            <LoginContainer>
                <FromLogin layoutAction={layoutAction} />
                <LayoutOver layoutAction={layoutAction} handleChangeAction={handleChangeAction} />
            </LoginContainer>
        </LoginLayout>
    )
}

export default React.memo(Login)