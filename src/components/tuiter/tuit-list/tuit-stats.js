import { useDispatch } from "react-redux";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();
  const likeTuit = () => {
    dispatch({ type: "like-tuit", tuit });
  };
  return (
    <span className="wd-symbol wd-interact" onClick={likeTuit}>
      {tuit.liked && (
        <i className="fas fa-heart" style={{ color: "red" }}></i>
      )}
      {!tuit.liked && <i className="far fa-heart"></i>}
      {tuit.stats && <span className="wd-symbol-count">{tuit.stats.likes}</span>}
    </span>
  );
};
export default TuitStats;
