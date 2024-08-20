import { a } from "@aws-amplify/backend";
import { m } from "../models";

export const DefaultPrivacyLevel = a.enum(["public", "private", "contacts"]);

export const UserProfile = a
  .model({
    uuid: a.string().required(),
    email: a.string(),
    profileOwner: a.string(),
    avatar: a.string(),
    birthday: a.date(),
    ovulationCycles: a.hasMany(m.OvulationCycle, "userProfileId"),
    medicationLogs: a.hasMany(m.MedicationLog, "userProfileId"),
    ovulationPredictions: a.hasMany(m.OvulationPrediction, "userProfileId"),
    fertilityWindows: a.hasMany(m.FertilityWindow, "userProfileId"),
    basalBodyTemperatures: a.hasMany(m.BasalBodyTemperature, "userProfileId"),
    contraceptiveReminders: a.hasMany(m.ContraceptiveReminder, "userProfileId"),
    contraceptiveMethods: a.hasMany(m.ContraceptiveMethod, "userProfileId"),
    ovulationCycleAnalysis: a.hasMany(
      m.OvulationCycleAnalysis,
      "userProfileId"
    ),
    symptomLogs: a.hasMany(m.SymptomLog, "userProfileId"),
    privacySettings: a.hasMany(m.PrivacySetting, "userProfileId"),
    healthGoals: a.hasMany(m.HealthGoal, "userProfileId"),
  })
  .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]);
