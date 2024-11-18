import { CustomerModel } from "./customer.model";
import { UserModel } from "./user.model";

export class ActivityModel {
    id!: number;
    activityType!: string; // 'Call', 'Email', 'Meeting'
    description!: string;
    activityDate!: string; // Use string or Date depending on how you handle dates
    customer!: CustomerModel; // Reference to Customer object
    agent!: UserModel; // Reference to User object (agent)
  }