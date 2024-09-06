import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { WeddingTitle } from "../wedding/WeddingTitle";

export const CulturalPracticeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="name" source="name" />
        <ReferenceInput source="wedding.id" reference="Wedding" label="Wedding">
          <SelectInput optionText={WeddingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
