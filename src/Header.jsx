import React from 'react'
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import IconButton from '@material-ui/core/IconButton'
import { Link ,useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
function Header({backButton}) {
    const history = useHistory()
    return (
        <div className="header">
            {backButton ? (
                <IconButton onClick={()=> history.replace(backButton)}>
                <ArrowBackIosIcon fontSize="large" className="header__icon" />
                </IconButton>
                ): (
                    <IconButton>
            <PersonIcon className="header__icon" fontSize="large" />
            </IconButton>
                )
                }
            
            
             <Link to="/">
             <img className="header__logo" src="https://pic.clubic.com/v1/images/1698019/raw" alt="tinder logo" srcset=""/>
             </Link>  
              
              
            
              <Link to="/chat">
              <IconButton>
            <ForumIcon className="header__icon" fontSize="large" />
            </IconButton>
            </Link>
        </div>
    )
}

export default Header
