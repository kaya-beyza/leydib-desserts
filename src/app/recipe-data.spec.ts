import { MENU_DATA } from './recipe-data';

describe('RecipeData', () => {
  it('menü verileri doğru yüklenmeli', () => {
    expect(MENU_DATA).toBeTruthy();
    expect(MENU_DATA.length).toBeGreaterThan(0);
  });

  it('her ürünün en az bir seçeneği (option) olmalı', () => {
    MENU_DATA.forEach(item => {
      expect(item.options).toBeDefined();
      expect(item.options.length).toBeGreaterThan(0);
    });
  });

  it('seçeneklerin adı ve fiyatı tanımlı olmalı', () => {
    const magnolia = MENU_DATA.find(i => i.id === 1);
    expect(magnolia?.options[0].name).toContain('Magnolia');
    expect(magnolia?.options[0].price).toBeGreaterThan(0);
  });
});