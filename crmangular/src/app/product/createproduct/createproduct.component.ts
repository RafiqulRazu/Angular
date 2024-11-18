import { Component } from '@angular/core';
import { ProductModel, ProductStatus } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createproduct',
  templateUrl: './createproduct.component.html',
  styleUrls: ['./createproduct.component.css']
})
export class CreateproductComponent {
  product: ProductModel = new ProductModel();
  ProductStatus = ProductStatus;

  constructor(private productService: ProductService,
    private router: Router) { }

  createProduct() {
    this.productService.createProduct(this.product).subscribe({
      next: (response) => {
        console.log('Product created successfully:', response);
        this.router.navigate(['/viewproduct']); // Navigate to the product list page after creation
      },
      error: (error) => {
        console.error('Error creating product:', error);
      },
    });
  }
}
