import React, { Component } from 'react'
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import CollectionPreview from '../../components/preview-collection-component/preview.collection.component'
import { id } from 'postcss-selector-parser';
import {selectCollections} from '../../redux/shop/shop.selectors';

const ShopPage = ({collections}) =>  {

        return (
            <div className="shop-page">
               { 
                   collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview key={id} {...otherCollectionProps}/>
                ))
                }
            </div>
        )
    
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default connect(mapStateToProps)(ShopPage)
