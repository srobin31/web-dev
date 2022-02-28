const NavItem = (item, active) => {
    return (`
        <a class="list-group-item list-group-item-action ${item.text === active ? 'active' : ''}" href="${item.link}">
            <i class="${item.iconClass} fa-${item.icon}"></i>
            <span class="d-none d-xl-inline">&nbsp;&nbsp;${item.text}</span>
        </a>
    `);
}
export default NavItem;