import { allCompleted } from "../action";

const updateAllStatus = () => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset = UTF-8",
      },
    });

    const todo = await response.json();

    dispatch(allCompleted(todo.id));
  };
};
export default updateAllStatus;
