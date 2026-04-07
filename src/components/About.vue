<template>
  <section id="about" class="section about">
    <div class="container about__inner">
      <div class="about__content animate-slide-left">
        <span class="section-label">About Demo</span>
        <h2 class="section-title">Care That Goes<br /><em class="about__title-em">Deeper</em></h2>
        <div class="divider"></div>
        <p class="about__text">
          Founded in 2012, Demo Clinic was built on a simple belief: true wellness begins when science, compassion and personalised attention come
          together. Our multidisciplinary team brings medical expertise and genuine care to every visit.
        </p>
        <p class="about__text">
          Whether you're here for preventive health, skin transformation, or simply to feel your best — we listen first and treat second. You are more
          than a patient; you are a partner in your own wellbeing.
        </p>

        <div class="about__features">
          <div v-for="feature in features" :key="feature.title" class="about__feature">
            <div class="about__feature-icon">{{ feature.icon }}</div>
            <div>
              <h4 class="about__feature-title">{{ feature.title }}</h4>
              <p class="about__feature-desc">{{ feature.desc }}</p>
            </div>
          </div>
        </div>

        <div class="about__actions">
          <a href="#booking" class="btn btn--primary" @click.prevent="scrollTo('booking')"> Book a Consultation </a>
          <a href="#treatments" class="btn btn--outline" @click.prevent="scrollTo('treatments')"> Our Treatments </a>
        </div>
      </div>

      <div class="about__visual animate-slide-right animate-delay-2">
        <div class="about__panel-grid">
          <div class="about__panel about__panel--main">
            <span class="about__panel-icon">🌿</span>
            <p class="about__panel-label">Wellness First</p>
          </div>
          <div class="about__panel about__panel--stat">
            <span class="about__panel-num">12+</span>
            <span class="about__panel-desc">Years Serving Patients</span>
          </div>
          <div class="about__panel about__panel--accent">
            <span class="about__panel-icon">🏅</span>
            <p class="about__panel-label">Top Rated Clinic</p>
            <p class="about__panel-meta">2022 · 2023 · 2024</p>
          </div>
          <div class="about__panel about__panel--stat">
            <span class="about__panel-num">30+</span>
            <span class="about__panel-desc">Specialist Doctors</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: "🎓",
    title: "Board-Certified Medical Team",
    desc: "Every practitioner holds advanced certifications and commits to ongoing education.",
  },
  {
    icon: "🔬",
    title: "Evidence-Based Treatments",
    desc: "We use only FDA-cleared devices and clinically proven protocols.",
  },
  {
    icon: "🤝",
    title: "Patient-Centred Approach",
    desc: "Your goals, concerns and comfort shape every decision we make together.",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.about {
  background-color: var(--main-color-2);
}

.about__inner {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: var(--spacing-2xl);
}

.about__title-em {
  font-style: italic;
  color: var(--accent-primary);
}

.about__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.about__text {
  font-size: var(--font-md);
  color: var(--font-color2);
  line-height: 1.8;
}

.about__features {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.about__feature {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.about__feature-icon {
  width: 44px;
  height: 44px;
  background-color: var(--main-color-1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  flex-shrink: 0;
  box-shadow: var(--shadow-xs);
}

.about__feature-title {
  font-family: var(--font-display);
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--font-color1);
  margin-bottom: 4px;
}

.about__feature-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.65;
}

.about__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

.about__visual {
  position: relative;
}

.about__panel-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

/* Mobile: Single column layout */
@media (max-width: 768px) {
  .about__panel-grid {
    grid-template-columns: 1fr;
  }
}

.about__panel {
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: var(--spacing-sm);
}

.about__panel--main {
  background: linear-gradient(145deg, var(--accent-primary) 0%, var(--accent-base) 100%);
  grid-column: 1 / -1;
  padding: var(--spacing-2xl);
}

.about__panel--main .about__panel-icon {
  font-size: 52px;
}

.about__panel--main .about__panel-label {
  font-family: var(--font-display);
  font-size: var(--font-xl);
  font-weight: 600;
  color: var(--font-color-white);
  letter-spacing: 0.5px;
}

.about__panel--stat {
  background-color: var(--main-color-1);
  box-shadow: var(--shadow-md);
}

.about__panel-num {
  font-family: var(--font-display);
  font-size: var(--font-2xl);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
}

.about__panel-desc {
  font-size: var(--font-xs);
  color: var(--font-color2);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.about__panel--accent {
  background-color: var(--main-color-3);
}

.about__panel-icon {
  font-size: var(--font-2xl);
}

.about__panel-label {
  font-family: var(--font-display);
  font-size: var(--font-md);
  font-weight: 600;
  color: var(--font-color1);
}

.about__panel-meta {
  font-size: var(--font-xs);
  color: var(--accent-primary);
  font-weight: 500;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .about__inner {
    grid-template-columns: 1fr;
  }

  .about__visual {
    max-width: 100%;
    margin: 0 auto;
    width: 100%;
  }

  .about__actions {
    flex-direction: column;
    align-items: stretch;
  }

  .about__actions .btn {
    justify-content: center;
    width: fit-content;
    margin: 0 auto;
  }
}
</style>
