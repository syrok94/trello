/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface DataItem {
  id: string;
  task: string;
  category : string;
}

interface DataContextType {
  data: DataItem[];
  setData: Dispatch<SetStateAction<DataItem[]>>;
}

interface DataProviderProps {
  children: ReactNode;
}
export const DataContext = createContext<DataContextType | undefined>(
  undefined
);

export const DataProvider = ({ children }: DataProviderProps) => {
  const [data, setData] = useState<DataItem[]>([]);

  // const fetchData = async () => {
  //   const response = await fetch("https://dummyjson.com/todos?limit=3&skip=10");
  //   const res = await response.json();

  //   const todos: DataItem[] = res.todos.map((todo: any) => ({
  //     id: todo.id,
  //     task: todo.todo,
  //   }));

  //   setData(todos);
  // };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};
