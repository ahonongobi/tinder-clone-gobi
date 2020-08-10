import React from 'react'
import './SwapeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay'
import CloseIcon from '@material-ui/icons/Close'
import StarRateIcon from '@material-ui/icons/StarRate'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FlashOnIcon from '@material-ui/icons/FlashOn'
import IconButton from '@material-ui/core/IconButton'

const SwapeButtons = () => {
    return (
        <div className="SwapeButtons">
             <IconButton className="SwapeButtons__repeat">
             <ReplayIcon fontSize="large" />
             </IconButton>
             <IconButton className="SwapeButtons__left" >
             <CloseIcon fontSize="large" />
             </IconButton>
             <IconButton className="SwapeButtons__star">
             <StarRateIcon fontSize="large" />
             </IconButton>
             <IconButton className="SwapeButtons__right">
             <FavoriteIcon fontSize="large" />
             </IconButton>
             <IconButton className="SwapeButtons__lightning">
             <FlashOnIcon fontSize="large" />
             </IconButton>
        </div>
    )
}

export default SwapeButtons
