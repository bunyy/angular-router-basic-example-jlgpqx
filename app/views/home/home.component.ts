import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../app.component';

@Component({
  selector: 'home',
  template: `
    <div class="container">
  <div class="card">
    <img class="card-img-top product-image" [src]="product.image" alt="Product image">
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">{{ product.description }}</p>
      <p>Category: {{ product.category }}</p>
      <p>Rating: {{ product.rating }}</p>
      <!-- Display static reviews or fetch them if available -->
    </div>
  </div>
  <button class="btn btn-primary" (click)="goBack()">Back</button>
</div>
  `,
})
export class HomeViewComponent {
  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router // Inject your ProductService if you're using a service to fetch product data
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    // Fetch the product details using the productId
    // For now, assuming you have a getProductById method
    this.product = getProductById(productId);
  }

  goBack(): void {
    this.router.navigate(['/']);
  }
}
