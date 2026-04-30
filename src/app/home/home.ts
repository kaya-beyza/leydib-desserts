import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_DATA } from '../recipe-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  menuItems = MENU_DATA;
  selectedProduct: any = null;
  selectedCategory: string = 'Hepsi';

  openDetails(product: any) {
    this.selectedProduct = product;
  }

  closeDetails() {
    this.selectedProduct = null;
  }

  setCategory(category: string) {
    this.selectedCategory = category;
  }
}