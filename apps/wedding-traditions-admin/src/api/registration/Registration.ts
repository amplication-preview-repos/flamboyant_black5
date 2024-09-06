import { Payment } from "../payment/Payment";
import { Wedding } from "../wedding/Wedding";

export type Registration = {
  attendee: string | null;
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  status?: "Option1" | null;
  updatedAt: Date;
  wedding?: Wedding | null;
};
