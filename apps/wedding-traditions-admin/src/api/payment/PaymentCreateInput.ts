import { RegistrationWhereUniqueInput } from "../registration/RegistrationWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  date?: Date | null;
  registration?: RegistrationWhereUniqueInput | null;
};
