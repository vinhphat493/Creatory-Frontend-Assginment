import { DATE_FORMAT, DATE_OPTIONS, EPSILON_SCROLL_BOTTOM, TIME_FORMAT_GROUP } from "../constant"

export const validStatus = (status) => {
    return status < 401
}

export const formatDate = (time) => {
    const newDate = new Date(time.replace(/\s/g, ''))
        .toLocaleDateString(DATE_FORMAT, DATE_OPTIONS)
        .match(TIME_FORMAT_GROUP)

    return { date: newDate[1], time: newDate[2] }
}

export const checkScrollToBottom = (event) => {
    const { scrollTop, clientHeight, scrollHeight } = event.target
    return scrollTop + clientHeight + EPSILON_SCROLL_BOTTOM >= scrollHeight
}