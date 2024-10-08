/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getArticle = /* GraphQL */ `query GetArticle($id: ID!) {
  getArticle(id: $id) {
    category
    content
    createdAt
    id
    owner
    publishedDate
    title
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetArticleQueryVariables,
  APITypes.GetArticleQuery
>;
export const getAutomatedUpdate = /* GraphQL */ `query GetAutomatedUpdate($id: ID!) {
  getAutomatedUpdate(id: $id) {
    createdAt
    id
    owner
    timestamp
    updateData
    updateType
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetAutomatedUpdateQueryVariables,
  APITypes.GetAutomatedUpdateQuery
>;
export const getBasalBodyTemperature = /* GraphQL */ `query GetBasalBodyTemperature($id: ID!) {
  getBasalBodyTemperature(id: $id) {
    createdAt
    date
    id
    owner
    temperature
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBasalBodyTemperatureQueryVariables,
  APITypes.GetBasalBodyTemperatureQuery
>;
export const getContraceptiveMethod = /* GraphQL */ `query GetContraceptiveMethod($id: ID!) {
  getContraceptiveMethod(id: $id) {
    createdAt
    description
    id
    name
    owner
    sideEffects
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContraceptiveMethodQueryVariables,
  APITypes.GetContraceptiveMethodQuery
>;
export const getContraceptiveReminder = /* GraphQL */ `query GetContraceptiveReminder($id: ID!) {
  getContraceptiveReminder(id: $id) {
    contraceptiveMethod
    createdAt
    id
    owner
    reminderTime
    status
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetContraceptiveReminderQueryVariables,
  APITypes.GetContraceptiveReminderQuery
>;
export const getDataProtection = /* GraphQL */ `query GetDataProtection($id: ID!) {
  getDataProtection(id: $id) {
    createdAt
    dataType
    id
    owner
    protectionStatus
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetDataProtectionQueryVariables,
  APITypes.GetDataProtectionQuery
>;
export const getFAQ = /* GraphQL */ `query GetFAQ($id: ID!) {
  getFAQ(id: $id) {
    answer
    createdAt
    id
    owner
    question
    updatedAt
    uuid
    __typename
  }
}
` as GeneratedQuery<APITypes.GetFAQQueryVariables, APITypes.GetFAQQuery>;
export const getFertilityWindow = /* GraphQL */ `query GetFertilityWindow($id: ID!) {
  getFertilityWindow(id: $id) {
    createdAt
    cycle {
      createdAt
      cycleLength
      endDate
      flowIntensity
      id
      owner
      startDate
      symptoms
      updatedAt
      userProfileId
      uuid
      __typename
    }
    cycleId
    endDate
    id
    owner
    startDate
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetFertilityWindowQueryVariables,
  APITypes.GetFertilityWindowQuery
>;
export const getHealthGoal = /* GraphQL */ `query GetHealthGoal($id: ID!) {
  getHealthGoal(id: $id) {
    createdAt
    goalDescription
    goalName
    id
    owner
    progress
    progressReports {
      nextToken
      __typename
    }
    targetDate
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetHealthGoalQueryVariables,
  APITypes.GetHealthGoalQuery
>;
export const getMedicationLog = /* GraphQL */ `query GetMedicationLog($id: ID!) {
  getMedicationLog(id: $id) {
    createdAt
    dose
    endDate
    id
    medicationName
    notes
    owner
    startDate
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMedicationLogQueryVariables,
  APITypes.GetMedicationLogQuery
>;
export const getMenstrualHealthInsight = /* GraphQL */ `query GetMenstrualHealthInsight($id: ID!) {
  getMenstrualHealthInsight(id: $id) {
    createdAt
    cycle {
      createdAt
      cycleLength
      endDate
      flowIntensity
      id
      owner
      startDate
      symptoms
      updatedAt
      userProfileId
      uuid
      __typename
    }
    cycleId
    date
    id
    insight
    owner
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetMenstrualHealthInsightQueryVariables,
  APITypes.GetMenstrualHealthInsightQuery
>;
export const getOvulationCycle = /* GraphQL */ `query GetOvulationCycle($id: ID!) {
  getOvulationCycle(id: $id) {
    analyses {
      nextToken
      __typename
    }
    createdAt
    cycleLength
    endDate
    fertilityWindows {
      nextToken
      __typename
    }
    flowIntensity
    id
    menstrualHealthInsight {
      nextToken
      __typename
    }
    owner
    predictions {
      nextToken
      __typename
    }
    startDate
    symptoms
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOvulationCycleQueryVariables,
  APITypes.GetOvulationCycleQuery
>;
export const getOvulationCycleAnalysis = /* GraphQL */ `query GetOvulationCycleAnalysis($id: ID!) {
  getOvulationCycleAnalysis(id: $id) {
    analysis
    createdAt
    cycle {
      createdAt
      cycleLength
      endDate
      flowIntensity
      id
      owner
      startDate
      symptoms
      updatedAt
      userProfileId
      uuid
      __typename
    }
    cycleId
    date
    id
    owner
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOvulationCycleAnalysisQueryVariables,
  APITypes.GetOvulationCycleAnalysisQuery
>;
export const getOvulationPrediction = /* GraphQL */ `query GetOvulationPrediction($id: ID!) {
  getOvulationPrediction(id: $id) {
    createdAt
    cycle {
      createdAt
      cycleLength
      endDate
      flowIntensity
      id
      owner
      startDate
      symptoms
      updatedAt
      userProfileId
      uuid
      __typename
    }
    cycleId
    id
    notes
    owner
    predictedOvulationDate
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOvulationPredictionQueryVariables,
  APITypes.GetOvulationPredictionQuery
>;
export const getOvulationTest = /* GraphQL */ `query GetOvulationTest($id: ID!) {
  getOvulationTest(id: $id) {
    createdAt
    date
    id
    owner
    result
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetOvulationTestQueryVariables,
  APITypes.GetOvulationTestQuery
>;
export const getPredictiveAnalytics = /* GraphQL */ `query GetPredictiveAnalytics($id: ID!) {
  getPredictiveAnalytics(id: $id) {
    createdAt
    date
    id
    owner
    prediction
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPredictiveAnalyticsQueryVariables,
  APITypes.GetPredictiveAnalyticsQuery
>;
export const getPrivacySetting = /* GraphQL */ `query GetPrivacySetting($id: ID!) {
  getPrivacySetting(id: $id) {
    createdAt
    id
    owner
    settingName
    settingValue
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetPrivacySettingQueryVariables,
  APITypes.GetPrivacySettingQuery
>;
export const getProgressReport = /* GraphQL */ `query GetProgressReport($id: ID!) {
  getProgressReport(id: $id) {
    createdAt
    goal {
      createdAt
      goalDescription
      goalName
      id
      owner
      progress
      targetDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    goalId
    id
    owner
    reportDate
    reportDetails
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProgressReportQueryVariables,
  APITypes.GetProgressReportQuery
>;
export const getSupportGroup = /* GraphQL */ `query GetSupportGroup($id: ID!) {
  getSupportGroup(id: $id) {
    createdAt
    groupDescription
    groupName
    id
    membershipDate
    owner
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSupportGroupQueryVariables,
  APITypes.GetSupportGroupQuery
>;
export const getSymptomLog = /* GraphQL */ `query GetSymptomLog($id: ID!) {
  getSymptomLog(id: $id) {
    createdAt
    date
    id
    owner
    severity
    symptom
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetSymptomLogQueryVariables,
  APITypes.GetSymptomLogQuery
>;
export const getUserForum = /* GraphQL */ `query GetUserForum($id: ID!) {
  getUserForum(id: $id) {
    createdAt
    forumTopic
    id
    owner
    postContent
    postDate
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserForumQueryVariables,
  APITypes.GetUserForumQuery
>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    OvulationCycleAnalysis {
      nextToken
      __typename
    }
    articles {
      nextToken
      __typename
    }
    avatar
    basalBodyTemperatures {
      nextToken
      __typename
    }
    birthday
    contraceptiveMethods {
      nextToken
      __typename
    }
    contraceptiveReminders {
      nextToken
      __typename
    }
    createdAt
    dataProtections {
      nextToken
      __typename
    }
    email
    fertilityWindows {
      nextToken
      __typename
    }
    healthGoals {
      nextToken
      __typename
    }
    id
    medicationLogs {
      nextToken
      __typename
    }
    menstrualHealthInsights {
      nextToken
      __typename
    }
    ovulationCycles {
      nextToken
      __typename
    }
    ovulationPredictions {
      nextToken
      __typename
    }
    ovulationTests {
      nextToken
      __typename
    }
    predictiveAnalytics {
      nextToken
      __typename
    }
    privacySettings {
      nextToken
      __typename
    }
    profileOwner
    progressReports {
      nextToken
      __typename
    }
    supportGroups {
      nextToken
      __typename
    }
    symptomLogs {
      nextToken
      __typename
    }
    updatedAt
    userForums {
      nextToken
      __typename
    }
    uuid
    wearableData {
      nextToken
      __typename
    }
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const getWearableData = /* GraphQL */ `query GetWearableData($id: ID!) {
  getWearableData(id: $id) {
    createdAt
    dataType
    dataValue
    deviceId
    id
    owner
    timestamp
    updatedAt
    userProfile {
      avatar
      birthday
      createdAt
      email
      id
      profileOwner
      updatedAt
      uuid
      __typename
    }
    userProfileId
    uuid
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetWearableDataQueryVariables,
  APITypes.GetWearableDataQuery
>;
export const listArticles = /* GraphQL */ `query ListArticles(
  $filter: ModelArticleFilterInput
  $limit: Int
  $nextToken: String
) {
  listArticles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      category
      content
      createdAt
      id
      owner
      publishedDate
      title
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListArticlesQueryVariables,
  APITypes.ListArticlesQuery
>;
export const listAutomatedUpdates = /* GraphQL */ `query ListAutomatedUpdates(
  $filter: ModelAutomatedUpdateFilterInput
  $limit: Int
  $nextToken: String
) {
  listAutomatedUpdates(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      timestamp
      updateData
      updateType
      updatedAt
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListAutomatedUpdatesQueryVariables,
  APITypes.ListAutomatedUpdatesQuery
>;
export const listBasalBodyTemperatures = /* GraphQL */ `query ListBasalBodyTemperatures(
  $filter: ModelBasalBodyTemperatureFilterInput
  $limit: Int
  $nextToken: String
) {
  listBasalBodyTemperatures(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      date
      id
      owner
      temperature
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBasalBodyTemperaturesQueryVariables,
  APITypes.ListBasalBodyTemperaturesQuery
>;
export const listContraceptiveMethods = /* GraphQL */ `query ListContraceptiveMethods(
  $filter: ModelContraceptiveMethodFilterInput
  $limit: Int
  $nextToken: String
) {
  listContraceptiveMethods(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      description
      id
      name
      owner
      sideEffects
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContraceptiveMethodsQueryVariables,
  APITypes.ListContraceptiveMethodsQuery
>;
export const listContraceptiveReminders = /* GraphQL */ `query ListContraceptiveReminders(
  $filter: ModelContraceptiveReminderFilterInput
  $limit: Int
  $nextToken: String
) {
  listContraceptiveReminders(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      contraceptiveMethod
      createdAt
      id
      owner
      reminderTime
      status
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListContraceptiveRemindersQueryVariables,
  APITypes.ListContraceptiveRemindersQuery
>;
export const listDataProtections = /* GraphQL */ `query ListDataProtections(
  $filter: ModelDataProtectionFilterInput
  $limit: Int
  $nextToken: String
) {
  listDataProtections(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      dataType
      id
      owner
      protectionStatus
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListDataProtectionsQueryVariables,
  APITypes.ListDataProtectionsQuery
>;
export const listFAQS = /* GraphQL */ `query ListFAQS($filter: ModelFAQFilterInput, $limit: Int, $nextToken: String) {
  listFAQS(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      answer
      createdAt
      id
      owner
      question
      updatedAt
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListFAQSQueryVariables, APITypes.ListFAQSQuery>;
export const listFertilityWindows = /* GraphQL */ `query ListFertilityWindows(
  $filter: ModelFertilityWindowFilterInput
  $limit: Int
  $nextToken: String
) {
  listFertilityWindows(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      cycleId
      endDate
      id
      owner
      startDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFertilityWindowsQueryVariables,
  APITypes.ListFertilityWindowsQuery
>;
export const listHealthGoals = /* GraphQL */ `query ListHealthGoals(
  $filter: ModelHealthGoalFilterInput
  $limit: Int
  $nextToken: String
) {
  listHealthGoals(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      goalDescription
      goalName
      id
      owner
      progress
      targetDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListHealthGoalsQueryVariables,
  APITypes.ListHealthGoalsQuery
>;
export const listMedicationLogs = /* GraphQL */ `query ListMedicationLogs(
  $filter: ModelMedicationLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listMedicationLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      dose
      endDate
      id
      medicationName
      notes
      owner
      startDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMedicationLogsQueryVariables,
  APITypes.ListMedicationLogsQuery
>;
export const listMenstrualHealthInsights = /* GraphQL */ `query ListMenstrualHealthInsights(
  $filter: ModelMenstrualHealthInsightFilterInput
  $limit: Int
  $nextToken: String
) {
  listMenstrualHealthInsights(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      cycleId
      date
      id
      insight
      owner
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListMenstrualHealthInsightsQueryVariables,
  APITypes.ListMenstrualHealthInsightsQuery
>;
export const listOvulationCycleAnalyses = /* GraphQL */ `query ListOvulationCycleAnalyses(
  $filter: ModelOvulationCycleAnalysisFilterInput
  $limit: Int
  $nextToken: String
) {
  listOvulationCycleAnalyses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      analysis
      createdAt
      cycleId
      date
      id
      owner
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOvulationCycleAnalysesQueryVariables,
  APITypes.ListOvulationCycleAnalysesQuery
>;
export const listOvulationCycles = /* GraphQL */ `query ListOvulationCycles(
  $filter: ModelOvulationCycleFilterInput
  $limit: Int
  $nextToken: String
) {
  listOvulationCycles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      cycleLength
      endDate
      flowIntensity
      id
      owner
      startDate
      symptoms
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOvulationCyclesQueryVariables,
  APITypes.ListOvulationCyclesQuery
>;
export const listOvulationPredictions = /* GraphQL */ `query ListOvulationPredictions(
  $filter: ModelOvulationPredictionFilterInput
  $limit: Int
  $nextToken: String
) {
  listOvulationPredictions(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      cycleId
      id
      notes
      owner
      predictedOvulationDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOvulationPredictionsQueryVariables,
  APITypes.ListOvulationPredictionsQuery
>;
export const listOvulationTests = /* GraphQL */ `query ListOvulationTests(
  $filter: ModelOvulationTestFilterInput
  $limit: Int
  $nextToken: String
) {
  listOvulationTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      date
      id
      owner
      result
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListOvulationTestsQueryVariables,
  APITypes.ListOvulationTestsQuery
>;
export const listPredictiveAnalytics = /* GraphQL */ `query ListPredictiveAnalytics(
  $filter: ModelPredictiveAnalyticsFilterInput
  $limit: Int
  $nextToken: String
) {
  listPredictiveAnalytics(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      date
      id
      owner
      prediction
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPredictiveAnalyticsQueryVariables,
  APITypes.ListPredictiveAnalyticsQuery
>;
export const listPrivacySettings = /* GraphQL */ `query ListPrivacySettings(
  $filter: ModelPrivacySettingFilterInput
  $limit: Int
  $nextToken: String
) {
  listPrivacySettings(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      owner
      settingName
      settingValue
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPrivacySettingsQueryVariables,
  APITypes.ListPrivacySettingsQuery
>;
export const listProgressReports = /* GraphQL */ `query ListProgressReports(
  $filter: ModelProgressReportFilterInput
  $limit: Int
  $nextToken: String
) {
  listProgressReports(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      goalId
      id
      owner
      reportDate
      reportDetails
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProgressReportsQueryVariables,
  APITypes.ListProgressReportsQuery
>;
export const listSupportGroups = /* GraphQL */ `query ListSupportGroups(
  $filter: ModelSupportGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listSupportGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      groupDescription
      groupName
      id
      membershipDate
      owner
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSupportGroupsQueryVariables,
  APITypes.ListSupportGroupsQuery
>;
export const listSymptomLogs = /* GraphQL */ `query ListSymptomLogs(
  $filter: ModelSymptomLogFilterInput
  $limit: Int
  $nextToken: String
) {
  listSymptomLogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      date
      id
      owner
      severity
      symptom
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListSymptomLogsQueryVariables,
  APITypes.ListSymptomLogsQuery
>;
export const listUserForums = /* GraphQL */ `query ListUserForums(
  $filter: ModelUserForumFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserForums(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      forumTopic
      id
      owner
      postContent
      postDate
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserForumsQueryVariables,
  APITypes.ListUserForumsQuery
>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      avatar
      birthday
      createdAt
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
export const listWearableData = /* GraphQL */ `query ListWearableData(
  $filter: ModelWearableDataFilterInput
  $limit: Int
  $nextToken: String
) {
  listWearableData(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      dataType
      dataValue
      deviceId
      id
      owner
      timestamp
      updatedAt
      userProfileId
      uuid
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListWearableDataQueryVariables,
  APITypes.ListWearableDataQuery
>;
