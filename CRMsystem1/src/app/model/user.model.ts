export class User {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
  role!: 'Admin' | 'Sales Executive' | 'Agent';
}

