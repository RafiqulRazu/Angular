// import { CustomerModel } from './customer.model';
// import { UserModel } from './user.model';
// import { orderItemModel } from './orderItem.model';

// export class OrderModel {
//   id!: number;
//   leadId?: number; // Assuming Lead is optional in Angular
//   customer!: CustomerModel;
//   soldBy!: UserModel;
//   orderItems!: orderItemModel[];
//   orderDate!: Date;
//   totalAmount!: number;
//   status!: OrderStatus;

//   constructor() {
//     this.orderItems = [];
//   }
// }

// export enum OrderStatus {
//   PENDING = 'PENDING',
//   APPROVED = 'APPROVED',
//   REJECTED = 'REJECTED',
//   DELIVERED = 'DELIVERED',
// }




import { LeadModel } from "./lead.model";
import { ProductModel } from "./product.model";

export class OrderModel {
    id!: number;
    lead!: LeadModel;
    product!: ProductModel;
    orderDate!: Date;
    quantity!: number;
    totalAmount!: number;
    status!: string;
  }