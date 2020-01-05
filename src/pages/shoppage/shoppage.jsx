import React, { Component } from 'react';
import './shoppage.styles.scss';
import SHOP_DATA from './Shop-Data';
import PreviewCollection from '../../components/previewCollection/preview.component';

export default class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        return (
            <div className="shop">
               
                {this.state.collections.map(item => {
                   return <PreviewCollection
                        key={item.id}
                        title={item.title}
                        items={item.items} />
                })}
            </div>
        )
    }
}
