import styled from "styled-components";

const EmployeeWrapper = styled.div`
    width: 80%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
`

const Container = styled.div`
    width: 100%;
    max-width: 100%;
    margin-top: 20px;
    overflow: hidden auto;
    max-height: 85%;
`

const Table = styled.div`
    width: 100%;
    max-width: 100%;
    display: table;
    cursor: pointer;
    border: 1px solid #e5e5e5;

    .info_row:nth-child(odd) {
        background-color:#ddd;
    }

    .info_row:nth-child(even) {
        background-color:#fff;
    }

    @media (max-width:1023px) {
        border-width: 0;
        width: 100%;
        display: block;

        .info_row {
            &:nth-child(odd) {
                & > .info_col {
                    & + & {
                        border-top:solid 1px #ccc;
                    }
                }
            }

            &:nth-child(even) {
                & > .info_col {
                    & + & {
                        border-top:solid 1px #eee;
                    }
                }
            }
        }
    }
`

const Row = styled.ul`
    display:table-row;
    text-align: left;
    width: 100%;
    margin: 0;

    &.info_heading {
        cursor: default;
        .info_col {
            background-color:#444;
            color:#fff;
        }
    }

    @media (max-width:1023px) {
        border:solid 1px #ccc;
        display:block;
        list-style:none;
        margin:1em;
        padding:.5em 1em;
        width: 100%;

        &.info_heading {
            display: none;
        }
    }
`

const Item = styled.li`
    display:table-cell;
    padding:.5em 1em;
    max-width: 250px;
    vertical-align: middle;
    text-align: left;

    &.status {
        font-size: 20px;
        color: green;
        font-weight: bold;
        text-align: center;

        .fa-stop-circle-o {
            color: red;
        }
    }

    @media (max-width:1023px) {
        display:block;
        padding:.25em 0;
        max-width: 100%;

        &.status {
            text-align: left;
        }
        
        &:before {
            color:#000;
            content:attr(data-label);
            display:inline-block;
            font-size:75%;
            font-weight:bold;
            text-transform:capitalize;
            vertical-align:top;
            width:50%;
        }
    }
`

const SubContent = styled.div`
    text-overflow: ellipsis;
    font-size: 10px;
    color: #a9a9a9;
    white-space: nowrap;
    overflow: hidden;

    @media (max-width:1023px) {
        margin-left: auto;
        width: 50%;
    }
`

export { EmployeeWrapper, Container, Row, Item, SubContent, Table }