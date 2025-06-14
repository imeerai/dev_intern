document.addEventListener("DOMContentLoaded", () => {
  // Setup view toggle between grid and list
  setupViewToggle()

  // Back button functionality
  setupBackButton()

  // Filter tags click handler
  setupFilterTags()

  // Favorite button functionality
  setupFavoriteButtons()

  // Range slider functionality
  setupRangeSlider()

  // Setup sidebar section toggles
  setupSidebarToggles()

  // Setup mobile filter functionality
  setupMobileFilter()

  // Setup sort dropdown functionality
  setupSortDropdown()

  // Setup featured dropdown functionality
  setupFeaturedDropdown()
})

// Setup view toggle between grid and list
function setupViewToggle() {
  const gridButtons = document.querySelectorAll(".ecom-view-grid")
  const listButtons = document.querySelectorAll(".ecom-view-list")
  const productsContainers = document.querySelectorAll(".ecom-products-container")

  gridButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active state on buttons
      document.querySelectorAll(".ecom-view-grid, .ecom-view-list").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".ecom-view-grid").forEach((btn) => {
        btn.classList.add("active")
      })

      // Change view to grid
      productsContainers.forEach((container) => {
        container.classList.remove("ecom-list-view")
        container.classList.add("ecom-grid-view")
      })
    })
  })

  listButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active state on buttons
      document.querySelectorAll(".ecom-view-grid, .ecom-view-list").forEach((btn) => {
        btn.classList.remove("active")
      })

      document.querySelectorAll(".ecom-view-list").forEach((btn) => {
        btn.classList.add("active")
      })

      // Change view to list
      productsContainers.forEach((container) => {
        container.classList.remove("ecom-grid-view")
        container.classList.add("ecom-list-view")
      })
    })
  })
}

// Setup back button functionality
function setupBackButton() {
  const backButtons = document.querySelectorAll(".ecom-back-button")
  backButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault()
      window.location.href = "index.html"
    })
  })
}

// Setup filter tags
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

// Setup favorite buttons
function setupFavoriteButtons() {
  const favoriteButtons = document.querySelectorAll(".ecom-favorite-button")
  favoriteButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()
      const icon = this.querySelector("i")
      if (icon.classList.contains("far")) {
        icon.classList.remove("far")
        icon.classList.add("fas")
      } else {
        icon.classList.remove("fas")
        icon.classList.add("far")
      }
    })
  })
}

// Setup range slider functionality
function setupRangeSlider() {
  const leftHandle = document.getElementById("leftHandle")
  const rightHandle = document.getElementById("rightHandle")
  const rangeFill = document.querySelector(".ecom-range-fill")
  const minPriceInput = document.getElementById("minPrice")
  const maxPriceInput = document.getElementById("maxPrice")
  const rangeTrack = document.querySelector(".ecom-range-track")

  if (!leftHandle || !rightHandle || !rangeFill || !minPriceInput || !maxPriceInput || !rangeTrack) {
    return // Exit if elements don't exist
  }

  let isDraggingLeft = false
  let isDraggingRight = false

  // Set initial positions
  updateRangeUI(20, 80) // Default positions at 20% and 80%

  // Handle mouse events for left handle
  leftHandle.addEventListener("mousedown", (e) => {
    e.preventDefault()
    isDraggingLeft = true
  })

  // Handle mouse events for right handle
  rightHandle.addEventListener("mousedown", (e) => {
    e.preventDefault()
    isDraggingRight = true
  })

  // Handle mouse move and up events
  document.addEventListener("mousemove", (e) => {
    if (!isDraggingLeft && !isDraggingRight) return

    const trackRect = rangeTrack.getBoundingClientRect()
    const percentage = Math.min(Math.max(((e.clientX - trackRect.left) / trackRect.width) * 100, 0), 100)

    if (isDraggingLeft) {
      const rightPos = Number.parseFloat(rightHandle.style.left || "80")
      if (percentage < rightPos - 5) {
        leftHandle.style.left = `${percentage}%`
        rangeFill.style.left = `${percentage}%`

        // Update min price input
        const minPrice = Math.floor((percentage / 100) * 999999)
        minPriceInput.value = minPrice
      }
    } else if (isDraggingRight) {
      const leftPos = Number.parseFloat(leftHandle.style.left || "20")
      if (percentage > leftPos + 5) {
        rightHandle.style.left = `${percentage}%`
        rangeFill.style.right = `${100 - percentage}%`

        // Update max price input
        const maxPrice = Math.floor((percentage / 100) * 999999)
        maxPriceInput.value = maxPrice
      }
    }
  })

  document.addEventListener("mouseup", () => {
    isDraggingLeft = false
    isDraggingRight = false
  })

  // Handle input changes
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

  // Apply button functionality
  const applyButton = document.querySelector(".ecom-apply-button")
  if (applyButton) {
    applyButton.addEventListener("click", () => {
      alert(`Price range applied: $${minPriceInput.value} - $${maxPriceInput.value}`)
    })
  }

  // Helper functions
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

// Setup sidebar section toggles
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

          // Toggle icon rotation
          header.classList.toggle("collapsed", isVisible)
        }
      })
    }
  })
}

// Setup mobile filter functionality
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
      // Here you would typically apply the selected filters
      alert("Filters applied!")
    })
  }

  if (clearFiltersButton) {
    clearFiltersButton.addEventListener("click", () => {
      // Clear all checkboxes in the mobile filter panel
      const checkboxes = filterPanel.querySelectorAll('input[type="checkbox"]')
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false
      })

      // Clear price range inputs
      const priceInputs = filterPanel.querySelectorAll(".ecom-mobile-price-range input")
      priceInputs.forEach((input) => {
        if (input.placeholder === "Min") input.value = "0"
        if (input.placeholder === "Max") input.value = "999999"
      })
    })
  }
}

// Setup sort dropdown functionality
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

// Setup featured dropdown functionality
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
