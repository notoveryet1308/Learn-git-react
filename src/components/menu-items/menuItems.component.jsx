import React from 'react';
import './menuItems.styles.scss';

const MenuItem = ({title, img, size}) => (
    <div  className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage: `url(${img})`}}>
            
        </div>
        <div className="content">            
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
)

export default MenuItem;