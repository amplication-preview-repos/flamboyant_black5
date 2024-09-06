import { CulturalPractice } from "../culturalPractice/CulturalPractice";
import { Registration } from "../registration/Registration";

export type Wedding = {
  createdAt: Date;
  culturalPractices?: Array<CulturalPractice>;
  date: Date | null;
  description: string | null;
  host: string | null;
  id: string;
  location: string | null;
  registrations?: Array<Registration>;
  title: string | null;
  updatedAt: Date;
};
