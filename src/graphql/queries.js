/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProduct = /* GraphQL */ `
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      id
      name
      price
      category
      inventory
      createdAt
      baseType
      updatedAt
    }
  }
`;
export const listProducts = /* GraphQL */ `
  query ListProducts(
    $id: ID
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProducts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCategory = /* GraphQL */ `
  query ProductsByCategory(
    $category: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategory(
      category: $category
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCategoryAndName = /* GraphQL */ `
  query ProductsByCategoryAndName(
    $category: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategoryAndName(
      category: $category
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCategoryAndInventory = /* GraphQL */ `
  query ProductsByCategoryAndInventory(
    $category: String!
    $inventory: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategoryAndInventory(
      category: $category
      inventory: $inventory
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByCategoryAndPrice = /* GraphQL */ `
  query ProductsByCategoryAndPrice(
    $category: String!
    $price: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByCategoryAndPrice(
      category: $category
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByInventoryAmount = /* GraphQL */ `
  query ProductsByInventoryAmount(
    $baseType: String!
    $inventory: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByInventoryAmount(
      baseType: $baseType
      inventory: $inventory
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productsByPrice = /* GraphQL */ `
  query ProductsByPrice(
    $baseType: String!
    $price: ModelFloatKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productsByPrice(
      baseType: $baseType
      price: $price
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productSearchByName = /* GraphQL */ `
  query ProductSearchByName(
    $baseType: String!
    $name: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productSearchByName(
      baseType: $baseType
      name: $name
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const productSearchByCategory = /* GraphQL */ `
  query ProductSearchByCategory(
    $baseType: String!
    $category: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelProductFilterInput
    $limit: Int
    $nextToken: String
  ) {
    productSearchByCategory(
      baseType: $baseType
      category: $category
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        price
        category
        inventory
        createdAt
        baseType
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      comments {
        items {
          id
          postId
          content
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $id: ID
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listPosts(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        title
        comments {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getComment = /* GraphQL */ `
  query GetComment($id: ID!) {
    getComment(id: $id) {
      id
      postId
      content
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $id: ID
    $filter: ModelCommentFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listComments(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        postId
        content
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
