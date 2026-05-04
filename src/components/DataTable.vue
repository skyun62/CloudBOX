<script setup>
import { ref } from 'vue'

const props = defineProps({
    rows: {
        type: Array,
        default: () => [
            { id: 0, name: 'Marten Herma Anderson', instagram: 'mrtn.ndrsn', handle: '@mdo' },
            { id: 0, name: 'いとう みわ伊藤美和', instagram: 'miwaito.official', handle: '@fat' },
            { id: 0, name: '陳建志(Chien Chih Chen)', instagram: 'ccc.117', handle: '@social' },
        ]
    }
})

const emit = defineEmits(['select'])

const selected = ref(null)

function onSelect(row) {
    selected.value = row.id
    emit('select', row)
}
</script>

<template>
    <table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Instagram</th>
                <th scope="col">Instagram Official Embed</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id">
                <th scope="row">{{ row.id }}</th>
                <td>{{ row.name }}</td>
                <td>{{ row.instagram }}</td>
                <td>
                    <input type="checkbox" checked disabled />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped>
</style>