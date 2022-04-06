import { useDispatch } from "react-redux";
import { updateTuit } from "../../../actions/tuits-actions";

const TuitStats = ({ tuit }) => {
  const dispatch = useDispatch();

  return (
    <>
      <span
        className="wd-symbol wd-interact"

      >
        {<i className="far fa-thumbs-up" onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            likes: tuit.likes + 1,
          })
        }></i>}
        {<span className="wd-symbol-count">{tuit.likes}</span>}
      </span>
      <span
        className="wd-symbol wd-interact"

      >
        {<i className="far fa-thumbs-down" onClick={() =>
          updateTuit(dispatch, {
            ...tuit,
            dislikes: tuit.dislikes + 1,
          })
        }></i>}
        {<span className="wd-symbol-count">{tuit.dislikes}</span>}
      </span>
    </>
  );
};
export default TuitStats;
