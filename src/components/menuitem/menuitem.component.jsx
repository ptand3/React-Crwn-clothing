import React from "react";
import "./menuitem.scss";
import { withRouter } from "react-router-dom"; // WithRouter() is HOC

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`}
        onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className="background-image" style={{ "backgroundImage": `url(${imageUrl})` }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="sub-title">SHOP NOW</span>
        </div>
    </div>
)
export default withRouter(MenuItem); //withRouter() is a HOC that will wrap the MenuItem componentand return us the modified 
                                    //comp with acess to history ,location, match props that we need