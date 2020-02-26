import { createSelector } from "reselect";


// Since the param is string in the path vs the id in the collection ,hence we will 
//use the strings as a dynamic property value to map with id and used in a selector

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    shop => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectCollections],
    collections => Object.keys(collections).map(key => collections[key]) //array of items 
)


//we find the collection whose id matches the url param of the object COLLECTION_ID_MAP
export const selectCollection = collectionUrlParam => createSelector(
    [selectCollections],  
    collections =>collections[collectionUrlParam]
)