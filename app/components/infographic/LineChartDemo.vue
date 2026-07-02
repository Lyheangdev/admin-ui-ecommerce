<template>
  <LineChart
    :data
    :categories="categories"
    :height="300"
    xLabel="Month"
    yLabel="Profit earning"
    :legendPosition="LegendPosition.TopRight"
  />
</template>

<script setup lang="ts">
import { LegendPosition } from 'vue-chrts';

const data = [
  { month: 'Jan', cambodia: 100, thai: 50 },
  { month: 'Feb', cambodia: 120, thai: 55 },
];

const categories = {
  cambodia: {
    name: 'cambodia',
    color: '#3b82f6',
  },
  thai: {
    name: 'thai',
    color: '#10b981',
  },
};
</script>
