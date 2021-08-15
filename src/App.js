import { Card } from "./components/card/Card";
import { Header } from "./components/header/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTodos } from "./store/action/todo/todo-action";
import loading from "./loading.svg";

const App = () => {
  const isLoading = useSelector((state) => state.todoReducer.isLoading);
  const todos = useSelector((state) => state.todoReducer.todos);
  const statusCode = useSelector((state) => state.todoReducer.status_code);
  const error = useSelector((state) => state.todoReducer.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  return (
    <div className="container">
      {error && (
        <div className="alert alert-danger" role="alert">
          * {error}
        </div>
      )}
      <Header />
      {isLoading && (
        <div className="text-center">
          <img src={loading} alt="LOADING..." />
        </div>
      )}
      <Card results={todos} />
    </div>
  );
};

export default App;
