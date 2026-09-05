import { Component, signal, computed, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MENU_DATA } from '../recipe-data';
import { MenuItem, MenuOption, CartItem } from '../models/menu.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent implements OnInit {
  isLoading = signal<boolean>(true);
  menuItems = signal<MenuItem[]>(MENU_DATA);

  ngOnInit() {
    // Menü ilk açılışında gösterilen şık hayalet / splash ekranı (1.6 sn)
    setTimeout(() => {
      this.isLoading.set(false);
    }, 1600);
  }

  dismissSplash() {
    this.isLoading.set(false);
  }
  selectedCategory = signal<string>('Hepsi');
  searchQuery = signal<string>('');
  selectedTable = signal<string>('Masa 1');
  
  // Modal State
  selectedProduct = signal<MenuItem | null>(null);
  selectedOption = signal<MenuOption | null>(null);
  modalQuantity = signal<number>(1);

  // Cart State
  cartItems = signal<CartItem[]>([]);
  isCartOpen = signal<boolean>(false);
  customerNote = signal<string>('');

  tables = ['Masa 1', 'Masa 2', 'Masa 3', 'Masa 4', 'Masa 5', 'Bahçe 1', 'Paket / Gel-Al'];

  filteredMenuItems = computed(() => {
    const category = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();

    return this.menuItems().filter(item => {
      const matchesCategory = category === 'Hepsi' || item.category === category;
      const matchesQuery = !query || 
        item.name.toLowerCase().includes(query) || 
        item.description.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  });

  categoryCounts = computed(() => {
    const items = this.menuItems();
    return {
      all: items.length,
      tatlilar: items.filter(i => i.category === 'Tatlılar').length,
      icecekler: items.filter(i => i.category === 'İçecekler').length,
    };
  });

  totalCartCount = computed(() => this.cartItems().reduce((sum, item) => sum + item.quantity, 0));
  
  totalCartPrice = computed(() => 
    this.cartItems().reduce((sum, item) => sum + (item.selectedOption.price * item.quantity), 0)
  );

  getMinPrice(product: MenuItem): number {
    if (!product.options || product.options.length === 0) return 0;
    return Math.min(...product.options.map(o => o.price));
  }

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }

  onSearch(event: Event) {
    const input = event.target as HTMLInputElement;
    this.searchQuery.set(input.value);
  }

  setTable(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedTable.set(select.value);
  }

  // Modal Actions
  openDetails(product: MenuItem) {
    this.selectedProduct.set(product);
    this.modalQuantity.set(1);
    if (product.options && product.options.length > 0) {
      this.selectedOption.set(product.options[0]);
    } else {
      this.selectedOption.set(null);
    }
  }

  closeDetails() {
    this.selectedProduct.set(null);
    this.selectedOption.set(null);
  }

  selectOption(opt: MenuOption) {
    this.selectedOption.set(opt);
  }

  incrementModalQty() {
    this.modalQuantity.update(q => q + 1);
  }

  decrementModalQty() {
    if (this.modalQuantity() > 1) {
      this.modalQuantity.update(q => q - 1);
    }
  }

  // Cart Actions
  addToCart() {
    const product = this.selectedProduct();
    const option = this.selectedOption();
    const quantity = this.modalQuantity();

    if (!product || !option) return;

    const currentCart = [...this.cartItems()];
    const existingIndex = currentCart.findIndex(
      ci => ci.product.id === product.id && ci.selectedOption.name === option.name
    );

    if (existingIndex > -1) {
      currentCart[existingIndex].quantity += quantity;
    } else {
      currentCart.push({ product, selectedOption: option, quantity });
    }

    this.cartItems.set(currentCart);
    this.closeDetails();
    this.isCartOpen.set(true); // Sipariş verildikten sonra sepeti göster
  }

  updateCartQty(item: CartItem, delta: number) {
    const currentCart = [...this.cartItems()];
    const index = currentCart.findIndex(
      ci => ci.product.id === item.product.id && ci.selectedOption.name === item.selectedOption.name
    );

    if (index > -1) {
      currentCart[index].quantity += delta;
      if (currentCart[index].quantity <= 0) {
        currentCart.splice(index, 1);
      }
      this.cartItems.set(currentCart);
    }
  }

  removeFromCart(item: CartItem) {
    const currentCart = this.cartItems().filter(
      ci => !(ci.product.id === item.product.id && ci.selectedOption.name === item.selectedOption.name)
    );
    this.cartItems.set(currentCart);
  }

  toggleCart() {
    this.isCartOpen.update(open => !open);
  }

  onNoteInput(event: Event) {
    const input = event.target as HTMLTextAreaElement;
    this.customerNote.set(input.value);
  }

  sendTableOrder() {
    if (this.cartItems().length === 0) return;

    let orderSummary = `LeydiB Dessert's - Masadan Sipariş\n\n`;
    orderSummary += `Masa: ${this.selectedTable()}\n`;
    orderSummary += `------------------------------\n`;

    this.cartItems().forEach((item, idx) => {
      orderSummary += `${idx + 1}. ${item.product.name} (${item.selectedOption.name}) x${item.quantity} - ${item.selectedOption.price * item.quantity} ₺\n`;
    });

    orderSummary += `------------------------------\n`;
    orderSummary += `Toplam Tutar: ${this.totalCartPrice()} ₺\n`;

    if (this.customerNote().trim()) {
      orderSummary += `Not: ${this.customerNote().trim()}\n`;
    }

    alert(`Siparişiniz ${this.selectedTable()} için alındı!\n\n` + orderSummary);
  }
}