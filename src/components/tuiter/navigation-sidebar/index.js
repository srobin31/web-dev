import React from "react";
import NavItem from "./nav-item.js";
import items from "./items.json";

const NavigationSidebar = ({active="explore"}) => {
    return (
        <>
            <div className="list-group">
                {items.map(item => {
                    return (<NavItem key={item.link} item={item} active={active} />);
                })}
            </div>
            <div className="d-grid mt-2">
                <a href="tuit.html" className="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
        </>
    );
}

export default NavigationSidebar;