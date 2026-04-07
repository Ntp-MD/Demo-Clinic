<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <div class="hero__bg-gradient"></div>
      <div class="hero__bg-orb hero__bg-orb--1"></div>
      <div class="hero__bg-orb hero__bg-orb--2"></div>
    </div>

    <div class="container hero__inner">
      <div class="hero__content animate-fade-up">
        <span class="section-label">Welcome to Demo Clinic</span>
        <h1 class="hero__title">
          Your Wellness,<br />
          <span class="hero__title-accent">Redefined.</span>
        </h1>
        <p class="hero__desc">
          Holistic medical care and advanced aesthetic treatments — guided by evidence, delivered with genuine compassion. Feel better, inside and
          out.
        </p>
        <div class="hero__actions">
          <a href="#booking" class="btn btn--primary" @click.prevent="scrollTo('booking')"> Book a Consultation </a>
          <a href="#services" class="btn btn--outline" @click.prevent="scrollTo('services')"> Our Services </a>
        </div>
        <div class="hero__trust">
          <div v-for="trust in trustItems" :key="trust.label" class="hero__trust-item">
            <span class="hero__trust-icon">{{ trust.icon }}</span>
            <span class="hero__trust-label">{{ trust.label }}</span>
          </div>
        </div>
      </div>

      <div class="hero__visual animate-slide-right animate-delay-2">
        <div class="hero__card-stack">
          <div class="hero__card-main">
            <div class="hero__card-header">
              <div class="hero__card-dot hero__card-dot--green"></div>
              <div class="hero__card-dot hero__card-dot--pink"></div>
              <div class="hero__card-dot hero__card-dot--yellow"></div>
            </div>
            <div class="hero__card-body">
              <div class="hero__card-icon-wrap">
                <span class="hero__card-icon">✿</span>
              </div>
              <p class="hero__card-clinic">Demo Clinic</p>
              <p class="hero__card-tagline">Wellness & Aesthetics</p>
            </div>
            <div class="hero__card-pills">
              <span class="hero__card-pill">Skin Care</span>
              <span class="hero__card-pill">Injectables</span>
              <span class="hero__card-pill">Laser</span>
            </div>
          </div>

          <div class="hero__badge hero__badge--rating">
            <span class="hero__badge-stars">★★★★★</span>
            <span class="hero__badge-num">4.9</span>
            <span class="hero__badge-label">1,400+ Reviews</span>
          </div>

          <div class="hero__badge hero__badge--years">
            <span class="hero__badge-num">12</span>
            <span class="hero__badge-label">Years of Care</span>
          </div>
        </div>
      </div>
    </div>

    <div class="hero__stats">
      <div class="container">
        <div class="hero__stats-grid">
          <div v-for="stat in stats" :key="stat.label" class="hero__stat">
            <span class="hero__stat-num">{{ stat.value }}</span>
            <span class="hero__stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const stats = [
  { value: "8,000+", label: "Clients Served" },
  { value: "30+", label: "Treatments" },
  { value: "12+", label: "Specialists" },
  { value: "99%", label: "Satisfaction" },
];

const trustItems = [
  { icon: "✓", label: "Board-Certified Doctors" },
  { icon: "✓", label: "FDA-Approved Procedures" },
  { icon: "✓", label: "Free Consultation" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  background-color: var(--main-color-1);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(140deg, var(--main-color-1) 0%, var(--main-color-2) 60%, var(--main-color-1) 100%);
}

.hero__bg-orb {
  position: absolute;
  border-radius: var(--radius-circle);
  filter: blur(80px);
  opacity: 0.35;
}

.hero__bg-orb--1 {
  width: 500px;
  height: 500px;
  background-color: var(--accent-secondary);
  top: -100px;
  right: -100px;
}

.hero__bg-orb--2 {
  width: 360px;
  height: 360px;
  background-color: var(--accent-base);
  bottom: -80px;
  left: -60px;
}

.hero__inner {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-2xl);
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-xl);
}

.hero__content {
  max-width: 560px;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--font-4xl);
  font-weight: 700;
  color: var(--font-color1);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.hero__title-accent {
  color: var(--accent-primary);
  font-style: italic;
  font-weight: 600;
}

.hero__desc {
  font-size: var(--font-md);
  color: var(--font-color2);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
  max-width: 460px;
}

.hero__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
  margin-bottom: var(--spacing-xl);
}

.hero__trust {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.hero__trust-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  font-size: var(--font-sm);
  color: var(--font-color2);
}

.hero__trust-icon {
  width: 20px;
  height: 20px;
  background-color: var(--accent-primary);
  color: var(--font-color-white);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
  flex-shrink: 0;
}

.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__card-stack {
  position: relative;
  width: 100%;
  max-width: 400px;
}

.hero__card-main {
  background-color: var(--font-color-white);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  border: 1px solid var(--main-color-3);
}

.hero__card-header {
  background-color: var(--main-color-2);
  padding: var(--spacing-md);
  display: flex;
  gap: var(--spacing-xs);
  align-items: center;
}

.hero__card-dot {
  width: 10px;
  height: 10px;
  border-radius: var(--radius-circle);
}

.hero__card-dot--green {
  background-color: var(--accent-success);
}

.hero__card-dot--pink {
  background-color: var(--accent-secondary);
}

.hero__card-dot--yellow {
  background-color: var(--accent-warning);
}

.hero__card-body {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--spacing-xl) var(--spacing-lg);
  gap: var(--spacing-sm);
}

.hero__card-icon-wrap {
  width: 72px;
  height: 72px;
  background-color: var(--main-color-2);
  border-radius: var(--radius-circle);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: var(--spacing-sm);
}

.hero__card-icon {
  font-size: 36px;
  color: var(--accent-primary);
}

.hero__card-clinic {
  font-family: var(--font-display);
  font-size: var(--font-xl);
  font-weight: 700;
  color: var(--font-color1);
}

.hero__card-tagline {
  font-size: var(--font-sm);
  color: var(--font-color3);
  letter-spacing: 1px;
}

.hero__card-pills {
  display: flex;
  gap: var(--spacing-sm);
  padding: var(--spacing-lg);
  padding-top: 0;
  flex-wrap: wrap;
  justify-content: center;
}

.hero__card-pill {
  padding: 6px var(--spacing-md);
  background-color: var(--main-color-2);
  border-radius: var(--radius-pill);
  font-size: var(--font-xs);
  color: var(--font-color2);
  font-weight: 500;
}

.hero__badge {
  position: absolute;
  background-color: var(--font-color-white);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 130px;
  border: 1px solid var(--main-color-3);
}

.hero__badge--rating {
  top: var(--spacing-lg);
  right: -20px;
}

.hero__badge--years {
  bottom: var(--spacing-xl);
  left: -20px;
}

.hero__badge-stars {
  font-size: var(--font-sm);
  color: var(--accent-warning);
  letter-spacing: 1px;
}

.hero__badge-num {
  font-family: var(--font-display);
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
}

.hero__badge-label {
  font-size: var(--font-xs);
  color: var(--font-color3);
  letter-spacing: 0.5px;
}

.hero__stats {
  position: relative;
  z-index: 1;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  background-color: var(--main-color-2);
  border-top: 1px solid var(--main-color-3);
  margin-top: auto;
}

.hero__stats-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.hero__stat {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  text-align: center;
}

.hero__stat-num {
  font-family: var(--font-display);
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
}

.hero__stat-label {
  font-size: var(--font-xs);
  color: var(--font-color2);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

@media (max-width: 1024px) {
  .hero__inner {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .hero__content {
    max-width: 100%;
  }

  .hero__desc {
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
  }

  .hero__actions {
    justify-content: center;
  }

  .hero__trust {
    align-items: center;
  }

  .hero__card-stack {
    max-width: 100%;
    margin: 0 auto;
  }

  .hero__stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero__badge--rating {
    right: 0;
    top: var(--spacing-md);
  }

  .hero__badge--years {
    left: 0;
  }

  .hero__stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
