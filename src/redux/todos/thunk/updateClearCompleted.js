import { toggled } from "../action";

const updateClearCompleted = (todoId , currentStatus) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: false,
      }),
      headers: {
        
        "Content-type": "application/json; charset = UTF-8",
      },
    });

    const todo = await response.json();

    dispatch(toggled(todo.id));
  };
};
export default updateClearCompleted;
