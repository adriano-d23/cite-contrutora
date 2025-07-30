<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const isScrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    class="fixed w-full top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'"
  >
    <div class="container mx-auto px-4">
      <div class="flex justify-between items-center py-4">
        <!-- Logo -->
        <div class="flex items-center">
          <img src="/images/logos/logo.png" alt="Cite Engenharia" class="h-8 w-auto mr-3" />
          <span
            class="font-bold text-xl transition-colors duration-200"
            :class="isScrolled ? 'text-gray-800' : 'text-white'"
          >
          </span>
        </div>

        <!-- Menu Desktop -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            href="#home"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
          >
            HOME
          </a>
          <a
            href="#sobre"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
          >
            SOBRE
          </a>
          <a
            href="#contato"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
          >
            CONTATO
          </a>
        </div>

        <!-- Menu Mobile Button -->
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg transition-colors duration-200"
          :class="isScrolled ? 'hover:bg-gray-200' : 'hover:bg-white hover:bg-opacity-20'"
        >
          <svg
            class="w-6 h-6 drop-shadow-lg transition-colors duration-200"
            :class="isScrolled ? 'text-gray-800' : 'text-white'"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              v-if="!isMenuOpen"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              v-else
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>

      <!-- Menu Mobile -->
      <div
        v-show="isMenuOpen"
        class="md:hidden mt-4 pb-4 border-t transition-colors duration-200"
        :class="isScrolled ? 'border-gray-300' : 'border-white border-opacity-30'"
      >
        <div class="flex flex-col space-y-4 pt-4">
          <a
            href="#home"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
            @click="isMenuOpen = false"
          >
            HOME
          </a>
          <a
            href="#sobre"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
            @click="isMenuOpen = false"
          >
            SOBRE
          </a>
          <a
            href="#contato"
            class="font-semibold transition-colors duration-200 drop-shadow-lg"
            :class="
              isScrolled
                ? 'text-gray-800 hover:text-cite-primary'
                : 'text-white hover:text-cite-secondary'
            "
            @click="isMenuOpen = false"
          >
            CONTATO
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
/* Estilos específicos do header transparente */
header {
  /* Garantindo que não há fundo branco inicial */
  background: transparent !important;
}

/* Animação suave para o menu mobile */
.menu-enter-active,
.menu-leave-active {
  transition: all 0.3s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Garantindo que o header fique sempre no topo */
header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
}
</style>
