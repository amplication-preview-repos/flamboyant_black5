import { Wedding } from "../wedding/Wedding";

export type CulturalPractice = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
  wedding?: Wedding | null;
};
