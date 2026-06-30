<template>
  <Teleport to="body">
    <Transition name="fade-out" mode="out-in">
      <div
        v-if="isOpen"
        class="fixed inset-0 w-screen h-screen bg-black/60 z-99"
        @click.stop="isOpen = false"
      ></div>
    </Transition>

    <Transition name="slide-right">
      <div
        v-if="isOpen"
        class="fixed top-3 bottom-3 right-2 rounded-xl w-[320px] max-w-[320px] bg-gray-100 dark:bg-black border border-white/10 z-999 py-3 px-3"
      >
        <h4 class="text-bg-primary dark:text-gray-50 text-sm">Inbox Notifications</h4>
      </div>
    </Transition>
  </Teleport>

  <button
    class="cursor-pointer bg-black/3 dark:bg-white/8 px-1.5 py-1 rounded-full"
    @click.stop="isOpen = true"
  >
    <IconNotification class="size-6! text-bg-secondary dark:text-white" />
  </button>
</template>

<script setup lang="ts">
import IconNotification from '~/assets/icons/notification.svg';

const isOpen = ref(false);
</script>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 250ms ease;
  will-change: transform;
}

.slide-right-enter-from {
  transform: translate3d(100%, 0, 0);
}

.slide-right-leave-to {
  transform: translate3d(100%, 0, 0);
}

.fade-out-enter-active,
.fade-out-leave-active {
  transition: opacity 300ms ease;
}

.fade-out-enter-from {
  opacity: 0;
}

.fade-out-leave-to {
  opacity: 0;
}
</style>
