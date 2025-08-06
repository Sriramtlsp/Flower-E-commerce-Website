# 🌸 Bloom & Blossom - Flower Shop E-commerce

A beautiful, responsive e-commerce website for a flower shop built with React, Tailwind CSS, and modern web technologies.

## ✨ Features

### 🏠 Homepage
- Hero section with animated elements
- Featured products showcase
- Customer testimonials
- Call-to-action sections

### 🛍️ Shop Page
- Advanced filtering by category and occasion
- Price range slider
- Sort options (featured, price, name)
- Grid and list view modes
- Responsive product grid

### 📦 Product Details
- High-quality product images
- Detailed descriptions and care instructions
- Quantity selector
- Add to cart functionality
- Wishlist feature
- Related products

### 🛒 Shopping Cart
- Persistent cart with localStorage
- Quantity management
- Remove items
- Order summary with tax and shipping
- Clear cart functionality

### 📱 Responsive Design
- Mobile-first approach
- Tablet and desktop optimized
- Touch-friendly interactions
- Hamburger menu for mobile

### 🎨 Design System
- Custom floral color palette
- Beautiful typography with Google Fonts
- Smooth animations with Framer Motion
- Consistent component styling

## 🚀 Tech Stack

- **Frontend**: React 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Animations**: Framer Motion
- **Icons**: Heroicons
- **State Management**: React Context API
- **Build Tool**: Create React App

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd flower-shop-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.js       # Navigation bar
│   ├── Footer.js       # Footer component
│   └── ProductCard.js  # Product card component
├── context/            # React Context providers
│   └── CartContext.js  # Shopping cart state management
├── data/               # Static data
│   └── products.js     # Product data and categories
├── pages/              # Page components
│   ├── Home.js         # Homepage
│   ├── Shop.js         # Shop page with filters
│   ├── ProductDetail.js # Individual product page
│   ├── Cart.js         # Shopping cart page
│   ├── About.js        # About page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # App entry point
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Customization

### Colors
The project uses a custom color palette defined in `tailwind.config.js`:

- **Floral**: Pink shades for primary actions
- **Sage**: Green shades for secondary elements
- **Cream**: Warm neutral tones

### Fonts
- **Playfair Display**: Serif font for headings
- **Inter**: Sans-serif font for body text

### Components
All components are built with Tailwind CSS classes and can be easily customized by modifying the class names or adding new utility classes.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🛠️ Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

## 🌟 Key Features

### Shopping Cart
- Persistent storage with localStorage
- Add/remove items
- Quantity management
- Order summary with calculations

### Product Management
- Filter by category and occasion
- Price range filtering
- Sort by various criteria
- Search functionality (can be extended)

### User Experience
- Smooth page transitions
- Loading states
- Error handling
- Responsive design
- Accessibility features

## 🔧 Future Enhancements

- [ ] User authentication
- [ ] Payment integration (Stripe/PayPal)
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Email notifications
- [ ] Advanced search
- [ ] Wishlist functionality
- [ ] Order tracking
- [ ] Multi-language support

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support or questions, please contact us at hello@bloomandblossom.com

---

**Built with ❤️ and 🌸 by the Bloom & Blossom team** 