document.addEventListener("DOMContentLoaded", () => {
  // Setup thumbnail gallery
  setupThumbnailGallery()

  // Setup mobile image indicators
  setupMobileImageIndicators()

  // Setup favorite button functionality
  setupFavoriteButtons()

  // Setup product tabs
  setupProductTabs()

  // Setup back button functionality
  setupBackButton()

  // Setup inquiry buttons
  setupInquiryButtons()

  // Setup read more functionality
  setupReadMore()
})

// Setup thumbnail gallery for desktop
function setupThumbnailGallery() {
  const thumbnails = document.querySelectorAll(".ecom-thumbnail")
  const mainImage = document.getElementById("mainProductImage")

  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        // Remove active class from all thumbnails
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))

        // Add active class to clicked thumbnail
        thumbnail.classList.add("active")

        // Update main image with correct path and extension
        if (index === 0) {
          mainImage.src = `./Image/cloth/tshirt.jpg`
        } else {
          mainImage.src = `./Image/cloth/tshirt${index}.jpg`
        }
      })
    })
  }
}

// Setup mobile image indicators
function setupMobileImageIndicators() {
  const indicators = document.querySelectorAll(".ecom-indicator")
  const mobileMainImage = document.getElementById("mobileMainImage")

  if (indicators.length > 0 && mobileMainImage) {
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        // Remove active class from all indicators
        indicators.forEach((ind) => ind.classList.remove("active"))

        // Add active class to clicked indicator
        indicator.classList.add("active")

        // Update main image with correct path and extension
        if (index === 0) {
          mobileMainImage.src = `./Image/cloth/tshirt.jpg`
        } else {
          mobileMainImage.src = `./Image/cloth/tshirt${index}.jpg`
        }
      })
    })
  }
}

// Setup favorite button functionality
function setupFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".ecom-favorite-btn, .ecom-save-later-btn")

  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const icon = this.querySelector("i")
      if (icon) {
        if (icon.classList.contains("far")) {
          icon.classList.remove("far")
          icon.classList.add("fas")
          icon.style.color = "#ff4757"
        } else {
          icon.classList.remove("fas")
          icon.classList.add("far")
          icon.style.color = ""
        }
      }
    })
  })
}

// Setup product tabs
function setupProductTabs() {
  const tabHeaders = document.querySelectorAll(".ecom-tab-header")
  const tabPanes = document.querySelectorAll(".ecom-tab-pane")

  tabHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const targetTab = header.getAttribute("data-tab")

      // Remove active class from all headers and panes
      tabHeaders.forEach((h) => h.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))

      // Add active class to clicked header and corresponding pane
      header.classList.add("active")
      const targetPane = document.getElementById(targetTab)
      if (targetPane) {
        targetPane.classList.add("active")
      }
    })
  })
}

// Setup back button functionality
function setupBackButton() {
  const backButtons = document.querySelectorAll(".ecom-back-button")
  backButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      // Navigate to index.html
      window.location.href = "index.html"
    })
  })
}

// Setup inquiry buttons
function setupInquiryButtons() {
  const inquiryButtons = document.querySelectorAll(".ecom-send-inquiry-btn")
  inquiryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      // In a real app, this would open an inquiry form or modal
      alert("Inquiry form would open here!")
    })
  })

  // Setup seller profile button
  const sellerProfileButtons = document.querySelectorAll(".ecom-seller-profile-btn")
  sellerProfileButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Seller profile would open here!")
    })
  })

  // Setup promo button
  const promoButtons = document.querySelectorAll(".ecom-promo-button")
  promoButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Shop now functionality would be implemented here!")
    })
  })
}

// Setup read more functionality
function setupReadMore() {
  const readMoreLinks = document.querySelectorAll(".ecom-read-more")
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const description = link.previousElementSibling
      if (description) {
        // Toggle between truncated and full text
        if (description.style.maxHeight) {
          description.style.maxHeight = null
          link.textContent = "Read more"
        } else {
          description.style.maxHeight = "none"
          link.textContent = "Read less"
        }
      }
    })
  })
}

// Add some interactive features for better UX
document.addEventListener("DOMContentLoaded", () => {
  // Add hover effects to related products
  const relatedItems = document.querySelectorAll(".ecom-related-item")
  relatedItems.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.style.transform = "translateY(-5px)"
      item.style.boxShadow = "0 5px 15px rgba(0, 0, 0, 0.1)"
    })

    item.addEventListener("mouseleave", () => {
      item.style.transform = "translateY(0)"
      item.style.boxShadow = "none"
    })
  })

  // Add click handlers for similar products
  const similarItems = document.querySelectorAll(".ecom-similar-item")
  similarItems.forEach((item) => {
    item.addEventListener("click", () => {
      // In a real app, this would navigate to the product page
      alert("Navigate to similar product!")
    })
  })

  // Add click handlers for recommendation items
  const recommendationItems = document.querySelectorAll(".ecom-recommendation-item")
  recommendationItems.forEach((item) => {
    item.addEventListener("click", () => {
      // In a real app, this would navigate to the product page
      alert("Navigate to recommended product!")
    })
  })

  // Add smooth scrolling for internal links
  const internalLinks = document.querySelectorAll('a[href^="#"]')
  internalLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href").substring(1)
      const targetElement = document.getElementById(targetId)
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })
})

// Add loading states for buttons
function addLoadingState(button, duration = 2000) {
  const originalText = button.textContent
  button.textContent = "Loading..."
  button.disabled = true

  setTimeout(() => {
    button.textContent = originalText
    button.disabled = false
  }, duration)
}

// Enhanced inquiry button with loading state
document.addEventListener("DOMContentLoaded", () => {
  const inquiryButtons = document.querySelectorAll(".ecom-send-inquiry-btn")
  inquiryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      addLoadingState(button)
      // Simulate API call
      setTimeout(() => {
        alert("Inquiry sent successfully!")
      }, 2000)
    })
  })
})
