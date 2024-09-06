import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEDDING_TITLE_FIELD } from "../wedding/WeddingTitle";

export const CulturalPracticeList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"CulturalPractices"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wedding" source="wedding.id" reference="Wedding">
          <TextField source={WEDDING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
