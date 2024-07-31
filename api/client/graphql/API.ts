/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type UserProfile = {
  __typename: "UserProfile";
  avatar?: string | null;
  balance?: number | null;
  createdAt: string;
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
  email?: string | null;
  id: string;
  profileOwner?: string | null;
  updatedAt: string;
  uuid: string;
};

export enum UserProfileDefaultPrivacyLevel {
  contacts = "contacts",
  private = "private",
  public = "public",
}

export type ModelIntInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}

export type ModelStringInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelIDInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelFloatInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelUserProfileFilterInput = {
  and?: Array<ModelUserProfileFilterInput | null> | null;
  avatar?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  defaultPrivacyLevel?: ModelUserProfileDefaultPrivacyLevelInput | null;
  email?: ModelStringInput | null;
  id?: ModelIDInput | null;
  not?: ModelUserProfileFilterInput | null;
  or?: Array<ModelUserProfileFilterInput | null> | null;
  profileOwner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  uuid?: ModelStringInput | null;
};

export type ModelUserProfileDefaultPrivacyLevelInput = {
  eq?: UserProfileDefaultPrivacyLevel | null;
  ne?: UserProfileDefaultPrivacyLevel | null;
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection";
  items: Array<UserProfile | null>;
  nextToken?: string | null;
};

export type ModelUserProfileConditionInput = {
  and?: Array<ModelUserProfileConditionInput | null> | null;
  avatar?: ModelStringInput | null;
  balance?: ModelFloatInput | null;
  createdAt?: ModelStringInput | null;
  defaultPrivacyLevel?: ModelUserProfileDefaultPrivacyLevelInput | null;
  email?: ModelStringInput | null;
  not?: ModelUserProfileConditionInput | null;
  or?: Array<ModelUserProfileConditionInput | null> | null;
  profileOwner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  uuid?: ModelStringInput | null;
};

export type CreateUserProfileInput = {
  avatar?: string | null;
  balance?: number | null;
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
  email?: string | null;
  id?: string | null;
  profileOwner?: string | null;
  uuid: string;
};

export type DeleteUserProfileInput = {
  id: string;
};

export type UpdateUserProfileInput = {
  avatar?: string | null;
  balance?: number | null;
  defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
  email?: string | null;
  id: string;
  profileOwner?: string | null;
  uuid?: string | null;
};

export type ModelSubscriptionBankAccountFilterInput = {
  accountNumber?: ModelSubscriptionIntInput | null;
  and?: Array<ModelSubscriptionBankAccountFilterInput | null> | null;
  bankName?: ModelSubscriptionStringInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  isDeleted?: ModelSubscriptionBooleanInput | null;
  or?: Array<ModelSubscriptionBankAccountFilterInput | null> | null;
  owner?: ModelStringInput | null;
  routingNumber?: ModelSubscriptionIntInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  userProfileId?: ModelSubscriptionIDInput | null;
  uuid?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionIntInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null;
  ne?: boolean | null;
};

export type ModelSubscriptionFloatInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array<ModelSubscriptionUserProfileFilterInput | null> | null;
  avatar?: ModelSubscriptionStringInput | null;
  balance?: ModelSubscriptionFloatInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  defaultPrivacyLevel?: ModelSubscriptionStringInput | null;
  email?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionUserProfileFilterInput | null> | null;
  profileOwner?: ModelStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  uuid?: ModelSubscriptionStringInput | null;
};

export type GetUserProfileQueryVariables = {
  id: string;
};

export type GetUserProfileQuery = {
  getUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListUserProfilesQuery = {
  listUserProfiles?: {
    __typename: "ModelUserProfileConnection";
    items: Array<{
      __typename: "UserProfile";
      avatar?: string | null;
      balance?: number | null;
      createdAt: string;
      defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
      email?: string | null;
      id: string;
      profileOwner?: string | null;
      updatedAt: string;
      uuid: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null;
  input: CreateUserProfileInput;
};

export type CreateUserProfileMutation = {
  createUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null;
  input: DeleteUserProfileInput;
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null;
  input: UpdateUserProfileInput;
};

export type UpdateUserProfileMutation = {
  updateUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null;
  profileOwner?: string | null;
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null;
  profileOwner?: string | null;
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null;
  profileOwner?: string | null;
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?: {
    __typename: "UserProfile";
    avatar?: string | null;
    balance?: number | null;
    bankAccounts?: {
      __typename: "ModelBankAccountConnection";
      nextToken?: string | null;
    } | null;
    bankTransfers?: {
      __typename: "ModelBankTransferConnection";
      nextToken?: string | null;
    } | null;
    comments?: {
      __typename: "ModelCommentConnection";
      nextToken?: string | null;
    } | null;
    contacts?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    createdAt: string;
    defaultPrivacyLevel?: UserProfileDefaultPrivacyLevel | null;
    email?: string | null;
    id: string;
    isContactRef?: {
      __typename: "ModelContactConnection";
      nextToken?: string | null;
    } | null;
    likes?: {
      __typename: "ModelLikeConnection";
      nextToken?: string | null;
    } | null;
    profileOwner?: string | null;
    transactionsReceiver?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    transactionsSender?: {
      __typename: "ModelTransactionConnection";
      nextToken?: string | null;
    } | null;
    updatedAt: string;
    uuid: string;
  } | null;
};
