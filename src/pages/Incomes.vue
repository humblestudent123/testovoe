<template>
  <div>
    <h1>Incomes</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fetchData } from '../services/ApiService'

const items = ref<any[]>([])
const page = ref(1)
const dateFrom = ref('2025-09-01')
const dateTo = ref('2025-09-10')

async function loadData() {
  const data = await fetchData('incomes', {
    dateFrom: dateFrom.value,
    dateTo: dateTo.value,
    page: page.value,
    limit: 20,
  })
  items.value = data.data
}

loadData()
</script>
