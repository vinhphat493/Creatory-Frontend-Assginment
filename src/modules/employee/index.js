import React, { useCallback, useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import ProductController from '../../provider'
import { ACTIVE, FULL_NAME, HEADER_EMPLOYEE, ID, REGISTERED } from './const'
import { EmployeeWrapper, Container, Row, Item, SubContent, Table } from './style'
import { checkScrollToBottom, formatDate } from '../../common/utils/func'


const Employee = () => {
    const history = useHistory()
    const { checkRedirect, getEmployees, listData, loadMoreItem } = ProductController.useContainer()

    useEffect(() => {
        checkRedirect(history)
        getEmployees()
        // eslint-disable-next-line
    }, [])

    const computedInfo = (row) => {
        const element = {}

        for (const property in HEADER_EMPLOYEE) {
            switch (property) {
                case ID:
                    element[property] = { content: row.id + 1 }
                    break;
                case FULL_NAME:
                    element[property] = { content: `${row.firstName} ${row.lastName}`, subContent: row.about }
                    break;
                case REGISTERED:
                    const { date, time } = formatDate(row[property])
                    element[property] = { content: date, subContent: time }
                    break;
                default:
                    element[property] = { content: row[property] }
                    break;
            }
        }
        return element
    }

    const renderInfo = useCallback((row) => {
        const info = computedInfo(row)

        return Object.keys(info).map((key, index) => {
            const { content, subContent = '' } = info[key]
            if (key === ACTIVE) {
                return (
                    <Item key={`${key}_${index}`} className='info_col status' data-label={HEADER_EMPLOYEE[key]}>
                        {content ?
                            <i className="fa fa-check-circle" aria-hidden="true"></i> :
                            <i className="fa fa-stop-circle-o" aria-hidden="true"></i>
                        }
                    </Item>
                )
            }
            return (
                <Item key={`${key}_${index}`} className='info_col' data-label={HEADER_EMPLOYEE[key]}>
                    {content}
                    {subContent && <SubContent>{subContent}</SubContent>}
                </Item>
            )
        })
    }, [])

    const renderRow = useCallback(() => {
        return <>
            <Row className="info_heading">
                {Object.keys(HEADER_EMPLOYEE).map((key) => {
                    return (
                        <Item key={key} className="info_col">
                            {HEADER_EMPLOYEE[key]}
                        </Item>
                    )
                })}
            </Row>
            {listData.map((element, index) => (
                <Row Row key={`${element.guid}_${index}`} className="info_row">
                    {renderInfo(element)}
                </Row>
            ))
            }
        </>
    }, [listData, renderInfo])

    const handleScroll = (event) => {
        const bottom = checkScrollToBottom(event)

        if (bottom) {
            const { scrollHeight } = event.target
            loadMoreItem({ target: event.target, scrollHeight })
        }
    }

    return (
        <EmployeeWrapper>
            <h1>Employees List</h1>

            <Container onScroll={handleScroll}>
                <Table>
                    {renderRow()}
                </Table>
            </Container>
        </EmployeeWrapper>
    )
}

export default React.memo(Employee)