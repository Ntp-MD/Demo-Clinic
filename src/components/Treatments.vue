<template>
  <section id="treatments" class="section treatments">
    <div class="container">
      <div class="treatments__header text-center">
        <span class="section-label">Featured Treatments</span>
        <h2 class="section-title">Popular Procedures</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Discover our most sought-after treatments, each delivering
          visible, lasting results with minimal downtime.
        </p>
      </div>

      <div class="treatments__tabs">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          class="treatments__tab"
          :class="{ 'treatments__tab--active': activeTab === tab.id }"
          @click="activeTab = tab.id"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="treatments__grid">
        <article
          v-for="treatment in filteredTreatments"
          :key="treatment.name"
          class="treatments__card card"
        >
          <div class="treatments__card-badge">{{ treatment.category }}</div>
          <div class="treatments__card-visual">
            <span class="treatments__card-icon">{{ treatment.icon }}</span>
          </div>
          <div class="treatments__card-body">
            <h3 class="treatments__card-name">{{ treatment.name }}</h3>
            <p class="treatments__card-desc">{{ treatment.desc }}</p>
            <div class="treatments__card-meta">
              <div class="treatments__card-info">
                <span class="treatments__card-info-label">Duration</span>
                <span class="treatments__card-info-value">{{ treatment.duration }}</span>
              </div>
              <div class="treatments__card-info">
                <span class="treatments__card-info-label">Downtime</span>
                <span class="treatments__card-info-value">{{ treatment.downtime }}</span>
              </div>
              <div class="treatments__card-info">
                <span class="treatments__card-info-label">From</span>
                <span class="treatments__card-info-value treatments__card-price">{{ treatment.price }}</span>
              </div>
            </div>
            <a
              href="#booking"
              class="btn btn--ghost treatments__card-btn"
              @click.prevent="scrollTo('booking')"
            >
              Book Treatment
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const activeTab = ref('all')

const tabs = [
  { id: 'all', label: 'All Treatments' },
  { id: 'face', label: 'Face' },
  { id: 'body', label: 'Body' },
  { id: 'laser', label: 'Laser' }
]

const treatments = [
  {
    category: 'Face',
    icon: '💉',
    name: 'Botox Wrinkle Relaxer',
    desc: 'Smooth fine lines and dynamic wrinkles for a refreshed, youthful appearance.',
    duration: '30 min',
    downtime: 'None',
    price: '฿4,500',
    tab: 'face'
  },
  {
    category: 'Face',
    icon: '✨',
    name: 'HydraFacial MD',
    desc: 'Deep cleanse, exfoliate, and hydrate for instantly radiant, glowing skin.',
    duration: '60 min',
    downtime: 'None',
    price: '฿3,200',
    tab: 'face'
  },
  {
    category: 'Face',
    icon: '🌟',
    name: 'Dermal Fillers',
    desc: 'Restore lost volume and sculpt facial contours with precision placement.',
    duration: '45 min',
    downtime: '1-2 days',
    price: '฿6,000',
    tab: 'face'
  },
  {
    category: 'Laser',
    icon: '⚡',
    name: 'Laser Hair Removal',
    desc: 'Permanent reduction of unwanted hair with advanced diode laser technology.',
    duration: '30-90 min',
    downtime: 'None',
    price: '฿1,500',
    tab: 'laser'
  },
  {
    category: 'Laser',
    icon: '🔬',
    name: 'Picosecond Laser',
    desc: 'Target pigmentation, melasma, and tattoo removal with ultra-fast pulses.',
    duration: '30 min',
    downtime: '2-3 days',
    price: '฿5,000',
    tab: 'laser'
  },
  {
    category: 'Body',
    icon: '🧊',
    name: 'CoolSculpting',
    desc: 'Non-surgical fat reduction that freezes and eliminates stubborn fat cells.',
    duration: '35-60 min',
    downtime: 'None',
    price: '฿8,000',
    tab: 'body'
  },
  {
    category: 'Body',
    icon: '🌿',
    name: 'RF Body Sculpting',
    desc: 'Tighten skin and reduce cellulite with radiofrequency energy therapy.',
    duration: '60 min',
    downtime: 'None',
    price: '฿3,500',
    tab: 'body'
  },
  {
    category: 'Face',
    icon: '🧬',
    name: 'PRP Facial (Vampire)',
    desc: 'Harness your own growth factors for natural skin rejuvenation and repair.',
    duration: '75 min',
    downtime: '1 day',
    price: '฿7,500',
    tab: 'face'
  }
]

const filteredTreatments = computed(() => {
  if (activeTab.value === 'all') return treatments
  return treatments.filter(t => t.tab === activeTab.value)
})

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.treatments {
  background-color: var(--main-color-1);
}

.treatments__header {
  margin-bottom: var(--spacing-xl);
}

.treatments__tabs {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-2xl);
  flex-wrap: wrap;
}

.treatments__tab {
  padding: 10px var(--spacing-lg);
  font-size: var(--font-sm);
  font-weight: 400;
  color: var(--font-color2);
  background-color: transparent;
  border: 1px solid var(--main-color-4);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--transition-normal);
  letter-spacing: 0.5px;
}

.treatments__tab:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
}

.treatments__tab--active {
  background-color: var(--accent-primary);
  border-color: var(--accent-primary);
  color: var(--font-color-white);
}

.treatments__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-lg);
}

.treatments__card {
  background-color: var(--main-color-1);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
  position: relative;
}

.treatments__card:hover {
  border-color: var(--accent-secondary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.treatments__card-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: 4px var(--spacing-sm);
  background-color: var(--main-color-3);
  border-radius: var(--radius-xs);
  font-size: var(--font-xs);
  color: var(--font-color2);
  font-weight: 500;
  letter-spacing: 0.5px;
}

.treatments__card-visual {
  height: 140px;
  background: linear-gradient(145deg, var(--main-color-2) 0%, var(--main-color-3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
}

.treatments__card-icon {
  font-size: 52px;
}

.treatments__card-body {
  padding: var(--spacing-lg);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.treatments__card-name {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 500;
  color: var(--font-color1);
}

.treatments__card-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.6;
}

.treatments__card-meta {
  display: flex;
  gap: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: 1px solid var(--main-color-3);
  flex-wrap: wrap;
}

.treatments__card-info {
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
}

.treatments__card-info-label {
  font-size: var(--font-xs);
  color: var(--font-color3);
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.treatments__card-info-value {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--font-color1);
}

.treatments__card-price {
  color: var(--accent-primary);
}

.treatments__card-btn {
  margin-top: var(--spacing-sm);
  width: 100%;
  padding: 10px;
  font-size: var(--font-xs);
  letter-spacing: 1px;
  text-transform: uppercase;
}

@media (max-width: 1200px) {
  .treatments__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 900px) {
  .treatments__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 580px) {
  .treatments__grid {
    grid-template-columns: 1fr;
  }
}
</style>
