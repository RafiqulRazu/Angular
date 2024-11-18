export class ProductModel {
  id?: number; 
  name?: string; 
  unitPrice?: number;
  stock?: number; 
  vat?: number; 
  status?: ProductStatus;
}

export enum ProductStatus {
  AVAILABLE = 'AVAILABLE',
  OUT_OF_STOCK = 'OUT_OF_STOCK',
}
