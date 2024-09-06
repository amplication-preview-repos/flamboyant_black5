import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type CulturalPracticeCreateInput = {
  description?: string | null;
  name?: string | null;
  wedding?: WeddingWhereUniqueInput | null;
};
