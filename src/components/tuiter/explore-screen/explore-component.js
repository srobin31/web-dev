import React from "react";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
    return(
        <>
            <div className="row flex-nowrap">
                <div className="col-11 rounded-pill border d-flex align-items-center justify-content-between bg-white">
                    <i className="fa fa-search d-inline"></i>
                    <input className="form-control d-inline border-0 shadow-none" placeholder="Search Tuiter"/>
                </div>
                <div className="col-1 text-center">
                    <a href="explore-settings.html">
                        <i className="fas fa-cog fa-2x lh-base"></i>
                    </a>
                </div>
            </div>
            <div className="row mb-2">
                <ul className="nav nav-tabs mt-2 flex-nowrap text-nowrap">
                    <li className="nav-item">
                        <a className="nav-link active" href="for-you.html">For you</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="trending.html">Trending</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="news.html">News</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="sports.html">Sports</a>
                    </li>
                    <li className="nav-item d-none d-lg-block">
                        <a className="nav-link" href="entertainment.html">Entertainment</a>
                    </li>
                </ul>
            </div>
            <div className="row mb-2 position-relative">
                <img className="w-100 px-0" src="images/spacex.jpg" alt="" />
                <h2 className="position-absolute text-white bottom-0">SpaceX's Starship</h2>
            </div>
            <PostSummaryList/>
        </>
    );
}

export default ExploreComponent;
