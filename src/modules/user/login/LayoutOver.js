import React, { useMemo } from 'react'
import PropTypes from 'prop-types';

import { Overlay, OverlayContainer, OverlayPanel } from './style'
import Button from '../../../common/button/Button'
import { DATA_LAYOUT } from './const'
import { OVERLAY_ACTIVE, SIGN_IN, SIGN_UP } from '../../../common/constant'

const LayoutOverlay = ({ layoutAction, handleChangeAction }) => {
    const data = useMemo(() => DATA_LAYOUT[layoutAction], [layoutAction])
    const { title, content, btnTxt, classList } = data

    const handleClick = () => {
        const newAction = layoutAction === SIGN_IN ? SIGN_UP : SIGN_IN
        handleChangeAction(newAction)
    }

    return (
        <OverlayContainer className={layoutAction === SIGN_UP && OVERLAY_ACTIVE}>
            <Overlay className="overlay">
                <OverlayPanel className={classList}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                    <Button variant="outline" onClick={handleClick}>{btnTxt}</Button>
                </OverlayPanel>
            </Overlay>
        </OverlayContainer>
    )
}

LayoutOverlay.propTypes = {
    layoutAction: PropTypes.string,
    handleChangeAction: PropTypes.func
};

LayoutOverlay.defaultProps = {
    layoutAction: SIGN_IN,
    handleChangeAction: () => { }
}

export default React.memo(LayoutOverlay)