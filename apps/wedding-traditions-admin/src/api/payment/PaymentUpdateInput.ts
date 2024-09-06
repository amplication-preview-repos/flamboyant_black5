import { RegistrationWhereUniqueInput } from "../registration/RegistrationWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  date?: Date | null;
  registration?: RegistrationWhereUniqueInput | null;
};
