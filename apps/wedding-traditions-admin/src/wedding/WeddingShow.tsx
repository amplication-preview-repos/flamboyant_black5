import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { WEDDING_TITLE_FIELD } from "./WeddingTitle";

export const WeddingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <TextField label="Host" source="host" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="title" source="title" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="CulturalPractice"
          target="weddingId"
          label="CulturalPractices"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wedding"
              source="wedding.id"
              reference="Wedding"
            >
              <TextField source={WEDDING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Registration"
          target="weddingId"
          label="Registrations"
        >
          <Datagrid rowClick="show">
            <TextField label="Attendee" source="attendee" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="status" source="status" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField
              label="Wedding"
              source="wedding.id"
              reference="Wedding"
            >
              <TextField source={WEDDING_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
