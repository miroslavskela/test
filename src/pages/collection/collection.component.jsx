import "./collection.styles.scss";

import collectionItem from '../../components/collection-item/collection-item.component';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selectors'
import React from 'react'

function CollectionPage({match, collection}) {
    console.log(collection)
    return (
        <div className="collection-page">
            
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection:selectCollection(ownProps.match.params.collectionId)(state)
});
export default connect(mapStateToProps)(CollectionPage);