<template>
  <NuxtLayout name="default">
    <div class="flex flex-col justify-center items-center h-full m-auto">
      <div class="p-2.5 bg-black/5 dark:bg-white/10 rounded-full w-fit">
        <IconBuild class="size-10! text-gray-800 dark:text-gray-100" />
      </div>
      <h4 class="text-gray-800 dark:text-gray-100 font-semibold leading-loose">
        Feature is under develop
      </h4>
      <p class="text-gray-400 text-sm mt-1">Upcomming realease</p>
    </div>
  </NuxtLayout>
</template>

<script setup lang="ts">
import IconBuild from '~/assets/icons/build.svg';

definePageMeta({
  layout: 'default',
});
</script>
