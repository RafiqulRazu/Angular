import { Customer } from './customer.model';
import { Activity } from './activity.model';

export class User {
  id!: number;
  name!: string;
  email!: string;
  role!: 'Admin' | 'Sales Executive' | 'Agent'; 
  customers!: Customer[];  
  activities!: Activity[];
}
