<template>
  <div>
    <h1>Stocks</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { fetchData } from '../services/ApiService'

const items = ref<any[]>([])
const page = ref(1)
const dateFrom = ref('2025-09-19') // текущий день

async function loadData() {
  const data = await fetchData('stocks', {
    dateFrom: dateFrom.value,
    page: page.value,
    limit: 20,
  })
  items.value = data.data
}

loadData()
</script>
