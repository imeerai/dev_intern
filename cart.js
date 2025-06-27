document.addEventListener("DOMContentLoaded", () => {
  initializeCartFunctionality()
  initializeNavigation()
})

function initializeNavigation() {
  const logos = document.querySelectorAll(".brand-logo, .footer-brand")
  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html"
    })
    logo.style.cursor = "pointer"
  })

  // Search functionality
  const searchBtn = document.querySelector(".search-btn")
  const searchInput = document.querySelector(".search-input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim()
      if (searchTerm) {
        window.location.href = `view.html?search=${encodeURIComponent(searchTerm)}`
      }
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click()
      }
    })
  }

  const backButton = document.querySelector(".back-btn")
  if (backButton) {
    backButton.addEventListener("click", () => {
      window.location.href = "index.html"
    })
  }

  const backToShopButton = document.querySelector(".back-to-shop")
  if (backToShopButton) {
    backToShopButton.addEventListener("click", () => {
      window.location.href = "index.html"
    })
  }

  const shopNowBtn = document.querySelector(".shop-now-btn")
  if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
      window.location.href = "view.html"
    })
  }

  const savedItems = document.querySelectorAll(".saved-item")
  savedItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.closest("button")) {
        window.location.href = "details.html"
      }
    })
    item.style.cursor = "pointer"
  })
}

function initializeCartFunctionality() {
  const minusButtons = document.querySelectorAll(".qty-btn.minus")
  const plusButtons = document.querySelectorAll(".qty-btn.plus")

  minusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.parentElement.querySelector(".quantity")
      let quantity = Number.parseInt(quantityElement.textContent)
      if (quantity > 1) {
        quantity--
        quantityElement.textContent = quantity
        updateCartCount()
        updatePrices()
      }
    })
  })

  plusButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const quantityElement = this.parentElement.querySelector(".quantity")
      let quantity = Number.parseInt(quantityElement.textContent)
      quantity++
      quantityElement.textContent = quantity
      updateCartCount()
      updatePrices()
    })
  })

  const removeButtons = document.querySelectorAll(".remove-btn")
  removeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cartItem = this.closest(".cart-itm")
      cartItem.style.height = cartItem.offsetHeight + "px"
      cartItem.classList.add("removing")
      setTimeout(() => {
        cartItem.style.height = "0"
        cartItem.style.padding = "0"
        cartItem.style.margin = "0"
        cartItem.style.opacity = "0"
        setTimeout(() => {
          cartItem.remove()
          updateCartCount()
          updatePrices()
        }, 300)
      }, 10)
    })
  })

  const saveButtons = document.querySelectorAll(".save-later-btn")
  saveButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const cartItem = this.closest(".cart-itm")
      cartItem.style.opacity = "0.5"
      setTimeout(() => {
        cartItem.remove()
        updateCartCount()
        updatePrices()
        alert("Item saved for later!")
      }, 300)
    })
  })

  const removeAllButton = document.querySelector(".remove-all")
  if (removeAllButton) {
    removeAllButton.addEventListener("click", () => {
      if (confirm("Are you sure you want to remove all items from your cart?")) {
        const cartItems = document.querySelectorAll(".cart-itm")
        cartItems.forEach((item) => {
          item.style.height = "0"
          item.style.padding = "0"
          item.style.margin = "0"
          item.style.opacity = "0"
        })
        setTimeout(() => {
          cartItems.forEach((item) => item.remove())
          updateCartCount()
          updatePrices()
        }, 300)
      }
    })
  }

  const moveToCartButtons = document.querySelectorAll(".move-to-cart")
  moveToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const savedItem = this.closest(".saved-item")
      savedItem.style.backgroundColor = "#f8f9fa"
      setTimeout(() => {
        savedItem.style.opacity = "0.5"
        setTimeout(() => {
          alert("Item moved to cart!")
          savedItem.style.opacity = "1"
          savedItem.style.backgroundColor = ""
        }, 300)
      }, 10)
    })
  })

  const ellipsisButtons = document.querySelectorAll(".pp")
  ellipsisButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const dropdown = document.createElement("div")
      dropdown.className = "mobile-dropdown"
      dropdown.innerHTML = `
                <button class="dropdown-item remove-item">Remove</button>
                <button class="dropdown-item save-item">Save for later</button>
            `

      const rect = this.getBoundingClientRect()
      dropdown.style.position = "absolute"
      dropdown.style.top = rect.bottom + window.scrollY + "px"
      dropdown.style.right = "20px"
      dropdown.style.backgroundColor = "white"
      dropdown.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)"
      dropdown.style.borderRadius = "4px"
      dropdown.style.zIndex = "100"
      dropdown.style.padding = "8px 0"

      const dropdownItems = dropdown.querySelectorAll(".dropdown-item")
      dropdownItems.forEach((item) => {
        item.style.display = "block"
        item.style.width = "100%"
        item.style.padding = "8px 16px"
        item.style.textAlign = "left"
        item.style.border = "none"
        item.style.backgroundColor = "transparent"
        item.style.cursor = "pointer"
      })

      document.body.appendChild(dropdown)

      dropdown.querySelector(".remove-item").addEventListener("click", () => {
        const cartItem = button.closest(".cart-itm")
        cartItem.remove()
        updateCartCount()
        updatePrices()
        dropdown.remove()
      })

      dropdown.querySelector(".save-item").addEventListener("click", () => {
        const cartItem = button.closest(".cart-itm")
        cartItem.remove()
        updateCartCount()
        updatePrices()
        alert("Item saved for later!")
        dropdown.remove()
      })

      document.addEventListener("click", function closeDropdown(e) {
        if (!dropdown.contains(e.target) && e.target !== button) {
          dropdown.remove()
          document.removeEventListener("click", closeDropdown)
        }
      })
    })
  })

  function updateCartCount() {
    const cartItems = document.querySelectorAll(".cart-itm")
    const cartCountElement = document.getElementById("cart-count")
    if (cartCountElement) {
      cartCountElement.textContent = cartItems.length
    }

    const checkoutBtn = document.querySelector(".checkout-btn.mobile")
    if (checkoutBtn) {
      checkoutBtn.textContent = `Checkout (${cartItems.length} items)`
    }
  }

  function updatePrices() {
    let subtotal = 0
    const cartItems = document.querySelectorAll(".cart-itm")

    cartItems.forEach((item) => {
      const priceText = item.querySelector(".item-price").textContent
      const price = Number.parseFloat(priceText.replace("$", ""))
      const quantity = Number.parseInt(item.querySelector(".quantity").textContent)
      subtotal += price * quantity
    })

    const subtotalElement = document.querySelector(".order-summary .summary-row:first-child span:last-child")
    if (subtotalElement) {
      subtotalElement.textContent = `$${subtotal.toFixed(2)}`
    }

    const discount = 60.0
    const tax = subtotal * 0.01
    const total = subtotal - discount + tax

    const discountElement = document.querySelector(".summary-row.discount span:last-child")
    const taxElement = document.querySelector(".summary-row.tax span:last-child")
    const totalElement = document.querySelector(".summary-row.total span:last-child")

    if (discountElement) discountElement.textContent = `- $${discount.toFixed(2)}`
    if (taxElement) taxElement.textContent = `+ $${tax.toFixed(2)}`
    if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`

    const mobileSummary = document.querySelector(".mobile-summary")
    if (mobileSummary) {
      const mobileItems = mobileSummary.querySelector(".summary-row:first-child span:last-child")
      const mobileTax = mobileSummary.querySelector(".summary-row:nth-child(3) span:last-child")
      const mobileTotal = mobileSummary.querySelector(".summary-row.total span:last-child")

      if (mobileItems) mobileItems.textContent = `$${subtotal.toFixed(2)}`
      if (mobileTax) mobileTax.textContent = `$${tax.toFixed(2)}`
      if (mobileTotal) mobileTotal.textContent = `$${(subtotal + 10 + tax).toFixed(2)}`
    }
  }
}
