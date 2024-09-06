import { Wedding as TWedding } from "../api/wedding/Wedding";

export const WEDDING_TITLE_FIELD = "title";

export const WeddingTitle = (record: TWedding): string => {
  return record.title?.toString() || String(record.id);
};
