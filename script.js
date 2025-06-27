document.addEventListener("DOMContentLoaded", () => {
  initializeCountdownTimer()
  initializeNavigation()
  initializeMobileSidebar()
  initializeMobileInteractions()
})

function initializeMobileSidebar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileSidebar = document.getElementById("mobileSidebar")
  const mobileSidebarOverlay = document.getElementById("mobileSidebarOverlay")

  if (mobileMenuBtn && mobileSidebar && mobileSidebarOverlay) {
    mobileMenuBtn.addEventListener("click", (e) => {
      e.stopPropagation()
      mobileSidebar.classList.add("active")
      mobileSidebarOverlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    mobileSidebarOverlay.addEventListener("click", () => {
      closeMobileSidebar()
    })

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileSidebar.classList.contains("active")) {
        closeMobileSidebar()
      }
    })
  }

  function closeMobileSidebar() {
    if (mobileSidebar && mobileSidebarOverlay) {
      mobileSidebar.classList.remove("active")
      mobileSidebarOverlay.classList.remove("active")
      document.body.style.overflow = ""
    }
  }
}

function initializeMobileInteractions() {
  const categoryTabs = document.querySelectorAll(".category-tab")

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      categoryTabs.forEach((t) => t.classList.remove("active"))
      tab.classList.add("active")
      window.location.href = `view.html?category=${encodeURIComponent(tab.textContent)}`
    })
  })

  const mobileSearchInput = document.querySelector(".mobile-search-input")
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const searchTerm = mobileSearchInput.value.trim()
        if (searchTerm) {
          window.location.href = `view.html?search=${encodeURIComponent(searchTerm)}`
        }
      }
    })
  }
}

function initializeCountdownTimer() {
  const timeBoxes = document.querySelectorAll(".time-box")

  if (timeBoxes.length >= 3) {
    let totalSeconds = 13 * 3600 + 34 * 60 + 56

    function updateTimer() {
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      if (timeBoxes[0]) {
        timeBoxes[0].firstChild.textContent = hours.toString().padStart(2, "0")
      }
      if (timeBoxes[1]) {
        timeBoxes[1].firstChild.textContent = minutes.toString().padStart(2, "0")
      }
      if (timeBoxes[2]) {
        timeBoxes[2].firstChild.textContent = seconds.toString().padStart(2, "0")
      }

      totalSeconds--
      if (totalSeconds < 0) {
        totalSeconds = 13 * 3600 + 34 * 60 + 56
      }
    }

    updateTimer()
    setInterval(updateTimer, 1000)
  }
}

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
  const cartIcons = document.querySelectorAll(".header-icons .i")
  cartIcons.forEach((icon) => {
    const iconElement = icon.querySelector("i")
    if (
      iconElement &&
      (iconElement.classList.contains("fa-shopping-cart") || iconElement.classList.contains("fa-shopping-bag"))
    ) {
      icon.addEventListener("click", () => {
        window.location.href = "cart.html"
      })
      icon.style.cursor = "pointer"
    }
  })

  const learnMoreBtns = document.querySelectorAll(".learn-more-btn")
  learnMoreBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      window.location.href = "view.html"
    })
  })

  const sourceNowBtns = document.querySelectorAll(".source-btn, .newq")
  sourceNowBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "view.html"
    })
  })

  const sidebarItems = document.querySelectorAll(".sidebar-menu li")
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = `view.html?category=${encodeURIComponent(item.textContent)}`
    })
    item.style.cursor = "pointer"
  })

  const productItems = document.querySelectorAll(".deal-card, .product-item, .recommended-item")
  productItems.forEach((item) => {
    item.addEventListener("click", () => {
      window.location.href = "details.html"
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
}

window.addEventListener("resize", () => {
  const mobileSidebar = document.getElementById("mobileSidebar")
  const mobileSidebarOverlay = document.getElementById("mobileSidebarOverlay")

  if (window.innerWidth > 768) {
    if (mobileSidebar) mobileSidebar.classList.remove("active")
    if (mobileSidebarOverlay) mobileSidebarOverlay.classList.remove("active")
    document.body.style.overflow = ""
  }
})
