<template>
  <main data-theme="light"
    class="w-screen h-full bg-white dark:bg-black py-2 px-2 transition-colors duration-300 ease-out">

    <nav
      class="flex flex-col pt-5 px-4 bg-bg-secondary border border-white/5 w-[240px] max-w-[240px] rounded-xl h-[100dvh]">
      <!-- Brand Logo -->
      <section>
        <div class="flex items-center gap-3">
          <IconSVI class="text-blue-900 h-8! w-10!" />
          <div>
            <h5 class="text-gray-800 text-sm font-medium dark:text-white leading-snug">SVI HR System</h5>
            <p class="text-[10px] dark:text-gray-300 font-light leading-snug">Fast, modern</p>
          </div>
        </div>
      </section>

      <!-- Feature Section -->
      <section class="py-8">
        <h5 class="text-white text-xs font-semibold">Overview</h5>
        <ul class="py-3 flex flex-col gap-1">
          <li v-for="m in menu" :key="m.name" class="cursor-pointer w-full rounded-lg py-2 px-3 flex items-center gap-2.5 hover:bg-white/10 duration-300 ease-out"
            :class="{'bg-white/5' : m.route.toLowerCase() == route.path.toLowerCase()}"
          >
            <component :is="m.icon" class="size-5! text-white" />
            <span class="text-xs font-normal text-gray-200 leading-snug">{{ capitalize(m.name) }}</span>
          </li>
        </ul>
      </section>
    </nav>

    <!-- <button class="py-1 px-2 rounded-lg cursor-pointer bg-amber-500/15 dark:bg-amber-500/10 flex items-center gap-2" @click="handleToggleTheme">
        <IconLight v-if="themeMode=='light'" class="stroke-amber-500 dark:stroke-white text-transparent size-6!" />
        <IconDark v-else class="size-6! text-white" />
        <span class="text-xs font-medium dark:text-amber-500">{{ themeMode === 'light' ? 'Light Mode' : 'Dark Mode' }}</span>
      </button> -->
  </main>
</template>

<script lang="ts" setup>
import IconLight from '~/assets/icons/light.svg';
import IconDark from '~/assets/icons/dark.svg';
import IconSVI from '~/assets/icons/logo.svg';
import IconHome from '~/assets/icons/home.svg';
import IconEmployee from '~/assets/icons/multi-user.svg';
import IconAttendance from '~/assets/icons/attendance.svg';
import IconDoc from '~/assets/icons/doc.svg';
import { capitalize } from 'vue';

type ThemeMode = 'light' | 'dark';
const themeMode = ref<ThemeMode>('light');

const route = useRoute();

const menu = [{
  name: "Dashboard",
  icon: IconHome,
  route: '/',
  children: []
}, {
  name: "Employees",
  icon: IconEmployee,
  route: '/employees',
  children: []
}, {
  name: "Attendance",
  icon: IconAttendance,
  route: '/attendance',
  children: []
},{
  name: "Leave Request",
  icon: IconDoc,
  route: '/leave-request',
  children: []
}]

onMounted(() => {
  //-- Load the OS theme preference
  const osThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const osMode = osThemeMode ? 'dark' : 'light';
  themeMode.value = osMode;
})

watch(themeMode, (mode) => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('themeMode', mode);
    const main = document.querySelector('main');
    if (!main) return;
    main.setAttribute('data-theme', themeMode.value);
  }
}, { immediate: true })

function handleToggleTheme() {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light';
}
</script>