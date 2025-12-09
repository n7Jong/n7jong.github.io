<template>
  <div class="slide project-detail-slide" :class="slideClass">
    <div class="slide-content">
      <!-- Back Button -->
      <button class="back-button" @click="$emit('close')">
        <i class="fas fa-arrow-left"></i> Back to Projects
      </button>

      <div class="project-detail-container">
        <!-- Project Header -->
        <div class="project-header">
          <div class="project-icon-large">
            <i class="fas fa-blog"></i>
          </div>
          <h1 class="project-title">UC InTTO Website</h1>
          <p class="project-subtitle">Innovation Technology and Transfer Office</p>
        </div>

        <!-- Project Overview -->
        <div class="project-overview">
          <h2>Project Overview</h2>
          <p>
           As Project Leader and Back-End Developer, We designed and deployed the UC InTTO website using HTML5, JavaScript, and Tailwind CSS. I implemented a serverless architecture with Firebase and integrated external APIs like Cloudinary and Google Sheets to showcase research and facilitate collaboration.
          </p>
        </div>

        <!-- Project Details Grid -->
        <div class="project-details-grid">
          <div class="detail-card">
            <i class="fas fa-calendar-alt"></i>
            <h3>Duration</h3>
            <p>2 Months</p>
          </div>
          <div class="detail-card">
            <i class="fas fa-user-tie"></i>
            <h3>Role</h3>
            <p>Project Leader and Back-end Developer</p>
          </div>
          <div class="detail-card">
            <i class="fas fa-code"></i>
            <h3>Technologies</h3>
            <p>HTML5, JavaScript, Tailwind CSS</p>
          </div>
          <div class="detail-card">
            <i class="fas fa-building"></i>
            <h3>Organization</h3>
            <p>University of the Cordilleras</p>
          </div>
        </div>

        <!-- Key Features -->
        <div class="project-features">
          <h2>Key Features</h2>
          <div class="features-grid">
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Responsive Design for all devices</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Modern UI with Tailwind CSS</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Interactive User Interface</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Fast Loading Performance</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>SEO Optimized Structure</span>
            </div>
            <div class="feature-item">
              <i class="fas fa-check-circle"></i>
              <span>Cross-browser Compatible</span>
            </div>
          </div>
        </div>

        <!-- Technologies Used -->
        <div class="project-tech">
          <h2>Technologies Used</h2>
          <div class="tech-tags">
            <span class="tech-tag"><i class="fab fa-html5"></i> HTML5</span>
            <span class="tech-tag"><i class="fab fa-js"></i> JavaScript</span>
            <span class="tech-tag"><i class="fab fa-css3-alt"></i> Tailwind CSS</span>
            <span class="tech-tag"><i class="fas fa-mobile-alt"></i> Responsive Design</span>
            <span class="tech-tag"><i class="fas fa-bolt"></i> Performance Optimized</span>
          </div>
        </div>

        <!-- Live Website Button -->
        <div class="project-cta">
          <a href="https://intto.uc-bcf.edu.ph" 
             target="_blank" 
             rel="noopener noreferrer" 
             class="btn btn-primary btn-live">
            <i class="fas fa-external-link-alt"></i>
            Explore Live Website
          </a>
          <p class="cta-note">Visit intto.uc-bcf.edu.ph to see the project in action</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

defineProps({
  slideClass: {
    type: String,
    default: ''
  }
});

defineEmits(['close']);
</script>

<style scoped>
.project-detail-slide {
  background: linear-gradient(135deg, var(--color-1) 0%, var(--color-2) 100%);
}

.slide-content {
  max-width: 1000px;
  overflow-y: auto;
  overflow-x: hidden;
}

.back-button {
  background: transparent;
  border: 2px solid var(--border-color);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-family: 'Orbitron', sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1px;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 2rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.back-button:hover {
  background: var(--bg-accent);
  border-color: var(--accent-primary);
  transform: translateX(-5px);
}

.back-button i {
  font-size: 1rem;
}

.project-detail-container {
  animation: fadeInUp 0.8s ease;
}

.project-header {
  text-align: center;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid var(--color-3);
}

.project-icon-large {
  width: 120px;
  height: 120px;
  background: var(--gradient-secondary);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 2rem;
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
  position: relative;
}

.project-icon-large::before {
  content: '';
  position: absolute;
  inset: 6px;
  background: var(--bg-primary);
  clip-path: polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%);
}

.project-icon-large i {
  font-size: 4rem;
  color: var(--text-primary);
  z-index: 1;
}

.project-title {
  font-size: 3rem;
  font-weight: 900;
  font-family: 'Orbitron', sans-serif;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 3px;
}

.project-subtitle {
  font-size: 1.2rem;
  color: var(--text-secondary);
  font-weight: 600;
  letter-spacing: 2px;
}

.project-overview {
  margin-bottom: 3rem;
}

.project-overview h2,
.project-features h2,
.project-tech h2 {
  font-size: 2rem;
  font-family: 'Orbitron', sans-serif;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 0.75rem;
}

.project-overview h2::after,
.project-features h2::after,
.project-tech h2::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 60px;
  height: 3px;
  background: var(--gradient-dark);
}

.project-overview p {
  font-size: 1.1rem;
  line-height: 1.9;
  color: var(--text-secondary);
}

.project-details-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.detail-card {
  background: var(--bg-secondary);
  padding: 2rem 1.5rem;
  border: 2px solid var(--color-3);
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
}

.detail-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: var(--gradient-dark);
}

.detail-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  border-color: var(--accent-primary);
}

.detail-card i {
  font-size: 2.5rem;
  color: var(--accent-primary);
  margin-bottom: 1rem;
}

.detail-card h3 {
  font-size: 1rem;
  font-family: 'Orbitron', sans-serif;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.detail-card p {
  font-size: 0.95rem;
  color: var(--text-secondary);
}

.project-features {
  margin-bottom: 3rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--bg-secondary);
  border-left: 3px solid var(--accent-primary);
  transition: all 0.3s ease;
}

.feature-item:hover {
  background: var(--bg-accent);
  transform: translateX(5px);
}

.feature-item i {
  font-size: 1.5rem;
  color: var(--accent-primary);
}

.feature-item span {
  font-size: 1rem;
  color: var(--text-secondary);
  font-weight: 500;
}

.project-tech {
  margin-bottom: 3rem;
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.tech-tag {
  background: var(--bg-accent);
  color: var(--text-primary);
  padding: 0.75rem 1.5rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: 2px solid var(--border-color);
  font-family: 'Orbitron', sans-serif;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--gradient-dark);
  color: var(--bg-primary);
  border-color: var(--accent-primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

.tech-tag i {
  font-size: 1.2rem;
}

.project-cta {
  text-align: center;
  padding: 3rem 0;
  border-top: 2px solid var(--color-3);
  margin-top: 2rem;
}

.btn-live {
  padding: 1.25rem 3rem;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
}

.btn-live i {
  font-size: 1.2rem;
}

.cta-note {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-top: 1rem;
}

/* Responsive Design */
@media (max-width: 968px) {
  .project-details-grid {
    grid-template-columns: repeat(2, 1fr);
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .project-title {
    font-size: 2rem;
    letter-spacing: 2px;
  }

  .project-subtitle {
    font-size: 1rem;
  }

  .project-details-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .detail-card {
    padding: 1.5rem 1rem;
  }

  .project-overview h2,
  .project-features h2,
  .project-tech h2 {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .project-icon-large {
    width: 100px;
    height: 100px;
  }

  .project-icon-large i {
    font-size: 3rem;
  }

  .project-title {
    font-size: 1.5rem;
    letter-spacing: 1px;
  }

  .btn-live {
    padding: 1rem 2rem;
    font-size: 1rem;
  }
}
</style>
