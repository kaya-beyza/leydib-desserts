export interface MenuOption {
  name: string;
  price: number;
}

export interface MenuItem {
  id: number;
  name: string;
  category: string;
  isPopular?: boolean;
  description: string;
  image: string;
  options: MenuOption[];
}

export interface CartItem {
  product: MenuItem;
  selectedOption: MenuOption;
  quantity: number;
}
