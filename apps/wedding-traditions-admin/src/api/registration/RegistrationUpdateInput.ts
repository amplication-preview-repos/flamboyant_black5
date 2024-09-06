import { PaymentUpdateManyWithoutRegistrationsInput } from "./PaymentUpdateManyWithoutRegistrationsInput";
import { WeddingWhereUniqueInput } from "../wedding/WeddingWhereUniqueInput";

export type RegistrationUpdateInput = {
  attendee?: string | null;
  payments?: PaymentUpdateManyWithoutRegistrationsInput;
  status?: "Option1" | null;
  wedding?: WeddingWhereUniqueInput | null;
};
