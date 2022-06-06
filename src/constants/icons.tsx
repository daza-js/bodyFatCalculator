import { FaBars as MenuIcon } from "react-icons/fa";
type PropsNameIcon = "MenuIcon";

type PropsLibraryIcons = {
  name?: PropsNameIcon;
  size?: string | number;
  className?: string;
  style?: React.CSSProperties;
};

/**
 * It takes a name prop and returns the corresponding icon component.
 * @param {PropsLibraryIcons}  - PropsLibraryIcons - this is the type of the props that are passed to
 * the component.
 * @returns The IconsLibrary is returning the MenuIcon component.
 */
export const IconsLibrary = ({
  name = "MenuIcon",
  ...props
}: PropsLibraryIcons) => {
  const Icons = {
    MenuIcon: <MenuIcon {...props} />,
  };
  return Icons[name] || <MenuIcon {...props} />;
};
