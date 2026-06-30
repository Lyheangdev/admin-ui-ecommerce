<template>
  <div class="flex items-center gap-1">
    <button class="p-1.5 bg-black/5 dark:bg-white/10 rounded-full">
      <IconHouse class="size-4! dark:text-white" filled />
    </button>
    <div
      v-for="(path, index) in renderPaths"
      :key="`${index}-${path.link}-${path.label}`"
      class="flex items-center gap-1"
    >
      <IconChevron class="rotate-180 size-4! text-gray-400" />
      <NuxtLink
        :href="path.link || ''"
        class="text-[13px] leading-snug hover:text-gray-500 hover:scale-105 dark:hover:text-gray-500 duration-300"
        :class="[
          'text-gray-400',
          'dark:text-gray-400',
          {
            'font-semibold text-blue-900! dark:text-gray-100! bg-blue-500/5 dark:bg-white/5 px-2.5 py-1 rounded-lg':
              route.path == path.link,
          },
        ]"
      >
        {{ path.label }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconHouse from '~/assets/icons/house.svg';
import IconChevron from '~/assets/icons/chevron.svg';
import { capitalize } from 'vue';

const route = useRoute();

const formatText = (text: string) => {
  const label = text || '';
  if (label.includes('-')) {
    const individualChar = label.split('-');
    return individualChar.map((text) => capitalize(text)).join(' ');
  }
  return capitalize(label);
};

const renderPaths = computed(() => {
  const currentPath = route.path || '';
  if (currentPath == '/') return [{ link: '/', label: 'Dashboard' }];
  const paths = currentPath.slice(1).split('/');
  return paths.map((text, i) => ({
    link: i == 0 ? `/${text}` : `/${paths.slice(0, i + 1).join('/')}`,
    label: formatText(text),
  }));
});
</script>
