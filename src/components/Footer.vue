<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="container footer__top-inner">
        <div class="footer__brand">
          <a href="#home" class="footer__logo" @click.prevent="scrollTo('home')">
            <span class="footer__logo-mark">✦</span>
            <span class="footer__logo-name">Lumière</span>
          </a>
          <p class="footer__brand-desc">
            Premium aesthetic medicine combining science and artistry
            to enhance your natural beauty with confidence and care.
          </p>
          <div class="footer__socials">
            <a
              v-for="social in socials"
              :key="social.label"
              :href="social.href"
              class="footer__social-link"
              :aria-label="social.label"
            >
              {{ social.icon }}
            </a>
          </div>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Services</h4>
          <ul class="footer__col-list">
            <li v-for="item in serviceLinks" :key="item">
              <a href="#services" class="footer__col-link" @click.prevent="scrollTo('services')">{{ item }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Clinic</h4>
          <ul class="footer__col-list">
            <li v-for="item in clinicLinks" :key="item.label">
              <a
                :href="`#${item.id}`"
                class="footer__col-link"
                @click.prevent="scrollTo(item.id)"
              >{{ item.label }}</a>
            </li>
          </ul>
        </div>

        <div class="footer__col">
          <h4 class="footer__col-title">Contact</h4>
          <ul class="footer__col-list footer__col-list--contact">
            <li v-for="item in contactInfo" :key="item.label" class="footer__contact-item">
              <span class="footer__contact-icon">{{ item.icon }}</span>
              <span>{{ item.value }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copy">
          © {{ currentYear }} Lumière Aesthetic Clinic. All rights reserved.
        </p>
        <div class="footer__legal">
          <a href="#" class="footer__legal-link">Privacy Policy</a>
          <span class="footer__legal-sep">·</span>
          <a href="#" class="footer__legal-link">Terms of Service</a>
          <span class="footer__legal-sep">·</span>
          <a href="#" class="footer__legal-link">Cookie Policy</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear()

const socials = [
  { label: 'Instagram', icon: '📸', href: '#' },
  { label: 'Facebook', icon: '💙', href: '#' },
  { label: 'LINE', icon: '💬', href: '#' },
  { label: 'TikTok', icon: '🎵', href: '#' }
]

const serviceLinks = [
  'Skin Rejuvenation',
  'Injectable Treatments',
  'Laser & Light',
  'Body Contouring',
  'Anti-Aging Therapy',
  'Wellness & Spa'
]

const clinicLinks = [
  { id: 'about', label: 'About Us' },
  { id: 'treatments', label: 'Treatments' },
  { id: 'testimonials', label: 'Reviews' },
  { id: 'booking', label: 'Book Appointment' },
  { id: 'booking', label: 'Contact Us' }
]

const contactInfo = [
  { icon: '📍', label: 'Address', value: '88 Sukhumvit Soi 11, Watthana, Bangkok 10110' },
  { icon: '📞', label: 'Phone', value: '+66 2 123 4567' },
  { icon: '✉️', label: 'Email', value: 'hello@lumiere-clinic.com' },
  { icon: '🕐', label: 'Hours', value: 'Mon–Fri 9:00–20:00' }
]

function scrollTo(id: string) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<style scoped>
.footer {
  background-color: var(--font-color1);
  color: var(--font-color-white);
}

.footer__top {
  padding-top: var(--spacing-2xl);
  padding-bottom: var(--spacing-2xl);
}

.footer__top-inner {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr 1.2fr;
  gap: var(--spacing-2xl);
  align-items: start;
}

.footer__logo {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
  text-decoration: none;
}

.footer__logo-mark {
  font-size: var(--font-xl);
  color: var(--accent-secondary);
}

.footer__logo-name {
  font-family: var(--font-display);
  font-size: var(--font-xl);
  font-weight: 500;
  color: var(--font-color-white);
  letter-spacing: 1px;
}

.footer__brand-desc {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.7;
  margin-bottom: var(--spacing-lg);
}

.footer__socials {
  display: flex;
  gap: var(--spacing-sm);
}

.footer__social-link {
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  transition: background-color var(--transition-normal), transform var(--transition-normal);
  text-decoration: none;
}

.footer__social-link:hover {
  background-color: rgba(255, 255, 255, 0.18);
  transform: translateY(-3px);
}

.footer__col-title {
  font-family: var(--font-body);
  font-size: var(--font-xs);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--accent-secondary);
  margin-bottom: var(--spacing-lg);
}

.footer__col-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  list-style: none;
}

.footer__col-link {
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.6);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.footer__col-link:hover {
  color: var(--font-color-white);
}

.footer__col-list--contact {
  gap: var(--spacing-md);
}

.footer__contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-sm);
  font-size: var(--font-sm);
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
}

.footer__contact-icon {
  font-size: var(--font-md);
  flex-shrink: 0;
  margin-top: 2px;
}

.footer__bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding-top: var(--spacing-lg);
  padding-bottom: var(--spacing-lg);
}

.footer__bottom-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: var(--spacing-md);
}

.footer__copy {
  font-size: var(--font-xs);
  color: rgba(255, 255, 255, 0.4);
}

.footer__legal {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.footer__legal-link {
  font-size: var(--font-xs);
  color: rgba(255, 255, 255, 0.4);
  text-decoration: none;
  transition: color var(--transition-normal);
}

.footer__legal-link:hover {
  color: var(--font-color-white);
}

.footer__legal-sep {
  color: rgba(255, 255, 255, 0.2);
  font-size: var(--font-xs);
}

@media (max-width: 1024px) {
  .footer__top-inner {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-xl);
  }

  .footer__brand {
    grid-column: 1 / -1;
  }
}

@media (max-width: 640px) {
  .footer__top-inner {
    grid-template-columns: 1fr;
  }

  .footer__bottom-inner {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
