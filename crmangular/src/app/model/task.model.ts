import { UserModel } from './user.model';

export class TaskModel {
  id?: number;
  deadline?: Date;
  description?: string;
  targetAmount?: number;
  salesAmount?: number;
  salesExecutive: UserModel = new UserModel();
}
