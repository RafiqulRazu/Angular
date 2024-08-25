export class Customer {
    id!: number;
    name!: string;
    email!: string;
    phone!: string;
    company!: string;
    createdAt!: Date;
    updatedAt!: Date;
    status!: 'Active' | 'Inactive' | 'Prospect' | 'Lead';

  }