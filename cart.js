// Cart functionality
document.addEventListener("DOMContentLoaded", () => {
    // Quantity controls
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
  
    // Remove buttons
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
  
    // Save for later buttons
    const saveButtons = document.querySelectorAll(".save-later-btn")
    saveButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const cartItem = this.closest(".cart-itm")
        // Animation and logic for saving item
        cartItem.style.opacity = "0.5"
        setTimeout(() => {
          cartItem.remove()
          updateCartCount()
          updatePrices()
          // Here you would add logic to move the item to saved items
          alert("Item saved for later!")
        }, 300)
      })
    })
  
    // Remove all button
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
  
    // Move to cart buttons
    const moveToCartButtons = document.querySelectorAll(".move-to-cart")
    moveToCartButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const savedItem = this.closest(".saved-item")
        savedItem.style.backgroundColor = "#f8f9fa"
        setTimeout(() => {
          savedItem.style.opacity = "0.5"
          setTimeout(() => {
            // Here you would add logic to move the item to cart
            alert("Item moved to cart!")
            savedItem.style.opacity = "1"
            savedItem.style.backgroundColor = ""
          }, 300)
        }, 10)
      })
    })
  
    // Mobile ellipsis menu
    const ellipsisButtons = document.querySelectorAll(".pp")
    ellipsisButtons.forEach((button) => {
      button.addEventListener("click", function () {
        // Create and show a dropdown menu
        const dropdown = document.createElement("div")
        dropdown.className = "mobile-dropdown"
        dropdown.innerHTML = `
                  <button class="dropdown-item remove-item">Remove</button>
                  <button class="dropdown-item save-item">Save for later</button>
              `
  
        // Position the dropdown
        const rect = this.getBoundingClientRect()
        dropdown.style.position = "absolute"
        dropdown.style.top = rect.bottom + window.scrollY + "px"
        dropdown.style.right = "20px"
        dropdown.style.backgroundColor = "white"
        dropdown.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)"
        dropdown.style.borderRadius = "4px"
        dropdown.style.zIndex = "100"
        dropdown.style.padding = "8px 0"
  
        // Style the dropdown items
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
  
        // Add event listeners to dropdown items
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
  
        // Close dropdown when clicking outside
        document.addEventListener("click", function closeDropdown(e) {
          if (!dropdown.contains(e.target) && e.target !== button) {
            dropdown.remove()
            document.removeEventListener("click", closeDropdown)
          }
        })
      })
    })
  
    // Back button functionality
    const backButton = document.querySelector(".back-btn")
    if (backButton) {
      backButton.addEventListener("click", () => {
        window.location.href = "index.html"
      })
    }
  
    // Back to shop button
    const backToShopButton = document.querySelector(".back-to-shop")
    if (backToShopButton) {
      backToShopButton.addEventListener("click", () => {
        window.location.href = "index.html"
      })
    }
  
    // Helper functions
    function updateCartCount() {
      const cartItems = document.querySelectorAll(".cart-itm")
      const cartCountElement = document.getElementById("cart-count")
      if (cartCountElement) {
        cartCountElement.textContent = cartItems.length
      }
  
      // Update checkout button text
      const checkoutBtn = document.querySelector(".checkout-btn.mobile")
      if (checkoutBtn) {
        checkoutBtn.textContent = `Checkout (${cartItems.length} items)`
      }
    }
  
    function updatePrices() {
      // This is a simplified version - in a real app you would calculate actual prices
      let subtotal = 0
      const cartItems = document.querySelectorAll(".cart-itm")
  
      cartItems.forEach((item) => {
        const priceText = item.querySelector(".item-price").textContent
        const price = Number.parseFloat(priceText.replace("$", ""))
        const quantity = Number.parseInt(item.querySelector(".quantity").textContent)
        subtotal += price * quantity
      })
  
      // Update subtotal in the order summary
      const subtotalElement = document.querySelector(".order-summary .summary-row:first-child span:last-child")
      if (subtotalElement) {
        subtotalElement.textContent = `$${subtotal.toFixed(2)}`
      }
  
      // Calculate discount, tax and total
      const discount = 60.0 // This would be calculated based on business logic
      const tax = subtotal * 0.01 // Example tax calculation
      const total = subtotal - discount + tax
  
      // Update the summary
      const discountElement = document.querySelector(".summary-row.discount span:last-child")
      const taxElement = document.querySelector(".summary-row.tax span:last-child")
      const totalElement = document.querySelector(".summary-row.total span:last-child")
  
      if (discountElement) discountElement.textContent = `- $${discount.toFixed(2)}`
      if (taxElement) taxElement.textContent = `+ $${tax.toFixed(2)}`
      if (totalElement) totalElement.textContent = `$${total.toFixed(2)}`
  
      // Update mobile summary if it exists
      const mobileSummary = document.querySelector(".mobile-summary")
      if (mobileSummary) {
        const mobileItems = mobileSummary.querySelector(".summary-row:first-child span:last-child")
        const mobileShipping = mobileSummary.querySelector(".summary-row:nth-child(2) span:last-child")
        const mobileTax = mobileSummary.querySelector(".summary-row:nth-child(3) span:last-child")
        const mobileTotal = mobileSummary.querySelector(".summary-row.total span:last-child")
  
        if (mobileItems) mobileItems.textContent = `$${subtotal.toFixed(2)}`
        // Shipping is fixed at $10 in this example
        if (mobileTax) mobileTax.textContent = `$${tax.toFixed(2)}`
        if (mobileTotal) mobileTotal.textContent = `$${(subtotal + 10 + tax).toFixed(2)}`
      }
    }
  })
  