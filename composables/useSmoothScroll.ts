import { ref, onMounted, onUnmounted } from 'vue'
import { HEADER_CONFIG } from '~/utils/constants'

export function useSmoothScroll() {
  const isScrolled = ref(false)
  const isScrolling = ref(false)
  let ticking = false

  const scrollToElement = (targetId: string | HTMLElement, offset = 80) => {
    if (isScrolling.value) return

    const element = typeof targetId === 'string' ? document.getElementById(targetId) : targetId
    if (!element) return

    isScrolling.value = true

    const targetPosition = element.offsetTop - offset
    const startPosition = window.pageYOffset
    const distance = targetPosition - startPosition
    const duration = 800
    let startTime: number | null = null

    const animateScroll = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const progress = Math.min(timeElapsed / duration, 1)

      const easeInOutQuad = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

      const easeProgress = easeInOutQuad(progress)
      const currentPosition = startPosition + (distance * easeProgress)

      window.scrollTo(0, currentPosition)

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll)
      } else {
        isScrolling.value = false
      }
    }

    requestAnimationFrame(animateScroll)
  }

  const handleScroll = () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        isScrolled.value = window.scrollY > HEADER_CONFIG.scrollThreshold
        ticking = false
      })
      ticking = true
    }
  }

  onMounted(() => window.addEventListener('scroll', handleScroll, HEADER_CONFIG.passive))
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))

  return { isScrolled, isScrolling, scrollToElement }
}
