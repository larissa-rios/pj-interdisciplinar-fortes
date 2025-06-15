// Animações e efeitos profissionais
document.addEventListener("DOMContentLoaded", () => {
  // 1. Tela de Carregamento
  showLoadingScreen()

  // 2. Barra de Progresso de Rolagem
  createScrollProgress()

  // 3. Efeito de Rolagem na Navbar
  handleNavbarScroll()

  // 4. Efeito Parallax
  handleParallaxEffect()

  // 5. Rolagem Suave
  handleSmoothScrolling()

  // 6. Animações Avançadas
  initializeAnimations()

  // 7. Efeitos nos Botões
  enhanceButtons()

  // 8. Animação dos Ícones das Etapas
  animateStepIcons()
})

// Tela de Carregamento
function showLoadingScreen() {
  const loader = document.createElement("div")
  loader.className = "page-loader"
  loader.innerHTML = `
        <div class="loader-spinner"></div>
        <div class="loader-text">Carregando...</div>
    `
  document.body.appendChild(loader)

  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.style.opacity = "0"
      setTimeout(() => loader.remove(), 500)
    }, 800)
  })
}

// Barra de Progresso de Rolagem
function createScrollProgress() {
  const progressBar = document.createElement("div")
  progressBar.className = "scroll-progress"
  document.body.appendChild(progressBar)

  window.addEventListener("scroll", () => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight
    const scrolled = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0
    progressBar.style.width = scrolled + "%"
  })
}

// Efeito de Rolagem na Navbar
function handleNavbarScroll() {
  const header = document.querySelector(".header")

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled")
    } else {
      header.classList.remove("scrolled")
    }
  })
}

// Efeito Parallax
function handleParallaxEffect() {
  const heroImage = document.querySelector(".hero-image")

  if (heroImage) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const rate = scrolled * -0.3
      heroImage.style.transform = `translateY(${rate}px)`
    })
  }
}

// Rolagem Suave
function handleSmoothScrolling() {
  const navLinks = document.querySelectorAll(".nav-link")

  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href && href.startsWith("#")) {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })
}

// Inicializar Animações
function initializeAnimations() {
  // Animar elementos ao rolar a página
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("reveal")
      }
    })
  }, observerOptions)

  // Observar etapas
  const steps = document.querySelectorAll(".step")
  steps.forEach((step, index) => {
    step.style.opacity = "0"
    step.style.transform = "translateY(50px)"
    step.style.transition = `all 0.8s ease ${index * 0.2}s`
    observer.observe(step)
  })

  // Animar elementos do hero
  setTimeout(() => {
    const heroTitle = document.querySelector(".hero-title")
    const heroSubtitle = document.querySelector(".hero-subtitle")
    const heroButtons = document.querySelector(".hero-buttons")

    if (heroTitle) {
      heroTitle.classList.add("fade-in-up")
    }

    setTimeout(() => {
      if (heroSubtitle) {
        heroSubtitle.classList.add("fade-in-up")
      }
    }, 300)

    setTimeout(() => {
      if (heroButtons) {
        heroButtons.classList.add("fade-in-up")
      }
    }, 600)
  }, 500)
}

// Efeitos nos Botões
function enhanceButtons() {
  const buttons = document.querySelectorAll(".btn")

  buttons.forEach((button) => {
    button.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-3px)"
      this.style.boxShadow = "0 10px 25px rgba(45, 80, 22, 0.3)"
    })

    button.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
      this.style.boxShadow = "none"
    })

    button.addEventListener("mousedown", function () {
      this.style.transform = "translateY(-1px) scale(0.98)"
    })

    button.addEventListener("mouseup", function () {
      this.style.transform = "translateY(-3px) scale(1)"
    })
  })
}

// Animação dos Ícones das Etapas
function animateStepIcons() {
  const stepIcons = document.querySelectorAll(".step-icon")

  stepIcons.forEach((icon, index) => {
    // Adicionar animação de flutuação
    icon.style.animation = `floating 3s ease-in-out infinite`
    icon.style.animationDelay = `${index * 0.5}s`

    // Efeitos de hover aprimorados
    icon.addEventListener("mouseenter", function () {
      this.style.transform = "scale(1.2) rotate(10deg)"
      this.style.boxShadow = "0 10px 30px rgba(45, 80, 22, 0.3)"
    })

    icon.addEventListener("mouseleave", function () {
      this.style.transform = "scale(1) rotate(0deg)"
      this.style.boxShadow = "none"
    })

    icon.addEventListener("click", function () {
      this.style.animation = "pulse 0.6s ease"
      setTimeout(() => {
        this.style.animation = `floating 3s ease-in-out infinite`
        this.style.animationDelay = `${index * 0.5}s`
      }, 600)
    })
  })
}

/**
 * Rola suavemente a página até a seção especificada pelo ID.
 * @param {string} sectionId - O ID da seção para rolar até.
 */
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId)
  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
}
