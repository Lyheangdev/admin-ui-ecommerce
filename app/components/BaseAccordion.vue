<template>
  <div class="relative">
    <slot name="trigger" />
    <Transition
      @before-enter="animateBeforeEnter"
      @enter="animateWhenEnter"
      @before-leave="animateBeforeLeave"
      @leave="animateWhenLeave"
    >
      <div v-if="open" class="w-fit">
        <slot name="content" />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
defineProps<{ open?: boolean }>();

const animateBeforeEnter = (evt: Element) => {
  const element = evt as HTMLElement;
  element.style.opacity = '0';
  element.style.height = '0';
};

const animateWhenEnter = (evt: Element) => {
  const element = evt as HTMLElement;
  element.style.transition = 'all .25s ease';
  element.style.height = `${element.scrollHeight}px`;
  element.style.opacity = '1';
};

const animateBeforeLeave = (evt: Element) => {
  const element = evt as HTMLElement;
  element.style.height = `${element.scrollHeight}px`;
};

const animateWhenLeave = (evt: Element) => {
  const element = evt as HTMLElement;
  void element.offsetHeight;
  element.style.transition = 'all .25s ease';
  element.style.height = '0';
  element.style.opacity = '0';
};
</script>
