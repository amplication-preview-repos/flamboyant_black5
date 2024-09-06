import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { RegistrationWhereUniqueInput } from "../registration/RegistrationWhereUniqueInput";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
  registration?: RegistrationWhereUniqueInput;
};
