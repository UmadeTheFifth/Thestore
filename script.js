// Products Data
const products = [
    // Polos
    { id: 1, name: 'Classic Polo Shirt', price: 45, image: 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&q=80', description: 'Premium cotton polo', category: 'polos' },
    { id: 2, name: 'Striped Polo', price: 52, image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80', description: 'Casual summer polo', category: 'polos' },
    { id: 3, name: 'Navy Blue Polo', price: 48, image: 'https://images.unsplash.com/photo-1618354691551-44de113f0164?w=800&q=80', description: 'Classic navy style', category: 'polos' },
    { id: 4, name: 'White Polo Shirt', price: 42, image: 'https://images.unsplash.com/photo-1626497764746-6dc36546b388?w=800&q=80', description: 'Crisp white cotton', category: 'polos' },
    { id: 5, name: 'Black Polo', price: 50, image: 'https://images.unsplash.com/photo-1618354691229-88d47f285158?w=800&q=80', description: 'Sleek black design', category: 'polos' },
    
    // Pants
    { id: 6, name: 'Denim Jeans', price: 89, image: 'https://images.unsplash.com/photo-1542272454315-7f6c7b6a7f2f?w=800&q=80', description: 'Slim fit denim', category: 'pants' },
    { id: 7, name: 'Chino Pants', price: 79, image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80', description: 'Comfortable fit', category: 'pants' },
    { id: 8, name: 'Black Trousers', price: 85, image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80', description: 'Formal black pants', category: 'pants' },
    { id: 9, name: 'Khaki Pants', price: 72, image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80', description: 'Casual khaki style', category: 'pants' },
    { id: 10, name: 'Cargo Pants', price: 95, image: 'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=800&q=80', description: 'Utility cargo design', category: 'pants' },
    
    // Watches
    { id: 11, name: 'Luxury Watch', price: 299, image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?w=800&q=80', description: 'Swiss movement', category: 'watches' },
    { id: 12, name: 'Sport Watch', price: 199, image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=800&q=80', description: 'Water resistant', category: 'watches' },
    { id: 13, name: 'Classic Timepiece', price: 249, image: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=800&q=80', description: 'Elegant design', category: 'watches' },
    { id: 14, name: 'Digital Watch', price: 159, image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=800&q=80', description: 'Modern digital', category: 'watches' },
    { id: 15, name: 'Minimalist Watch', price: 179, image: 'https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?w=800&q=80', description: 'Clean minimal style', category: 'watches' },
    
    // Glasses
    { id: 16, name: 'Aviator Sunglasses', price: 129, image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=800&q=80', description: 'UV protection', category: 'glasses' },
    { id: 17, name: 'Round Glasses', price: 149, image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=800&q=80', description: 'Vintage style', category: 'glasses' },
    { id: 18, name: 'Wayfarer Sunglasses', price: 139, image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80', description: 'Classic wayfarer', category: 'glasses' },
    { id: 19, name: 'Sport Sunglasses', price: 119, image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?w=800&q=80', description: 'Active lifestyle', category: 'glasses' },
    { id: 20, name: 'Cat Eye Sunglasses', price: 155, image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?w=800&q=80', description: 'Trendy cat eye', category: 'glasses' }
];

// Cart Management
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// User Management
let currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    updateCartBadge();
    checkAuth();
    
    // Render products if on home or shop page
    const homeGrid = document.getElementById('productsGrid');
    const shopGrid = document.getElementById('shopProductsGrid');
    
    if (homeGrid) {
        renderProducts(homeGrid, products.slice(0, 8));
    }
    
    if (shopGrid) {
        renderProducts(shopGrid, products);
    }
    
    // Render category-specific products
    const categoryGrid = document.getElementById('categoryProductsGrid');
    if (categoryGrid) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            const categoryProducts = products.filter(p => p.category === category);
            renderProducts(categoryGrid, categoryProducts);
            
            // Update page title
            const categoryTitle = document.getElementById('categoryTitle');
            const categorySubtitle = document.getElementById('categorySubtitle');
            if (categoryTitle) {
                categoryTitle.textContent = category.charAt(0).toUpperCase() + category.slice(1);
                categorySubtitle.textContent = `Browse our ${category} collection`;
            }
        }
    }
    
    // Start sales counter animation only on homepage
    if (document.getElementById('salesCounter') && homeGrid) {
        animateSalesCounter();
    }
    
    // Render cart items if on checkout page
    if (document.getElementById('cartItemsContainer')) {
        renderCartItems();
    }
    
    // Load profile data if on profile page
    if (document.getElementById('profileFirstName')) {
        loadProfileData();
    }
    
    // Update account name in top bar
    updateAccountName();
});

// Check Authentication
function checkAuth() {
    if (window.location.pathname.includes('profile.html') && !currentUser) {
        window.location.href = 'login.html';
    }
}

// Handle Profile Icon Click
function handleProfileClick() {
    if (currentUser) {
        window.location.href = 'profile.html';
    } else {
        window.location.href = 'login.html';
    }
}

// Handle My Account Click in Top Bar
document.addEventListener('DOMContentLoaded', function() {
    const accountSpan = document.querySelector('.top-bar-right span');
    if (accountSpan && (accountSpan.textContent === 'My Account' || accountSpan.id === 'accountName')) {
        accountSpan.style.cursor = 'pointer';
        accountSpan.onclick = function() {
            if (currentUser) {
                window.location.href = 'profile.html';
            } else {
                window.location.href = 'login.html';
            }
        };
    }
});

// Update Account Name Display
function updateAccountName() {
    const accountName = document.getElementById('accountName') || document.querySelector('.top-bar-right span');
    if (accountName && currentUser) {
        accountName.textContent = currentUser.firstName + ' ' + currentUser.lastName;
    }
}

// Login Handler
function handleLogin(event) {
    event.preventDefault();
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Get stored users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        currentUser = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            phone: user.phone || '',
            address: user.address || {}
        };
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Invalid email or password. Please try again.');
    }
}

// Signup Handler
function handleSignup(event) {
    event.preventDefault();
    
    const firstName = document.getElementById('signupFirstName').value;
    const lastName = document.getElementById('signupLastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('signupConfirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Get existing users
    const users = JSON.parse(localStorage.getItem('users')) || [];
    
    // Check if email already exists
    if (users.find(u => u.email === email)) {
        alert('An account with this email already exists!');
        return;
    }
    
    // Create new user
    const newUser = {
        firstName,
        lastName,
        email,
        password,
        phone: '',
        address: {}
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login
    currentUser = {
        firstName,
        lastName,
        email,
        phone: '',
        address: {}
    };
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    alert('Account created successfully!');
    window.location.href = 'index.html';
}

// Show Login Form
function showLogin() {
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

// Show Signup Form
function showSignup() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

// Load Profile Data
function loadProfileData() {
    if (!currentUser) return;
    
    document.getElementById('profileFirstName').value = currentUser.firstName;
    document.getElementById('profileLastName').value = currentUser.lastName;
    document.getElementById('profileEmail').value = currentUser.email;
    document.getElementById('profilePhone').value = currentUser.phone || '';
    
    if (currentUser.address) {
        document.getElementById('addressStreet').value = currentUser.address.street || '';
        document.getElementById('addressApt').value = currentUser.address.apt || '';
        document.getElementById('addressCity').value = currentUser.address.city || '';
        document.getElementById('addressState').value = currentUser.address.state || '';
        document.getElementById('addressZip').value = currentUser.address.zip || '';
        document.getElementById('addressCountry').value = currentUser.address.country || 'United States';
    }
}

// Update Profile
function updateProfile(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    currentUser.firstName = document.getElementById('profileFirstName').value;
    currentUser.lastName = document.getElementById('profileLastName').value;
    currentUser.email = document.getElementById('profileEmail').value;
    currentUser.phone = document.getElementById('profilePhone').value;
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...currentUser };
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Profile updated successfully!');
    updateAccountName();
}

// Update Address
function updateAddress(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    currentUser.address = {
        street: document.getElementById('addressStreet').value,
        apt: document.getElementById('addressApt').value,
        city: document.getElementById('addressCity').value,
        state: document.getElementById('addressState').value,
        zip: document.getElementById('addressZip').value,
        country: document.getElementById('addressCountry').value
    };
    
    // Update in users array
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...currentUser };
        localStorage.setItem('users', JSON.stringify(users));
    }
    
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    alert('Address updated successfully!');
}

// Change Password
function changePassword(event) {
    event.preventDefault();
    
    if (!currentUser) return;
    
    const currentPassword = document.getElementById('currentPassword').value;
    const newPassword = document.getElementById('newPassword').value;
    const confirmNewPassword = document.getElementById('confirmNewPassword').value;
    
    // Get user from storage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === currentUser.email);
    
    if (!user || user.password !== currentPassword) {
        alert('Current password is incorrect!');
        return;
    }
    
    if (newPassword !== confirmNewPassword) {
        alert('New passwords do not match!');
        return;
    }
    
    // Update password
    user.password = newPassword;
    const userIndex = users.findIndex(u => u.email === currentUser.email);
    users[userIndex] = user;
    localStorage.setItem('users', JSON.stringify(users));
    
    alert('Password changed successfully!');
    event.target.reset();
}

// Render Products
function renderProducts(container, productList) {
    container.innerHTML = productList.map(product => `
        <div class="product-card">
            <div class="product-image" style="background-image: url('${product.image}'); background-size: cover; background-position: center;"></div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price}</div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// Add to Cart
function addToCart(productId) {
    // Check if user is logged in
    if (!currentUser) {
        alert('Please sign in to add items to your cart.');
        window.location.href = 'login.html';
        return;
    }
    
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartBadge();
    alert(`${product.name} added to cart!`);
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCartItems();
}

// Update Cart Badge
function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    if (badge) {
        const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        badge.textContent = totalItems;
    }
}

// Save Cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Render Cart Items (Checkout Page)
function renderCartItems() {
    const container = document.getElementById('cartItemsContainer');
    const subtotalElement = document.getElementById('cartSubtotal');
    const totalElement = document.getElementById('cartTotalAmount');
    const emptyMessage = document.getElementById('emptyCartMessage');
    const checkoutForm = document.getElementById('checkoutFormSection');
    
    if (!container) return;
    
    if (cart.length === 0) {
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (checkoutForm) checkoutForm.style.display = 'none';
        return;
    }
    
    if (emptyMessage) emptyMessage.style.display = 'none';
    if (checkoutForm) checkoutForm.style.display = 'grid';
    
    container.innerHTML = cart.map(item => `
        <div class="summary-item">
            <div>
                <strong>${item.name}</strong>
                <div style="color: #666; font-size: 0.9rem;">Qty: ${item.quantity}</div>
            </div>
            <div>
                <div style="font-weight: 600;">${(item.price * item.quantity).toFixed(2)}</div>
                <button onclick="removeFromCart(${item.id})" style="background: none; border: none; color: #ff4757; cursor: pointer; text-decoration: underline; font-size: 0.85rem;">Remove</button>
            </div>
        </div>
    `).join('');
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (subtotalElement) {
        subtotalElement.textContent = `${total.toFixed(2)}`;
    }
    if (totalElement) {
        totalElement.textContent = `${total.toFixed(2)}`;
    }
}

// Place Order
function placeOrder() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    // Increment sales counter in localStorage
    let salesCount = parseInt(localStorage.getItem('salesCount')) || 1247;
    salesCount++;
    localStorage.setItem('salesCount', salesCount);
    
    alert(`Thank you for your order! Total: $${total.toFixed(2)}\n\nYour order has been placed successfully!`);
    
    // Clear cart
    cart = [];
    saveCart();
    updateCartBadge();
    
    // Redirect to home
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    const dropdown = document.getElementById('mobileDropdown');
    if (dropdown) {
        dropdown.classList.toggle('active');
    }
}

// Logout
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    alert('You have been logged out successfully.');
    toggleMobileMenu();
    window.location.href = 'index.html';
}

// Sales Counter Animation (only on homepage)
function animateSalesCounter() {
    const counter = document.getElementById('salesCounter');
    if (!counter) return;
    
    let currentCount = parseInt(localStorage.getItem('salesCount')) || 1247;
    counter.textContent = currentCount.toLocaleString();
    
    // Animate increase every 10 seconds
    setInterval(() => {
        currentCount += Math.floor(Math.random() * 3) + 1; // Random 1-3 increase
        localStorage.setItem('salesCount', currentCount);
        counter.textContent = currentCount.toLocaleString();
    }, 10000);
}

// Contact Form Submit
function submitContact() {
    const form = document.querySelector('.contact-form');
    if (form) {
        const name = form.querySelector('input[type="text"]').value;
        if (!name) {
            alert('Please fill in all fields.');
            return;
        }
        alert('Thank you for contacting us! We will get back to you within 24 hours.');
        form.reset();
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const dropdown = document.getElementById('mobileDropdown');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (dropdown && menuBtn) {
        if (!dropdown.contains(event.target) && !menuBtn.contains(event.target)) {
            dropdown.classList.remove('active');
        }
    }
});

// Download Cart as PDF
async function downloadCartAsPDF() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('theStore - Cart Summary', 105, 20, { align: 'center' });

    let yPos = 40;

    for (const item of cart) {
        if (yPos > 260) {
            doc.addPage();
            yPos = 20;
        }

        try {
            const imgData = await loadImageAsBase64(item.image);

            // Product image
            doc.addImage(imgData, 'JPEG', 20, yPos, 25, 25);
        } catch (e) {
            console.warn('Image failed to load:', item.image);
        }

        // Product text
        doc.setFontSize(12);
        doc.text(item.name, 50, yPos + 8);
        doc.text(`Qty: ${item.quantity}`, 50, yPos + 16);
        doc.text(`$${item.price.toFixed(2)}`, 140, yPos + 8);
        doc.text(
            `$${(item.price * item.quantity).toFixed(2)}`,
            170,
            yPos + 8,
            { align: 'right' }
        );

        yPos += 35;
    }

    const total = cart.reduce((s, i) => s + i.price * i.quantity, 0);

    doc.line(20, yPos, 190, yPos);
    yPos += 10;
    doc.setFont(undefined, 'bold');
    doc.text(`Total: $${total.toFixed(2)}`, 170, yPos, { align: 'right' });

    doc.save(`theStore_cart_${Date.now()}.pdf`);
}

function loadImageAsBase64(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function () {
            const canvas = document.createElement('canvas');
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext('2d');
            ctx.drawImage(img, 0, 0);
            resolve(canvas.toDataURL('image/jpeg'));
        };
        img.onerror = reject;
        img.src = url;
    });
}



// Share Cart on WhatsApp
function shareOnWhatsApp() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Build message
    let message = '🛍️ *My theStore Cart*\n\n';
    
    if (currentUser) {
        message += `👤 Customer: ${currentUser.firstName} ${currentUser.lastName}\n`;
        message += `📧 Email: ${currentUser.email}\n\n`;
    }
    
    message += '*Items:*\n';
    message += '━━━━━━━━━━━━━━━━\n';
    
    cart.forEach((item, index) => {
        message += `${index + 1}. *${item.name}*\n`;
        message += `   Qty: ${item.quantity} × ${item.price.toFixed(2)} = ${(item.price * item.quantity).toFixed(2)}\n\n`;
    });
    
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    message += '━━━━━━━━━━━━━━━━\n';
    message += `💰 *Subtotal:* ${subtotal.toFixed(2)}\n`;
    message += `🚚 *Shipping:* FREE\n`;
    message += `✨ *Total:* ${subtotal.toFixed(2)}\n\n`;
    message += '📅 ' + new Date().toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(message);
    
    // Create WhatsApp URL
    // You can optionally add a phone number: https://wa.me/1234567890?text=...
    const whatsappURL = `https://wa.me/2348183719660?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
}