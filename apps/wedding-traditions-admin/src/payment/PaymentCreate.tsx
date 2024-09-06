import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { RegistrationTitle } from "../registration/RegistrationTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
