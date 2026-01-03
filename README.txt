# theStore - Minimalist Ecommerce Website

A modern, responsive ecommerce website built with HTML, CSS, and JavaScript featuring real HD product images.

## 📁 File Structure

```
theStore/
├── index.html          # Homepage with hero, categories, products
├── shop.html           # Complete product catalog
├── category.html       # Category-specific products (NEW!)
├── testimonials.html   # Customer reviews
├── checkout.html       # Shopping cart and checkout
├── contact.html        # Contact form and info
├── history.html        # Company timeline
├── specials.html       # Special offers and deals
├── login.html          # Login and signup page
├── profile.html        # User profile management
├── styles.css          # All styling
├── script.js           # All functionality
└── README.md           # This file
```

## 🚀 Setup Instructions

1. **Download all files** and place them in the same folder
2. **Open `index.html`** in your web browser
3. That's it! No server or installation required

## ✨ Features

### Authentication System
- **Login/Signup**: Create an account or sign in
- **Profile Management**: Edit personal info and delivery address
- **Password Change**: Securely update your password
- **Auto-redirect**: "My Account" and profile icon redirect to login if not logged in
- **🔒 Cart Restriction**: Must be logged in to add items to cart

### Shopping Features
- **20 Products**: Real HD images from Unsplash
- **4 Categories**: Polos (5), Pants (5), Watches (5), Glasses (5)
- **Category Pages**: Dedicated pages for each category
- **Category Navigation**: Click category cards on homepage to browse
- **Shopping Cart**: Add/remove items with quantity tracking
- **Persistent Cart**: Cart saves using localStorage
- **Checkout**: Complete order form with cart summary
- **Order Counter**: Shows successful orders (only on homepage)
- **📄 PDF Export**: Download cart as formatted PDF document
- **💬 WhatsApp Share**: Share cart directly to WhatsApp with formatted message

### Navigation
- **Responsive Design**: Works on mobile, tablet, desktop
- **Hamburger Menu**: Mobile dropdown with Contact, History, Specials, Log Out
- **Category Filters**: Easy navigation between product categories
- **Direct Links**: Category cards link to filtered product pages

### Product Display
- **HD Images**: High-quality product photos
- **8 Products on Homepage**: Featured products
- **20 Products in Shop**: Complete catalog
- **Category Filtering**: 5 products per category
- **Responsive Grid**: 4 columns desktop, 2 mobile

### Additional Pages
- **Testimonials**: 6 customer reviews with ratings
- **Contact**: Form and contact information
- **History**: Company timeline from 2020-2025
- **Specials**: 6 special offer cards with discounts

## 💾 Data Storage

All data is stored in browser localStorage:
- `cart`: Shopping cart items
- `currentUser`: Logged-in user data
- `users`: All registered users
- `salesCount`: Number of completed orders

## 🔑 How Authentication Works

1. **Creating an Account**:
   - Click "My Account" in top bar (or profile icon)
   - Click "Sign up" on login page
   - Fill in details and create password
   - Auto-logged in after signup

2. **Logging In**:
   - Click "My Account" or profile icon
   - Enter email and password
   - Redirected to homepage

3. **Managing Profile**:
   - Click profile icon when logged in
   - Update personal info
   - Update delivery address
   - Change password

4. **Logging Out**:
   - Click hamburger menu → "Log Out"
   - Or go to profile page → "Log Out" button

## 🛒 Shopping Cart Features

- **🔒 Login Required**: Must sign in to add items to cart
- **Add to Cart**: Click "Add to Cart" on any product (redirects to login if not signed in)
- **View Cart**: Click cart icon to go to checkout
- **Remove Items**: Click "Remove" button in checkout
- **Quantity Tracking**: Shows quantity for each item
- **Badge Counter**: Shows total items in cart
- **Place Order**: Completes order and increments sales counter
- **📄 Download as PDF**: Export cart to professional PDF document
  - Includes customer info (if logged in)
  - Itemized list with quantities and prices
  - Subtotal, shipping, and total
  - Date and order details
- **💬 Share on WhatsApp**: Forward cart to WhatsApp
  - Formatted message with all cart details
  - Customer information included
  - Ready to send to store or friends
  - Opens WhatsApp directly from browser

## 📂 Category Browsing

- **Category Cards**: Click on Polos, Pants, Watches, or Glasses cards on homepage
- **Category Pages**: Each category has its own dedicated page
- **Category Filters**: Quick navigation bar on category pages
- **Footer Links**: All category links in footer navigate to category pages

## 📊 Sales Counter

- Only appears on **homepage**
- Shows number of successful orders
- Starts at 1,247
- Increases by 1-3 every 10 seconds
- Increments by 1 when orders are placed
- Persists across sessions

## 🎨 Design Features

- **Minimalist Aesthetic**: Clean, modern design
- **Color Scheme**: Black, white, red accent (#ff4757)
- **Typography**: System fonts for fast loading
- **Responsive Grid**: Adapts to all screen sizes
- **Smooth Animations**: Hover effects and transitions

## 🔧 Customization

### Change Products
Edit the `products` array in `script.js`:
```javascript
const products = [
    { 
        id: 1, 
        name: 'Your Product', 
        price: 99, 
        image: 'https://your-image-url.jpg', 
        description: 'Description', 
        category: 'category' 
    }
];
```

### Change Product Images
Replace the Unsplash URLs in the products array with your own image URLs. Images should be:
- High quality (800px+ width recommended)
- Aspect ratio: Square or portrait (3:4)
- Optimized for web (under 500KB)

### Change WhatsApp Business Number
In `script.js`, update the WhatsApp URL:
```javascript
// Default (opens WhatsApp without specific number)
const whatsappURL = `https://wa.me/?text=${encodedMessage}`;

// With business number (replace 1234567890 with your number including country code)
const whatsappURL = `https://wa.me/1234567890?text=${encodedMessage}`;
```

### Customize PDF Appearance
In the `downloadCartAsPDF()` function in `script.js`, modify:
- Company name and branding
- Colors and fonts
- Header and footer text
- Contact information

### Change Colors
Edit these variables in `styles.css`:
- Primary color: `#ff4757` (red)
- Dark color: `#1a1a1a` (black)
- Background: `#f9f9f9` (light gray)
- WhatsApp green: `#25D366`

### Change Sales Counter Start Value
In `script.js`, change:
```javascript
let salesCount = parseInt(localStorage.getItem('salesCount')) || 1247;
```

### Add More Products
Simply add more objects to the products array following the same format. Update the category to match one of: 'polos', 'pants', 'watches', 'glasses'

## 📱 Responsive Breakpoints

- **Desktop**: 1024px+
- **Tablet**: 768px - 1024px
- **Mobile**: <768px

## 🌐 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Any modern browser with JavaScript and localStorage support

**Note**: PDF generation and WhatsApp sharing work best on:
- Desktop: All modern browsers
- Mobile: Chrome, Safari (iOS/Android)
- WhatsApp sharing opens the WhatsApp app on mobile

## ⚠️ Important Notes

1. **localStorage**: All data is stored locally in the browser. Clearing browser data will delete all accounts and cart items.

2. **No Backend**: This is a frontend-only demo. In production, you would need:
   - Backend API for user authentication
   - Database for products and orders
   - Payment processing integration

3. **Security**: Passwords are stored in plain text in localStorage. This is for demo purposes only. Never do this in production!

4. **Test Account**: No accounts exist by default. Create one using the signup form.

## 🎯 Future Enhancements

Potential features to add:
- Product search and filtering
- Wishlist functionality
- Order history page
- Product reviews
- Multiple product images
- Size/color variations
- Payment integration
- Email notifications
- Admin dashboard

## 📄 License

Free to use for personal and commercial projects.

## 👨‍💻 Support

For questions or issues, refer to this README or check the code comments.

---

**Enjoy building with theStore!** 🛍️