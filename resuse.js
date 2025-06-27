class ftabs extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<footer class="footer">
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-brand">
                    <i class="far fa-shopping-bag"></i>
                    <span>Brand</span>
                </div>
                <p>Best information about the company<br>gies here but now lorem ipsum is</p>
                <div class="social-icons">
                    <i class="fab fa-facebook"></i>
                    <i class="fab fa-twitter"></i>
                    <i class="fab fa-linkedin"></i>
                    <i class="fab fa-instagram"></i>
                    <i class="fab fa-youtube"></i>
                </div>
            </div>

            <div class="footer-section">
                <h4>About</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Find store</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Partnership</h4>
                <ul>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Find store</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">Blogs</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Information</h4>
                <ul>
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Money Refund</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>For users</h4>
                <ul>
                    <li><a href="#">Login</a></li>
                    <li><a href="#">Register</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">My Orders</a></li>
                </ul>
            </div>

            <div class="footer-section">
                <h4>Get app</h4>
                <div class="app-downloads">
                    <img src="./Image/app.jpg" alt="App Store">
                    <img src="./Image/google.jpg" alt="Google Play">
                </div>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2023 Ecommerce.</p>
            <div class="footer-lang">
                <img src="./Image/flag/china.png" alt="English">
                <span>English</span>
            </div>
        </div>
    </footer>
        `
    }
}

customElements.define('fake-footer', ftabs);


class fhead extends HTMLElement {
    connectedCallback() {
        this.innerHTML = ` <header class="header">
        <div class="container">
            <!-- Mobile Header -->
            <div class="mobile-header">
                <button class="mobile-menu-btn" id="mobileMenuBtn">
                    <i class="fas fa-bars"></i>
                </button>
                <div class="brand-logo">
                    <div class="logo-icon">
                        <i class="fas fa-shopping-bag"></i>
                    </div>
                    <span>Brand</span>
                </div>
                <div class="mobile-header-icons">
                    <i class="fas fa-shopping-cart"></i>
                    <i class="fas fa-user"></i>
                </div>
            </div>

            <!-- Desktop Header -->
            <div class="desktop-header">
                <div class="brand-logo">
                    <div class="logo-icon">
                        <i class="far fa-shopping-bag"></i>
                    </div>
                    <span>Brand</span>
                </div>

                <div class="search-section">
                    <input type="text" placeholder="Search" class="search-input">
                    <select class="category-select">
                        <option>All category</option>
                        <option>Category NO 1</option>
                        <option>Category NO 2</option>
                        <option>Category NO 3</option>
                    </select>
                    <button class="search-btn">Search</button>
                </div>

                <div class="header-icons">
                    <div class="i">
                        <i class="fas fa-user"></i>
                        <span>Profile</span>
                    </div>
                    <div class="i">
                        <i class="fas fa-envelope"></i>
                        <span>Message</span>
                    </div>
                    <div class="i">
                        <i class="fas fa-heart"></i>
                        <span>Orders</span>
                    </div>
                    <div class="i">
                        <i class="fas fa-shopping-cart"></i>
                        <span>Carts</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

        `
    }
}

customElements.define('fake-header', fhead);

class fnav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<nav class="navigation">
        <div class="container">
            <div class="nav-left">
                <button class="nav-item">
                    <i class="fas fa-bars"></i>
                    All category
                </button>
                <a href="#" class="nav-item">Hot offers</a>
                <a href="#" class="nav-item">Gift boxes</a>
                <a href="#" class="nav-item">Projects</a>
                <a href="#" class="nav-item">Menu item</a>
                <a href="#" class="nav-item">Help</a>
                <select class="cureency" style="padding: 0;">
                    <option></option>
                    <option></option>
                </select>
            </div>
            <div class="nav-right">
                <select class="cureency" id="currrency">
                    <option>English, USD</option>
                    <option>Pakistan, PKR</option>
                    <option>India, INR</option>
                </select>
                <label for="ship">Ship to</label>
                <select class="flag" id="ship">
                    <option>PK</option>
                    <option>IN</option>
                    <option>IR</option>
                </select>
            </div>
        </div>
    </nav>
        `
    }
}

customElements.define('fake-nav', fnav);

class fsub extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
         <section class="newsletter">
        <div class="newsletter-content">
            <h2>Subscribe on our newsletter</h2>
            <p>Get daily news on upcoming offers from many suppliers all over the world</p>
            <div class="newsletter-form">
                <div class="input-icon-wrapper">
                    <i class="fa fa-envelope"></i>
                    <input type="email" placeholder="Email" class="newsletter-input">
                </div>
                <button class="subscribe-btn">Subscribe</button>
            </div>
        </div>
    </section>
        `
    }
}

customElements.define('fake-sub', fsub);


class fserch extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<div class="mobile-search-section">
        <div class="mobile-search-wrapper">
            <i class="fas fa-search"></i>
            <input type="text" placeholder="Search" class="mobile-search-input">
        </div>
    </div>
        `
    }
}

customElements.define('fake-search', fserch);