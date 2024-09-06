import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { REGISTRATION_TITLE_FIELD } from "./RegistrationTitle";
import { WEDDING_TITLE_FIELD } from "../wedding/WeddingTitle";

export const RegistrationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Attendee" source="attendee" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="status" source="status" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="Wedding" source="wedding.id" reference="Wedding">
          <TextField source={WEDDING_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Payment"
          target="registrationId"
          label="Payments"
        >
          <Datagrid rowClick="show">
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="Registration"
              source="registration.id"
              reference="Registration"
            >
              <TextField source={REGISTRATION_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
