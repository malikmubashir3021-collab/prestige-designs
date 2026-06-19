const CDN = 'https://appollostore.com/cdn/shop/files/';

const products = [
  { id: 1, name: 'Crisper Food Container (600ml)', category: 'kitchen', price: 480, oldPrice: 600, rating: 4, reviews: 128, badge: 'sale', image: CDN+'1_63018c31-55a2-4473-a1d6-0c146a0c4592_600x600.png', description: 'FDA Approved Food Grade Material. Keeps cereals fresh and dry. Small - 12.5 x 16 x 5.2cm', features: ['FDA Approved Food Grade Material', 'ECO Friendly', 'Keeps food fresh and dry', 'Small - 12.5 x 16 x 5.2cm', 'Stackable design'] },
  { id: 2, name: 'Chef Food Warmer XL (4000ml)', category: 'kitchen', price: 2520, oldPrice: 3150, rating: 5, reviews: 89, badge: 'best', image: CDN+'Hot-pot-food-warmer_Xl_600x600.jpg', description: 'Non-Magnetic stainless steel liner. Retains heat for 4-6 hours. Perfect for Roti, BBQ, Home & Picnic.', features: ['Stainless steel liner', 'Retains heat 4-6 hours', 'Perfect for Roti & BBQ', 'Extra Large - 38x31x14cm', 'Ideal for home & picnic'] },
  { id: 3, name: 'Easy Stack Jar Pack of 3', category: 'kitchen', price: 800, oldPrice: 1000, rating: 4, reviews: 205, badge: '', image: CDN+'Easy_Stack_Jar_Sml_Size_600x600.png', description: 'Smart storage jars with airtight twist-lock lids. Space-saving stackable design in 3 sizes.', features: ['Airtight twist-lock lid', 'Space-saving stackable', '3 sizes - S/M/L', 'Food-safe materials', 'Easy grip handle'] },
  { id: 4, name: 'Eco Lock Food Keeper (Medium)', category: 'kitchen', price: 1320, oldPrice: 1650, rating: 4, reviews: 67, badge: 'new', image: CDN+'2_a21ea9b0-41d5-4d7e-8eed-71455a645cc4_600x600.webp', description: 'Air-tight and leak-proof crystal clear container. FDA Approved food-grade material. Medium 24x20x8cm.', features: ['Air-tight & leak-proof', 'Crystal clear body', 'FDA Approved material', 'Medium - 24x20x8cm', 'Lightweight'] },
  { id: 5, name: 'Alpha Cooler M-1 (7Ltr)', category: 'coolers', price: 1920, oldPrice: 2400, rating: 5, reviews: 312, badge: 'best', image: CDN+'AlphaCooler7L-M1-Orange-Resize850x850px_600x600.webp', description: 'Premium insulation water cooler for indoor/outdoor. 99% Pure Virgin Plastic, FDA Approved, BPA free.', features: ['Premium insulation', '99% Pure Virgin Plastic', 'FDA Approved & BPA free', 'Large bail handle', '7 Liter capacity', '27.3x25x23.5cm'] },
  { id: 6, name: 'Hydro Water Dispenser', category: 'home', price: 1080, oldPrice: 1350, rating: 4, reviews: 156, badge: '', image: CDN+'Hydro_Dispenser_Red-Appollo_600x600.webp', description: 'Non-electric water dispenser. Fits 4.5L to 18.9L bottles. Lightweight, leak-proof, one-key operation.', features: ['No electricity needed', 'Fits 4.5L-18.9L bottles', 'Leak-proof design', 'One-key operation', 'Lightweight & portable'] },
  { id: 7, name: 'Magnum Cooler 22 Litre', category: 'coolers', price: 5160, oldPrice: 6450, rating: 5, reviews: 78, badge: 'best', image: CDN+'Magnum_Cooler_22_Litre_In_Green_600x600.webp', description: 'PU foam insulated cooler with easy-pull tap and dual handles. Keeps beverages cool for 4-6 hours.', features: ['PU Insulated - 4-6hrs cooling', 'Easy-pull tap', 'Dual handles', 'Leakproof twist-lock lid', 'Heavy-duty exterior', '39x36x43cm'] },
  { id: 8, name: 'Rush Sports Bottle (1Ltr)', category: 'home', price: 1360, oldPrice: 1700, rating: 4, reviews: 243, badge: '', image: CDN+'rush_sports_bottle_blue_600x600.png', description: 'Sports bottle with twist-lock cap and controlled sipping spout. Perfect for active lifestyles.', features: ['Controlled sipping spout', 'Leakproof twist-lock cap', 'Sturdy carry handle', 'Wide mouth for easy cleaning', 'Pack of 2 - 1Ltr each'] },
  { id: 9, name: 'Clear Lock Pack of 3', category: 'home', price: 3200, oldPrice: 4000, rating: 4, reviews: 89, badge: '', image: CDN+'clearlockSML_600x600.webp', description: 'Modular stackable storage boxes with secure lock system. 3 sizes: S/M/L. Transparent body.', features: ['Secure lock system', 'Modular & stackable', '3 sizes - S/M/L', 'Transparent body', 'Multi-purpose use'] },
  { id: 10, name: 'Kitchen Multi-Purpose Rack', category: 'kitchen', price: 2912, oldPrice: 3640, rating: 5, reviews: 45, badge: 'best', image: CDN+'Kitchen_Multi-Purpose_Rack_600x600.webp', description: 'Three-tier stackable rack with top storage box. FDA-approved food-grade plastic. Space-saving design.', features: ['Three-tier stackable', 'Includes top storage box', 'FDA-approved plastic', 'BPA-free & Eco-friendly', '33.5x33.5x88.5cm'] },
  { id: 11, name: 'Polka Basket', category: 'home', price: 680, oldPrice: 850, rating: 4, reviews: 167, badge: 'best', image: CDN+'polka_basket_600x600.jpg', description: 'Ultimate storage solution with sturdy handle and smart drainage holes. Compact and stackable.', features: ['Sturdy carry handle', 'Drainage holes', 'Compact & stackable', 'Lightweight', '30.5x20x18cm'] },
  { id: 12, name: 'Fiji Bin Dustbin (30Ltr)', category: 'home', price: 2480, oldPrice: 3100, rating: 4, reviews: 92, badge: 'best', image: CDN+'Fiji-Wastebin_600x600.jpg', description: 'Foot-pedal dustbin with color-coded lids. Crack-resistant, dent-proof, with built-in bag hooks.', features: ['Foot-pedal operation', 'Color-coded lids', 'Crack-resistant', 'Built-in bag hooks', '30 Liter capacity', '38.2x36x46cm'] },
  { id: 13, name: 'Milan Bowl Pack of 7', category: 'dining', price: 1480, oldPrice: 1850, rating: 5, reviews: 234, badge: 'best', image: CDN+'MilanBowls-7-pieceSet-Resize06_600x600.png', description: 'Nestable bowls in 5 capacities. Perfect for storing, mixing, and serving. Durable food-grade material.', features: ['7-piece set', 'Nestable design', 'Food-grade material', '5 capacities', 'Easy to clean'] },
  { id: 14, name: 'Smart Serving Tray (Medium)', category: 'dining', price: 1120, oldPrice: 1400, rating: 4, reviews: 56, badge: '', image: CDN+'Smart_Serving_Tray_Medium_2_pcs_set_600x600.webp', description: 'Premium ABS serving tray. Carries cups, plates, food, fruits. Durable, waterproof, easy to clean.', features: ['Premium ABS material', 'Durable & waterproof', 'Medium - 29x21x1.5cm', 'Easy to clean', 'Space-saving'] },
  { id: 15, name: 'Tulip Cutlery Stand', category: 'dining', price: 440, oldPrice: 550, rating: 4, reviews: 73, badge: '', image: CDN+'tulip-cutlery-stand_600x600.jpg', description: 'Compact cutlery stand for spatulas, spoons, tongs, whisks. FDA approved, BPA free, sturdy base.', features: ['Stores all utensils', 'Food grade plastic', 'Sturdy non-slip base', 'FDA Approved & BPA free', '11x20x14cm'] },
  { id: 16, name: 'Snack Jar Pack of 3', category: 'dining', price: 1200, oldPrice: 1500, rating: 4, reviews: 148, badge: 'sale', image: CDN+'Snack_Jar_3_pcs_Set_in_Brown_600x600.webp', description: 'Reusable snack jars with airtight lids. Set of 3 sizes: 1L, 2L, 3L. Keeps contents fresh and dry.', features: ['Airtight lid', '3 sizes - 1L/2L/3L', 'Reusable', 'BPA-free', 'Large - 14.7x12x21.7cm'] }
];

let cart = [];
let currentTab = 'all';
let currentView = 'story';

function getStars(r) { return '★'.repeat(r) + '☆'.repeat(5 - r); }

function formatPrice(p) { return 'Rs. ' + p.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

function renderProducts(filter) {
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.getAll().forEach(t => t.kill());
  const grid = document.getElementById('productGrid');
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="text-align:center;padding:80px 20px;color:var(--text-light);font-size:15px">No products found in this category.</div>';
    return;
  }
  if (currentView === 'store') {
    grid.className = 'store-grid';
    grid.innerHTML = filtered.map((p, idx) => {
      const inCart = cart.some(c => c.id === p.id);
      return `
        <div class="store-card" data-index="${idx}">
          <div class="store-card-img" onclick="showQuickView(${p.id})">
            <img src="${p.image}" alt="${p.name}" loading="lazy">
            ${p.badge ? `<span class="card-badge badge-${p.badge === 'best' ? 'best' : p.badge}">${p.badge === 'new' ? 'New' : p.badge === 'sale' ? 'Sale' : 'Best Seller'}</span>` : ''}
          </div>
          <div class="store-card-body">
            <div class="store-card-cat">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
            <h3 class="store-card-title" onclick="showQuickView(${p.id})">${p.name}</h3>
            <div class="store-card-rating">${getStars(p.rating)} <span>(${p.reviews})</span></div>
            <div class="store-card-price">
              <span class="store-card-current">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="store-card-old">${formatPrice(p.oldPrice)}</span>` : ''}
            </div>
            <button class="store-card-btn ${inCart ? 'in-cart' : ''}" onclick="toggleCartItem(${p.id})">
              ${inCart ? '&#10003; Added' : 'Add to Cart'}
            </button>
          </div>
        </div>`;
    }).join('');
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
    return;
  }
  grid.className = 'product-grid stylish-grid';
  grid.innerHTML = filtered.map((p, idx) => {
    const inCart = cart.some(c => c.id === p.id);
    const side = idx % 2 === 0;
    return `
      <div class="product-full" data-index="${idx}">
        <div class="product-full-inner">
          <div class="product-full-image ${side ? '' : 'order-2'}">
            <img src="${p.image}" alt="${p.name}" loading="lazy" onclick="showQuickView(${p.id})">
            ${p.badge ? `<span class="card-badge badge-${p.badge === 'best' ? 'best' : p.badge}">${p.badge === 'new' ? 'New' : p.badge === 'sale' ? 'Sale' : 'Best Seller'}</span>` : ''}
          </div>
          <div class="product-full-info ${side ? '' : 'order-1'}">
            <div class="pf-category">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
            <h2 class="pf-title">${p.name}</h2>
            <div class="pf-rating">${getStars(p.rating)} <span>(${p.reviews} reviews)</span></div>
            <div class="pf-price">
              <span class="pf-current">${formatPrice(p.price)}</span>
              ${p.oldPrice ? `<span class="pf-old">${formatPrice(p.oldPrice)}</span>` : ''}
            </div>
            <p class="pf-desc">${p.description}</p>
            <ul class="pf-features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
            <button class="pf-btn ${inCart ? 'in-cart' : ''}" onclick="toggleCartItem(${p.id})">
              ${inCart ? '&#10003; Added to Cart' : 'Add to Cart — ' + formatPrice(p.price)}
            </button>
          </div>
        </div>
      </div>`;
  }).join('');
  if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  initProductAnim();
}

function switchView(view, btn) {
  currentView = view;
  document.querySelectorAll('.view-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts(currentTab);
}

function renderTrending() {
  const grid = document.getElementById('trendingGrid');
  const trending = products.filter(p => p.badge === 'best' || p.rating === 5);
  grid.innerHTML = trending.map(p => `
    <div class="product-card">
      <div class="product-img" onclick="showQuickView(${p.id})">
        <img src="${p.image}" alt="${p.name}" loading="lazy">
        ${p.badge === 'best' ? '<span class="card-badge badge-best">Best Seller</span>' : ''}
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <h3>${p.name}</h3>
        <div class="product-rating">${getStars(p.rating)} <span style="color:rgba(255,255,255,0.3);font-size:11px;font-weight:400;">(${p.reviews})</span></div>
        <div class="product-price"><span class="current-price">${formatPrice(p.price)}</span></div>
        <button class="add-to-cart ${cart.some(c => c.id === p.id) ? 'in-cart' : ''}" onclick="toggleCartItem(${p.id})">
          ${cart.some(c => c.id === p.id) ? '&#10003; Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  `).join('');
}

function switchTab(tab, btn) {
  currentTab = tab;
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else document.querySelector(`.tab[data-tab="${tab}"]`)?.classList.add('active');
  renderProducts(tab);
}

function goToCategory(cat) {
  const tabMap = { kitchen:'kitchen', coolers:'coolers', home:'home', dining:'dining', all:'all' };
  const tab = tabMap[cat] || 'all';
  const btn = document.querySelector(`.tab[data-tab="${tab}"]`);
  switchTab(tab, btn);
  document.getElementById('productsSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function toggleCartItem(id) {
  const idx = cart.findIndex(c => c.id === id);
  if (idx > -1) {
    cart.splice(idx, 1);
  } else {
    const p = products.find(p => p.id === id);
    if (p) cart.push({ ...p, qty: 1 });
  }
  renderProducts(currentTab);
  renderTrending();
  updateCart();
}

function updateCart() {
  const items = document.getElementById('cartItems');
  const count = document.getElementById('cartCount');
  const total = document.getElementById('cartTotal');
  count.textContent = cart.reduce((s, c) => s + c.qty, 0);
  total.textContent = formatPrice(cart.reduce((s, c) => s + c.price * c.qty, 0));
  if (cart.length === 0) {
    items.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
    return;
  }
  items.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img"><img src="${item.image}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover"></div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="item-price">${formatPrice(item.price)}</div>
        <div class="item-qty">
          <button onclick="changeQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">&times;</button>
    </div>
  `).join('');
}

function changeQty(id, delta) {
  const item = cart.find(c => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(c => c.id !== id);
  renderProducts(currentTab);
  renderTrending();
  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(c => c.id !== id);
  renderProducts(currentTab);
  renderTrending();
  updateCart();
}

function showQuickView(id) {
  const p = products.find(pd => pd.id === id);
  if (!p) return;
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-image"><img src="${p.image}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover"></div>
    <div class="modal-details">
      <div class="product-category" style="color:var(--accent);font-size:11px;letter-spacing:2px;text-transform:uppercase;font-weight:600">${p.category}</div>
      <h2>${p.name}</h2>
      <div class="rating">${getStars(p.rating)} <span style="color:var(--text-light);font-size:12px">(${p.reviews} reviews)</span></div>
      <div class="price">${formatPrice(p.price)} ${p.oldPrice ? `<span class="old-price">${formatPrice(p.oldPrice)}</span>` : ''}</div>
      <p class="description">${p.description}</p>
      <ul class="features">${p.features.map(f => `<li>${f}</li>`).join('')}</ul>
      <button class="modal-add-btn" onclick="closeQuickView();toggleCartItem(${p.id});">Add to Cart — ${formatPrice(p.price)}</button>
    </div>`;
  document.getElementById('quickViewModal').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}

function closeQuickView() {
  document.getElementById('quickViewModal').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

function toggleSearch() {
  document.getElementById('searchOverlay').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
  if (document.getElementById('searchOverlay').classList.contains('open')) {
    document.getElementById('searchInput').focus();
  }
}

function closeSearch() {
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('searchResults').classList.remove('has-results');
}

function closeAll() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('searchOverlay').classList.remove('open');
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('quickViewModal').classList.remove('show');
  document.getElementById('pageModal').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
  document.getElementById('searchResults').classList.remove('has-results');
}

function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('overlay').classList.toggle('show');
}

function handleSearch(val) {
  const results = document.getElementById('searchResults');
  if (!val.trim()) { results.classList.remove('has-results'); return; }
  const matches = products.filter(p => p.name.toLowerCase().includes(val.toLowerCase())).slice(0, 6);
  if (matches.length) {
    results.innerHTML = matches.map(p => `
      <div class="search-item" onclick="closeSearch();showQuickView(${p.id})">
        <img src="${p.image}" alt="${p.name}" style="width:48px;height:48px;border-radius:6px;object-fit:cover;flex-shrink:0">
        <div><div style="font-weight:600;font-size:14px">${p.name}</div><div style="color:var(--text-light);font-size:12px">${formatPrice(p.price)}</div></div>
      </div>
    `).join('');
    results.classList.add('has-results');
  } else {
    results.innerHTML = '<div style="padding:12px;color:var(--text-light)">No products found</div>';
    results.classList.add('has-results');
  }
}

function showPage(page) {
  const pages = {
    about: {
      title: 'About Us',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">About Prestige Plastic</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Welcome to <strong>Prestige Plastic</strong> — Pakistan's premier destination for premium plastic products. We are committed to providing high-quality, durable, and stylish plastic solutions for every aspect of modern living.</p>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Founded with a vision to revolutionize the plastic products industry, Prestige Plastic offers an extensive range of kitchenware, drinkware, household items, and dining essentials. Every product is crafted from FDA-approved, BPA-free, food-grade materials to ensure the highest standards of safety and quality.</p>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">We partner with leading manufacturers and source directly from trusted suppliers to bring you the best prices without compromising on quality. Our commitment to customer satisfaction drives everything we do — from product selection to after-sales support.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Our Mission</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">To make premium quality plastic products accessible to every Pakistani household at affordable prices, while maintaining the highest standards of safety, durability, and design.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Why Choose Us?</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px">
        <li>100% Food-Grade, BPA-Free Materials</li>
        <li>FDA Approved & ECO Friendly Products</li>
        <li>Nationwide Delivery Across Pakistan</li>
        <li>7-Day Easy Return Policy</li>
        <li>Competitive Wholesale Pricing</li>
        <li>Dedicated Customer Support</li>
      </ul>`
    },
    b2b: {
      title: 'B2B Wholesale',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">B2B Wholesale Program</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Join <strong>Prestige Plastic's B2B Wholesale Program</strong> and unlock exclusive pricing on our entire product range. We partner with retailers, distributors, hotels, restaurants, and corporate clients across Pakistan.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Wholesale Benefits</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li>Exclusive bulk pricing (up to 40% off retail)</li>
        <li>Minimum order: Rs. 25,000</li>
        <li>Free delivery on orders above Rs. 50,000</li>
        <li>Custom packaging options available</li>
        <li>Dedicated account manager</li>
        <li>Monthly credit terms for qualified partners</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Contact Our B2B Team</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8"><strong>Email:</strong> b2b@prestigeplastic.com<br><strong>Phone:</strong> +971 50 123 4567<br><strong>Hours:</strong> Mon-Fri, 9:00 AM - 6:00 PM</p>`
    },
    delivery: {
      title: 'Delivery Policy',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">Delivery Policy</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">At <strong>Prestige Plastic</strong>, we ensure timely and safe delivery of your orders across Pakistan.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Shipping Information</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li><strong>Free Shipping:</strong> On all orders above Rs. 2,999</li>
        <li><strong>Standard Delivery:</strong> Rs. 199 flat rate (nationwide)</li>
        <li><strong>Estimated Time:</strong> 3-7 business days across Pakistan</li>
        <li><strong>Express Delivery:</strong> 24-48 hours (available in major cities)</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Order Tracking</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Once your order is shipped, you will receive a confirmation email with a tracking number. You can track your order status through our website or by contacting our support team.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Delivery Areas</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8">We deliver to all cities and towns across Pakistan, including Karachi, Lahore, Islamabad, Rawalpindi, Faisalabad, Multan, Peshawar, Quetta, and more.</p>`
    },
    returns: {
      title: 'Return Policy',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">Return & Exchange Policy</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Your satisfaction is our top priority. Prestige Plastic offers a <strong>7-Day Easy Return Policy</strong> on all products.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Return Conditions</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li>Items must be unused and in original packaging</li>
        <li>Returns accepted within 7 days of delivery</li>
        <li>Original receipt or order confirmation required</li>
        <li>Product must not be damaged or altered</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">How to Return</h3>
      <ol style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li>Contact our support team via email or phone</li>
        <li>Provide your order number and reason for return</li>
        <li>Pack the item securely in its original packaging</li>
        <li>Ship the item back to our returns center</li>
        <li>Refund will be processed within 5-7 business days</li>
      </ol>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Refunds</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8">Refunds are processed to your original payment method within 5-7 business days after we receive and inspect the returned item. Shipping charges are non-refundable.</p>`
    },
    privacy: {
      title: 'Privacy Policy',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">Privacy Policy</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">At <strong>Prestige Plastic</strong>, we take your privacy seriously. This policy outlines how we collect, use, and protect your personal information.</p>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Information We Collect</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li>Name, email address, phone number</li>
        <li>Shipping and billing address</li>
        <li>Order history and preferences</li>
        <li>Payment information (processed securely)</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">How We Use Your Information</h3>
      <ul style="color:rgba(255,255,255,0.55);line-height:2;padding-left:20px;margin-bottom:16px">
        <li>Process and fulfill your orders</li>
        <li>Communicate about your orders and inquiries</li>
        <li>Send promotional offers (with your consent)</li>
        <li>Improve our products and services</li>
      </ul>
      <h3 style="font-family:var(--font-display);font-size:20px;color:var(--accent);margin:24px 0 12px">Data Protection</h3>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:16px">Your data is stored securely and never shared with third parties without your consent. We use industry-standard encryption to protect your personal and payment information.</p>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8">For any privacy-related concerns, contact us at privacy@prestigeplastic.com</p>`
    },
    checkout: {
      title: 'Checkout',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:8px">Checkout</h2>
      <p style="color:var(--text-light);margin-bottom:24px">Complete your order by filling in your details below.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px">
        <div style="grid-column:1/-1">
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">Full Name</label>
          <input type="text" placeholder="John Doe" style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface)">
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">Email</label>
          <input type="email" placeholder="john@email.com" style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface)">
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">Phone</label>
          <input type="tel" placeholder="03XX XXXXXXX" style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface)">
        </div>
        <div style="grid-column:1/-1">
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">Shipping Address</label>
          <textarea rows="3" placeholder="House #, Street, City, Province" style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface);resize:vertical;font-family:inherit"></textarea>
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">City</label>
          <input type="text" placeholder="Karachi" style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface)">
        </div>
        <div>
          <label style="font-size:13px;font-weight:600;color:rgba(255,255,255,0.7);display:block;margin-bottom:6px">Payment Method</label>
          <select style="width:100%;padding:12px 14px;border:2px solid rgba(255,255,255,0.1);border-radius:8px;font-size:14px;outline:none;background:rgba(255,255,255,0.05);color:var(--surface);background:rgba(255,255,255,0.05);color:var(--surface);font-family:inherit">
            <option>Cash on Delivery (COD)</option>
            <option>Bank Transfer</option>
            <option>JazzCash / Easypaisa</option>
          </select>
        </div>
      </div>
      <button onclick="showToast('Order placed successfully! We will contact you shortly.');closePageModal()" style="width:100%;padding:16px;border:none;border-radius:10px;background:linear-gradient(135deg,var(--accent),var(--accent-light));color:var(--primary);font-weight:600;font-size:15px;cursor:pointer;letter-spacing:0.5px">Place Order — PKR <span id="checkoutTotal">0</span></button>
      <p style="text-align:center;color:var(--text-light);font-size:12px;margin-top:12px">Your data is safe and secure. We never share your information.</p>`
    },
    contact: {
      title: 'Contact Us',
      content: `<h2 style="font-family:var(--font-display);font-size:28px;color:var(--surface);margin-bottom:16px">Contact Us</h2>
      <p style="color:rgba(255,255,255,0.55);line-height:1.8;margin-bottom:24px">We'd love to hear from you! Reach out to us for any inquiries, feedback, or assistance.</p>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px">
        <div style="padding:20px;background:rgba(255,255,255,0.05);border-radius:10px">
          <h4 style="font-weight:600;margin-bottom:8px;color:var(--accent)">Customer Support</h4>
          <p style="color:var(--text-light);font-size:13px;line-height:1.8">Email: support@prestigeplastic.com<br>Phone: +971 50 123 4567<br>Hours: Mon-Sat, 9AM-8PM</p>
        </div>
        <div style="padding:20px;background:rgba(255,255,255,0.05);border-radius:10px">
          <h4 style="font-weight:600;margin-bottom:8px;color:var(--accent)">B2B Inquiries</h4>
          <p style="color:var(--text-light);font-size:13px;line-height:1.8">Email: b2b@prestigeplastic.com<br>Phone: +971 50 987 6543<br>Hours: Mon-Fri, 9AM-6PM</p>
        </div>
        <div style="padding:20px;background:rgba(255,255,255,0.05);border-radius:10px">
          <h4 style="font-weight:600;margin-bottom:8px;color:var(--accent)">Head Office</h4>
          <p style="color:var(--text-light);font-size:13px;line-height:1.8">Dubai, UAE<br>PO Box 12345<br>Dubai, United Arab Emirates</p>
        </div>
        <div style="padding:20px;background:rgba(255,255,255,0.05);border-radius:10px">
          <h4 style="font-weight:600;margin-bottom:8px;color:var(--accent)">Social Media</h4>
          <p style="color:var(--text-light);font-size:13px;line-height:1.8">Facebook: /prestigeplastic<br>Instagram: @prestigeplastic<br>YouTube: Prestige Plastic</p>
        </div>
      </div>`
    }
  };
  const data = pages[page];
  if (!data) return;
  document.getElementById('pageContent').innerHTML = data.content;
  if (page === 'checkout') {
    const total = cart.reduce((s, c) => s + c.price * c.qty, 0);
    document.getElementById('checkoutTotal').textContent = formatPrice(total).replace('Rs. ','');
  }
  document.getElementById('pageModal').classList.add('show');
  document.getElementById('overlay').classList.add('show');
}
function closePageModal() {
  document.getElementById('pageModal').classList.remove('show');
  document.getElementById('overlay').classList.remove('show');
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 2500);
}

function initAnimations() {
  gsap.registerPlugin(ScrollTrigger);

  // Hero Parallax — video-like reveal
  gsap.from('.hero-content', { y: 60, opacity: 0, duration: 1.4, ease: 'power3.out', delay: 0.5 });

  // Features
  gsap.from('.feature-item', { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'back.out(1.7)', immediateRender: false, scrollTrigger: { trigger: '.features-bar', start: 'top 90%', toggleActions: 'play none none none' } });

  // Collections — 3D flip reveal
  gsap.from('.collection-card', { rotationY: 90, opacity: 0, stagger: 0.12, duration: 0.9, ease: 'power3.out', transformOrigin: 'center center', immediateRender: false, scrollTrigger: { trigger: '.collections-grid', start: 'top 85%', toggleActions: 'play none none none' } });

  // CTA Parallax
  gsap.to('.cta-banner', { backgroundPosition: '50% 30%', ease: 'none', scrollTrigger: { trigger: '.cta-banner', start: 'top bottom', end: 'bottom top', scrub: 1 } });

  // Newsletter
  gsap.from('.newsletter-content', { y: 80, opacity: 0, scale: 0.95, duration: 1, ease: 'power3.out', immediateRender: false, scrollTrigger: { trigger: '.newsletter', start: 'top 85%', toggleActions: 'play none none none' } });

  // Footer stagger
  gsap.from('.footer-col', { y: 60, opacity: 0, stagger: 0.15, duration: 0.8, ease: 'power3.out', immediateRender: false, scrollTrigger: { trigger: '.footer', start: 'top 90%', toggleActions: 'play none none none' } });
}

let tiltCard = null;
function initTilt() {
  let rafId = null;
  document.addEventListener('mousemove', e => {
    if (rafId) return;
    const cx = e.clientX, cy = e.clientY, target = e.target;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      const card = target.closest('.product-card') || target.closest('.product-full-image') || target.closest('.store-card-img');
      if (!card || !(card.closest('.trending-grid') || card.closest('.product-full') || card.closest('.store-grid'))) {
        if (tiltCard) { tiltCard.style.transition = ''; tiltCard.style.transform = ''; tiltCard.style.boxShadow = ''; tiltCard = null; }
        return;
      }
      if (tiltCard && tiltCard !== card) {
        tiltCard.style.transition = ''; tiltCard.style.transform = ''; tiltCard.style.boxShadow = '';
      }
      tiltCard = card;
      card.style.transition = 'none';
      const r = card.getBoundingClientRect();
      const x = cx - r.left, y = cy - r.top;
      const midX = r.width / 2, midY = r.height / 2;
      const rotX = (y - midY) / midY * -8, rotY = (x - midX) / midX * 8;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02,1.02,1.02)`;
      card.style.boxShadow = `${(x - midX) / midX * 12}px ${(y - midY) / midY * 12}px 30px rgba(10,22,40,0.18)`;
    });
  });
}

function initProductAnim() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  // Full-screen product sections — cinematic reveal
  document.querySelectorAll('.product-full').forEach((section, i) => {
    const img = section.querySelector('.product-full-image');
    const info = section.querySelector('.product-full-info');
    if (!img || !info) return;
    const rect = section.getBoundingClientRect();
    const inView = rect.top < window.innerHeight + 100;
    const dir = i % 2 === 0 ? -1 : 1;
    const imgFrom = { opacity: 0, x: dir * 200, y: 80, rotation: dir * 5, scale: 0.8 };
    const infoFrom = { opacity: 0, x: dir * -200, y: 80 };
    if (!inView) {
      gsap.set(img, imgFrom);
      gsap.set(info, infoFrom);
    }
    gsap.to(img, {
      opacity: 1, x: 0, y: 0, rotation: 0, scale: 1,
      duration: 1.4, ease: 'power4.out',
      scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
    });
    gsap.to(info, {
      opacity: 1, x: 0, y: 0,
      duration: 1.4, ease: 'power4.out', delay: 0.2,
      scrollTrigger: { trigger: section, start: 'top 85%', toggleActions: 'play none none none' }
    });
  });
  // Trending cards — per-card movie-style reveal
  document.querySelectorAll('.trending-grid .product-card').forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const inView = rect.top < window.innerHeight + 100;
    const dir = i % 2 === 0 ? -1 : 1;
    const fromVars = { opacity: 0, x: dir * 120, y: 100, rotation: dir * 8, scale: 0.85 };
    if (!inView) gsap.set(card, fromVars);
    gsap.to(card, {
      opacity: 1, x: 0, y: 0, rotation: 0, scale: 1,
      duration: 1.2, ease: 'power4.out',
      scrollTrigger: { trigger: card, start: 'top 88%', toggleActions: 'play none none none' }
    });
  });
  // Store grid cards — staggered entrance
  document.querySelectorAll('.store-grid .store-card').forEach((card, i) => {
    const rect = card.getBoundingClientRect();
    const inView = rect.top < window.innerHeight + 100;
    const fromVars = { opacity: 0, y: 60, scale: 0.9 };
    if (!inView) gsap.set(card, fromVars);
    gsap.to(card, {
      opacity: 1, y: 0, scale: 1,
      duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: card, start: 'top 90%', toggleActions: 'play none none none' }
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts('all');
  renderTrending();
  updateCart();
  initAnimations();
  initTilt();
  initProductAnim();
  window.addEventListener('scroll', () => {
    document.getElementById('backToTop').classList.toggle('show', window.scrollY > 400);
    const scene = document.getElementById('scene-container');
    if (scene) {
      const blurAmt = Math.min(Math.max((window.scrollY - window.innerHeight) / 800, 0), 1) * 24;
      scene.style.filter = `blur(${blurAmt}px)`;
    }
  });
  const nForm = document.querySelector('.newsletter-content form');
  if (nForm) {
    nForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const inp = this.querySelector('input');
      if (!inp.value.trim() || !inp.value.includes('@')) {
        inp.style.borderColor = '#dc2626';
        inp.style.boxShadow = '0 0 0 4px rgba(220,38,38,0.15)';
        showToast('Please enter a valid email address');
        return;
      }
      inp.style.borderColor = '#10b981';
      inp.style.boxShadow = '0 0 0 4px rgba(16,185,129,0.15)';
      showToast('Subscribed! Check your inbox for exclusive offers.');
      inp.value = '';
      setTimeout(() => { inp.style.borderColor = ''; inp.style.boxShadow = ''; }, 2000);
    });
  }
});
