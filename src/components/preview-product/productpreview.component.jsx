import React from 'react';
import './productpreview.styles.scss';

const ProductPreview = ({ imageUrl, name, price }) => (
    <div className="product-preview-box">
        <div
            className="product-preview"
            style={{ backgroundImage: `url(${imageUrl})` }}>

        </div>
        <div className="product-preview-info">
            <p className="product-preview-info--name">{name}</p>
            <p className="product-preview-info--price">{price}$</p>
        </div>
        <div className="product-btn">
            <button className="cart">Add To Cart</button>
            <button className="buy-now">Buy Now</button>
        </div>
    </div>
)

export default ProductPreview;