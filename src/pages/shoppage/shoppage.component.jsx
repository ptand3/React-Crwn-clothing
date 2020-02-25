//Shop page component will contain the collections of the shop data with the collection preview component
//since its going to store the data hence class component

import React from "react";
import "./shoppage.styles.scss";
import CollectionOverview from "../../components/collection-overview/collection-overview.component";



const ShopPage = () => {
    return (
        <div className="shop-page">
            <CollectionOverview />
        </div>
    )
}



export default ShopPage;

