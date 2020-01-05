import React from 'react';
import {withRouter} from 'react-router-dom';
import './menuItems.styles.scss';

const MenuItem = ({title, img, size, history, match, linkUrl}) => (
    <div  className={`${size} menu-item`} onClick={ ()=> history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{backgroundImage: `url(${img})`}}>
            
        </div>
        <div className="content">            
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);