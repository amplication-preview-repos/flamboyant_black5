import { SortOrder } from "../../util/SortOrder";

export type RegistrationOrderByInput = {
  attendee?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  weddingId?: SortOrder;
};
