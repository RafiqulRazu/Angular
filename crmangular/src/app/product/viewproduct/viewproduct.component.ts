import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../model/product.model';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrl: './viewproduct.component.css'
})
export class ViewproductComponent implements OnInit{

  products: ProductModel[] = [];

  constructor(
    private productService: ProductService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct() {
    this.productService.getAllProducts().subscribe({
      next: (data: ProductModel[]) => {
        this.products = data;
      },
      error: (error) => {
        console.log('Error fetching products', error);
      }
    });
  }


  deleteProduct(id: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.loadProduct();
        },
        error: (error) => {
          console.log('Error deleting product', error);
        }
      });
    }
  }

  updateProduct(id: number) {
    this.router.navigate(['/updateproduct', id]);
  }

}
