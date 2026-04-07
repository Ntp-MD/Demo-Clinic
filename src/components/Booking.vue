<template>
  <section id="booking" class="section booking">
    <div class="container booking__inner">
      <div class="booking__info animate-slide-left">
        <span class="section-label">Get In Touch</span>
        <h2 class="section-title">Book Your<br /><em class="booking__title-em">Wellness Visit</em></h2>
        <div class="divider"></div>
        <p class="booking__desc">
          Every journey to better health starts with a single step. Book your free consultation and let our specialists create a personalised wellness
          plan designed around you.
        </p>

        <div class="booking__contact-list">
          <div v-for="contact in contacts" :key="contact.label" class="booking__contact-item">
            <span class="booking__contact-icon">{{ contact.icon }}</span>
            <div>
              <p class="booking__contact-label">{{ contact.label }}</p>
              <p class="booking__contact-value">{{ contact.value }}</p>
            </div>
          </div>
        </div>

        <div class="booking__hours">
          <h4 class="booking__hours-title">Opening Hours</h4>
          <div class="booking__hours-grid">
            <div v-for="hours in openingHours" :key="hours.days" class="booking__hours-row">
              <span class="booking__hours-days">{{ hours.days }}</span>
              <span class="booking__hours-time">{{ hours.time }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="booking__form-wrap animate-slide-right animate-delay-2">
        <div class="booking__form-card card">
          <h3 class="booking__form-title">Schedule Your Visit</h3>
          <p class="booking__form-subtitle">Our team will confirm within 24 hours</p>

          <form class="booking__form" @submit.prevent="handleSubmit">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label" for="booking-firstname">First Name</label>
                <input id="booking-firstname" v-model="form.firstName" type="text" class="form-input" placeholder="Your first name" required />
              </div>
              <div class="form-group">
                <label class="form-label" for="booking-lastname">Last Name</label>
                <input id="booking-lastname" v-model="form.lastName" type="text" class="form-input" placeholder="Your last name" required />
              </div>
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-email">Email Address</label>
              <input id="booking-email" v-model="form.email" type="email" class="form-input" placeholder="you@example.com" required />
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-phone">Phone Number</label>
              <input id="booking-phone" v-model="form.phone" type="tel" class="form-input" placeholder="+66 81 234 5678" />
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-treatment">Treatment of Interest</label>
              <select id="booking-treatment" v-model="form.treatment" class="form-select">
                <option value="" disabled selected>Select a treatment</option>
                <option v-for="option in treatmentOptions" :key="option" :value="option">
                  {{ option }}
                </option>
              </select>
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-date">Preferred Date</label>
              <input id="booking-date" v-model="form.date" type="date" class="form-input" />
            </div>

            <div class="form-group">
              <label class="form-label" for="booking-message">Additional Notes</label>
              <textarea
                id="booking-message"
                v-model="form.message"
                class="form-textarea"
                placeholder="Tell us about your health concerns or wellness goals..."
                rows="3"
              ></textarea>
            </div>

            <button type="submit" class="btn btn--primary booking__form-submit" :disabled="submitted">
              <span v-if="!submitted">Send Booking Request</span>
              <span v-else>✓ Request Received!</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const submitted = ref(false);

const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  treatment: "",
  date: "",
  message: "",
});

const contacts = [
  { icon: "📍", label: "Address", value: "42 Rama IX Rd, Huai Khwang, Bangkok 10310" },
  { icon: "📞", label: "Phone", value: "+66 2 987 6543" },
  { icon: "✉️", label: "Email", value: "care@Demo-clinic.com" },
  { icon: "💬", label: "LINE Official", value: "@Democare" },
];

const openingHours = [
  { days: "Monday – Friday", time: "09:00 – 20:00" },
  { days: "Saturday", time: "09:00 – 18:00" },
  { days: "Sunday", time: "10:00 – 16:00" },
];

const treatmentOptions = [
  "Botox / Wrinkle Relaxer",
  "Dermal Fillers",
  "HydraFacial MD",
  "Laser Hair Removal",
  "Picosecond Laser",
  "CoolSculpting Elite",
  "PRP Regenerative Facial",
  "RF Body Sculpting",
  "IV Nutrient Drip",
  "General Wellness Consultation",
  "Other",
];

function handleSubmit() {
  submitted.value = true;
  setTimeout(() => {
    submitted.value = false;
    form.firstName = "";
    form.lastName = "";
    form.email = "";
    form.phone = "";
    form.treatment = "";
    form.date = "";
    form.message = "";
  }, 3000);
}
</script>

<style scoped>
.booking {
  background-color: var(--main-color-2);
}

.booking__inner {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  align-items: start;
  gap: var(--spacing-2xl);
}

.booking__desc {
  font-size: var(--font-md);
  color: var(--font-color2);
  line-height: 1.8;
  margin-bottom: var(--spacing-xl);
}

.booking__contact-list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
}

.booking__contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.booking__contact-icon {
  width: 40px;
  height: 40px;
  background-color: var(--main-color-1);
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--font-lg);
  flex-shrink: 0;
}

.booking__contact-label {
  font-size: var(--font-xs);
  color: var(--font-color3);
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 3px;
}

.booking__contact-value {
  font-size: var(--font-sm);
  color: var(--font-color1);
  font-weight: 400;
}

.booking__hours {
  background-color: var(--main-color-1);
  border-radius: var(--radius-md);
  padding: var(--spacing-lg);
}

.booking__hours-title {
  font-family: var(--font-display);
  font-size: var(--font-lg);
  font-weight: 500;
  color: var(--font-color1);
  margin-bottom: var(--spacing-md);
}

.booking__hours-grid {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.booking__hours-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.booking__hours-days {
  font-size: var(--font-sm);
  color: var(--font-color2);
}

.booking__hours-time {
  font-size: var(--font-sm);
  font-weight: 500;
  color: var(--accent-primary);
}

.booking__form-card {
  background-color: var(--font-color-white);
  border: 1px solid var(--main-color-3);
  border-radius: var(--radius-xl);
  padding: var(--spacing-xl);
  box-shadow: var(--shadow-lg);
}

.booking__title-em {
  font-style: italic;
  color: var(--accent-primary);
}

.booking__form-title {
  font-family: var(--font-display);
  font-size: var(--font-2xl);
  font-weight: 600;
  color: var(--font-color1);
  margin-bottom: var(--spacing-xs);
}

.booking__form-subtitle {
  font-size: var(--font-sm);
  color: var(--font-color3);
  margin-bottom: var(--spacing-xl);
}

.booking__form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.booking__form-submit {
  width: 100%;
  margin-top: var(--spacing-sm);
  padding: 16px;
  font-size: var(--font-sm);
  letter-spacing: 1px;
}

.booking__form-submit:disabled {
  background-color: var(--accent-success);
  border-color: var(--accent-success);
  cursor: not-allowed;
}

@media (max-width: 1024px) {
  .booking__inner {
    grid-template-columns: 1fr;
  }
}
</style>
