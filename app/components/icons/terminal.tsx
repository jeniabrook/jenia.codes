import { Icon, type IconProps } from "../icon";

export function TerminalIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <polyline points="4 17 10 11 4 5"></polyline>
      <line x1="12" y1="19" x2="20" y2="19"></line>
    </Icon>
  );
}
