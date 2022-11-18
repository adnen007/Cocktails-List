import Item from "./Item";

const List = ({ data, title }) => {
  return (
    <div className="list">
      <div className="container">
        <h2 className="title">{title}</h2>
        <div className="content">
          {data
            ? data.map((item) => {
                return <Item key={item.idDrink} item={item} />;
              })
            : null}
        </div>
      </div>
    </div>
  );
};
export default List;

// let {data,title} =
