import { deleted } from "../action";

const updateDeleted = (todoId) => {
  return async (dispatch) => {
    await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "DELETE",
    });
    dispatch(deleted(todoId));
  };
};
export default updateDeleted;
