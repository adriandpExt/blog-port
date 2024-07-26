export interface DrawerMenuProps {
  menuLabel: string[];
  open: boolean;
  onClose: () => void;
}

export interface AppbarProps {
  menuLabel: string[];
}

export interface FloatingListItemButtonProps {
  activeSection: string;
  text: string;
}
