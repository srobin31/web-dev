import React from "react";

const WhoToFollowListItem = ({who = {
    avatarIcon: "images/nasa.jpg",
    username: "NASA",
    handle: "NASA",
}}) => {
    return (
        <li className="list-group-item">
            <div className="row m-0 flex-nowrap">
                <div className="col-2 d-flex flex-wrap align-items-center justify-content-center">
                    <img src={who.avatarIcon} className="rounded-circle mw-100 wd-mh-90" alt="" />
                </div>
                <div className="col-6 px-0">
                    <div className="d-table-cell align-middle text-nowrap">
                        <p className="fw-bold m-0">{who.username} <i className="fa fa-check-circle"></i></p>
                        <p className="m-0">@{who.handle}</p>
                    </div>
                </div>
                <div className="col-4 d-flex flex-wrap align-items-center justify-content-end px-0">
                    <button className="btn btn-primary rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;