import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const BookIcon = (props: Props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      d="M18 0L13 5V16L18 11.5V0ZM20 4V17.5C18.9 17.15 17.7 17 16.5 17C14.8 17 12.35 17.65 11 18.5V5C9.55 3.9 7.45 3.5 5.5 3.5C3.55 3.5 1.45 3.9 0 5V19.65C0 19.9 0.25 20.15 0.5 20.15C0.6 20.15 0.65 20.1 0.75 20.1C2.1 19.45 4.05 19 5.5 19C7.45 19 9.55 19.4 11 20.5C12.35 19.65 14.8 19 16.5 19C18.15 19 19.85 19.3 21.25 20.05C21.35 20.1 21.4 20.1 21.5 20.1C21.75 20.1 22 19.85 22 19.6V5C21.4 4.55 20.75 4.25 20 4ZM9 17.41C7.75 17.09 6.5 17 5.5 17C4.44 17 3.18 17.19 2 17.5V6.13C2.91 5.73 4.14 5.5 5.5 5.5C6.86 5.5 8.09 5.73 9 6.13V17.41Z"
      fill="currentColor"
    />
  </Icon>
);

export default BookIcon;
