export class Interaction{
    id!: string;
    type!: 'Email' | 'Phone Call' | 'Meeting';
    notes!: string;
    date!: string;
    
        Customer!: {
            id: string | undefined;
            name: string | undefined;
            email: string | undefined;
            phone: string | undefined;
            company: string | undefined;
            createdAt: string | undefined;
            updatedAt: string | undefined;
            status: string | undefined;
        }
  customer: any;
    }
