import { Component } from '@angular/core';

export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  liked: boolean;
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  searchTerm: string = '';
  // Example product data
  products: Product[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/150',
      title: 'Product One',
      description: 'This is a short description of the first product.',
      liked: false,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/150',
      title: 'Product Two',
      description: 'This is a short description of the second product.',
      liked: false,
    },
    // ...more products
  ];

  filteredProducts: Product[] = this.products;

  onSearch(): void {
    if (!this.searchTerm) {
      this.filteredProducts = this.products;
    } else {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(this.searchTerm.toLowerCase())
      );
    }
  }

  // Toggles the 'liked' status of a product
  toggleLikeProduct(productId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product) {
      product.liked = !product.liked;
    }
  }

  // Removes a product by id
  removeProduct(productId: number): void {
    // Implement confirmation logic here if needed
    this.products = this.products.filter((p) => p.id !== productId);
  }

  // Method to add a product
  // This is a simple push to the array for demonstration
  // In a real app, you would likely use a form to get user input
  addProduct(): void {
    const newProduct: Product = {
      id: this.products.length + 1, // Simple ID assignment
      image: 'https://via.placeholder.com/150',
      title: `Product ${this.products.length + 1}`,
      description: 'Description of new product.',
      liked: false,
    };
    this.products.push(newProduct);
  }
}
