import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../../functions/post-confirmation/resource";
import { UserProfile } from "./UserProfile";
import { OvulationCycle } from "./OvulationCycle";
import { OvulationPrediction } from "./OvulationPrediction";
import { HealthGoal } from "./HealthGoal";
import { OvulationCycleAnalysis } from "./OvulationCycleAnalysis";
import { FertilityWindow } from "./FertilityWindow";
import { BasalBodyTemperature } from "./BasalBodyTemperature";
import { ContraceptiveReminder } from "./ContraceptiveReminder";
import { ContraceptiveMethod } from "./ContraceptiveMethod";
import { SymptomLog } from "./SymptomLog";
import { MedicationLog } from "./MedicationLog";
import { PrivacySetting } from "./PrivacySetting";
// import { Article } from "./Article";
// import { AutomatedUpdate } from "./AutomatedUpdate";
// import { DataProtection } from "./DataProtection";
// import { FAQ } from "./FAQ";
// import { MenstrualHealthInsight } from "./MenstrualHealthInsight";
// import { OvulationTest } from "./OvulationTest";
// import { PredictiveAnalytics } from "./PredictiveAnalytics";
// import { ProgressReport } from "./ProgressReport";
// import { SupportGroup } from "./SupportGroup";
// import { UserForum } from "./UserForum";
// import { WearableData } from "./WearableData";

const SCHEMA = a
  .schema({
    BasalBodyTemperature,
    ContraceptiveMethod,
    ContraceptiveReminder,
    FertilityWindow,
    HealthGoal,
    MedicationLog,
    OvulationCycle,
    OvulationCycleAnalysis,
    OvulationPrediction,
    PrivacySetting,
    SymptomLog,
    UserProfile,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
