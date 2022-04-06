import WhoToFollowListItem from "./who-to-follow-list-item.js";
import { useSelector } from "react-redux";

const WhoToFollowList = () => {
  const who = useSelector((state) => state.who);

  return (
    <ul className="list-group">
      <li className="list-group-item fw-bold">Who To Follow</li>
      {who.map((item) => {
        return <WhoToFollowListItem key={item.handle} who={item} />;
      })}
    </ul>
  );
};

export default WhoToFollowList;
