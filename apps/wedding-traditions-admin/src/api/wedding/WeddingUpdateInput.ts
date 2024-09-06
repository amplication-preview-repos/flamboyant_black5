import { CulturalPracticeUpdateManyWithoutWeddingsInput } from "./CulturalPracticeUpdateManyWithoutWeddingsInput";
import { RegistrationUpdateManyWithoutWeddingsInput } from "./RegistrationUpdateManyWithoutWeddingsInput";

export type WeddingUpdateInput = {
  culturalPractices?: CulturalPracticeUpdateManyWithoutWeddingsInput;
  date?: Date | null;
  description?: string | null;
  host?: string | null;
  location?: string | null;
  registrations?: RegistrationUpdateManyWithoutWeddingsInput;
  title?: string | null;
};
