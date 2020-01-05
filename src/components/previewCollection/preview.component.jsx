import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import './preview.styles.scss';
import ProductPreview from '../preview-product/productpreview.component';

const PreviewCollection = ({ title, items, match, history }) => (

    <div classname="preview-collection">
        <Link className="link" to={`${match.url}/${title}`}>{title}</Link>
        <div className="preview-collection-item">
            {items.map(item => <ProductPreview  imageUrl={item.imageUrl} name={item.name} price={item.price} />)}
        </div>
    </div>
)

export default withRouter(PreviewCollection);
