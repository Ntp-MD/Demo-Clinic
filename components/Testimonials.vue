<template>
  <section id="testimonials" class="section testimonials">
    <div class="container">
      <div class="testimonials__header">
        <span class="section-label">Client Stories</span>
        <h2 class="section-title">Heard From Our Community</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">Real results, real people. Discover why thousands trust Demo for their health and wellness journey.</p>
      </div>

      <div class="testimonials__grid">
        <article v-for="testimonial in testimonials" :key="testimonial.name" class="testimonials__card">
          <div class="testimonials__card-top">
            <div class="testimonials__stars">
              <span v-for="i in 5" :key="i" class="testimonials__star">★</span>
            </div>
            <span class="testimonials__treatment-tag">{{ testimonial.treatment }}</span>
          </div>
          <p class="testimonials__quote">"{{ testimonial.quote }}"</p>
          <div class="testimonials__author">
            <div class="testimonials__author-avatar">
              {{ testimonial.name.charAt(0) }}
            </div>
            <div class="testimonials__author-info">
              <p class="testimonials__author-name">{{ testimonial.name }}</p>
              <p class="testimonials__author-meta">{{ testimonial.meta }}</p>
            </div>
          </div>
        </article>
      </div>

      <div class="testimonials__bottom">
        <div class="testimonials__score-wrap">
          <div class="testimonials__score">
            <span class="testimonials__score-num">4.9</span>
            <div class="testimonials__score-right">
              <div class="testimonials__stars">
                <span v-for="i in 5" :key="i" class="testimonials__star">★</span>
              </div>
              <p class="testimonials__score-label">From 1,400+ verified reviews</p>
            </div>
          </div>
          <div class="testimonials__platforms">
            <span class="testimonials__platform-badge">Google ★ 4.9</span>
            <span class="testimonials__platform-badge">Facebook ★ 4.8</span>
            <span class="testimonials__platform-badge">Healthkart ★ 5.0</span>
          </div>
        </div>
        <a href="#booking" class="btn btn--primary" @click.prevent="scrollTo('booking')"> Begin Your Wellness Journey </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    treatment: "Botox",
    quote:
      "The doctor truly listened. My results look so natural — no frozen face, just a refreshed, rested version of me. The whole experience was calm and professional.",
    name: "Siriporn K.",
    meta: "Client since 2021",
  },
  {
    treatment: "HydraFacial",
    quote:
      "One session and my skin transformed. Brighter, smoother and my pores are barely visible. I have been coming back every month and my confidence has soared.",
    name: "Natthaporn W.",
    meta: "Client since 2022",
  },
  {
    treatment: "Laser Hair Removal",
    quote:
      "Six comfortable sessions and I am completely free. The team made every appointment feel easy and the results are everything I hoped for — and permanent.",
    name: "Malinee P.",
    meta: "Client since 2020",
  },
  {
    treatment: "Dermal Fillers",
    quote:
      "I was nervous but the doctor walked me through every step. My lips look full and natural — exactly what I wanted. The care here is genuinely outstanding.",
    name: "Rossarin T.",
    meta: "Client since 2023",
  },
  {
    treatment: "IV Drip Therapy",
    quote:
      "I started IV drips for fatigue and my energy changed completely. The clinic is pristine, the staff are warm and I feel the results every single week.",
    name: "Jarunya B.",
    meta: "Client since 2022",
  },
  {
    treatment: "PRP Facial",
    quote:
      "I was skeptical at first. Now after three sessions, the improvement in my skin texture and glow is undeniable. Demo has earned my complete trust.",
    name: "Chanika L.",
    meta: "Client since 2023",
  },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.testimonials {
  background-color: var(--main-color-1);
}
.testimonials__header {
  margin-bottom: var(--spacing-2xl);
  text-align: center;
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.testimonials__card {
  background-color: var(--font-color-white);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  transition: all var(--transition-normal);
}

.testimonials__card:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
  border-color: var(--accent-secondary);
}

.testimonials__card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
}

.testimonials__stars {
  display: flex;
  gap: 2px;
}
.testimonials__star {
  color: var(--accent-warning);
  font-size: var(--font-md);
}

.testimonials__treatment-tag {
  display: inline-block;
  padding: 4px var(--spacing-sm);
  background-color: var(--main-color-2);
  border-radius: var(--radius-pill);
  font-size: var(--font-xs);
  color: var(--accent-primary);
  font-weight: 600;
  letter-spacing: 0.5px;
}

.testimonials__quote {
  font-family: var(--font-display);
  font-size: var(--font-md);
  font-style: italic;
  color: var(--font-color1);
  line-height: 1.65;
  flex: 1;
}

.testimonials__author {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--main-color-3);
}

.testimonials__author-avatar {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-circle);
  background-color: var(--accent-primary);
  color: var(--font-color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 600;
  flex-shrink: 0;
}

.testimonials__author-name {
  font-size: var(--font-sm);
  font-weight: 600;
  color: var(--font-color1);
}
.testimonials__author-meta {
  font-size: var(--font-xs);
  color: var(--font-color3);
}

.testimonials__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-xl);
  flex-wrap: wrap;
  padding-top: var(--spacing-2xl);
  border-top: 1px solid var(--main-color-3);
}

.testimonials__score-wrap {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}
.testimonials__score {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.testimonials__score-num {
  font-family: var(--font-display);
  font-size: var(--font-4xl);
  font-weight: 700;
  color: var(--accent-primary);
  line-height: 1;
}

.testimonials__score-right {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
.testimonials__score-label {
  font-size: var(--font-sm);
  color: var(--font-color2);
}

.testimonials__platforms {
  display: flex;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
}

.testimonials__platform-badge {
  padding: 6px var(--spacing-md);
  background-color: var(--main-color-2);
  border-radius: var(--radius-pill);
  font-size: var(--font-xs);
  color: var(--font-color2);
  font-weight: 500;
  border: 1px solid var(--main-color-3);
}

@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .testimonials__bottom {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 640px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }
}
</style>
