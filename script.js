// Enhanced JavaScript with mobile functionality
document.addEventListener("DOMContentLoaded", () => {
  initializeCountdownTimer()
  initializeBasicInteractions()
  initializeMobileSidebar()
  initializeMobileInteractions()
})

// Mobile Sidebar Functionality
function initializeMobileSidebar() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileSidebar = document.getElementById("mobileSidebar")
  const mobileSidebarOverlay = document.getElementById("mobileSidebarOverlay")

  if (mobileMenuBtn && mobileSidebar && mobileSidebarOverlay) {
    // Open sidebar
    mobileMenuBtn.addEventListener("click", () => {
      mobileSidebar.classList.add("active")
      mobileSidebarOverlay.classList.add("active")
      document.body.style.overflow = "hidden"
    })

    // Close sidebar when clicking overlay
    mobileSidebarOverlay.addEventListener("click", () => {
      mobileSidebar.classList.remove("active")
      mobileSidebarOverlay.classList.remove("active")
      document.body.style.overflow = ""
    })

    // Close sidebar when pressing escape key
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && mobileSidebar.classList.contains("active")) {
        mobileSidebar.classList.remove("active")
        mobileSidebarOverlay.classList.remove("active")
        document.body.style.overflow = ""
      }
    })
  }
}

// Mobile Category Tabs
function initializeMobileInteractions() {
  const categoryTabs = document.querySelectorAll(".category-tab")

  categoryTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      // Remove active class from all tabs
      categoryTabs.forEach((t) => t.classList.remove("active"))
      // Add active class to clicked tab
      tab.classList.add("active")
    })
  })

  // Mobile search functionality
  const mobileSearchInput = document.querySelector(".mobile-search-input")
  if (mobileSearchInput) {
    mobileSearchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        const searchTerm = mobileSearchInput.value.trim()
        if (searchTerm) {
          alert(`Searching for: ${searchTerm}`)
        } else {
          alert("Please enter a search term")
        }
      }
    })
  }
}

// Fixed Countdown Timer
function initializeCountdownTimer() {
  const timeBoxes = document.querySelectorAll(".time-box")

  if (timeBoxes.length >= 3) {
    // Set initial time (13 hours, 34 minutes, 56 seconds)
    let totalSeconds = 13 * 3600 + 34 * 60 + 56

    function updateTimer() {
      const hours = Math.floor(totalSeconds / 3600)
      const minutes = Math.floor((totalSeconds % 3600) / 60)
      const seconds = totalSeconds % 60

      // Update the display
      if (timeBoxes[0]) {
        timeBoxes[0].firstChild.textContent = hours.toString().padStart(2, "0")
      }
      if (timeBoxes[1]) {
        timeBoxes[1].firstChild.textContent = minutes.toString().padStart(2, "0")
      }
      if (timeBoxes[2]) {
        timeBoxes[2].firstChild.textContent = seconds.toString().padStart(2, "0")
      }

      // Decrease total seconds
      totalSeconds--

      // Reset if timer reaches zero
      if (totalSeconds < 0) {
        totalSeconds = 13 * 3600 + 34 * 60 + 56 // Reset to initial time
      }
    }

    // Update immediately and then every second
    updateTimer()
    setInterval(updateTimer, 1000)
  }
}

function initializeBasicInteractions() {
  // Search functionality
  const searchBtn = document.querySelector(".search-btn")
  const searchInput = document.querySelector(".search-input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim()
      if (searchTerm) {
        alert(`Searching for: ${searchTerm}`)
      } else {
        alert("Please enter a search term")
      }
    })

    searchInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        searchBtn.click()
      }
    })
  }

  // Newsletter subscription
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

  // Send inquiry functionality
  const sendInquiryBtn = document.querySelector(".send-inquiry")
  if (sendInquiryBtn) {
    sendInquiryBtn.addEventListener("click", () => {
      alert("Inquiry sent successfully!")
    })
  }

  // Learn more button
  const learnMoreBtn = document.querySelector(".learn-more-btn")
  if (learnMoreBtn) {
    learnMoreBtn.addEventListener("click", () => {
      alert("Redirecting to product details...")
    })
  }

  // Join and Login buttons
  const joinBtn = document.querySelector(".join-btn")
  const loginBtn = document.querySelector(".login-btn")

  if (joinBtn) {
    joinBtn.addEventListener("click", () => {
      alert("Redirecting to registration page...")
    })
  }

  if (loginBtn) {
    loginBtn.addEventListener("click", () => {
      alert("Redirecting to login page...")
    })
  }

  // Source now buttons
  const sourceButtons = document.querySelectorAll(".source-btn")
  sourceButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      alert("Redirecting to suppliers...")
    })
  })

  // Product item clicks
  const productItems = document.querySelectorAll(".product-item, .deal-card, .recommended-item")
  productItems.forEach((item) => {
    item.addEventListener("click", () => {
      alert("Redirecting to product details...")
    })
  })

  // Service card clicks
  const serviceCards = document.querySelectorAll(".service-card")
  serviceCards.forEach((card) => {
    card.addEventListener("click", () => {
      alert("Learn more about this service...")
    })
  })

  // Handle window resize for responsive adjustments
  window.addEventListener("resize", () => {
    const mobileSidebar = document.getElementById("mobileSidebar")
    const mobileSidebarOverlay = document.getElementById("mobileSidebarOverlay")

    if (window.innerWidth > 768) {
      if (mobileSidebar) mobileSidebar.classList.remove("active")
      if (mobileSidebarOverlay) mobileSidebarOverlay.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
}
