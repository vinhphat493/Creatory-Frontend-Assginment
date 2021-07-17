import React from 'react'
import { EMPLOYEE_URL, LOGIN_URL } from './constant'

const Login = React.lazy(() => import('../modules/user/login/Login'))
const Employee = React.lazy(() => import('../modules/employee'))

export const routes = [
    {
        exact: true,
        path: LOGIN_URL,
        Component: Login,
    },
    {
        exact: true,
        path: EMPLOYEE_URL,
        Component: Employee,
    },
    {
        path: "/",
        exact: false,
        redirect: "/employees",
        Component: Employee,
    },
]