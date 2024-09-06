import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type CulturalPracticeWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  wedding?: WeddingWhereUniqueInput;
};
