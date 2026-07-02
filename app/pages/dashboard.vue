<template>
  <section class="bg-gray-50 dark:bg-white/5 rounded-2xl grid grid-cols-4 gap-3.5 p-2 mt-3 mb-5">
    <div
      class="bg-white dark:bg-black rounded-2xl p-5 flex flex-col gap-2.5 border border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-bg-primary dark:text-white">12</h1>
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1.5 mt-1">
          <p class="text-black dark:text-gray-100 text-sm leading-[100%]">Total Users</p>
          <span
            class="text-gray-400 dark:text-gray-400 text-[11px] bg-gray-100 dark:bg-white/15 py-1 pb-1.5 px-1.5 w-fit rounded-sm leading-[100%]"
          >
            System properties
          </span>
        </div>
        <div class="p-2 bg-blue-600/5 dark:bg-blue-600/30 rounded-xl">
          <IconUser class="size-5! text-gray-400 dark:text-gray-200" />
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-black rounded-2xl p-5 flex flex-col gap-2.5 border border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-bg-primary dark:text-white">188</h1>
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1.5 mt-1">
          <p class="text-black dark:text-gray-100 text-sm leading-[100%]">Total Staffs</p>
          <span
            class="text-gray-400 dark:text-gray-400 text-[11px] bg-gray-100 dark:bg-white/15 py-1 pb-1.5 px-1.5 w-fit rounded-sm leading-[100%]"
          >
            Across departments
          </span>
        </div>
        <div class="p-2 bg-blue-600/5 dark:bg-blue-600/30 rounded-xl">
          <IconEmployee class="size-5! text-gray-400 dark:text-gray-200" />
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-black rounded-2xl p-5 flex flex-col gap-2.5 border border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-bg-primary dark:text-white">$188,000</h1>
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1.5 mt-1">
          <p class="text-black dark:text-gray-100 text-sm leading-[100%]">Total Balance</p>
          <span
            class="text-gray-400 dark:text-gray-400 text-[11px] bg-gray-100 dark:bg-white/15 py-1 pb-1.5 px-1.5 w-fit rounded-sm leading-[100%]"
          >
            Composite branches
          </span>
        </div>
        <div class="p-2 bg-blue-600/5 dark:bg-blue-600/30 rounded-xl">
          <IconBalance class="size-5! text-gray-400 dark:text-gray-200" filled />
        </div>
      </div>
    </div>

    <div
      class="bg-white dark:bg-black rounded-2xl p-5 flex flex-col gap-2.5 border border-gray-200 dark:border-gray-700"
    >
      <h1 class="text-bg-primary dark:text-white">7</h1>
      <div class="flex items-center justify-between">
        <div class="flex flex-col gap-1.5 mt-1">
          <p class="text-black dark:text-gray-100 text-sm leading-[100%]">Total Branches</p>
          <span
            class="text-gray-400 dark:text-gray-400 text-[11px] bg-gray-100 dark:bg-white/15 py-1 pb-1.5 px-1.5 w-fit rounded-sm leading-[100%]"
          >
            Domistrics and international
          </span>
        </div>
        <div class="p-2 bg-blue-600/5 dark:bg-blue-600/30 rounded-xl">
          <IconBranches class="size-5! text-gray-400 dark:text-gray-200" filled />
        </div>
      </div>
    </div>
  </section>

  <section class="flex flex-col gap-2">
    <h4 class="text-bg-primary dark:text-gray-100 text-lg">Monthly Insignts</h4>
    <div class="flex items-center gap-3">
      <div
        class="shrink-0 grow max-w-1/2 border border-gray-200 dark:border-gray-700 bg-white dark:bg-black p-3 rounded-xl"
      >
        <LineChartDemo />
      </div>
      <div
        class="shrink-0 grow bg-white border border-gray-200 dark:border-gray-700 dark:bg-black p-3 rounded-xl"
      >
        <AreaChartDemo />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AreaChartDemo from '~/components/infographic/AreaChartDemo.vue';
import LineChartDemo from '~/components/infographic/LineChartDemo.vue';

import IconUser from '~/assets/icons/user.svg';
import IconBalance from '~/assets/icons/balance.svg';
import IconBranches from '~/assets/icons/branches.svg';
import IconEmployee from '~/assets/icons/employee.svg';

definePageMeta({
  layout: 'default',
});
</script>
