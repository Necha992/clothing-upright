import React from 'react';

import SHOP_DATA from './shop.data'

import '../../components/preview-collection/collection-preview.component'

import './shop.styles.scss'
import CollectionPreview from '../../components/preview-collection/collection-preview.component';


class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const { collections } = this.state;
        return (<div>
            {
                collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}></CollectionPreview>
                ))
            }
        </div>)
    }
}

export default ShopPage