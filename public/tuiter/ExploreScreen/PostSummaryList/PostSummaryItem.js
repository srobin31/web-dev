const PostSummaryItem = (post) => {
    return (`
        <div class="row list-group-item d-flex">
            <div class="col-9 pt-2">
                <p class="text-secondary mb-0">${post.topic}</p>
                <p class="fw-bold d-inline">${post.userName} <i class="fa fa-check-circle"></i> - ${post.time}</p>
                <p class="fw-bold mb-0">${post.title}</p>
                <p class="text-secondary mb-0">${post.hasOwnProperty('tweets') ? `${post.tweets} Tuits` : ''}</p>
            </div>

            <div class="col-3 d-flex flex-wrap align-items-center justify-content-center">
                <img src="${post.image}" class="float-end w-100 rounded" />
            </div>
        </div>
    `);
}
export default PostSummaryItem;