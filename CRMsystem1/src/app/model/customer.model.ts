export class Customer {
    id!: number;
    name!: string;
    email!: string;
    phone!: string;
    company!: string;
    status!: 'Active' | 'Inactive' | 'Prospect' | 'Lead';
    createdAt!: Date;
    updatedAt!: Date;

  }