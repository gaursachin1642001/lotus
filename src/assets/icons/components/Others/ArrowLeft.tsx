import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const ArrowLeft = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M20 11V13H8L13.5 18.5L12.08 19.92L4.16 12L12.08 4.08L13.5 5.5L8 11H20Z"
      fill="currentColor"
    />
  </Icon>
);

export default ArrowLeft;
