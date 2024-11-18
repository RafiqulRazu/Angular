export class UserModel {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  phone!: string;
  role!: 'ADMIN' | 'AGENT' | 'SALES_EXECUTIVE';  // Enum to match backend role
  // status!: 'ACTIVE' | 'INACTIVE';  // Status as enum values
  }
  