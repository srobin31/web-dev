const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row m-0 flex-nowrap">
                <div class="col-2 d-flex flex-wrap align-items-center justify-content-center">
                    <img src="${who.avatarIcon}" class="rounded-circle mw-100 wd-mh-90" />
                </div>
                <div class="col-6 px-0">
                    <div class="d-table-cell align-middle text-nowrap">
                        <p class="fw-bold m-0">${who.userName} <i class="fa fa-check-circle"></i></p>
                        <p class="m-0">@${who.handle}</p>
                    </div>
                </div>
                <div class="col-4 d-flex flex-wrap align-items-center justify-content-end px-0">
                    <button class="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    `);
}
export default WhoToFollowListItem;