import { type Schema } from "./schemas";

// Enum of models on schema
export enum m {
  Article = "Article",
  AutomatedUpdate = "AutomatedUpdate",
  BasalBodyTemperature = "BasalBodyTemperature",
  ContraceptiveMethod = "ContraceptiveMethod",
  ContraceptiveReminder = "ContraceptiveReminder",
  DataProtection = "DataProtection",
  FAQ = "FAQ",
  FertilityWindow = "FertilityWindow",
  HealthGoal = "HealthGoal",
  MedicationLog = "MedicationLog",
  MenstrualHealthInsight = "MenstrualHealthInsight",
  OvulationCycle = "OvulationCycle",
  OvulationCycleAnalysis = "OvulationCycleAnalysis",
  OvulationPrediction = "OvulationPrediction",
  OvulationTest = "OvulationTest",
  PredictiveAnalytics = "PredictiveAnalytics",
  PrivacySetting = "PrivacySetting",
  ProgressReport = "ProgressReport",
  SupportGroup = "SupportGroup",
  SymptomLog = "SymptomLog",
  UserForum = "UserForum",
  UserProfile = "UserProfile",
  WearableData = "WearableData",
}

// Define an object that maps m keys to their respective types
type SchemaTypeMap = {
  [Key in m]: Schema[Key]["type"];
};

// Extract the types for each m key
export type Models = {
  [Key in keyof SchemaTypeMap]: SchemaTypeMap[Key];
};
