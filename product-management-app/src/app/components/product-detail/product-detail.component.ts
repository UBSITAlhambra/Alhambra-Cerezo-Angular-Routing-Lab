import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product.model';
import { CommonModule, NgClass, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
  imports: [NgClass, NgForOf, NgIf, CommonModule, FormsModule]
})
export class ProductDetailComponent implements OnInit {
  product?: Product;
  isLoading = true;
  purchaseQuantity = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.productService.getProduct(id).subscribe((product: Product | undefined) => {
      if (product) {
        this.product = product;
      }
      this.isLoading = false;
    });
  }

  getRatingColor(rating: number): string {
    if (rating >= 4.5) return 'green';
    if (rating >= 3.5) return 'orange';
    return 'red';
  }

  getStarsArray(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  incrementQuantity(): void {
    if (this.product && this.purchaseQuantity < this.product.quantity) {
      this.purchaseQuantity++;
    }
  }

  decrementQuantity(): void {
    if (this.purchaseQuantity > 1) {
      this.purchaseQuantity--;
    }
  }

  addToCart(): void {
    if (this.product) {
      alert(`Added ${this.purchaseQuantity} of ${this.product.name} to cart.`);
    }
  }

  editProduct(): void {
    if (this.product) {
      this.router.navigate(['/edit-product', this.product.id]);
    }
  }

  deleteProduct(): void {
    if (this.product && confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(this.product.id).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }
}