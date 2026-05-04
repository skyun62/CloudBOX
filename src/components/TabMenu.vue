<script setup>
const props = defineProps({
    tabs: {
        type: Array,
        required: true
    },
    activeTab: {
        type: String,
        required: true
    }
})

const emit = defineEmits(['change-tab'])

const selectTab = (tab) => {
    emit('change-tab', tab)
}
</script>

<template>
    <div class="tab-menu">
        <button v-for="tab in tabs" :key="tab" :class="['tab-btn', { active: tab === activeTab }]"
            @click="selectTab(tab)">
            {{ tab }}
        </button>
    </div>
</template>

<style scoped>
.tab-menu {
    display: flex;
    gap: 0; 
    margin-bottom: 0; 
    width: 100%;
}

.tab-btn {
    flex: 1; 
    font-weight: bold;
    padding: 12px 0;  
    border: 1px solid #ccc; 
    background: #fff;
    cursor: pointer;
    border-radius: 8px 8px 0 0;
    transition: background 0.2s;
}

.tab-btn.active {
    background: #ba9393;
    color: #fff;
}
</style>
