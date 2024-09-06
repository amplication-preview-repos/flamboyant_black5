import { PaymentCreateNestedManyWithoutRegistrationsInput } from "./PaymentCreateNestedManyWithoutRegistrationsInput";
import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type RegistrationCreateInput = {
  attendee?: string | null;
  payments?: PaymentCreateNestedManyWithoutRegistrationsInput;
  status?: "Option1" | null;
  wedding?: WeddingWhereUniqueInput | null;
};
