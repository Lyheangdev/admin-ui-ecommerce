<template>
  <main data-theme="light" class="px-3 py-3 w-screen h-screen bg-white dark:bg-bg-primary transition-colors duration-300 ease-out">
    
    <nav class="w-full flex items-center justify-between">
      <div class="bg-gray-900/5 dark:bg-gray-50/10 py-2.5 pl-3.5 pr-20 rounded-xl">
        <h4 class="text-gray-800 font-bold dark:text-white">SVI HR <span class="text-base font-normal">Management</span></h4>
        <p class="text-xs dark:text-gray-300 font-light leading-snug">Fast, modern and reliable v 1.0.0</p>
      </div>
      <button class="py-1 px-2 rounded-lg cursor-pointer bg-amber-500/15 dark:bg-amber-500/10 flex items-center gap-2" @click="handleToggleTheme">
        <IconLight v-if="themeMode=='light'" class="stroke-amber-500 dark:stroke-white text-transparent size-6!" />
        <IconDark v-else class="size-6! text-white" />
        <span class="text-xs font-medium dark:text-amber-500">{{ themeMode === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
      </button>
    </nav>
  </main>
</template>

<script lang="ts" setup>
import IconLight from '~/assets/icons/light.svg';
import IconDark from '~/assets/icons/dark.svg';

type ThemeMode = 'light' | 'dark';
const themeMode = ref<ThemeMode>('light');

onMounted(() => {
  //-- Load the OS theme preference
  const osThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const osMode = osThemeMode ? 'dark' : 'light';
  themeMode.value = osMode;
})

watch(themeMode , (mode) => {
  if(typeof window !== 'undefined'){
    localStorage.setItem('themeMode', mode);
    const main = document.querySelector('main');
    if(!main) return;
    main.setAttribute('data-theme',themeMode.value);
  }
},{immediate: true})

function handleToggleTheme() {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light';
}
</script>