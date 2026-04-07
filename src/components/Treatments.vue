<template>
  <section id="treatments" class="section treatments">
    <div class="container">
      <div class="treatments__header text-center">
        <span class="section-label">Popular Procedures</span>
        <h2 class="section-title">Featured Treatments</h2>
        <div class="divider divider--center"></div>
        <p class="section-subtitle">
          Explore our most requested treatments — each one designed for visible results with minimal disruption to your daily life.
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
        <article v-for="treatment in filteredTreatments" :key="treatment.name" class="treatments__card">
          <div class="treatments__card-visual">
            <span class="treatments__card-icon">{{ treatment.icon }}</span>
            <span class="treatments__card-badge">{{ treatment.category }}</span>
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
            <a href="#booking" class="btn btn--ghost treatments__card-btn" @click.prevent="scrollTo('booking')"> Book This Treatment </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const activeTab = ref("all");

const tabs = [
  { id: "all", label: "All" },
  { id: "face", label: "Face" },
  { id: "body", label: "Body" },
  { id: "laser", label: "Laser" },
  { id: "wellness", label: "Wellness" },
];

const treatments = [
  {
    category: "Face",
    icon: "💉",
    name: "Botox Wrinkle Relaxer",
    desc: "Smooth dynamic wrinkles and fine lines for a naturally refreshed look.",
    duration: "30 min",
    downtime: "None",
    price: "฿4,500",
    tab: "face",
  },
  {
    category: "Face",
    icon: "🌿",
    name: "HydraFacial MD",
    desc: "Deep cleanse, extract and infuse — instantly radiant, hydrated skin.",
    duration: "60 min",
    downtime: "None",
    price: "฿3,200",
    tab: "face",
  },
  {
    category: "Face",
    icon: "✨",
    name: "Dermal Fillers",
    desc: "Restore volume and sculpt facial contours with expert precision.",
    duration: "45 min",
    downtime: "1–2 days",
    price: "฿6,000",
    tab: "face",
  },
  {
    category: "Laser",
    icon: "⚡",
    name: "Laser Hair Removal",
    desc: "Permanent hair reduction across all skin types with diode laser.",
    duration: "30–90 min",
    downtime: "None",
    price: "฿1,500",
    tab: "laser",
  },
  {
    category: "Laser",
    icon: "🔬",
    name: "Picosecond Laser",
    desc: "Target pigmentation, melasma and uneven tone with ultra-fast pulses.",
    duration: "30 min",
    downtime: "2–3 days",
    price: "฿5,000",
    tab: "laser",
  },
  {
    category: "Body",
    icon: "🧊",
    name: "CoolSculpting Elite",
    desc: "Freeze and eliminate stubborn fat cells without surgery or downtime.",
    duration: "35–60 min",
    downtime: "None",
    price: "฿8,000",
    tab: "body",
  },
  {
    category: "Body",
    icon: "🫁",
    name: "RF Body Sculpting",
    desc: "Tighten skin and smooth cellulite with radiofrequency energy.",
    duration: "60 min",
    downtime: "None",
    price: "฿3,500",
    tab: "body",
  },
  {
    category: "Wellness",
    icon: "🧬",
    name: "PRP Regenerative Facial",
    desc: "Your own growth factors, activated to repair and renew skin deeply.",
    duration: "75 min",
    downtime: "1 day",
    price: "฿7,500",
    tab: "wellness",
  },
  {
    category: "Wellness",
    icon: "💊",
    name: "IV Nutrient Drip",
    desc: "Replenish essential vitamins and minerals for energy, glow and immunity.",
    duration: "45 min",
    downtime: "None",
    price: "฿2,800",
    tab: "wellness",
  },
];

const filteredTreatments = computed(() => {
  if (activeTab.value === "all") return treatments;
  return treatments.filter((t) => t.tab === activeTab.value);
});

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}
</script>

<style scoped>
.treatments {
  background-color: var(--main-color-2);
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
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--font-color2);
  background-color: var(--main-color-1);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-pill);
  cursor: pointer;
  transition: all var(--transition-normal);
  letter-spacing: 0.3px;
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
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-lg);
}

.treatments__card {
  background-color: var(--font-color-white);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-lg);
  overflow: hidden;
  transition: all var(--transition-normal);
}

.treatments__card:hover {
  border-color: var(--accent-primary);
  box-shadow: var(--shadow-lg);
  transform: translateY(-4px);
}

.treatments__card-visual {
  height: 200px;
  background: linear-gradient(145deg, var(--main-color-2) 0%, var(--main-color-3) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--spacing-lg);
}

.treatments__card-icon {
  background-color: var(--main-color-3);
  display: block;
  width: 100%;
  height: 100%;
  font-size: 0;
}

.treatments__card-badge {
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  padding: 4px var(--spacing-sm);
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: var(--radius-pill);
  font-size: var(--font-xs);
  color: var(--accent-primary);
  font-weight: 600;
  letter-spacing: 0.5px;
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
  font-weight: 600;
  color: var(--font-color1);
  line-height: 1.25;
}

.treatments__card-desc {
  font-size: var(--font-sm);
  color: var(--font-color2);
  line-height: 1.65;
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
  padding: var(--spacing-sm);
  font-size: var(--font-xs);
  letter-spacing: 0.5px;
}

@media (max-width: 1100px) {
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
