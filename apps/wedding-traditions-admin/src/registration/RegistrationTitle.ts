import { Registration as TRegistration } from "../api/registration/Registration";

export const REGISTRATION_TITLE_FIELD = "attendee";

export const RegistrationTitle = (record: TRegistration): string => {
  return record.attendee?.toString() || String(record.id);
};
