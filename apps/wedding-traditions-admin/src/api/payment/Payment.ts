import { Registration } from "../registration/Registration";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  registration?: Registration | null;
  updatedAt: Date;
};
