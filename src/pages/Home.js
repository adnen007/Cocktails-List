import Search from "../components/Search";
import List from "../components/List";
import { useMainContext } from "../context/context";

const Home = () => {
  const { state: data, dispatch } = useMainContext();
  return (
    <div className="home">
      <Search dispatch={dispatch} state={data} />
      <List data={data.drinksList} title="Cocktails" />
    </div>
  );
};
export default Home;
