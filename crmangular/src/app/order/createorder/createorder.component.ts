import { Component, OnInit } from '@angular/core';
import { LeadModel } from '../../model/lead.model';
import { ProductModel } from '../../model/product.model';
import { OrderModel } from '../../model/order.model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from '../../service/product.service';
import { CustomerService } from '../../service/customer.service';
import { LeadService } from '../../service/lead.service';
import { OrderService } from '../../service/order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createorder',
  templateUrl: './createorder.component.html',
  styleUrl: './createorder.component.css'
})
export class CreateorderComponent implements OnInit{

  leads: LeadModel[] = []; // Rename to 'customers' for clarity
  products: ProductModel[] = [];
  order: OrderModel = new OrderModel();
  formValue!: FormGroup;



  constructor(
    private productService: ProductService,
    private leadService: LeadService,
    private orderService: OrderService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadLeads();
    this.loadProducts();

  this.formValue = this.formBuilder.group({
    lead: [null],
    product: [null],
    orderDate: [''],
    quantity: [''],
    totalAmount: [''],
    status: ['']

    
  });
}

// Fetch all customers
loadLeads() {
  this.leadService.getLeads().subscribe({
    next: res => {
      this.leads = res;
      console.log('Customers loaded:', this.leads);
    },
    error: error => {
      console.log('Error loading customers:', error);
    }
  });
}

loadProducts() {
  this.productService.getAllProducts().subscribe({
    next: res => {
      this.products = res;
      console.log('Products loaded:', this.products);
    },
    error: error => {
      console.log('Error loading products:', error);
    }
  });
}

// Create a new order
createOrder() {
  // Initialize order with form values
  this.order = {
    ...this.order,
    
    lead: this.formValue.value.lead,
    product: this.formValue.value.product,
    orderDate: this.formValue.value.orderDate,
    quantity: this.formValue.value.quantity,
    totalAmount: this.formValue.value.totalAmount,
    status: this.formValue.value.status
  };

  // Call the service to create the order
  this.orderService.createOrder(this.order).subscribe({
    next: res => {
      console.log('Order created:', res);
      this.formValue.reset();
      this.router.navigate(['/vieworder']);
    },
    error: error => {
      console.log('Error creating order:', error);
    }
  });
}




}
