<template>
  <section id="services" class="section services">
    <div class="container">
      <div class="services__header text-center">
        <span class="section-label">What We Offer</span>
        <h2 class="section-title">Comprehensive Wellness Services</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          From preventive health to advanced aesthetics, our team provides personalised care designed around your unique wellness goals.
        </p>
      </div>

      <div class="services__grid">
        <article
          v-for="(service, index) in services"
          :key="service.title"
          class="services__card hover-lift"
          :class="`animate-fade-up animate-delay-${String(index + 1)}`"
        >
          <div class="services__card-top">
            <div class="services__card-icon" :style="`background-color: ${service.color}`">
              <span>{{ service.icon }}</span>
            </div>
            <span class="services__card-tag">{{ service.tag }}</span>
          </div>
          <div class="services__card-body">
            <h3 class="services__card-title">{{ service.title }}</h3>
            <p class="services__card-desc">{{ service.desc }}</p>
            <ul class="services__card-list">
              <li v-for="item in service.items" :key="item" class="services__card-item">
                <span class="services__card-check">✓</span>
                {{ item }}
              </li>
            </ul>
          </div>
          <a href="#booking" class="services__card-link" @click.prevent="scrollTo('booking')"> Get Started → </a>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const services = [
  {
    icon: "🌿",
    color: "rgba(148, 166, 132, 0.15)",
    tag: "Skin",
    title: "Skin Health & Rejuvenation",
    desc: "Restore clarity, tone and texture with clinically validated skin treatments.",
    items: ["HydraFacial MD", "Chemical Peels", "Microneedling", "LED Phototherapy"],
  },
  {
    icon: "�",
    color: "rgba(175, 143, 157, 0.15)",
    tag: "Injectables",
    title: "Injectable Aesthetics",
    desc: "Subtle, natural enhancements administered by board-certified specialists.",
    items: ["Botox & Dysport", "Dermal Fillers", "Lip Enhancement", "Jawline Sculpting"],
  },
  {
    icon: "⚡",
    color: "rgba(201, 149, 74, 0.12)",
    tag: "Laser",
    title: "Laser & Energy Therapy",
    desc: "Targeted, precise laser solutions for hair, pigmentation and skin renewal.",
    items: ["Laser Hair Removal", "Pigmentation Therapy", "Skin Tightening", "Vascular Care"],
  },
  {
    icon: "🧬",
    color: "rgba(106, 170, 120, 0.12)",
    tag: "Advanced",
    title: "Regenerative Medicine",
    desc: "Harness your body's own healing power for lasting, natural restoration.",
    items: ["PRP Therapy", "Exosome Treatments", "IV Nutrient Drip", "Collagen Induction"],
  },
  {
    icon: "�",
    color: "rgba(122, 143, 108, 0.12)",
    tag: "Body",
    title: "Body Contouring",
    desc: "Non-invasive sculpting to help you achieve and maintain your ideal shape.",
    items: ["CoolSculpting", "Radiofrequency RF", "Ultrasound Cavitation", "Lymphatic Drainage"],
  },
  {
    icon: "🌸",
    color: "rgba(175, 143, 157, 0.12)",
    tag: "Wellness",
    title: "Holistic Wellness",
    desc: "Mind-body treatments that restore balance, calm and inner radiance.",
    items: ["Wellness Consultation", "Aromatherapy Facial", "Scalp Revitalisation", "Stress Relief Program"],
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
  background-color: var(--font-color-white);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: all var(--transition-normal);
}

.services__card:hover {
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-lg);
}

.services__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.services__card-icon {
  width: 52px;
  height: 52px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-xl);
  flex-shrink: 0;
}

.services__card-tag {
  font-size: var(--font-xs);
  font-weight: 600;
  color: var(--accent-primary);
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 4px var(--spacing-sm);
  background-color: var(--main-color-2);
  border-radius: var(--radius-pill);
}

.services__card-body {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  flex: 1;
}

.services__card-title {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 600;
  color: var(--font-color1);
  line-height: 1.25;
}

.services__card-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.75;
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

.services__card-check {
  width: 18px;
  height: 18px;
  background-color: var(--accent-primary);
  color: var(--font-color-white);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 700;
  flex-shrink: 0;
}

.services__card-link {
  display: inline-flex;
  align-items: center;
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--accent-primary);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--main-color-3);
  gap: var(--spacing-xs);
  transition:
    gap var(--transition-normal),
    color var(--transition-normal);
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
