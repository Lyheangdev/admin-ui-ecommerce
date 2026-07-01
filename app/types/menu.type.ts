type MenuItemType = {
  icon?: any;
  label: string;
  link: string;
  children?: MenuItemType[];
};

export type MenuSectionType = {
  label: string;
  items: MenuItemType[];
};
