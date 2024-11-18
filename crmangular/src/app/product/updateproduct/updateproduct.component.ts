import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../../model/product.model';
import { ProductService } from '../../service/product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updateproduct',
  templateUrl: './updateproduct.component.html',
  styleUrl: './updateproduct.component.css'
})
export class UpdateproductComponent implements OnInit {


  id?: number;
  product: ProductModel = new ProductModel();

  constructor(private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.productService.getProductById(this.id!)
      .subscribe({
        next: res => {
          this.product = res;
        },
        error: error => {
          console.log(error);
        }
      });
  }

  updateProduct() {
    this.productService.updateProduct(this.id!, this.product)
      .subscribe({
        next: res => {
          this.router.navigate(['/viewproduct']);
        },
        error: error => {
          console.log(error);
        }

      });
  }

}
