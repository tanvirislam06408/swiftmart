export interface User {
  id: string;
  name: string;
  email: string;
  image?: string | null;
  role?: "user" | "admin" | null;
  status: "active" | "blocked";
  createdAt: Date;
  updatedAt: Date;
  emailVerified: boolean;
}