import React, { Component } from 'react'
import {Route} from 'react-router-dom';
import CollectionOverview from '../../components/collections-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { id } from 'postcss-selector-parser';


const ShopPage = ({match}) =>  {

        return (
            <div className="shop-page">
               <Route exact path={`${match.path}`} component={CollectionOverview}/>
               <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
            </div>
        )
    
}


export default ShopPage
