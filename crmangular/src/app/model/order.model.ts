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