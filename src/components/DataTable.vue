<script setup>
import { ref } from 'vue'

const props = defineProps({
    rows: {
        type: Array,
        default: () => [
            { id: 1, first: 'Mark', last: 'Otto', handle: '@mdo' },
            { id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat' },
            { id: 3, first: 'John', last: 'Doe', handle: '@social' },
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
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                <th scope="col">Select</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="row in rows" :key="row.id">
                <th scope="row">{{ row.id }}</th>
                <td>{{ row.first }}</td>
                <td>{{ row.last }}</td>
                <td>{{ row.handle }}</td>
                <td>
                    <input type="radio" name="selectUser" :value="row.id" :checked="selected === row.id"
                        @change="onSelect(row)">
                </td>
            </tr>
        </tbody>
    </table>

    <div class="d-flex flex-wrap justify-content-between align-items-center gap-3 p-3">
        <a href="#" class="btn-link fs-5 text-black p-2 d-flex justify-content-center align-items-center"
            style="width: 200px; height: 40px;">
            Learn more <i class="fa-solid fa-arrow-right ms-2"></i>
        </a>
        <a href="#"
            class="bg-warning-subtle rounded fs-5 text-black p-2 d-flex justify-content-center align-items-center"
            style="width: 150px; height: 40px;">
            Button
        </a>
    </div>
</template>

<style scoped>
.btn-link {
    text-decoration: none;
}
</style>