import { CulturalPracticeListRelationFilter } from "../culturalPractice/CulturalPracticeListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RegistrationListRelationFilter } from "../registration/RegistrationListRelationFilter";

export type WeddingWhereInput = {
  culturalPractices?: CulturalPracticeListRelationFilter;
  date?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  host?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  registrations?: RegistrationListRelationFilter;
  title?: StringNullableFilter;
};
