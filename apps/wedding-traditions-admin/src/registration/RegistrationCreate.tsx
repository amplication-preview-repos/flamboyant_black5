import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";

import { PaymentTitle } from "../payment/PaymentTitle";
import { WeddingTitle } from "../wedding/WeddingTitle";

export const RegistrationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Attendee" source="attendee" />
        <ReferenceArrayInput
          source="payments"
          reference="Payment"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={PaymentTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput source="wedding.id" reference="Wedding" label="Wedding">
          <SelectInput optionText={WeddingTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
