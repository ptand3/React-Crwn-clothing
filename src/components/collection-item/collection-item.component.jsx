import React from "react";
import "./collection-item.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/cart/cart-actions";
import { connect } from "react-redux";

const CollectionItem = ({ item, dispatch }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className="collection-item">
            <div className="image" style={{ "backgroundImage": `url(${imageUrl})` }} />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <CustomButton inverted onClick={() => dispatch(addItem(item))}> ADD TO CART</CustomButton>
        </div>
    )
}
// const mapDispatchToProps = dispatch => ({
//     addItem: item => dispatch(addItem(item))
// })

export default connect(null)(CollectionItem);