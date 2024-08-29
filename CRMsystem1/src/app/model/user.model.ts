import { Customer } from './customer.model';

export class User {
  id!: number;
  name!: string;
  email!: string;
  role!: 'Admin' | 'Sales Executive' | 'Agent';
  customers!: Customer[];
}

