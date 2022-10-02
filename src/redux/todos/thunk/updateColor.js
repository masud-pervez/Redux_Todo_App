import { colorSelected } from "../action";

const updateStatus = (todoId, color) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        color: color,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });

    const todo = await response.json();

    dispatch(colorSelected(todo.id,todo.color));
  };
};
export default updateStatus;
