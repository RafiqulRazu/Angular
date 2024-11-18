import { ActivityModel } from "./activity.model";
import { UserModel } from "./user.model";

export class LeadModel {
    id!: number;
    activity!: ActivityModel;
    salesExecutive!: UserModel;
    status!: string;
    createdAt!: Date;
    updatedAt!: Date;
}