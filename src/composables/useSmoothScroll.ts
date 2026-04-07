import { ref, onMounted, onUnmounted } from 'vue';
import { HEADER_CONFIG } from '../utils/constants';

/**
 * Smooth scroll composable adapted from Mod.io
 * Provides smooth scrolling functionality and header scroll detection
 */
export function useSmoothScroll() {
  const isScrolled = ref(false);
  const isScrolling = ref(false);
  let ticking = false;

  /**
   * Smooth scroll to element with animation
   * @param targetId - Target element ID or element
   * @param offset - Scroll offset from top (default: header height)
   */
  const scrollToElement = (targetId: string | HTMLElement, offset = 80) => {
    if (isScrolling.value) return;

    const element = typeof targetId === 'string' ? document.getElementById(targetId) : targetId;
    if (!element) return;

    isScrolling.value = true;

    const targetPosition = element.offsetTop - offset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 800; // Animation duration in ms
    let startTime: number | null = null;

    /**
     * Animation function for smooth scrolling
     */
    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function (ease-in-out)
      const easeInOutQuad = (t: number) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
      
      const easeProgress = easeInOutQuad(progress);
      const currentPosition = startPosition + (distance * easeProgress);
      
      window.scrollTo(0, currentPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        isScrolling.value = false;
      }
    };

    requestAnimationFrame(animateScroll);
  };

  /**
   * Handle scroll events for header state
   */
  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        isScrolled.value = window.scrollY > HEADER_CONFIG.scrollThreshold;
        ticking = false;
      });
      ticking = true;
    }
  };

  /**
   * Setup scroll listeners
   */
  const setupScrollListeners = () => {
    window.addEventListener('scroll', handleScroll, HEADER_CONFIG.passive);
  };

  /**
   * Cleanup scroll listeners
   */
  const cleanupScrollListeners = () => {
    window.removeEventListener('scroll', handleScroll);
  };

  // Lifecycle hooks
  onMounted(setupScrollListeners);
  onUnmounted(cleanupScrollListeners);

  return {
    isScrolled,
    isScrolling,
    scrollToElement
  };
}
