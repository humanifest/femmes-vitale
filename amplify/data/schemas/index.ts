import { type ClientSchema, a } from "@aws-amplify/backend";
import { postConfirmation } from "../../functions/post-confirmation/resource";
import { UserProfile } from "./UserProfile";
import { OvulationCycle } from "./OvulationCycle";
import { OvulationPrediction } from "./OvulationPrediction";
import { HealthGoal } from "./HealthGoal";
import { OvulationCycleAnalysis } from "./OvulationCycleAnalysis";
import { FertilityWindow } from "./FertilityWindow";
import { BasalBodyTemperature } from "./BasalBodyTemperature";
import { OvulationTest } from "./OvulationTest";
import { ContraceptiveReminder } from "./ContraceptiveReminder";
import { ContraceptiveMethod } from "./ContraceptiveMethod";
import { SymptomLog } from "./SymptomLog";
import { MedicationLog } from "./MedicationLog";
import { PrivacySetting } from "./PrivacySetting";
// import { DataProtection } from "./DataProtection";
// import { PredictiveAnalytics } from "./PredictiveAnalytics";
// import { MenstrualHealthInsight } from "./MenstrualHealthInsight";
// import { Article } from "./Article";
// import { FAQ } from "./FAQ";
// import { AutomatedUpdate } from "./AutomatedUpdate";
// import { UserForum } from "./UserForum";
// import { SupportGroup } from "./SupportGroup";
// import { WearableData } from "./WearableData";
// import { ProgressReport } from "./ProgressReport";

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
    OvulationTest,
    PrivacySetting,
    SymptomLog,
    UserProfile,
  })
  .authorization((allow) => [allow.resource(postConfirmation)]);

export type Schema = ClientSchema<typeof SCHEMA>;
export default SCHEMA;
