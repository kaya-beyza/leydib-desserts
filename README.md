# LeydiB Dessert's — Dijital Menü & Sipariş Deneyimi

<p align="center">
  <img src="public/leydib-logo.png" alt="LeydiB Desserts Logo" width="200" />
</p>

<p align="center">
  Anlık sepet, masa seçimi ve dinamik menü yönetimi sunan interaktif sipariş platformu.
</p>

<p align="center">
  <a href="https://leydib-desserts.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Canlı%20Demo-Vercel-black?style=flat-square&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Angular-21.1.0-DD0031?style=flat-square&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/State-Signals-E0234E?style=flat-square" alt="Signals" />
</p>

---

## Canlı Demo

Uygulamayı tarayıcınızda deneyimlemek için:  
**[leydib-desserts.vercel.app](https://leydib-desserts.vercel.app/)**

---

## Projenin Hikayesi ve Gelişimi

Merhaba! Ben Beyza.

LeydiB Dessert's, Angular ekosistemine adım attığımda hayata geçirdiğim ilk projelerimden biriydi. Başlangıçta temel amacım; teoride öğrendiğim bileşen mimarisini somutlaştırmak, Antalya'daki butik bir pastane konsepti üzerinden sade bir dijital menü arayüzü sunmaktı.

Zaman içerisinde hem modern web geliştirme pratiklerimi ilerletmek hem de projeyi gerçek bir işletmede kullanılabilecek olgunluğa ulaştırmak istedim. Bu doğrultuda uygulamayı Angular 21 sürümüne taşıdım ve baştan sona yeniden kurguladım. Yalnızca statik bir menü olmanın ötesine geçerek; müşterinin masasında otururken ürün çeşitlerini inceleyebildiği, sepetini yönetebildiği ve siparişini oluşturabildiği dinamik, yaşayan bir deneyim tasarladım.

---

## Neler Değişti ve Hangi Özellikler Eklendi?

Projenin ilk versiyonuna kıyasla gerçekleştirdiğim başlıca yenilikler:

- **Reaktif State Yönetimi (Angular Signals):** Veri akışını `signal` ve `computed` yapılarıyla kurarak anlık fiyat, sepet ve filtreleme güncellemelerini yüksek performansla yönettim.
- **İnteraktif Sepet Çekmecesi:** Kullanıcıların seçtiği ürünleri detaylarıyla inceleyebildiği, adet güncelleyebildiği veya çıkarabildiği akıcı bir sepet paneli entegre ettim.
- **Detaylı Ürün & Lezzet Seçenekleri:** Magnolia, Cheesecake veya Tart gibi lezzetlerin farklı çeşitlerini (Lotuslu, Çilekli, Limonlu vb.) fiyatlandırmalarıyla birlikte sunan modal yapısını hayata geçirdim.
- **Masadan Sipariş & Not Sistemi:** Müşterilerin bulundukları masayı (Masa 1-5, Bahçe, Gel-Al) seçebilmelerine ve siparişlerine özel istek notu ekleyebilmelerine imkan tanıdım.
- **Canlı Arama & Akıllı Filtreleme:** Menü içerisinde anında arama yapabilen ve kategorilerdeki ürün adedini anlık yansıtan dinamik sayaçlar ekledim.
- **Yenilenen Görsel Kimlik & Arayüz:** Butik pastane ruhuna uygun özel amblem, tipografi, açılış karşılama ekranı ve tamamen responsive bir tasarım dili geliştirdim.

---

## Teknik Altyapı

- **Framework:** Angular 21 (Standalone Components, yeni Control Flow syntax: `@if`, `@for`)
- **Durum Yönetimi:** Angular Signals (`signal`, `computed`)
- **Programlama Dili:** TypeScript
- **Stil & Arayüz:** Vanilla CSS (CSS Değişkenleri, Glassmorphism, Responsive Grid / Flexbox)
- **Dağıtım (Deployment):** Vercel

---

## Dizin Yapısı

```text
leydib-desserts/
├── public/                  # Logo, FavIcon ve Görsel Varlıklar
├── src/
│   ├── app/
│   │   ├── models/          # TypeScript Veri Modelleri ve Arayüzler
│   │   │   └── menu.model.ts
│   │   ├── home/            # Ana menü ve sipariş bileşeni (HTML, CSS, TS)
│   │   ├── recipe-data.ts   # Menü içeriği ve fiyatlandırma veri havuzu
│   │   ├── app.ts           # Kök bileşen
│   │   └── app.routes.ts    # Sayfa yönlendirmeleri
│   ├── styles.css           # Global stil tanımlamaları ve değişkenler
│   └── index.html           # Ana HTML şablonu
├── package.json
└── README.md
```

---

## Kurulum ve Çalıştırma

Projeyi yerel ortamınızda incelemek ve çalıştırmak için:

1. Depoyu klonlayın:
```bash
git clone https://github.com/kaya-beyza/leydib-desserts.git
cd leydib-desserts
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm start
```
Tarayıcınızda `http://localhost:4200` adresini açarak uygulamayı görüntüleyebilirsiniz.

---

## Yol Haritası

- [x] Dinamik sepet çekmecesi ve miktar yönetimi
- [x] Masadan sipariş simülasyonu ve müşteri notu alanı
- [x] Ürün varyasyonları ve lezzet seçenekleri
- [ ] Çoklu dil desteği (Türkçe / İngilizce)
- [ ] Müşteri puanlama ve geri bildirim sistemi
- [ ] Back-End & Veri Tabanı entegrasyonu

---

## İletişim

**Beyza Kaya**  
- GitHub: [@kaya-beyza](https://github.com/kaya-beyza)  
- Canlı Uygulama: [leydib-desserts.vercel.app](https://leydib-desserts.vercel.app/)

---

<p align="center">
  <sub>LeydiB Dessert's © 2026 — Beyza Kaya</sub>
</p>
