import React from "react";

const NavItem = ({
    item = {
        iconClass:"fas",
        icon:"circle",
        text: "More",
        link:"../navigation.html"
    },
    active="Explore"
}) => {
    return (
        <a className={`list-group-item list-group-item-action ${item.text.toLowerCase() === active.toLowerCase() ? 'active' : ''}`} href={item.link}>
            <i className={`${item.iconClass} fa-${item.icon}`}></i>
            <span className="d-none d-xl-inline">&nbsp;&nbsp;{item.text}</span>
        </a>
    );
}

export default NavItem;