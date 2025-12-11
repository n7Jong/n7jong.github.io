<template>
  <div class="contact-content">
    <div class="contact-info">
      <h3>Let's Work Together</h3>
      <p>
        I'm always open to discussing new projects, creative ideas, or opportunities 
        to be part of your visions.
      </p>
      <div class="contact-details">
        <div class="contact-item" v-for="contact in contactDetails" :key="contact.type">
          <i :class="contact.icon"></i>
          <div>
            <h4>{{ contact.type }}</h4>
            <p>{{ contact.value }}</p>
          </div>
        </div>
      </div>
      <div class="social-links">
        <a v-for="social in socialLinks" 
           :key="social.name"
           :href="social.url" 
           :aria-label="social.name"
           target="_blank"
           rel="noopener noreferrer">
          <i :class="social.icon"></i>
        </a>
      </div>
    </div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">Your Name</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Your Email</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" v-model="formData.subject" required>
      </div>
      <div class="form-group">
        <label for="message">Your Message</label>
        <textarea id="message" v-model="formData.message" rows="5" required></textarea>
      </div>
      
      <!-- Success Message -->
      <div v-if="submitMessage" class="success-message">
        <i class="fas fa-check-circle"></i>
        {{ submitMessage }}
      </div>
      
      <!-- Error Message -->
      <div v-if="submitError" class="error-message">
        <i class="fas fa-exclamation-circle"></i>
        {{ submitError }}
      </div>
      
      <button type="submit" class="btn btn-primary" :disabled="isSubmitting">
        <span v-if="!isSubmitting">
          <i class="fas fa-paper-plane"></i> Send Message
        </span>
        <span v-else>
          <i class="fas fa-spinner fa-spin"></i> Sending...
        </span>
      </button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import emailjs from '@emailjs/browser';

defineProps({
  contactDetails: {
    type: Array,
    required: true
  },
  socialLinks: {
    type: Array,
    required: true
  }
});

const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

const isSubmitting = ref(false);
const submitMessage = ref('');
const submitError = ref('');

const handleSubmit = async () => {
  // Clear previous messages
  submitMessage.value = '';
  submitError.value = '';
  isSubmitting.value = true;

  try {
    // EmailJS configuration
    const serviceID = 'service_uongl5o';
    const templateID = 'template_4zt7d8c';
    const publicKey = '5_58lLK_G13DczpUQ';

    // Prepare template parameters
    const templateParams = {
      from_name: formData.value.name,
      from_email: formData.value.email,
      subject: formData.value.subject,
      message: formData.value.message,
      to_name: 'Al John Orpilla',
    };

    // Send email via EmailJS
    await emailjs.send(serviceID, templateID, templateParams, publicKey);

    // Success
    submitMessage.value = `Thank you, ${formData.value.name}! Your message has been sent successfully. I'll get back to you soon.`;
    
    // Reset form
    formData.value = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };

  } catch (error) {
    console.error('EmailJS Error:', error);
    submitError.value = 'Failed to send message. Please try again or contact me directly via email.';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
