import { Outlet } from "react-router-dom";
import { useMainContext } from "../context/context";
import Loading from "../pages/Loading";
import Header from "./Header";

const SharedLayout = () => {
  const { state: data } = useMainContext();
  if (data.loading) {
    return (
      <section>
        <Header />
        <Loading />
      </section>
    );
  }
  return (
    <section>
      <Header />
      <Outlet />
    </section>
  );
};

export default SharedLayout;
