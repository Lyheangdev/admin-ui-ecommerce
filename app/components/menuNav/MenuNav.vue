<template>
  <div class="relative flex flex-col gap-4 pt-4">
    <MenuNavItem
      v-for="menuItem in menuSection"
      :key="menuItem.label"
      v-bind="menuItem"
      :active-sub-menu="currentSubMenu"
      @sub-menu-open="(arg) => (currentSubMenu = arg)"
    />
  </div>
</template>

<script setup lang="ts">
import IconHome from '~/assets/icons/home.svg';
import IconEmployee from '~/assets/icons/multi-user.svg';
import IconAttendance from '~/assets/icons/attendance.svg';
import IconDoc from '~/assets/icons/doc.svg';
import IconUser from '~/assets/icons/user.svg';
import IconKeys from '~/assets/icons/keys.svg';
import IconSetting from '~/assets/icons/setting-config.svg';

import type { MenuSectionType } from '~/types/menu.type';

const currentSubMenu = ref<string | null>(null);

const menuSection: MenuSectionType[] = [
  {
    label: 'overview',
    items: [
      { icon: IconHome, label: 'Dashboard', link: '/dashboard', children: [] },
      {
        icon: IconEmployee,
        label: 'Employees',
        link: '/employees',
        children: [
          { label: 'manage employees', link: '/manage' },
          { label: 'analyze report', link: '/analyze-report' },
          { label: 'coc employess', link: '/coc-blacklist' },
        ],
      },
      { icon: IconAttendance, label: 'Attendance', link: '/attendance', children: [] },
      { icon: IconDoc, label: 'Leave Request', link: '/leave-request', children: [] },
    ],
  },
  {
    label: 'system management',
    items: [
      { icon: IconUser, label: 'User Control', link: '/user-control', children: [] },
      {
        icon: IconKeys,
        label: 'Role & Permission',
        link: '/role-permission',
        children: [
          { label: 'manage role', link: '/manage-role' },
          { label: 'manage permission', link: '/manage-permission' },
        ],
      },
      { icon: IconSetting, label: 'System Configuration', link: '/configuration', children: [] },
    ],
  },
];
</script>
