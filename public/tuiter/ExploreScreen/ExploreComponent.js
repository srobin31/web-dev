import PostSummaryList from "./PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
        <div class="row flex-nowrap">
            <div class="col-11 rounded-pill border d-flex align-items-center justify-content-between bg-white">
                <i class="fa fa-search d-inline"></i>
                <input class="form-control d-inline border-0 shadow-none" placeholder="Search Tuiter">
            </div>
            <div class="col-1 text-center">
                <a href="explore-settings.html">
                    <i class="fas fa-cog fa-2x lh-base"></i>
                </a>
            </div>
        </div>
        <div class="row mb-2">
            <ul class="nav nav-tabs mt-2 flex-nowrap text-nowrap">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item d-none d-lg-block">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
        </div>
        <div class="row mb-2 position-relative">
            <img class="w-100 px-0" src="../images/spacex.jpg" />
            <h2 class="position-absolute text-white bottom-0">SpaceX's Starship</h2>
        </div>
        ${PostSummaryList()}
    `);
}
export default ExploreComponent;
