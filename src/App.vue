<script setup>
import Header from './components/Header.vue'
import { ref, onMounted, onUnmounted } from 'vue'

// Dados do carrossel
const carouselImages = [
  '/images/WhatsApp Image 2025-07-28 at 10.09.15.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.18.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.20.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.22.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.24.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.27.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.29.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.31.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.33.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.35.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.37.jpeg',
  '/images/WhatsApp Image 2025-07-28 at 10.09.39.jpeg',
]

const currentSlide = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval = null

// Funções do carrossel
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % carouselImages.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? carouselImages.length - 1 : currentSlide.value - 1
}

const goToSlide = (index) => {
  currentSlide.value = index
}

const toggleAutoPlay = () => {
  isAutoPlaying.value = !isAutoPlaying.value
  if (isAutoPlaying.value) {
    startAutoPlay()
  } else {
    stopAutoPlay()
  }
}

const startAutoPlay = () => {
  autoPlayInterval = setInterval(nextSlide, 4000)
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

// Lifecycle hooks
onMounted(() => {
  startAutoPlay()

  // Observer para animações de scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, observerOptions)

  // Observar todas as seções e elementos com animação
  const sections = document.querySelectorAll(
    '.scroll-section, .scroll-animate, .scroll-animate-delay-1, .scroll-animate-delay-2, .scroll-animate-delay-3, .scroll-animate-delay-4',
  )
  sections.forEach((section) => {
    observer.observe(section)
  })
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <div class="min-h-screen overflow-x-hidden">
    <!-- Header -->
    <Header />

    <!-- Seção Hero com Banner de Fundo -->
    <!-- Seção Hero com Banner de Fundo -->
    <!-- Seção Hero com Banner de Fundo - Versão Atualizada -->
    <section id="home" class="relative min-h-[93vh] flex items-center">
      <!-- Banner como fundo -->
      <div class="absolute inset-0 z-0">
        <img
          src="/images/logos/banner.png"
          alt="Banner Cite Engenharia"
          class="w-full h-full object-cover"
        />
        <!-- Overlay escuro -->
        <div class="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      <!-- Container principal ajustado -->
      <div class="relative z-10 w-full h-full flex items-center">
        <!-- Container da logo e botão -->
        <div class="ml-[15%] mt-[-6%] transform translate-x-10 translate-y-10 w-full max-w-2xl">
          <!-- Logo posicionada -->
          <img
            src="/images/logos/logo2.png"
            alt="Logo Cite Engenharia"
            class="w-auto h-40 sm:h-56 md:h-72 lg:h-80 xl:h-96"
          />

          <!-- Botão WhatsApp -->
          <div class="mt-8 w-fit">
            <a
              href="https://wa.me/5562983280707?text=Olá! Gostaria de saber mais sobre os serviços da Cite Engenharia."
              target="_blank"
              class="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
                />
              </svg>
              Fale Conosco
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Carrossel de Projetos -->
    <section
      class="py-20 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white scroll-section"
    >
      <div class="container mx-auto px-4 relative z-10 max-w-full">
        <div class="text-center mb-16 scroll-animate">
          <h2 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 mb-6">
            Nossos
            <span
              class="bg-gradient-to-r from-cite-primary to-cite-secondary bg-clip-text text-transparent"
            >
              Projetos
            </span>
          </h2>
          <p class="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Transformamos sonhos em realidade através de projetos de engenharia de excelência. Cada
            obra é uma história de qualidade, inovação e compromisso com nossos clientes.
          </p>
        </div>

        <!-- Carrossel Container -->
        <div class="relative max-w-6xl mx-auto carousel-container overflow-hidden">
          <!-- Carrossel -->
          <div
            class="relative overflow-hidden rounded-3xl shadow-2xl transform transition-all duration-700 hover:scale-[1.01] bg-white"
          >
            <div
              class="flex transition-transform duration-700 ease-out slide-transition"
              :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
            >
              <div
                v-for="(image, index) in carouselImages"
                :key="index"
                class="w-full flex-shrink-0 relative group"
              >
                <img
                  :src="image"
                  :alt="`Projeto ${index + 1}`"
                  class="w-full h-80 sm:h-96 md:h-[600px] lg:h-[700px] xl:h-[800px] object-cover transition-all duration-500 group-hover:scale-105 carousel-image"
                />
              </div>
            </div>

            <!-- Botões de navegação modernos -->
            <button
              @click="prevSlide"
              class="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 carousel-button group"
            >
              <svg
                class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 19l-7-7 7-7"
                ></path>
              </svg>
            </button>

            <button
              @click="nextSlide"
              class="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 p-4 rounded-full shadow-xl transition-all duration-300 hover:scale-110 border border-gray-200 carousel-button group"
            >
              <svg
                class="w-6 h-6 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </button>

            <!-- Botão play/pause moderno -->
            <button
              @click="toggleAutoPlay"
              class="absolute top-6 right-6 bg-white/95 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-xl transition-all duration-300 border border-gray-200 carousel-button group"
            >
              <svg
                v-if="isAutoPlaying"
                class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 9v6m4-6v6"
                ></path>
              </svg>
              <svg
                v-else
                class="w-5 h-5 group-hover:scale-110 transition-transform duration-200"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
            </button>
          </div>

          <!-- Indicadores modernos -->
          <div class="flex justify-center mt-8 space-x-3">
            <button
              v-for="(image, index) in carouselImages"
              :key="index"
              @click="goToSlide(index)"
              class="w-3 h-3 rounded-full transition-all duration-300 hover:scale-125"
              :class="
                index === currentSlide
                  ? 'bg-cite-primary shadow-lg shadow-cite-primary/50 scale-125 indicator-active'
                  : 'bg-gray-300 hover:bg-gray-400'
              "
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Sobre Nós -->
    <section id="sobre" class="py-20 bg-gray-50 scroll-section overflow-hidden">
      <div class="container mx-auto px-6 max-w-7xl">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <!-- Conteúdo Textual -->
          <div class="space-y-8 scroll-animate">
            <div>
              <h2 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Construindo
                <span
                  class="bg-gradient-to-r from-cite-primary to-cite-secondary bg-clip-text text-transparent"
                >
                  Sonhos
                </span>
              </h2>
              <p class="text-xl text-gray-600 leading-relaxed">
                Na <strong>Cite Engenharia</strong>, não construímos apenas casas - construímos
                lares, memórias e futuros. Somos uma empresa de engenharia apaixonada por
                transformar visões em realidade.
              </p>
            </div>

            <div class="space-y-6">
              <div class="flex items-start space-x-4 scroll-animate-delay-1">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-cite-primary rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">Qualidade Garantida</h3>
                  <p class="text-gray-600">
                    Utilizamos materiais de primeira linha e técnicas construtivas modernas para
                    garantir durabilidade e segurança em cada projeto.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4 scroll-animate-delay-2">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-cite-secondary rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">Inovação Constante</h3>
                  <p class="text-gray-600">
                    Acompanhamos as últimas tendências e tecnologias da construção civil para
                    oferecer soluções modernas e eficientes.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4 scroll-animate-delay-3">
                <div
                  class="flex-shrink-0 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    ></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-gray-800 mb-2">
                    Atendimento Personalizado
                  </h3>
                  <p class="text-gray-600">
                    Cada cliente é único. Desenvolvemos projetos sob medida, considerando suas
                    necessidades, sonhos e orçamento.
                  </p>
                </div>
              </div>
            </div>

            <div class="pt-6 scroll-animate-delay-4">
              <a
                href="#contato"
                class="inline-flex items-center bg-cite-primary hover:bg-cite-primary/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Fale Conosco
                <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </a>
            </div>
          </div>

          <!-- Imagem/Ilustração -->
          <div class="relative scroll-animate-delay-2">
            <div
              class="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
            >
              <div class="text-center space-y-4">
                <div
                  class="w-24 h-24 bg-gradient-to-br from-cite-primary to-cite-secondary rounded-full flex items-center justify-center mx-auto"
                >
                  <svg
                    class="w-12 h-12 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    ></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold text-gray-800">Construção Residencial</h3>
                <p class="text-gray-600">
                  Especialistas em casas e condomínios com acabamento de luxo e funcionalidade.
                </p>
              </div>
            </div>

            <!-- Elementos decorativos de fundo -->
            <div
              class="absolute -top-4 -right-4 w-32 h-32 bg-cite-primary/20 rounded-full blur-2xl"
            ></div>
            <div
              class="absolute -bottom-4 -left-4 w-24 h-24 bg-cite-secondary/20 rounded-full blur-xl"
            ></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Seção Contato -->
    <section id="contato" class="py-16 bg-white scroll-section overflow-hidden">
      <div class="container mx-auto px-6 max-w-5xl">
        <div class="bg-white rounded-xl shadow-lg p-8 scroll-animate">
          <h2 class="text-3xl font-bold text-cite-primary mb-6 text-center">Entre em Contato</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="scroll-animate-delay-1">
              <h3 class="text-xl font-semibold text-cite-primary mb-4">Informações de Contato</h3>
              <div class="space-y-3">
                <div class="flex items-center">
                  <span class="text-cite-secondary mr-3">📞</span>
                  <a
                    href="https://wa.me/5562983280707"
                    target="_blank"
                    class="text-gray-700 hover:text-cite-primary transition-colors"
                  >
                    (62) 98328-0707
                  </a>
                </div>
                <div class="flex items-center">
                  <span class="text-cite-secondary mr-3">📷</span>
                  <a
                    href="https://www.instagram.com/construtoracite?igsh=bDVjcXN4dDc1M2Vv"
                    target="_blank"
                    class="text-gray-700 hover:text-cite-primary transition-colors"
                  >
                    @construtoracite
                  </a>
                </div>
              </div>
            </div>
            <div class="scroll-animate-delay-2">
              <h3 class="text-xl font-semibold text-cite-primary mb-4">Horário de Atendimento</h3>
              <div class="space-y-2 text-gray-700">
                <p><strong>Segunda a Sexta:</strong> 8h às 18h</p>
                <p><strong>Sábado:</strong> 8h às 12h</p>
                <p><strong>Domingo:</strong> Fechado</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Rodapé -->
    <footer class="bg-gray-900 text-gray-300 py-12 overflow-hidden">
      <div class="container mx-auto px-6 max-w-6xl">
        <!-- Seção Principal do Rodapé -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <!-- Informações da Empresa -->
          <div class="text-center md:text-left">
            <div class="flex flex-col items-center md:items-start mb-6">
              <img src="/images/logos/logo.png" alt="Cite Engenharia" class="h-20 w-auto mb-4" />
              <h3 class="text-2xl font-bold text-white mb-2">Cite Engenharia</h3>
              <p class="text-cite-secondary font-semibold">Construção Civil</p>
            </div>
            <p class="text-gray-400 leading-relaxed mb-6">
              Especialistas em construção civil, instalações elétricas e manutenção. Qualidade e
              segurança em todos os nossos projetos.
            </p>
            <div class="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.instagram.com/construtoracite?igsh=bDVjcXN4dDc1M2Vv"
                target="_blank"
                class="text-gray-400 hover:text-cite-primary transition-colors duration-300 hover:scale-110"
              >
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Links Rápidos -->
          <div class="text-center md:text-left">
            <h4 class="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2">
              Links Rápidos
            </h4>
            <ul class="space-y-3">
              <li>
                <a
                  href="#home"
                  class="hover:text-cite-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  class="hover:text-cite-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Sobre
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  class="hover:text-cite-primary transition-colors duration-300 hover:translate-x-1 inline-block"
                >
                  → Contato
                </a>
              </li>
            </ul>
          </div>

          <!-- Contato -->
          <div class="text-center md:text-left">
            <h4 class="text-white font-bold text-lg mb-6 border-b border-gray-700 pb-2">Contato</h4>
            <div class="space-y-4">
              <div class="flex items-center justify-center md:justify-start">
                <div class="bg-cite-primary p-2 rounded-full mr-3">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                    />
                  </svg>
                </div>
                <a
                  href="https://wa.me/5562983280707"
                  target="_blank"
                  class="hover:text-cite-primary transition-colors duration-300"
                >
                  (62) 98328-0707
                </a>
              </div>
              <div class="flex items-center justify-center md:justify-start">
                <div class="bg-cite-secondary p-2 rounded-full mr-3">
                  <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                    />
                  </svg>
                </div>
                <a
                  href="https://www.instagram.com/construtoracite?igsh=bDVjcXN4dDc1M2Vv"
                  target="_blank"
                  class="hover:text-cite-primary transition-colors duration-300"
                >
                  @construtoracite
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Linha divisória -->
        <div class="border-t border-gray-800 pt-8">
          <div class="text-center">
            <p class="text-gray-400 text-sm">
              © 2025 - Cite Engenharia - Desenvolvido por
              <a
                href="https://firetek.com.br/"
                target="_blank"
                class="text-cite-primary hover:text-cite-secondary transition-colors duration-300 font-semibold"
              >
                Firetek - Soluções Digitais
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>

  <!-- WhatsApp Flutuante -->
  <a
    href="https://wa.me/5562983280707?text=Olá! Gostaria de saber mais sobre os serviços da Cite Engenharia."
    target="_blank"
    class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce"
    style="animation-duration: 2s"
  >
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"
      />
    </svg>
  </a>
</template>

<style scoped>
/* Estilos específicos da página */

/* Efeito de parallax suave */
.carousel-section {
  background-attachment: fixed;
}

/* Animação de entrada para o carrossel */
@keyframes slideInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carousel-container {
  animation: slideInUp 0.5s ease-out;
}

/* Efeito de brilho nos botões */
@keyframes glow {
  0%,
  100% {
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
  }
  50% {
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.6);
  }
}

.carousel-button:hover {
  animation: glow 2s infinite;
}

/* Efeito de gradiente animado no título */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.gradient-text {
  background-size: 200% 200%;
  animation: gradientShift 3s ease infinite;
}

/* Efeito de hover nas imagens */
.carousel-image {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.carousel-image:hover {
  filter: brightness(1.1) contrast(1.05);
}

/* Efeito de transição suave entre slides */
.slide-transition {
  transition: transform 0.7s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Responsividade melhorada */
@media (max-width: 640px) {
  .carousel-container {
    margin: 0 -1rem;
  }
}

/* Efeito de profundidade */
.depth-effect {
  transform-style: preserve-3d;
  perspective: 1000px;
}

/* Animações de entrada para elementos */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

/* Efeito de brilho nos indicadores ativos */
.indicator-active {
  position: relative;
}

.indicator-active::after {
  content: '';
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  background: linear-gradient(45deg, var(--cite-primary), var(--cite-secondary));
  border-radius: 50%;
  z-index: -1;
  opacity: 0.5;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 0.5;
    transform: scale(1);
  }
  50% {
    opacity: 0.8;
    transform: scale(1.1);
  }
}

/* Efeitos para a divisão moderna */
.section-divider {
  position: relative;
  overflow: hidden;
}

.section-divider::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    45deg,
    transparent 30%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 70%
  );
  animation: shimmer 3s ease-in-out infinite;
}

@keyframes shimmer {
  0%,
  100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

/* Efeito de profundidade para o círculo central */
.divider-circle {
  position: relative;
  z-index: 10;
}

.divider-circle::before {
  content: '';
  position: absolute;
  inset: -4px;
  background: linear-gradient(
    45deg,
    var(--cite-primary),
    var(--cite-secondary),
    var(--cite-primary)
  );
  border-radius: 50%;
  z-index: -1;
  opacity: 0.3;
  animation: rotate 4s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

/* Efeito de hover para elementos decorativos */
.decorative-element {
  transition: all 0.3s ease;
}

.decorative-element:hover {
  transform: scale(1.2);
  opacity: 1;
}

/* Responsividade para a divisão */
@media (max-width: 768px) {
  .section-divider {
    height: 80px;
  }

  .divider-circle {
    width: 60px;
    height: 60px;
  }
}

/* Animações de scroll suave */
.scroll-section {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.5s ease-out;
}

.scroll-section.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
}

.scroll-animate.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate-delay-1 {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
  transition-delay: 0.1s;
}

.scroll-animate-delay-1.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate-delay-2 {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
  transition-delay: 0.2s;
}

.scroll-animate-delay-2.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate-delay-3 {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
  transition-delay: 0.3s;
}

.scroll-animate-delay-3.visible {
  opacity: 1;
  transform: translateY(0);
}

.scroll-animate-delay-4 {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.4s ease-out;
  transition-delay: 0.4s;
}

.scroll-animate-delay-4.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Scroll suave para links internos */
html {
  scroll-behavior: smooth;
}
</style>
