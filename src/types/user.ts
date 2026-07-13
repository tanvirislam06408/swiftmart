export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: "user" | "admin" | null;
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}