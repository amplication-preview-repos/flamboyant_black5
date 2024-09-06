import { SortOrder } from "../../util/SortOrder";

export type UserProfileOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  email?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  role?: SortOrder;
  updatedAt?: SortOrder;
};
