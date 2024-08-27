export class Customer {
    id!: string;
    name!: string;
    email!: string;
    phone!: string;
    company!: string;
    createdAt!: string;
    updatedAt!: string;
    status!: 'Active' | 'Inactive' | 'Prospect' | 'Lead';

  }