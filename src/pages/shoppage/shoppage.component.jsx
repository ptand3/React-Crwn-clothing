//Shop page component will contain the collections of the shop data with the collection preview component
//since its going to store the data hence class component

import React from "react";
import "./shoppage.styles.scss";
import { Route } from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";
import CollectionPage from "../collectionpage/collectionpage.component";



const ShopPage = ({match}) => {  // we need match object to do nesting of routes in shop page  
    return (
        <div className="shop-page">
            <Route exact path ={`${match.path}`} component ={CollectionOverview} />
            <Route path ={ `${match.path}/:collectionId`} component ={ CollectionPage } />
        </div>
    )
}



export default ShopPage;

