import { useState } from 'react'
import { createContainer } from 'unstated-next'

import { AUTHENTICATED_KEY } from '../common/constant'
import axiosInstance from '../common/utils/axios/axiosInstance'
import fetchLocalStorage from '../common/utils/localStorage'
import { DEFAULT_LIMIT, DEFAULT_OFFSET } from './const'
import { EMPLOYEE_URL, LOGIN_URL } from '../routes/constant'

const useController = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [errorFetch, setErrorFetch] = useState('')
    const [listData, setListData] = useState([])
    const [offset, setOffset] = useState(DEFAULT_OFFSET)

    const signIn = ({ username, password }, history) => {
        setIsLoading(true)
        setErrorFetch('')

        return axiosInstance.post('/auth', { username, password }).then((response) => {
            const { authenticated = false } = response.data

            if (authenticated) {
                fetchLocalStorage.set(AUTHENTICATED_KEY, { authenticated })
                history.push(EMPLOYEE_URL)
            }
        }).catch((error) => {
            console.log("TCL: signIn -> error", error)
            setErrorFetch('Your username or password not valid, Please try again!')
            return null
        }).finally(() => {
            setIsLoading(false)
        })
    }

    const checkLogin = () => {
        const { authenticated = false } = fetchLocalStorage.get(AUTHENTICATED_KEY)
        return authenticated
    }

    const checkRedirect = (history) => {
        const isLogin = checkLogin()
        if (isLogin) {
            history.push(EMPLOYEE_URL)
            return
        }

        history.push(LOGIN_URL)
    }

    const getEmployees = (newOffset = offset, opts = {}) => {

        if (!checkLogin()) return

        setIsLoading(true)
        setErrorFetch('')

        return axiosInstance.get('/data', { offset: newOffset, limit: DEFAULT_LIMIT }).then((response) => {
            console.log("TCL: getEmployees -> response", response)
            const { data } = response
            setListData(prev => [...prev, ...data])
        }).catch((error) => {
            console.log("TCL: signIn -> error", error)
            setErrorFetch('Your username or password not valid, Please try again!')
            return null
        }).finally(() => {
            setIsLoading(false)
            if (opts.target) {
                opts.target.scrollTop = opts.scrollHeight
            }
        })
    }

    const loadMoreItem = (opts) => {
        setOffset(prev => prev + 1)
        getEmployees(offset + 1, { ...opts })
    }

    const resetTextError = () => {
        setErrorFetch('')
    }

    return { signIn, isLoading, errorFetch, checkLogin, checkRedirect, getEmployees, listData, loadMoreItem, resetTextError }
}

export default createContainer(useController)