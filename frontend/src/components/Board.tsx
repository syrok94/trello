import List from "./List";

const Board = () => {
  return (
    <div className="flex p-4">
      <List name="todo" />
      <List name="inProgress" />
      <List name="review" />
      <List name="done" />
    </div>
  );
};

export default Board;
