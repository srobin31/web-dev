import NavItem from "./NavItem.js";
import items from "./items.js";

const NavigationSidebar = (active) => {
    return (`
            <div class="list-group">
                ${items.map(item => {
                    return(NavItem(item, active));
                }).join('')}
            </div>
            <div class="d-grid mt-2">
                <a href="tuit.html" class="btn btn-primary btn-block rounded-pill">
                    Tweet
                </a>
            </div>
    `);
}
export default NavigationSidebar;