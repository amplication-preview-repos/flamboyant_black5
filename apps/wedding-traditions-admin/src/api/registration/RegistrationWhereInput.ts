import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type RegistrationWhereInput = {
  attendee?: StringNullableFilter;
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  status?: "Option1";
  wedding?: WeddingWhereUniqueInput;
};
