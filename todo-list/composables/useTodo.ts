const useTodo = () => {
  const { data: Todos, refresh } = useAsyncData("todos", () =>
    $fetch("/api/message", {
      method: "GET",
    })
  );
  // const { data: Todos } = await useFetch("/api/message", {
  //   method: "GET",
  // });

  const handleClick = async (userInput: any) => {
    console.log("hello there", userInput);

    if (userInput === "") {
      alert("Please enter a todo");
    } else {
      await $fetch("/api/message", {
        method: "POST",
        body: {
          id: 1,
          name: userInput,
          completed: false,
        },
      });
      userInput = "";
      refresh();
    }
  };

  const updateTodo = async (id: number) => {
    const returnValue = await $fetch(`/api/todo/${id}`, {
      method: "PUT",
    });
    if (returnValue) {
      console.log(returnValue);
    }
    refresh();
  };

  const deleteTodo = async (id: number) => {
    const returnValue = await $fetch(`/api/todo/${id}`, {
      method: "DELETE",
    });
    if (returnValue) {
      console.log(returnValue);
    }
    refresh();
  };

  return {
    Todos,
    handleClick,
    updateTodo,
    deleteTodo,
  };
};
export default useTodo;
