/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;

export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      avatar
      balance
      createdAt
      defaultPrivacyLevel
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
