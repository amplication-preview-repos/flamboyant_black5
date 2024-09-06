import { CulturalPracticeCreateNestedManyWithoutWeddingsInput } from "./CulturalPracticeCreateNestedManyWithoutWeddingsInput";
import { RegistrationCreateNestedManyWithoutWeddingsInput } from "./RegistrationCreateNestedManyWithoutWeddingsInput";

export type WeddingCreateInput = {
  culturalPractices?: CulturalPracticeCreateNestedManyWithoutWeddingsInput;
  date?: Date | null;
  description?: string | null;
  host?: string | null;
  location?: string | null;
  registrations?: RegistrationCreateNestedManyWithoutWeddingsInput;
  title?: string | null;
};
