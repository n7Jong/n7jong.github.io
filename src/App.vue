<template>
  <div id="app">
    <!-- Navigation -->
    <Navbar 
      :nav-items="navItems"
      :current-slide="currentSlide"
      :mobile-menu-open="mobileMenuOpen"
      @navigate="navigateToSlide"
      @toggle-menu="handleToggleMenu"
    />

    <!-- Slides Container -->
    <div class="slides-container">
      <HomeSlide :class="getSlideClass(0)" @navigate="navigateToSlide" />
      <AboutSlide :class="getSlideClass(1)" :stats="stats" />
      <SkillsSlide :class="getSlideClass(2)" :skills="skills" :is-active="currentSlide === 2" />
      <ProjectsSlide :class="getSlideClass(3)" :projects="projects" @view-project="openProjectDetail" />
      <ContactSlide :class="getSlideClass(4)" 
                    :contact-details="contactDetails" 
                    :social-links="socialLinks" />
      
      <!-- Project Detail Page -->
      <ProjectDetail v-if="showProjectDetail" 
                     :slide-class="'slide active'" 
                     @close="closeProjectDetail" />
    </div>

    <!-- Navigation Arrows -->
    <NavigationArrows 
      v-if="!showProjectDetail"
      :is-first-slide="currentSlide === 0"
      :is-last-slide="currentSlide === totalSlides - 1"
      @prev="prevSlide"
      @next="nextSlide"
    />

    <!-- Slide Indicators -->
    <div v-if="!showProjectDetail" class="slide-indicators">
      <span v-for="index in totalSlides" 
            :key="index"
            class="indicator" 
            :class="{ active: currentSlide === index - 1 }"
            @click="navigateToSlide(index - 1)">
      </span>
    </div>

    <!-- Chatbot Widget -->
    <ChatbotWidget />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import Navbar from './components/Navbar.vue';
import NavigationArrows from './components/NavigationArrows.vue';
import HomeSlide from './components/HomeSlide.vue';
import AboutSlide from './components/AboutSlide.vue';
import SkillsSlide from './components/SkillsSlide.vue';
import ProjectsSlide from './components/ProjectsSlide.vue';
import ContactSlide from './components/ContactSlide.vue';
import ProjectDetail from './components/ProjectDetail.vue';
import ChatbotWidget from './components/ChatbotWidget.vue';

// Reactive state
const currentSlide = ref(0);
const totalSlides = ref(5);
const isAnimating = ref(false);
const mobileMenuOpen = ref(false);
const showProjectDetail = ref(false);

// Navigation items
const navItems = ['Home', 'About', 'Skills', 'Projects', 'Contact'];

// Stats data
const stats = [
  { value: '2+', label: 'Years Experience' },
  { value: '1', label: 'Projects Completed' },
  { value: '6', label: 'Happy Clients' }
];
// Random push

// Skills data
const skills = [
  { name: 'HTML5', icon: 'fab fa-html5', progress: '100%' },
  { name: 'Tailwind CSS', icon: 'fab fa-tailwind-css', progress: '75%' },
  { name: 'JavaScript', icon: 'fab fa-js', progress: '85%' },
  { name: 'React', icon: 'fab fa-react', progress: '0%' },
  { name: 'Node.js', icon: 'fab fa-node', progress: '75%' },
  { name: 'Databases', icon: 'fas fa-database', progress: '70%' },
  { name: 'UI/UX Design', icon: 'fab fa-figma', progress: '85%' },
  { name: 'Git & GitHub', icon: 'fab fa-git-alt', progress: '80%' }
];

// Projects data
const projects = [
  {
    title: 'UC InTTO Website',
    description: 'My First Project as Internship Developer for University of the Cordilleras - Innovation Technology and Transfer Office.',
    icon: 'fas fa-blog',
    tags: ['HTML5', 'JavaScript', 'Tailwind CSS']
  },
];

// Contact details
const contactDetails = [
  { type: 'Email', icon: 'fas fa-envelope', value: 'aljohnorpilla7777@gmail.com' },
  { type: 'Phone', icon: 'fas fa-phone', value: '+639 76-109-3559' },
  { type: 'Location', icon: 'fas fa-map-marker-alt', value: 'Baguio City, 2600, Philippines' }
];

// Social links
const socialLinks = [
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/n7Jong' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/n7Jong' },
  { name: 'Facebook', icon: 'fab fa-facebook', url: 'https://www.facebook.com/n7.jxng' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: 'https://www.instagram.com/j.1100001001/' }
];

// Methods
const getSlideClass = (slideIndex) => {
  const classes = ['slide'];
  if (currentSlide.value === slideIndex) classes.push('active');
  else if (slideIndex < currentSlide.value) classes.push('prev');
  else if (slideIndex > currentSlide.value) classes.push('next');
  return classes.join(' ');
};

const navigateToSlide = (slideIndex) => {
  if (isAnimating.value || slideIndex < 0 || slideIndex >= totalSlides.value) return;
  
  // Close project detail if open
  if (showProjectDetail.value) {
    showProjectDetail.value = false;
  }
  
  isAnimating.value = true;
  currentSlide.value = slideIndex;
  
  if (mobileMenuOpen.value) {
    mobileMenuOpen.value = false;
  }
  
  setTimeout(() => {
    isAnimating.value = false;
  }, 800);
};

const prevSlide = () => {
  // Close project detail if open
  if (showProjectDetail.value) {
    showProjectDetail.value = false;
    return;
  }
  
  if (currentSlide.value > 0) {
    navigateToSlide(currentSlide.value - 1);
  }
};

const nextSlide = () => {
  // Close project detail if open
  if (showProjectDetail.value) {
    showProjectDetail.value = false;
    return;
  }
  
  if (currentSlide.value < totalSlides.value - 1) {
    navigateToSlide(currentSlide.value + 1);
  }
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};

const handleToggleMenu = (isOpen) => {
  mobileMenuOpen.value = isOpen;
};

const openProjectDetail = () => {
  showProjectDetail.value = true;
};

const closeProjectDetail = () => {
  showProjectDetail.value = false;
};

// Keyboard navigation
const handleKeyDown = (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  } else if (e.key === 'ArrowRight') {
    nextSlide();
  }
};

// Touch/Swipe support
let touchStartX = 0;
let touchEndX = 0;

const handleTouchStart = (e) => {
  touchStartX = e.changedTouches[0].screenX;
};

const handleTouchEnd = (e) => {
  touchEndX = e.changedTouches[0].screenX;
  handleSwipe();
};

const handleSwipe = () => {
  const swipeThreshold = 50;
  const diff = touchStartX - touchEndX;
  
  if (Math.abs(diff) > swipeThreshold) {
    if (diff > 0) {
      nextSlide();
    } else {
      prevSlide();
    }
  }
};

// Lifecycle hooks
onMounted(() => {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchend', handleTouchEnd);
  
  console.log('%c Welcome to Jong\'s Portfolio! ', 'background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
  console.log('%c Navigate with arrow keys, swipe, or click navigation! ', 'color: #6366f1; font-size: 14px;');
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('touchstart', handleTouchStart);
  document.removeEventListener('touchend', handleTouchEnd);
});
</script>

<style>
@import './assets/styles.css';
</style>
