import tuits from "../data/tuits.json";

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
    case "create-tuit":
      const newTuit = {
        _id: new Date().getTime() + "",
        postedBy: {
          username: "WebDev",
        },
        liked: false,
        verified: false,
        handle: "WebDev",
        time: "Now",
        tuit: action.tuit,
        logoImage: "images/me.jpg",
        avatarImage: "images/me.jpg",
        stats: {
          comments: 0,
          retuits: 0,
          likes: 0,
        },
      };
      return [newTuit, ...state];
    case "delete-tuit":
      return state.filter((tuit) => tuit._id !== action.tuit._id);
    case "like-tuit":
      return state.map((tuit) => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    default:
      return tuits;
  }
};

export default tuitsReducer;
