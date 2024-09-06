import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { WEDDING_TITLE_FIELD } from "../wedding/WeddingTitle";

export const RegistrationList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Registrations"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Attendee" source="attendee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wedding" source="wedding.id" reference="Wedding">
          <TextField source={WEDDING_TITLE_FIELD} />
        </ReferenceField>
      </Datagrid>
    </List>
  );
};
