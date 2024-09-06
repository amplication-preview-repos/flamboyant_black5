import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WeddingTitle } from "../wedding/WeddingTitle";

export const CulturalPracticeCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="wedding.id" reference="Wedding" label="Wedding">
          <SelectInput optionText={WeddingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
