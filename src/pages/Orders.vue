<template>
  <div>
    <h1>Orders</h1>

    <!-- фильтры -->
    <div class="filters">
      <input type="date" v-model="dateFrom" />
      <input type="date" v-model="dateTo" />
      <button @click="loadData">Загрузить</button>
    </div>

    <!-- таблица -->
    <table border="1" cellpadding="6">
      <thead>
        <tr>
          <th v-for="(val, key) in (items[0] || {})" :key="key">{{ key }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in items" :key="row.id">
          <td v-for="(val, key) in row" :key="key">{{ val }}</td>
        </tr>
      </tbody>
    </table>

    <!-- пагинация -->
    <div class="pagination">
      <button :disabled="page <= 1" @click="page--; loadData()">⬅️ Назад</button>
      <span>Страница {{ page }}</span>
      <button @click="page++; loadData()">Вперёд ➡️</button>
    </div>
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
  const data = await fetchData('orders', {
    dateFrom: dateFrom.value,
    dateTo: dateTo.value,
    page: page.value,
    limit: 20,
  })
  items.value = data.data // Laravel API возвращает { data, meta, ... }
}

loadData()
</script>
