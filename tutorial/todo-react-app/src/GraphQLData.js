import gql from "graphql-tag";

export const ADD_TODO = gql`
  mutation addTask($task: [AddTaskInput!]) {
    addTask(input: $task) {
      task {
        id
        title
      }
    }
  }
`;

export const GET_TODOS = gql`
  query {
    queryTask {
      id
      title
      completed
    }
  }
`;

export const GET_USER = gql`
  query getUser($username: String!) {
    getUser(username: $username) {
      username
      name
      tasks {
        id
        title
        completed
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($user: AddUserInput!) {
    addUser(input: [$user]) {
      user {
        username
      }
    }
  }
`;
