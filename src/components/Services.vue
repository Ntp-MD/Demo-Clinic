<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="services__header text-center">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Our Core Services</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          From subtle enhancements to transformative procedures, every treatment is tailored to bring out your best self.
        </p>
      </div>

      <div class="services__grid">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="services__card card hover-lift"
          :class="`animate-fade-up animate-delay-${String(index + 1)}`"
        >
          <div class="services__card-icon">
            <span>{{ service.icon }}</span>
          </div>
          <div class="services__card-body">
            <h3 class="services__card-title">{{ service.title }}</h3>
            <p class="services__card-desc">{{ service.desc }}</p>
            <ul class="services__card-list">
              <li v-for="item in service.items" :key="item" class="services__card-item">
                <span class="services__card-dot">✦</span>
                {{ item }}
              </li>
            </ul>
            <a href="#booking" class="services__card-link" @click.prevent="scrollTo('booking')"> Learn More → </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: "✨",
    title: "Skin Rejuvenation",
    desc: "Restore radiance and youthfulness with our advanced skin treatments using cutting-edge technology.",
    items: ["HydraFacial", "Chemical Peels", "Microneedling", "LED Therapy"],
  },
  {
    icon: "💆",
    title: "Injectable Treatments",
    desc: "Precisely administered injectables to smooth, sculpt and enhance your natural features.",
    items: ["Botox & Dysport", "Dermal Fillers", "Lip Augmentation", "Jawline Contouring"],
  },
  {
    icon: "⚡",
    title: "Laser & Light",
    desc: "State-of-the-art laser technology to target specific skin concerns with precision.",
    items: ["Laser Hair Removal", "Pigmentation Correction", "Skin Tightening", "Vascular Therapy"],
  },
  {
    icon: "🌿",
    title: "Body Contouring",
    desc: "Non-surgical body shaping treatments designed to sculpt and define your silhouette.",
    items: ["CoolSculpting", "Radiofrequency", "Cavitation", "Lymphatic Drainage"],
  },
  {
    icon: "🧬",
    title: "Anti-Aging Therapy",
    desc: "Holistic anti-aging protocols combining the latest science with personalised care.",
    items: ["PRP Therapy", "Exosome Treatment", "Collagen Stimulation", "IV Drip Therapy"],
  },
  {
    icon: "🌸",
    title: "Wellness & Spa",
    desc: "Luxurious wellness treatments that nourish your skin, body and mind in harmony.",
    items: ["Signature Facials", "Aromatherapy Massage", "Body Wraps", "Scalp Treatments"],
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.services {
  background-color: var(--main-color-1);
}

.services__header {
  margin-bottom: var(--spacing-2xl);
}

.services__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.services__card {
  background-color: var(--main-color-1);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: all var(--transition-normal);
}

.services__card:hover {
  border-color: var(--accent-secondary);
  background-color: var(--main-color-2);
}

.services__card-icon {
  width: 56px;
  height: 56px;
  background-color: var(--main-color-3);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xl);
  flex-shrink: 0;
}

.services__card-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex: 1;
}

.services__card-title {
  font-family: var(--font-display);
  font-size: var(--font-xl);
  font-weight: 500;
  color: var(--font-color1);
}

.services__card-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.7;
}

.services__card-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
  list-style: none;
}

.services__card-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-sm);
  color: var(--font-color2);
}

.services__card-dot {
  font-size: 8px;
  color: var(--accent-primary);
  flex-shrink: 0;
}

.services__card-link {
  display: inline-flex;
  align-items: center;
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--accent-primary);
  margin-top: auto;
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--main-color-3);
  transition:
    gap var(--transition-normal),
    color var(--transition-normal);
  gap: var(--spacing-xs);
}

.services__card-link:hover {
  color: var(--accent-base);
  gap: var(--spacing-md);
}

@media (max-width: 1024px) {
  .services__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .services__grid {
    grid-template-columns: 1fr;
  }
}
</style>
