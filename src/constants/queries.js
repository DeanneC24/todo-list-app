import { gql } from '@apollo/client'

export const ALL_TODOS = gql`
  query {
    allTasks {
      id
      name
      status
      description
      category {
        name
      }
    }
  }
`;

export const ALL_CATEGORIES = gql`
query {
	allCategories{
    id
    name
  }
}
`;

export const SAVE_TODO = gql`
  mutation createTask( $name: String!, $description: String!, $status: String!, $category: Int!) {
    createTask (taskData: {name: $name, description: $description, status: $status, category: $category}) {
      task{
        id
        name
        description
        status
        category {
          name
        }
      }
    }
  }`;