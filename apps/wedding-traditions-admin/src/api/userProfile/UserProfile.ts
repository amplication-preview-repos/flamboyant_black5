export type UserProfile = {
  createdAt: Date;
  description: string | null;
  email: string | null;
  id: string;
  name: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
};
