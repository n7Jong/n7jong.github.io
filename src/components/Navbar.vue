<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">Jong</div>
      <button class="mobile-menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
        <i :class="['fas', isMenuOpen ? 'fa-times' : 'fa-bars']"></i>
      </button>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li v-for="(item, index) in navItems" :key="index">
          <a href="#" 
             class="nav-link" 
             :class="{ active: currentSlide === index }"
             @click.prevent="handleNavigate(index)">
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const props = defineProps({
  navItems: {
    type: Array,
    required: true
  },
  currentSlide: {
    type: Number,
    required: true
  },
  mobileMenuOpen: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['navigate', 'toggle-menu']);

const isMenuOpen = ref(props.mobileMenuOpen);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
  emit('toggle-menu', isMenuOpen.value);
};

const handleNavigate = (index) => {
  emit('navigate', index);
  if (isMenuOpen.value) {
    isMenuOpen.value = false;
    emit('toggle-menu', false);
  }
};

onMounted(() => {
  let tl = gsap.timeline();
  tl.from(".navbar", {
    y: -100,
    duration: 0.8,
    opacity: 0,
    ease: "power2.out"
  });
  tl.from(".logo, .nav-menu li", {
    y: -20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: "back.out(1.7)"
  });
});
</script>
