import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type CulturalPracticeUpdateInput = {
  description?: string | null;
  name?: string | null;
  wedding?: WeddingWhereUniqueInput | null;
};
