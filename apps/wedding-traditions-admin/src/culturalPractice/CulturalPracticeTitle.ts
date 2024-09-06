import { CulturalPractice as TCulturalPractice } from "../api/culturalPractice/CulturalPractice";

export const CULTURALPRACTICE_TITLE_FIELD = "name";

export const CulturalPracticeTitle = (record: TCulturalPractice): string => {
  return record.name?.toString() || String(record.id);
};
