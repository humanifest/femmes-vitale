/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;

export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;

export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    avatar
    balance
    bankAccounts {
      nextToken
      __typename
    }
    bankTransfers {
      nextToken
      __typename
    }
    comments {
      nextToken
      __typename
    }
    contacts {
      nextToken
      __typename
    }
    createdAt
    defaultPrivacyLevel
    email
    id
    isContactRef {
      nextToken
      __typename
    }
    likes {
      nextToken
      __typename
    }
    profileOwner
    transactionsReceiver {
      nextToken
      __typename
    }
    transactionsSender {
      nextToken
      __typename
    }
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
