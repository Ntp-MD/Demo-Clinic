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
