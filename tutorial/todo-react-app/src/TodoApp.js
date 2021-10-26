import { useQuery, useMutation } from "@apollo/react-hooks";
import { GET_TODOS, ADD_TODO } from "./GraphQLData";

const TodoApp = () => {
  const [addTodo] = useMutation(ADD_TODO);

  const { loading, error, data } = useQuery(GET_TODOS);
  const getData = () => {
    if (loading) {
      return null;
    }
    if (error) {
      console.error(`GET_TODOS error: %{error}`);
      return `Error: ${error.message}`;
    }
    if (data.queryTask) {
      setShownTodos(data.queryTask);
    }
  };

  const add = (title) =>
    addTodo({
      variables: {
        task: [
          {
            title: title,
            completed: false,
            user: { username: "exmail@exmaple.com" },
          },
        ],
      },
      refetchQueries: [
        {
          query: GET_TODOS,
        },
      ],
    });
};
