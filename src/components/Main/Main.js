import HotPostContainer from "../../container/MainContainer/HotPostContainer";
import PostModalContainer from "../../container/MainContainer/PostModalContainer";
import "./Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <div className="Main-Content">
        <HotPostContainer />
      </div>
      <PostModalContainer />
    </div>
  );
};

export default Main;
