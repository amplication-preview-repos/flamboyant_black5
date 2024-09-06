import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RegistrationTitle } from "../registration/RegistrationTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
        <ReferenceInput
          source="registration.id"
          reference="Registration"
          label="Registration"
        >
          <SelectInput optionText={RegistrationTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
