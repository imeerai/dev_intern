document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  setupThumbnailGallery()
  setupMobileImageIndicators()
  setupFavoriteButtons()
  setupProductTabs()
  setupBackButton()
  setupInquiryButtons()
  setupReadMore()
  setupProductInteractions()
})

function initializeNavigation() {
  const logos = document.querySelectorAll(".brand-logo, .footer-brand")
  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html"
    })
    logo.style.cursor = "pointer"
  })

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

  const cartIcons = document.querySelectorAll(".header-icons .i, .ecom-cart-icon")
  cartIcons.forEach((icon) => {
    const iconElement = icon.querySelector("i") || icon
    if (
      iconElement &&
      (iconElement.classList.contains("fa-shopping-cart") || iconElement.classList.contains("fa-shopping-bag"))
    ) {
      icon.addEventListener("click", (e) => {
        e.preventDefault()
        window.location.href = "cart.html"
      })
      icon.style.cursor = "pointer"
    }
  })

  const sidebarItems = document.querySelectorAll(".sidebar-menu li")
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = `view.html?category=${encodeURIComponent(item.textContent)}`
    })
    item.style.cursor = "pointer"
  })

  const subscribeBtn = document.querySelector(".subscribe-btn")
  const newsletterInput = document.querySelector(".newsletter-input")

  if (subscribeBtn && newsletterInput) {
    subscribeBtn.addEventListener("click", () => {
      const email = newsletterInput.value.trim()
      if (email && email.includes("@")) {
        alert(`Thank you for subscribing with: ${email}`)
        newsletterInput.value = ""
      } else {
        alert("Please enter a valid email address")
      }
    })

    newsletterInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        subscribeBtn.click()
      }
    })
  }

  const breadcrumbLinks = document.querySelectorAll(".ecom-breadcrumb a")
  breadcrumbLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const linkText = link.textContent.toLowerCase()
      if (linkText === "home") {
        window.location.href = "index.html"
      } else {
        window.location.href = `view.html?category=${encodeURIComponent(linkText)}`
      }
    })
  })
}

function setupThumbnailGallery() {
  const thumbnails = document.querySelectorAll(".ecom-thumbnail")
  const mainImage = document.getElementById("mainProductImage")

  if (thumbnails.length > 0 && mainImage) {
    thumbnails.forEach((thumbnail, index) => {
      thumbnail.addEventListener("click", () => {
        thumbnails.forEach((thumb) => thumb.classList.remove("active"))
        thumbnail.classList.add("active")
        if (index === 0) {
          mainImage.src = `./Image/cloth/tshirt.jpg`
        } else {
          mainImage.src = `./Image/cloth/tshirt${index}.jpg`
        }
      })
    })
  }
}
function setupMobileImageIndicators() {
  const indicators = document.querySelectorAll(".ecom-indicator")
  const mobileMainImage = document.getElementById("mobileMainImage")

  if (indicators.length > 0 && mobileMainImage) {
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        indicators.forEach((ind) => ind.classList.remove("active"))
        indicator.classList.add("active")
        if (index === 0) {
          mobileMainImage.src = `./Image/cloth/tshirt.jpg`
        } else {
          mobileMainImage.src = `./Image/cloth/tshirt${index}.jpg`
        }
      })
    })
  }
}
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
function setupProductTabs() {
  const tabHeaders = document.querySelectorAll(".ecom-tab-header")
  const tabPanes = document.querySelectorAll(".ecom-tab-pane")

  tabHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const targetTab = header.getAttribute("data-tab")
      tabHeaders.forEach((h) => h.classList.remove("active"))
      tabPanes.forEach((p) => p.classList.remove("active"))
      header.classList.add("active")
      const targetPane = document.getElementById(targetTab)
      if (targetPane) {
        targetPane.classList.add("active")
      }
    })
  })
}
function setupBackButton() {
  const backButtons = document.querySelectorAll(".ecom-back-button")
  backButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "index.html"
    })
  })
}
function setupInquiryButtons() {
  const inquiryButtons = document.querySelectorAll(".ecom-send-inquiry-btn")
  inquiryButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      addLoadingState(button)
      setTimeout(() => {
        alert("Inquiry sent successfully!")
      }, 2000)
    })
  })

  const sellerProfileButtons = document.querySelectorAll(".ecom-seller-profile-btn")
  sellerProfileButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      alert("Seller profile would open here!")
    })
  })

  const promoButtons = document.querySelectorAll(".ecom-promo-button")
  promoButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "view.html"
    })
  })
}
function setupReadMore() {
  const readMoreLinks = document.querySelectorAll(".ecom-read-more")
  readMoreLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const description = link.previousElementSibling
      if (description) {
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

function setupProductInteractions() {
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

    item.addEventListener("click", () => {
      window.location.href = "details.html"
    })
    item.style.cursor = "pointer"
  })

  const similarItems = document.querySelectorAll(".ecom-similar-item")
  similarItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "details.html"
    })
    item.style.cursor = "pointer"
  })

  const recommendationItems = document.querySelectorAll(".ecom-recommendation-item")
  recommendationItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "details.html"
    })
    item.style.cursor = "pointer"
  })

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
}

function addLoadingState(button, duration = 2000) {
  const originalText = button.textContent
  button.textContent = "Loading..."
  button.disabled = true

  setTimeout(() => {
    button.textContent = originalText
    button.disabled = false
  }, duration)
}
