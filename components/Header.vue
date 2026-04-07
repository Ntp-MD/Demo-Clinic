<template>
  <header class="header" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__inner">
      <a href="#home" class="header__logo" @click.prevent="handleNavClick('home')">
        <div class="header__logo-icon">
          <span class="header__logo-leaf">✿</span>
        </div>
        <div class="header__logo-text">
          <span class="header__logo-name">Demo</span>
          <span class="header__logo-sub">Clinic</span>
        </div>
      </a>

      <nav class="header__nav" :class="{ 'header__nav--open': menuOpen }">
        <ul class="header__nav-list">
          <li v-for="item in navItems" :key="item.id">
            <a class="header__nav-link" :href="`#${item.id}`" @click.prevent="handleNavClick(item.id)">{{ item.label }}</a>
          </li>
        </ul>
        <a href="#booking" class="btn btn--primary header__nav-cta" @click.prevent="handleNavClick('booking')"> Book a Visit </a>
      </nav>

      <button class="header__burger" :class="{ 'header__burger--active': menuOpen }" aria-label="Toggle navigation" @click="menuOpen = !menuOpen">
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
        <span class="header__burger-line"></span>
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useSmoothScroll } from "~/composables/useSmoothScroll";

const menuOpen = ref(false);
const { isScrolled, scrollToElement } = useSmoothScroll();

const navItems = [
  { id: "services", label: "Services" },
  { id: "about", label: "About Us" },
  { id: "treatments", label: "Treatments" },
  { id: "testimonials", label: "Reviews" },
  { id: "booking", label: "Contact" },
];

const closeMenu = () => {
  menuOpen.value = false;
};

const handleNavClick = (targetId: string) => {
  closeMenu();
  scrollToElement(targetId);
};
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  background-color: transparent;
  will-change: background-color, box-shadow;
  transition:
    background-color 0.25s ease,
    box-shadow 0.25s ease;
}

.header--scrolled {
  background-color: var(--main-color-1);
  box-shadow: var(--shadow-sm);
}

.header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-height);
}

.header__logo {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
}

.header__logo-icon {
  width: 36px;
  height: 36px;
  background-color: var(--accent-primary);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.header__logo-leaf {
  font-size: var(--font-md);
  color: var(--font-color-white);
  line-height: 1;
}

.header__logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.header__logo-name {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 700;
  color: var(--font-color1);
  letter-spacing: 0.5px;
}

.header__logo-sub {
  font-family: var(--font-body);
  font-size: var(--font-xs);
  font-weight: 400;
  color: var(--accent-primary);
  letter-spacing: 2px;
  text-transform: uppercase;
}

.header__nav {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
}

.header__nav-list {
  display: flex;
  align-items: center;
  gap: var(--spacing-lg);
  list-style: none;
}

.header__nav-link {
  font-size: var(--font-sm);
  font-weight: 400;
  color: var(--font-color1);
  letter-spacing: 0.3px;
  position: relative;
  padding-bottom: 3px;
}

.header__nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-primary);
  border-radius: var(--radius-xs);
  transition: width var(--transition-normal);
}

.header__nav-link:hover::after {
  width: 100%;
}

.header__nav-link:hover {
  color: var(--accent-primary);
}

.header__nav-cta {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--font-xs);
  letter-spacing: 1px;
}

.header__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  padding: var(--spacing-xs);
  background: none;
  border: none;
  cursor: pointer;
}

.header__burger-line {
  display: block;
  width: 24px;
  height: 2px;
  background-color: var(--font-color1);
  border-radius: var(--radius-xs);
  transition: all var(--transition-normal);
}

.header__burger--active .header__burger-line:nth-child(1) {
  transform: translateY(7px) rotate(45deg);
}

.header__burger--active .header__burger-line:nth-child(2) {
  opacity: 0;
}

.header__burger--active .header__burger-line:nth-child(3) {
  transform: translateY(-7px) rotate(-45deg);
}

@media (max-width: 900px) {
  .header__burger {
    display: flex;
  }

  .header__nav {
    position: fixed;
    top: calc(var(--header-height) - 1px);
    left: 0;
    width: 100%;
    flex-direction: column;
    align-items: stretch;
    background-color: var(--main-color-1);
    padding: var(--spacing-lg);
    gap: var(--spacing-md);
    box-shadow: var(--shadow-md);
    transform: translateX(-105%);
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    height: 80vh;
    z-index: 9;
    will-change: transform;
  }

  .header__nav--open {
    transform: translateX(0);
  }

  .header__nav-list {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-md);
  }

  .header__nav-cta {
    width: 100%;
    justify-content: center;
  }
}
</style>
