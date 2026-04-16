<script setup>
import { ref } from 'vue'

const props = defineProps({
    mapSrc: {
        type: String,
        default: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.6964008880964!2d120.64076619624971!3d24.1472979087972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693dbf63b5d5b1%3A0x72b6aa287ed78357!2z5a6c5a625a625bGFIOiHuuS4reW6lw!5e0!3m2!1szh-TW!2stw!4v1761809948106!5m2!1szh-TW!2stw'
    }
})

const emit = defineEmits(['submit'])

const form = ref({ email: '', message: '' })

function onSubmit() {
    emit('submit', { ...form.value })
    form.value = { email: '', message: '' }
}
</script>

<template>
    <div class="map-wrapper position-relative">
        <iframe class="w-100" :src="mapSrc" width="600" height="450" style="border: 0;" allowfullscreen loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"></iframe>

        <div
            class="contact-card position-absolute top-50 end-0 translate-middle bg-white p-3 rounded d-flex flex-wrap gap-2">
            <h4>Feedback</h4>
            <h6>Post-ironic portland shabby chic echo park, banjo fashion axe.</h6>

            <label class="w-100">
                <span>Email</span>
                <input v-model="form.email" type="email" class="form-control" placeholder="your email">
            </label>

            <label class="w-100">
                <span>Message</span>
                <input v-model="form.message" type="text" class="form-control" placeholder="your message">
            </label>

            <button class="btn btn-primary w-100" @click="onSubmit">Send</button>
            <h6>Post-ironic portland shabby chic echo park, banjo fashion axe.</h6>
        </div>
    </div>
</template>

<style scoped>
.map-wrapper {
    container-type: inline-size;
}

.contact-card {
    width: 300px;
}

/* 手機版：改成堆疊排列 */
@media (max-width: 768px) {
    .contact-card {
        position: static !important;
        transform: none !important;
        width: 100%;
        margin-top: 1rem;
    }
}
</style>