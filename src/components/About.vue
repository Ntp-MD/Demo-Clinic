<template>
  <section id="about" class="section about">
    <div class="container about__inner">
      <div class="about__visual animate-slide-left">
        <div class="about__image-grid">
          <div class="about__image about__image--main">
            <div class="about__image-placeholder about__image-placeholder--1">
              <span class="about__image-icon">🌸</span>
            </div>
          </div>
          <div class="about__image about__image--accent">
            <div class="about__image-placeholder about__image-placeholder--2">
              <span class="about__image-icon">✨</span>
            </div>
          </div>
          <div class="about__award">
            <span class="about__award-icon">🏆</span>
            <div>
              <p class="about__award-title">Best Aesthetic Clinic</p>
              <p class="about__award-year">2023 & 2024</p>
            </div>
          </div>
        </div>
      </div>

      <div class="about__content animate-slide-right animate-delay-2">
        <span class="section-label">About Lumière</span>
        <h2 class="section-title">Where Science Meets<br /><em>Artistry</em></h2>
        <div class="divider"></div>
        <p class="about__text">
          Founded in 2014, Lumière Aesthetic Clinic has been at the forefront of
          premium aesthetic medicine. Our team of board-certified specialists combines
          the latest medical advancements with an artist's eye for natural beauty.
        </p>
        <p class="about__text">
          We believe true beauty enhancement means working with your natural features,
          not against them. Every treatment plan is personalised, every procedure
          performed with precision and care.
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

        <a href="#booking" class="btn btn--primary about__cta" @click.prevent="scrollTo('booking')">
          Meet Our Team
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  {
    icon: '🎓',
    title: 'Board-Certified Specialists',
    desc: 'All practitioners hold advanced medical qualifications and continuous education.'
  },
  {
    icon: '🔬',
    title: 'Cutting-Edge Technology',
    desc: 'We invest in the latest FDA-approved devices and techniques.'
  },
  {
    icon: '💛',
    title: 'Personalised Care',
    desc: 'Every treatment plan is uniquely designed for your skin type and goals.'
  }
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
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

.about__visual {
  position: relative;
}

.about__image-grid {
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-md);
}

.about__image--main {
  grid-column: 1 / -1;
}

.about__image-placeholder {
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  overflow: hidden;
}

.about__image-placeholder--1 {
  height: 320px;
  background: linear-gradient(145deg, var(--main-color-3) 0%, var(--main-color-4) 100%);
}

.about__image-placeholder--2 {
  height: 200px;
  background: linear-gradient(145deg, var(--accent-secondary) 0%, var(--accent-base) 100%);
}

.about__image-icon {
  font-size: 48px;
  opacity: 0.6;
}

.about__award {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  background-color: var(--main-color-1);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: var(--shadow-lg);
  height: 200px;
  justify-content: center;
  flex-direction: column;
  text-align: center;
}

.about__award-icon {
  font-size: var(--font-2xl);
}

.about__award-title {
  font-family: var(--font-display);
  font-size: var(--font-md);
  font-weight: 500;
  color: var(--font-color1);
  line-height: 1.3;
}

.about__award-year {
  font-size: var(--font-xs);
  color: var(--accent-primary);
  font-weight: 500;
  letter-spacing: 1px;
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
  background-color: var(--main-color-3);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  flex-shrink: 0;
}

.about__feature-title {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 500;
  color: var(--font-color1);
  margin-bottom: 4px;
}

.about__feature-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.6;
}

.about__cta {
  align-self: flex-start;
}

@media (max-width: 1024px) {
  .about__inner {
    grid-template-columns: 1fr;
  }

  .about__visual {
    max-width: 500px;
    margin: 0 auto;
    width: 100%;
  }

  .about__cta {
    align-self: stretch;
    justify-content: center;
  }
}
</style>
