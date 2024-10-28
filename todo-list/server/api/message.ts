import db from "../db/index";
interface Todo {
  id: number;
  name: string;
  completed: boolean;
}
export default defineEventHandler(async (e) => {
  const method = e.method;
  if (method === "GET") {
    return db.todos;
  }

  if (method === "POST") {
    const body = await readBody(e);

    const newTodo: Todo = {
      id: db.todos.length + 1,
      name: body.name,
      completed: body.completed,
    };
    db.todos.unshift(newTodo);
    setCookie(e, "todos", JSON.stringify(db.todos), {
      path: "/",
      httpOnly: true,
    });

    return db.todos;
  }
});
