import React, { Component } from 'react'
import {shopData} from './shop.data';
import CollectionPreview from '../../components/preview-collection-component/preview.collection.component'
import { id } from 'postcss-selector-parser';

export default class ShopPage extends Component {
    state = {
        collections: shopData
        
    }
    render() {
        return (
            <div className="shop-page">
               { 
                   this.state.collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }
            </div>
        )
    }
}
