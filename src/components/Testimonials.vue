<template>
  <section id="testimonials" class="section testimonials">
    <div class="container">
      <div class="testimonials__header text-center">
        <span class="section-label">Client Reviews</span>
        <h2 class="section-title">What Our Clients Say</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Real stories from real clients who have experienced
          the Lumière difference.
        </p>
      </div>

      <div class="testimonials__grid">
        <article
          v-for="testimonial in testimonials"
          :key="testimonial.name"
          class="testimonials__card card"
        >
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

      <div class="testimonials__cta text-center">
        <div class="testimonials__rating-summary">
          <span class="testimonials__rating-num">4.9</span>
          <div class="testimonials__rating-details">
            <div class="testimonials__stars">
              <span v-for="i in 5" :key="i" class="testimonials__star">★</span>
            </div>
            <p class="testimonials__rating-label">Based on 1,200+ reviews</p>
          </div>
        </div>
        <a href="#booking" class="btn btn--primary" @click.prevent="scrollTo('booking')">
          Start Your Journey
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const testimonials = [
  {
    treatment: 'Botox',
    quote: 'The results are so natural! I was worried about looking overdone but the doctor really listened to what I wanted. My lines are gone and I still look like myself.',
    name: 'Siriporn K.',
    meta: 'Client since 2021'
  },
  {
    treatment: 'HydraFacial',
    quote: 'My skin has never looked better. After just one session my complexion was brighter and my pores looked minimised. I get compliments constantly now.',
    name: 'Natthaporn W.',
    meta: 'Client since 2022'
  },
  {
    treatment: 'Laser Hair Removal',
    quote: 'Six sessions and I am completely hair-free. Professional, painless, and the results are permanent. Worth every baht. The staff made me so comfortable.',
    name: 'Malinee P.',
    meta: 'Client since 2020'
  },
  {
    treatment: 'Dermal Fillers',
    quote: 'I came in for lip fillers and left feeling more confident than ever. The technique is so precise — no duck lips, just beautifully enhanced natural lips.',
    name: 'Rossarin T.',
    meta: 'Client since 2023'
  },
  {
    treatment: 'CoolSculpting',
    quote: 'Finally got rid of that stubborn belly fat that no amount of exercise would shift. Three months in and the results are incredible and lasting.',
    name: 'Jarunya B.',
    meta: 'Client since 2022'
  },
  {
    treatment: 'PRP Facial',
    quote: 'As someone who was skeptical of aesthetic treatments, Lumière changed my mind. Science-backed, professional, and my skin looks ten years younger.',
    name: 'Chanika L.',
    meta: 'Client since 2023'
  }
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.testimonials {
  background-color: var(--main-color-2);
}

.testimonials__header {
  margin-bottom: var(--spacing-2xl);
}

.testimonials__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-2xl);
}

.testimonials__card {
  background-color: var(--main-color-1);
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
  background-color: var(--main-color-3);
  border-radius: var(--radius-xs);
  font-size: var(--font-xs);
  color: var(--font-color2);
  letter-spacing: 0.5px;
}

.testimonials__quote {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-style: italic;
  color: var(--font-color1);
  line-height: 1.6;
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
  font-weight: 500;
  flex-shrink: 0;
}

.testimonials__author-name {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--font-color1);
}

.testimonials__author-meta {
  font-size: var(--font-xs);
  color: var(--font-color3);
}

.testimonials__cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-lg);
}

.testimonials__rating-summary {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
}

.testimonials__rating-num {
  font-family: var(--font-display);
  font-size: var(--font-4xl);
  font-weight: 300;
  color: var(--accent-primary);
  line-height: 1;
}

.testimonials__rating-details {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  align-items: flex-start;
}

.testimonials__rating-label {
  font-size: var(--font-sm);
  color: var(--font-color2);
}

@media (max-width: 1024px) {
  .testimonials__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 640px) {
  .testimonials__grid {
    grid-template-columns: 1fr;
  }

  .testimonials__rating-summary {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .testimonials__rating-details {
    align-items: center;
  }
}
</style>
