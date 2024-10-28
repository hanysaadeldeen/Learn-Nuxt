import db from "../../db";

export default defineEventHandler(async (event) => {
  const method = event.method;

  if (method === "PUT") {
    const id = Number(event.context.params.id);

    const getTodo = db.todos.find((todo: { id: number }) => todo.id === id);

    if (getTodo) {
      getTodo.completed = !getTodo.completed;

      return { success: true, todo: getTodo };
    } else {
      const TodoNotFound = createError({
        statusCode: 204,
        statusMessage: "Todo not found",
        data: {},
      });
      sendError(event, TodoNotFound);
    }
  }

  if (method === "DELETE") {
    const id = Number(event.context.params.id);
    db.todos = db.todos.filter((todo: { id: number }) => todo.id !== id);
    return { success: true, todo: db.todos };
  }
});
