<template>
  <div ref="locale-switcher-ref" class="relative">
    <button class="cursor-pointer flex items-center gap-1.5 w-14" @click.stop="isOpen = !isOpen">
      <span class="text-3xl">{{ currentLanguage?.icon }}</span>
      <span class="text-xs font-medium text-gray-700 dark:text-gray-300">
        {{ currentLanguage?.labelShort }}
      </span>
    </button>

    <Transition name="popover" mode="out-in">
      <div
        v-if="isOpen"
        class="absolute top-full left-0 w-37.5 mt-4 border flex flex-col gap-0.5 p-1 z-50! rounded-md"
        :class="['bg-white border-gray-200!', 'dark:bg-white/2 dark:border-white/10!']"
      >
        <button
          v-for="c in supportedLanguages"
          :key="c.langCode"
          class="cursor-pointer flex items-center gap-1.5 px-1.5 rounded-sm duration-300"
          :class="[
            'hover:bg-black/5',
            'dark:hover:bg-white/8',
            { 'bg-black/5 dark:bg-white/8 w-full': c.langCode == currentLanguage?.langCode },
          ]"
          @click.stop="handleChangeLocale(c)"
        >
          <span class="text-2xl">{{ c.icon }}</span>
          <span class="text-xs font-medium text-gray-700 dark:text-gray-300">{{ c.label }}</span>
        </button>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { useClickOutSide } from '~/hooks/useClickOutSide';

type LanguageSuuport = { icon: string; langCode: string; labelShort: string; label: string };

const supportedLanguages = [
  { icon: '🇬🇧', langCode: 'en', labelShort: 'EN', label: 'English' },
  { icon: '🇹🇭', langCode: 'km', labelShort: 'KM', label: 'Khmer' },
  { icon: '🇰🇭', langCode: 'th', labelShort: 'TH', label: 'Thai' },
];

const isOpen = ref(false);
const currentLanguage = ref(supportedLanguages[0]);
const popoverRef = useTemplateRef('locale-switcher-ref');

const handleChangeLocale = (selectedLanguag: LanguageSuuport) => {
  currentLanguage.value = selectedLanguag;
  isOpen.value = false;
};

useClickOutSide(popoverRef, () => {
  isOpen.value = false;
});
</script>

<style scoped>
.popover-enter-active,
.popover-leave-active {
  will-change: transform;
  transition: all 150ms ease-out;
}

.popover-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.popover-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
