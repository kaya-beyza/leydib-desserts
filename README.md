# 🧁 LeydiB Dessert's — Dijital Menü & Masadan Sipariş Deneyimi

<p align="center">
  <img src="public/leydib-logo.png" alt="LeydiB Desserts Logo" width="220" />
</p>

<p align="center">
  <b>Antalya'nın butik lezzetlerini modern web teknolojileriyle buluşturan yeni nesil interaktif dijital menü ve sipariş platformu.</b>
</p>

<p align="center">
  <a href="https://leydib-desserts.vercel.app/" target="_blank">
    <img src="https://img.shields.io/badge/Canlı%20Demo-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo" />
  </a>
  <img src="https://img.shields.io/badge/Angular-21.1.0-DD0031?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
  <img src="https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/State-Angular_Signals-E0234E?style=for-the-badge" alt="Signals" />
  <img src="https://img.shields.io/badge/Design-Responsive_%26_Modern_UI-F5A623?style=for-the-badge" alt="Responsive" />
</p>

---

## 🔗 Canlı Demo

Projeyi canlı ortamda incelemek için:  
👉 **[https://leydib-desserts.vercel.app/](https://leydib-desserts.vercel.app/)**

---

## 📖 Proje Hakkında

**LeydiB Dessert's**, geleneksel kağıt menülerin ötesine geçerek müşterilere zarif, hızlı ve keyifli bir sipariş deneyimi sunmak amacıyla geliştirilmiş modern bir dijital menü web uygulamasıdır.

İlk versiyonundan bu yana baştan sona yenilenen mimarisiyle, **Angular 21** ve reaktif **Signals** mimarisinin gücünü kullanarak; canlı arama, anlık sepet yönetimi, masa seçimi ve detaylı sipariş oluşturma gibi uçtan uca özelliklerle zenginleştirilmiştir.

---

## 📸 Ekran Görüntüleri

<p align="center">
  <img width="95%" alt="LeydiB Desserts Vitrin" src="https://github.com/user-attachments/assets/d3055efd-b6ee-40c9-a6e9-e92526cdd29a" />
</p>

<p align="center">
  <img width="48%" alt="Menü ve Kategoriler" src="https://github.com/user-attachments/assets/a1ed2196-c8d4-43be-98eb-04df11c34955" />
  <img width="48%" alt="Detaylı Ürün İnceleme" src="https://github.com/user-attachments/assets/d532d9d9-96a9-4542-b531-9a35fa93607f" />
</p>

<p align="center">
  <img width="95%" alt="Responsive ve Sepet Deneyimi" src="https://github.com/user-attachments/assets/122802f3-8b19-46d1-ab24-0adc7f4f0cfa" />
</p>

---

## ✨ Öne Çıkan Özellikler (v2.0)

- 🌟 **Açılış Splash Ekranı:** Butik pastane kimliğini yansıtan zarif karşılama ve logo animasyonu.
- 🗂️ **Kategori & Sayaç Sistemi:** Tatlılar ve içecekler arasında anlık filtreleme, her kategorideki ürün sayısını gösteren akıllı rozetler.
- 🔍 **Canlı Arama (Instant Search):** Ürün adında ve lezzet açıklamalarında anlık gerçek zamanlı arama.
- 🍰 **Detaylı Ürün & Çeşit Seçim Modalı:**
  - Farklı lezzet ve porsiyon seçenekleri (Örn: Çilekli, Çikolatalı, Lotuslu Magnolia, Limonlu Cheesecake vb.)
  - Dinamik fiyat güncellemesi ve adet belirleme (+/-).
- 🛒 **İnteraktif Sepet Çekmecesi (Slide-Over Drawer):**
  - Seçilen ürünleri, çeşitleri ve adetleri anlık görüntüleme.
  - Sepet içi miktar artırma, azaltma ve ürün çıkarma.
  - Dinamik toplam sepet tutarı ve ürün adedi sayacı.
- 🪑 **Masa Seçimi & Sipariş Notu:**
  - Masa 1-5, Bahçe ve Paket / Gel-Al masa belirleme imkanı.
  - Şefe/baristaya iletilecek özel müşteri istek notu alanı.
  - "Masadan Sipariş Ver" butonuyla detaylı sipariş özeti simülasyonu.
- 📱 **Tam Responsive & Lüks Tasarım:** Mobil cihazlar, tabletler ve masaüstü ekranlar için optimize edilmiş akıcı arayüz.

---

## 🛠️ Kullanılan Teknolojiler & Mimari

- **Front-End Framework:** [Angular 21](https://angular.dev/) (Standalone Components, yeni Control Flow syntax: `@if`, `@for`)
- **State Yönetimi:** Angular Signals (`signal`, `computed`) ile tam reaktif durum yönetimi
- **Dil:** [TypeScript](https://www.typescriptlang.org/) (Tip güvenliği için `MenuItem`, `MenuOption`, `CartItem` modelleri)
- **Stil & Tasarım:** Vanilla CSS (Özel CSS değişkenleri, cam efekti / glassmorphism, yumuşak geçişler ve gölgeler)
- **Deployment:** Vercel

---

## 📂 Proje Dizin Yapısı

```bash
leydib-desserts/
├── public/                  # Logo, favicon ve görsel varlıklar
│   ├── leydib-logo.png
│   ├── leydib-emblem.png
│   └── leydib-favicon.png
├── src/
│   ├── app/
│   │   ├── models/          # Veri modelleri ve TypeScript arayüzleri
│   │   │   └── menu.model.ts
│   │   ├── home/            # Ana menü bileşeni (HTML, CSS, TS)
│   │   │   ├── home.html
│   │   │   ├── home.css
│   │   │   └── home.ts
│   │   ├── recipe-data.ts   # Menü ürünleri ve fiyatlandırma veri havuzu
│   │   ├── app.ts           # Kök bileşen
│   │   └── app.routes.ts    # Uygulama yönlendirmeleri
│   ├── styles.css           # Global stil tanımlamaları & fontlar
│   └── index.html           # Ana HTML şablonu
├── angular.json             # Angular yapılandırması
├── package.json             # Bağımlılıklar ve npm komutları
└── README.md                # Proje dokümantasyonu
```

---

## 🚀 Kurulum ve Yerel Çalıştırma

Projeyi yerel bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyebilirsiniz:

### Gereksinimler
- **Node.js** (v18 veya üzeri önerilir)
- **npm**

### Adımlar

1. **Depoyu Klonlayın:**
   ```bash
   git clone https://github.com/kaya-beyza/leydib-desserts.git
   cd leydib-desserts
   ```

2. **Bağımlılıkları Yükleyin:**
   ```bash
   npm install
   ```

3. **Geliştirme Sunucusunu Başlatın:**
   ```bash
   npm start
   # veya
   ng serve
   ```

4. **Tarayıcıda Görüntüleyin:**
   Tarayıcınızda `http://localhost:4200/` adresine gidin.

5. **Üretim (Production) Derlemesi:**
   ```bash
   npm run build
   ```

---

## 📌 Gelecek Yol Haritası

- [x] Dinamik Sepet (Cart) sistemi ve çekmece arayüzü
- [x] Masadan sipariş ve müşteri özel notu oluşturma
- [x] Ürün seçenekleri (porsiyon / lezzet çeşitleri)
- [ ] Müşteri değerlendirmeleri ve puanlama sistemi
- [ ] Çoklu dil desteği (TR / EN)
- [ ] Gerçek zamanlı sipariş bildirimleri ve Backend entegrasyonu

---

## 📄 Lisans

Bu proje [MIT](LICENSE) lisansı ile lisanslanmıştır.

---

## 👩‍💻 Geliştirici

**Beyza Kaya**  
- GitHub: [@kaya-beyza](https://github.com/kaya-beyza)  
- Canlı Proje: [leydib-desserts.vercel.app](https://leydib-desserts.vercel.app/)

---

<p align="center">
  <i>LeydiB Dessert's — Sevgiyle ve özenle hazırlandı. ✨</i>
</p>
