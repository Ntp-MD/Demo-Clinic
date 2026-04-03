<template>
  <section id="home" class="hero">
    <div class="hero__bg">
      <div class="hero__bg-gradient"></div>
      <div class="hero__bg-pattern"></div>
    </div>

    <div class="container hero__inner">
      <div class="hero__content animate-fade-up">
        <span class="section-label">Welcome to Lumière</span>
        <h1 class="hero__title">
          Reveal Your<br />
          <em class="hero__title-em">Natural Beauty</em>
        </h1>
        <p class="hero__desc">
          Premium aesthetic treatments crafted to enhance your confidence.
          Science-backed procedures, delivered with artistry and care.
        </p>
        <div class="hero__actions">
          <a href="#booking" class="btn btn--primary" @click.prevent="scrollTo('booking')">
            Book a Consultation
          </a>
          <a href="#services" class="btn btn--outline" @click.prevent="scrollTo('services')">
            Explore Treatments
          </a>
        </div>
      </div>

      <div class="hero__visual animate-slide-right animate-delay-2">
        <div class="hero__image-wrap">
          <div class="hero__image-placeholder">
            <div class="hero__image-inner">
              <span class="hero__image-icon">✦</span>
              <p class="hero__image-text">Lumière Clinic</p>
            </div>
          </div>
          <div class="hero__badge hero__badge--top">
            <span class="hero__badge-num">98%</span>
            <span class="hero__badge-label">Satisfaction Rate</span>
          </div>
          <div class="hero__badge hero__badge--bottom">
            <span class="hero__badge-num">10+</span>
            <span class="hero__badge-label">Years of Excellence</span>
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
  { value: '5,000+', label: 'Happy Clients' },
  { value: '25+', label: 'Treatments' },
  { value: '10+', label: 'Expert Specialists' },
  { value: '98%', label: 'Satisfaction Rate' }
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
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
  background-color: var(--main-color-2);
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

.hero__bg-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    var(--main-color-2) 0%,
    var(--main-color-3) 50%,
    var(--main-color-2) 100%
  );
}

.hero__bg-pattern {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(circle at 20% 20%, rgba(184, 154, 132, 0.15) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(156, 123, 98, 0.1) 0%, transparent 50%);
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
  max-width: 580px;
}

.hero__title {
  font-family: var(--font-display);
  font-size: var(--font-4xl);
  font-weight: 300;
  color: var(--font-color1);
  line-height: 1.1;
  margin-bottom: var(--spacing-lg);
}

.hero__title-em {
  font-style: italic;
  color: var(--accent-primary);
  font-weight: 400;
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
}

.hero__visual {
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero__image-wrap {
  position: relative;
  width: 100%;
  max-width: 460px;
}

.hero__image-placeholder {
  width: 100%;
  aspect-ratio: 3 / 4;
  background: linear-gradient(
    145deg,
    var(--main-color-3) 0%,
    var(--main-color-4) 100%
  );
  border-radius: var(--radius-xl);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-xl);
  overflow: hidden;
  position: relative;
}

.hero__image-placeholder::before {
  content: '';
  position: absolute;
  top: -40px;
  right: -40px;
  width: 200px;
  height: 200px;
  border-radius: var(--radius-circle);
  background: rgba(255, 255, 255, 0.1);
}

.hero__image-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-md);
}

.hero__image-icon {
  font-size: 64px;
  color: rgba(255, 255, 255, 0.6);
}

.hero__image-text {
  font-family: var(--font-display);
  font-size: var(--font-xl);
  color: rgba(255, 255, 255, 0.7);
  letter-spacing: 2px;
}

.hero__badge {
  position: absolute;
  background-color: var(--main-color-1);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-lg);
  display: flex;
  flex-direction: column;
  gap: 3px;
  min-width: 120px;
}

.hero__badge--top {
  top: var(--spacing-lg);
  right: -30px;
}

.hero__badge--bottom {
  bottom: var(--spacing-xl);
  left: -30px;
}

.hero__badge-num {
  font-family: var(--font-display);
  font-size: var(--font-2xl);
  font-weight: 500;
  color: var(--accent-primary);
  line-height: 1;
}

.hero__badge-label {
  font-size: var(--font-xs);
  color: var(--font-color2);
  letter-spacing: 0.5px;
}

.hero__stats {
  position: relative;
  z-index: 1;
  padding-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xl);
  background-color: rgba(250, 248, 246, 0.8);
  backdrop-filter: blur(10px);
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
  font-weight: 500;
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

  .hero__visual {
    max-width: 380px;
    margin: 0 auto;
  }

  .hero__stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .hero__badge--top {
    right: 0;
    top: var(--spacing-md);
  }

  .hero__badge--bottom {
    left: 0;
  }

  .hero__stats-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>
