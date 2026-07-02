<template>
  <section>
    <h5 class="text-gray-400 uppercase text-xs font-semibold">{{ props?.label }}</h5>
    <ul class="py-3 flex flex-col gap-1 w-full">
      <li v-for="m in props?.items || []" :key="m.label">
        <BaseAccordion
          :open="isActiveSubMenu(m.label)"
          class="relative flex flex-col w-full overflow-hidden"
        >
          <template #trigger>
            <button
              class="grow cursor-pointer rounded-lg py-2 px-3 flex items-center justify-between hover:bg-white/10 duration-300 ease-out"
              :class="{
                'bg-gray-100 dark:bg-white/10': isActive(m.link),
              }"
            >
              <div class="flex items-center gap-2.5">
                <component
                  :is="m.icon"
                  class="size-5! text-gray-700 dark:text-white"
                  :class="{ 'text-blue-700!': isActive(m.link) }"
                />
                <span
                  class="text-[13px] font-normal text-gray-800 dark:text-gray-200 leading-snug"
                  :class="{ 'font-semibold': isActive(m.link) }"
                >
                  {{ capitalize(m.label) }}
                </span>
              </div>

              <button
                v-if="(m.children || []).length > 0"
                class="duration-200 cursor-pointer flex justify-center items-center size-5 bg-gray-50 dark:bg-white/8 border border-gray-100 dark:border-white/10 rounded-full"
                :class="[{ 'rotate-90': isActiveSubMenu(m.label) }]"
                @click.stop="hanleToggle(m.label)"
              >
                <IconChevron class="size-3! text-gray-400 rotate-180" filled />
              </button>
            </button>
          </template>

          <template #content>
            <div
              v-if="(m.children || [])?.length > 0 && isActiveSubMenu(m.label)"
              class="flex flex-col gap-3 items-start text-[13px] pl-10 py-4"
            >
              <button
                v-for="subMenu in m.children || []"
                :key="subMenu.label"
                class="cursor-pointer text-gray-500 dark:text-gray-300 hover:text-gray-400 duration-300"
              >
                {{ capitalize(subMenu.label) }}
              </button>
            </div>
          </template>
        </BaseAccordion>
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { capitalize } from 'vue';
import IconChevron from '~/assets/icons/chevron-thick.svg';
import type { MenuSectionType } from '~/types/menu.type';

const props = defineProps<MenuSectionType & { activeSubMenu: string | null }>();
const emit = defineEmits<{
  (e: 'subMenuOpen', menuItem: string | null): void;
}>();

const route = useRoute();

const hanleToggle = (menuItem: string) => {
  if (props?.activeSubMenu == menuItem) emit('subMenuOpen', null);
  else emit('subMenuOpen', menuItem);
};

const isActive = (menuItemLink: string) => menuItemLink.toLowerCase() == route.path.toLowerCase();
const isActiveSubMenu = (menuItem: string | null) => menuItem == props?.activeSubMenu;
</script>
