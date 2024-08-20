import { type Schema } from "./schemas";

// Enum of models on schema
export enum m {
  BasalBodyTemperature = "BasalBodyTemperature",
  ContraceptiveMethod = "ContraceptiveMethod",
  ContraceptiveReminder = "ContraceptiveReminder",
  FertilityWindow = "FertilityWindow",
  HealthGoal = "HealthGoal",
  MedicationLog = "MedicationLog",
  OvulationCycle = "OvulationCycle",
  OvulationCycleAnalysis = "OvulationCycleAnalysis",
  OvulationPrediction = "OvulationPrediction",
  OvulationTest = "OvulationTest",
  PrivacySetting = "PrivacySetting",
  SymptomLog = "SymptomLog",
  UserProfile = "UserProfile",
}

// Define an object that maps m keys to their respective types
type SchemaTypeMap = {
  [Key in m]: Schema[Key]["type"];
};

// Extract the types for each m key
export type Models = {
  [Key in keyof SchemaTypeMap]: SchemaTypeMap[Key];
};

export type _BasalBodyTemperature = Models[m.BasalBodyTemperature];
export type _ContraceptiveMethod = Models[m.ContraceptiveMethod];
export type _ContraceptiveReminder = Models[m.ContraceptiveReminder];
export type _FertilityWindow = Models[m.FertilityWindow];
export type _MedicationLog = Models[m.MedicationLog];
export type _OvulationCycle = Models[m.OvulationCycle];
export type _OvulationCycleAnalysis = Models[m.OvulationCycleAnalysis];
export type _OvulationPrediction = Models[m.OvulationPrediction];
export type _OvulationTest = Models[m.OvulationTest];
export type _PrivacySetting = Models[m.PrivacySetting];
export type _SymptomLog = Models[m.SymptomLog];
export type _UserProfile = Models[m.UserProfile];
