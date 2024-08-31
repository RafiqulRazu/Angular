import { Customer } from './customer.model';
import { User } from './user.model';

export class Activity {
  id!: number;
  type!: 'Call' | 'Meeting' | 'Email' | 'Note'; // Example types
  date!: Date;
  description!: string;
  customer!: Customer;
  user!: User;
}
