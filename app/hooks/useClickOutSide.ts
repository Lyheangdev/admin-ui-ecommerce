import type { TemplateRef } from 'vue';

export const useClickOutSide = (
  passTarget: TemplateRef<HTMLElement | null>,
  callback: () => void
) => {
  const handleClick = (evt: MouseEvent) => {
    const target = evt.target as unknown as Node;
    if (passTarget && passTarget.value?.contains(target)) return;
    callback();
  };

  onMounted(() => {
    window.addEventListener('click', handleClick);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', handleClick);
  });
};
