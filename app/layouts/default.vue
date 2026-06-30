<template>
  <main
    class="flex w-screen h-screen bg-gray-100 dark:bg-black/90 p-1.5 transition-colors duration-200 ease-out m-0!"
  >
    <div class="flex flex-col gap-3 w-[250px] max-w-[250px]">
      <nav
        class="relative grow flex flex-col pt-3 px-4 bg-white dark:bg-bg-secondary border border-black/8 dark:border-white/8 rounded-2xl"
      >
        <!-- Brand Logo -->
        <section
          class="bg-black/2 border border-black/3 dark:border-white/3 dark:bg-white/2 rounded-xl"
        >
          <div class="flex items-center gap-3 px-3 py-4">
            <IconSVI class="text-blue-900 h-8! w-10!" />
            <div>
              <h5 class="text-gray-800 text-sm font-medium dark:text-white leading-snug">
                SVI HR System
              </h5>
              <p class="text-[10px] dark:text-gray-300 font-light leading-snug">
                Fast, modern plaform
              </p>
            </div>
          </div>
        </section>

        <!-- Feature Section -->
        <section class="pt-6">
          <h5 class="text-gray-400 uppercase text-xs font-semibold">Overview</h5>
          <ul class="py-3 flex flex-col gap-1">
            <NuxtLink v-for="m in featureMenu" :key="m.name" :href="m.route">
              <li
                class="cursor-pointer w-full rounded-lg py-2 px-3 flex items-center gap-2.5 hover:bg-white/10 duration-300 ease-out"
                :class="{
                  'bg-gray-100 dark:bg-white/10': m.route.toLowerCase() == route.path.toLowerCase(),
                }"
              >
                <component
                  :is="m.icon"
                  class="size-5! text-gray-700 dark:text-white"
                  :class="{ 'text-blue-700!': m.route.toLowerCase() == route.path.toLowerCase() }"
                />
                <span
                  class="text-xs font-normal text-gray-800 dark:text-gray-200 leading-snug"
                  :class="{ 'font-semibold': m.route.toLowerCase() == route.path.toLowerCase() }"
                >
                  {{ capitalize(m.name) }}
                </span>
              </li>
            </NuxtLink>
          </ul>
        </section>

        <!-- System Section -->
        <section class="pt-5">
          <h5 class="text-gray-400 uppercase text-xs font-semibold">System Management</h5>
          <ul class="py-3 flex flex-col gap-1">
            <NuxtLink v-for="m in systemMenu" :key="m.name" :href="m.route">
              <li
                class="cursor-pointer w-full rounded-lg py-2 px-3 flex items-center gap-2.5 hover:bg-white/10 duration-300 ease-out"
                :class="{
                  'bg-gray-100 dark:bg-white/5': m.route.toLowerCase() == route.path.toLowerCase(),
                }"
              >
                <component
                  :is="m.icon"
                  class="size-5! text-gray-700 dark:text-white"
                  :class="{ 'text-blue-700!': m.route.toLowerCase() == route.path.toLowerCase() }"
                />
                <span
                  class="text-xs font-normal text-gray-800 dark:text-gray-200 leading-snug"
                  :class="{ 'font-semibold': m.route.toLowerCase() == route.path.toLowerCase() }"
                >
                  {{ capitalize(m.name) }}
                </span>
              </li>
            </NuxtLink>
          </ul>
        </section>

        <div class="absolute inset-x-0 bottom-4 mx-3.5">
          <div class="py-1.5 px-2 bg-gray-100 dark:bg-white/5 rounded-xl flex items-center gap-2.5">
            <div class="relative size-10 p-1 bg-blue-600/10 rounded-full outline outline-gray-600">
              <NuxtImg src="/images/avatar.png" class="size-full object-cover rounded-full" />
            </div>
            <div>
              <h5 class="text-sm leading-snug text-bg-secondary dark:text-gray-50 font-medium">
                Felix
              </h5>
              <p class="text-xs leading-snug text-gray-400">felix@gamil.com</p>
            </div>
          </div>

          <div
            class="bg-black/5 dark:bg-white/15 rounded-lg p-1 mt-2 border border-black/5 dark:border-white/10 flex items-center"
          >
            <button
              class="cursor-pointer grow shrink-0 flex items-center justify-center gap-2 rounded-md px-1 py-1.5"
              :class="{ 'bg-white': themeMode === 'dark' }"
              @click.stop="handleToggleTheme"
            >
              <IconDark
                class="size-4! text-bg-secondary dark:text-white"
                :class="{ 'text-white dark:text-bg-secondary!': themeMode === 'dark' }"
              />
              <span
                class="text-xs text-bg-secondary dark:text-white"
                :class="{ 'text-white dark:text-bg-secondary!': themeMode === 'dark' }"
              >
                Dark
              </span>
            </button>

            <button
              class="cursor-pointer grow shrink-0 flex items-center justify-center gap-2 rounded-md px-1 py-1.5"
              :class="{ 'bg-gray-900 dark:bg-white': themeMode === 'light' }"
              @click.stop="handleToggleTheme"
            >
              <IconLight
                class="size-4! text-bg-secondary dark:text-white"
                :class="{ 'text-white dark:text-bg-secondary!': themeMode === 'light' }"
              />
              <span
                class="text-xs text-bg-secondary dark:text-white"
                :class="{ 'text-white dark:text-bg-secondary!': themeMode === 'light' }"
              >
                Light
              </span>
            </button>
          </div>
        </div>
      </nav>
      <div class="px-4 flex justify-center items-center">
        <p class="text-xs text-gray-900 dark:text-gray-50">
          <span class="font-semibold">Version</span>
          <span class="font-light text-gray-400 ml-1.5">{{ VERSION }}</span>
        </p>
      </div>
    </div>

    <div class="flex-1 pl-3 pr-1 py-2 flex flex-col">
      <!-- Toolbar -->
      <div
        class="w-full flex items-center justify-between border-b pb-2.5 border-black/10 dark:border-white/10"
      >
        <Breadcrumb />
        <div class="flex items-center gap-2.5 rounded-lg">
          <button class="cursor-pointer bg-black/3 dark:bg-white/8 px-1.5 py-1 rounded-full">
            <IconServer class="size-6! text-bg-secondary dark:text-white" />
          </button>
          <NotificationBell />
          <LocaleSwitcher />
          <div class="w-px h-7 bg-black/15 dark:bg-white/25" />
          <button
            class="cursor-pointer flex items-center gap-1 rounded-lg border border-red-500 px-2 py-0.5"
          >
            <IconLogout class="size-6! text-red-600 mt-1" />
            <span class="text-[13px] text-red-600 mb-1 leading-snug mt-1">Logout</span>
          </button>
        </div>
      </div>
      <div class="relative flex-1">
        <slot />
      </div>
    </div>
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
import IconUser from '~/assets/icons/user.svg';
import IconKeys from '~/assets/icons/keys.svg';
import IconSetting from '~/assets/icons/setting-config.svg';
import IconLogout from '~/assets/icons/logout.svg';
import IconServer from '~/assets/icons/server.svg';

import packageJson from '../../package.json';

import { capitalize } from 'vue';
import NotificationBell from '~/components/NotificationBell.vue';

const VERSION = packageJson.version;

type ThemeMode = 'light' | 'dark';
const themeMode = ref<ThemeMode>('light');

const route = useRoute();

useHead({
  htmlAttrs: {
    'data-theme': themeMode,
  },
});

const featureMenu = [
  {
    name: 'Dashboard',
    icon: IconHome,
    route: '/dashboard',
    children: [],
  },
  {
    name: 'Employees',
    icon: IconEmployee,
    route: '/employees',
    children: [],
  },
  {
    name: 'Attendance',
    icon: IconAttendance,
    route: '/attendance',
    children: [],
  },
  {
    name: 'Leave Request',
    icon: IconDoc,
    route: '/leave-request',
    children: [],
  },
];

const systemMenu = [
  {
    name: 'User Control',
    icon: IconUser,
    route: '/user-control',
    children: [],
  },
  {
    name: 'Role & Permission',
    icon: IconKeys,
    route: '/role-permission',
    children: [],
  },
  {
    name: 'System Configuration',
    icon: IconSetting,
    route: '/configuration',
    children: [],
  },
];

onMounted(() => {
  //-- Load the OS theme preference
  const osThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const osMode = osThemeMode ? 'dark' : 'light';
  themeMode.value = osMode;
});

watch(
  themeMode,
  (mode) => {
    // if (typeof window !== 'undefined') {
    //   localStorage.setItem('themeMode', mode);
    //   const main = document.querySelector('html');
    //   if (!main) return;
    //   main.setAttribute('data-theme', themeMode.value);
    // }
  },
  { immediate: true }
);

function handleToggleTheme() {
  themeMode.value = themeMode.value === 'light' ? 'dark' : 'light';
}
</script>
