import { CustomerModel } from "./customer.model";
import { UserModel } from "./user.model";

export class ActivityModel {
    id!: number;
    activityType!: string; 
    description!: string;
    activityDate!: string; 
    customer!: CustomerModel;
    agent!: UserModel; 
  }