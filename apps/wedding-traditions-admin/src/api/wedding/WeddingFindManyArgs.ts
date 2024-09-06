import { WeddingWhereInput } from "./WeddingWhereInput";
import { WeddingOrderByInput } from "./WeddingOrderByInput";

export type WeddingFindManyArgs = {
  where?: WeddingWhereInput;
  orderBy?: Array<WeddingOrderByInput>;
  skip?: number;
  take?: number;
};
