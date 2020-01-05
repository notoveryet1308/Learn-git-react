import React, { Component } from 'react';
import './directory.styles.scss';
import hat from './../../img/hat.jpg';
import sneaker from './../../img/sneaker.jpg';
import jacket from './../../img/jacket.jpg';
import men from './../../img/menFashion.jpg';
import women from './../../img/womenFashion.jpg';
import MenuItem from '../menu-items/menuItems.component';

export default class Directory extends Component {
    constructor(props){
        super(props);
        this.state={
            sections: [
                {
                    title: 'Hats',
                    img: hat,
                    id: 1,
                    linkUrl: 'hats'
                },
                {
                    title: 'Sneakers',
                    img: sneaker,
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'Jackets',
                    img: jacket,
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'Men',
                    img: men,
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'Women',
                    img: women,
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }
    render() {
        return (
            <div className="directory-menu">
                {this.state.sections.map(section=> (
                    <MenuItem key={section.id} title={section.title} img={section.img} size={section.size} linkUrl={section.linkUrl}/>
                )) }
            </div>
        )
    }
}
