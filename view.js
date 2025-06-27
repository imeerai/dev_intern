document.addEventListener("DOMContentLoaded", () => {
  initializeNavigation()
  setupViewToggle()
  setupBackButton()
  setupFilterTags()
  setupFavoriteButtons()
  setupRangeSlider()
  setupSidebarToggles()
  setupMobileFilter()
  setupSortDropdown()
  setupFeaturedDropdown()
  setupProductInteractions()
  setupPagination()
})

function initializeNavigation() {
  const logos = document.querySelectorAll(".brand-logo, .footer-brand")
  logos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html"
    })
    logo.style.cursor = "pointer"
  })

  const searchBtn = document.querySelector(".search-btn, .ecom-search-button")
  const searchInput = document.querySelector(".search-input, .ecom-search-container input")

  if (searchBtn && searchInput) {
    searchBtn.addEventListener("click", () => {
      const searchTerm = searchInput.value.trim()
      if (searchTerm) {
        updateSearchResults(searchTerm)
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

  const categoryLinks = document.querySelectorAll(".ecom-category-list a, .ecom-category-pill")
  categoryLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const categoryName = link.textContent.trim()
      if (categoryName !== "See all") {
        updateCategoryResults(categoryName)
      }
    })
  })

  const breadcrumbLinks = document.querySelectorAll(".ecom-breadcrumb a")
  breadcrumbLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const linkText = link.textContent.toLowerCase()
      if (linkText === "home") {
        window.location.href = "index.html"
      } else {
        updateCategoryResults(linkText)
      }
    })
  })

  const subscribeBtn = document.querySelector(".subscribe-btn, .ecom-subscribe-button")
  const newsletterInput = document.querySelector(".newsletter-input, .ecom-email-input input")

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
}

function setupProductInteractions() {
  const productItems = document.querySelectorAll(".ecom-product-item")
  productItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      if (!e.target.closest(".ecom-favorite-button") && !e.target.closest(".ecom-view-details")) {
        window.location.href = "details.html"
      }
    })
    item.style.cursor = "pointer"
  })

  const viewDetailsLinks = document.querySelectorAll(".ecom-view-details a")
  viewDetailsLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "details.html"
    })
  })

  const relatedProducts = document.querySelectorAll(".ecom-related-product")
  relatedProducts.forEach((product) => {
    product.addEventListener("click", () => {
      window.location.href = "details.html"
    })
    product.style.cursor = "pointer"
  })
}

function setupPagination() {
  const paginationButtons = document.querySelectorAll(".ecom-pagination-number, .ecom-pagination-arrow")
  paginationButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".ecom-pagination-number").forEach((btn) => {
        btn.classList.remove("active")
      })
      if (button.classList.contains("ecom-pagination-number")) {
        button.classList.add("active")
      } 
      window.scrollTo({ top: 0, behavior: "smooth" })
    })
  })
}
function updateSearchResults(searchTerm) {
  const mobileTitle = document.querySelector(".ecom-mobile-header h1")
  if (mobileTitle) {
    mobileTitle.textContent = `Search: ${searchTerm}`
  }
  const breadcrumb = document.querySelector(".ecom-breadcrumb")
  if (breadcrumb) {
    breadcrumb.innerHTML = `<a href="#">Home</a> &gt; <a href="#">Search</a> &gt; ${searchTerm}`
  }
  const itemCount = document.querySelector(".ecom-item-count")
  if (itemCount) {
    itemCount.innerHTML = `<span>Search results for</span> <strong>"${searchTerm}"</strong>`
  }
  console.log(`Searching for: ${searchTerm}`)
}

function updateCategoryResults(categoryName) {
  const mobileTitle = document.querySelector(".ecom-mobile-header h1")
  if (mobileTitle) {
    mobileTitle.textContent = categoryName
  }
  const breadcrumb = document.querySelector(".ecom-breadcrumb")
  if (breadcrumb) {
    breadcrumb.innerHTML = `<a href="#">Home</a> &gt; <a href="#">Categories</a> &gt; ${categoryName}`
  }
  const itemCount = document.querySelector(".ecom-item-count")
  if (itemCount) {
    itemCount.innerHTML = `<span>Items in</span> <strong>${categoryName}</strong>`
  }
  console.log(`Filtering by category: ${categoryName}`)
}
function setupViewToggle() {
  const gridButtons = document.querySelectorAll(".ecom-view-grid")
  const listButtons = document.querySelectorAll(".ecom-view-list")
  const productsContainers = document.querySelectorAll(".ecom-products-container")

  gridButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".ecom-view-grid, .ecom-view-list").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".ecom-view-grid").forEach((btn) => {
        btn.classList.add("active")
      })
      productsContainers.forEach((container) => {
        container.classList.remove("ecom-list-view")
        container.classList.add("ecom-grid-view")
      })
    })
  })

  listButtons.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".ecom-view-grid, .ecom-view-list").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".ecom-view-list").forEach((btn) => {
        btn.classList.add("active")
      })
      productsContainers.forEach((container) => {
        container.classList.remove("ecom-grid-view")
        container.classList.add("ecom-list-view")
      })
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

function setupFilterTags() {
  const filterTags = document.querySelectorAll(".ecom-filter-tag")
  filterTags.forEach((tag) => {
    tag.addEventListener("click", function () {
      this.remove()
    })
  })

  const clearFilterButtons = document.querySelectorAll(".ecom-clear-filter")
  clearFilterButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      const filterTags = document.querySelectorAll(".ecom-filter-tag")
      filterTags.forEach((tag) => tag.remove())
    })
  })
}
function setupFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".ecom-favorite-button")
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      e.stopPropagation()
      const icon = this.querySelector("i")
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
        icon.style.color = "#ff4757"
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
        icon.style.color = ""
      }
    })
  })
}
function setupRangeSlider() {
  const leftHandle = document.getElementById("leftHandle")
  const rightHandle = document.getElementById("rightHandle")
  const rangeFill = document.querySelector(".ecom-range-fill")
  const minPriceInput = document.getElementById("minPrice")
  const maxPriceInput = document.getElementById("maxPrice")
  const rangeTrack = document.querySelector(".ecom-range-track")

  if (!leftHandle || !rightHandle || !rangeFill || !minPriceInput || !maxPriceInput || !rangeTrack) {
    return 
  }

  let isDraggingLeft = false
  let isDraggingRight = false

  updateRangeUI(20, 80) 
  leftHandle.addEventListener("mousedown", (e) => {
    e.preventDefault()
    isDraggingLeft = true
  })
 rightHandle.addEventListener("mousedown", (e) => {
    e.preventDefault()
    isDraggingRight = true
  })
  document.addEventListener("mousemove", (e) => {
    if (!isDraggingLeft && !isDraggingRight) return

    const trackRect = rangeTrack.getBoundingClientRect()
    const percentage = Math.min(Math.max(((e.clientX - trackRect.left) / trackRect.width) * 100, 0), 100)

    if (isDraggingLeft) {
      const rightPos = Number.parseFloat(rightHandle.style.left || "80")
      if (percentage < rightPos - 5) {
        leftHandle.style.left = `${percentage}%`
        rangeFill.style.left = `${percentage}%`
        const minPrice = Math.floor((percentage / 100) * 999999)
        minPriceInput.value = minPrice
      }
    } else if (isDraggingRight) {
      const leftPos = Number.parseFloat(leftHandle.style.left || "20")
      if (percentage > leftPos + 5) {
        rightHandle.style.left = `${percentage}%`
        rangeFill.style.right = `${100 - percentage}%`
        const maxPrice = Math.floor((percentage / 100) * 999999)
        maxPriceInput.value = maxPrice
      }
    }
  })

  document.addEventListener("mouseup", () => {
    isDraggingLeft = false
    isDraggingRight = false
  })
  minPriceInput.addEventListener("change", () => {
    const minVal = Number.parseInt(minPriceInput.value) || 0
    const maxVal = Number.parseInt(maxPriceInput.value) || 999999

    if (minVal >= maxVal) {
      minPriceInput.value = maxVal - 1
    }

    const percentage = (minVal / 999999) * 100
    updateLeftPosition(percentage)
  })

  maxPriceInput.addEventListener("change", () => {
    const minVal = Number.parseInt(minPriceInput.value) || 0
    const maxVal = Number.parseInt(maxPriceInput.value) || 999999

    if (maxVal <= minVal) {
      maxPriceInput.value = minVal + 1
    }

    const percentage = (maxVal / 999999) * 100
    updateRightPosition(percentage)
  })
  const applyButton = document.querySelector(".ecom-apply-button")
  if (applyButton) {
    applyButton.addEventListener("click", () => {
      alert(`Price range applied: $${minPriceInput.value} - $${maxPriceInput.value}`)
    })
  }
  function updateRangeUI(leftPos, rightPos) {
    leftHandle.style.left = `${leftPos}%`
    rightHandle.style.left = `${rightPos}%`
    rangeFill.style.left = `${leftPos}%`
    rangeFill.style.right = `${100 - rightPos}%`

    minPriceInput.value = Math.floor((leftPos / 100) * 999999)
    maxPriceInput.value = Math.floor((rightPos / 100) * 999999)
  }

  function updateLeftPosition(percentage) {
    const rightPos = Number.parseFloat(rightHandle.style.left || "80")
    const leftPos = Math.min(percentage, rightPos - 5)

    leftHandle.style.left = `${leftPos}%`
    rangeFill.style.left = `${leftPos}%`
  }

  function updateRightPosition(percentage) {
    const leftPos = Number.parseFloat(leftHandle.style.left || "20")
    const rightPos = Math.max(percentage, leftPos + 5)

    rightHandle.style.left = `${rightPos}%`
    rangeFill.style.right = `${100 - rightPos}%`
  }
}
function setupSidebarToggles() {
  const sectionHeaders = document.querySelectorAll(".ecom-section-header")

  sectionHeaders.forEach((header) => {
    const toggleIcon = header.querySelector(".toggle-section")
    if (toggleIcon) {
      header.addEventListener("click", () => {
        const section = header.parentElement
        const content = section.querySelector(
          ".ecom-category-list, .ecom-checkbox-list, .ecom-price-range, .ecom-condition-options, .ecom-ratings-options",
        )

        if (content) {
          const isVisible = content.style.display !== "none"
          content.style.display = isVisible ? "none" : "block"
          header.classList.toggle("collapsed", isVisible)
        }
      })
    }
  })
}

function setupMobileFilter() {
  const filterButton = document.querySelector(".ecom-filter-button")
  const filterPanel = document.querySelector(".ecom-mobile-filter-panel")
  const closeFilterButton = document.querySelector(".ecom-close-filter")
  const applyFiltersButton = document.querySelector(".ecom-apply-filters")
  const clearFiltersButton = document.querySelector(".ecom-clear-filters")

  if (filterButton && filterPanel) {
    filterButton.addEventListener("click", () => {
      filterPanel.classList.add("active")
    })
  }

  if (closeFilterButton && filterPanel) {
    closeFilterButton.addEventListener("click", () => {
      filterPanel.classList.remove("active")
    })
  }

  if (applyFiltersButton && filterPanel) {
    applyFiltersButton.addEventListener("click", () => {
      filterPanel.classList.remove("active")
      alert("Filters applied!")
    })
  }

  if (clearFiltersButton) {
    clearFiltersButton.addEventListener("click", () => {
      const checkboxes = filterPanel.querySelectorAll('input[type="checkbox"]')
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false
      })
      const priceInputs = filterPanel.querySelectorAll(".ecom-mobile-price-range input")
      priceInputs.forEach((input) => {
        if (input.placeholder === "Min") input.value = "0"
        if (input.placeholder === "Max") input.value = "999999"
      })
    })
  }
}
function setupSortDropdown() {
  const sortDropdown = document.querySelector(".ecom-sort-dropdown")
  const sortOptions = document.querySelectorAll(".ecom-sort-option")

  if (sortDropdown && sortOptions.length > 0) {
    sortOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedText = option.textContent
        const sortText = sortDropdown.querySelector("span")
        if (sortText) {
          sortText.textContent = `Sort: ${selectedText}`
        }
      })
    })
  }
}
function setupFeaturedDropdown() {
  const featuredDropdown = document.querySelector(".ecom-dropdown")
  const featuredOptions = document.querySelectorAll(".ecom-dropdown-item")

  if (featuredDropdown && featuredOptions.length > 0) {
    featuredOptions.forEach((option) => {
      option.addEventListener("click", () => {
        const selectedText = option.textContent
        const featuredButton = featuredDropdown.querySelector("button")
        if (featuredButton) {
          featuredButton.innerHTML = `${selectedText} <i class="fas fa-chevron-down"></i>`
        }
      })
    })
  }
}
