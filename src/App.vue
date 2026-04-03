<template>
  <div id="app-root">
    <Header />
    <main>
      <Hero />
      <Services />
      <About />
      <Treatments />
      <Testimonials />
      <Booking />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Hero from '@/components/Hero.vue'
import Services from '@/components/Services.vue'
import About from '@/components/About.vue'
import Treatments from '@/components/Treatments.vue'
import Testimonials from '@/components/Testimonials.vue'
import Booking from '@/components/Booking.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>
