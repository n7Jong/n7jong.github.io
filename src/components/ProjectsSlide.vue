<template>
  <section class="slide">
    <div class="slide-content">
      <h2 class="section-title">My Projects</h2>
      <ProjectsContent :projects="projects" @view-project="$emit('view-project')" />
    </div>
  </section>
</template>

<script setup>
import { defineEmits } from 'vue';
import ProjectsContent from './ProjectsContent.vue';

defineProps({
  projects: {
    type: Array,
    required: true
  }
});

defineEmits(['view-project']);
</script>
