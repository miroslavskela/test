
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollections} from '../../redux/shop/shop.selectors';
import './collection-overview.style.scss';

import React from 'react'
import CollectionPreview from '../preview-collection-component/preview.collection.component'

const CollectionOverview = ({collections}) => {
    return (
        <div className='collections-overview'>
            {collections.map(({id, ...otherCollectionProps}) => ( 
               <CollectionPreview key={id} {...otherCollectionProps}/>
            ))}
        </div>
    )
}
const mapStateToProps = createStructuredSelector({
    collections:selectCollections
})

export default  connect(mapStateToProps)(CollectionOverview)