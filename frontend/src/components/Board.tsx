import List from "./List";

const Board = () => {
  return (
    <div className="flex p-4">
      <List name="todo" />
      <List name="In Progress" />
      <List name="Review" />
      <List name="Done" />
    </div>
  );
};

export default Board;
