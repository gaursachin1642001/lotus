import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const EventIcon = (props: Props) => (
  <Icon viewBox="0 0 20 20" {...props}>
    <path
      d="M16 18H2V7H16V18ZM16 2H15V0H13V2H5V0H3V2H2C0.89 2 0 2.9 0 4V18C0 18.5304 0.210714 19.0391 0.585786 19.4142C0.960859 19.7893 1.46957 20 2 20H16C16.5304 20 17.0391 19.7893 17.4142 19.4142C17.7893 19.0391 18 18.5304 18 18V4C18 3.46957 17.7893 2.96086 17.4142 2.58579C17.0391 2.21071 16.5304 2 16 2ZM13.53 10.06L12.47 9L7.59 13.88L5.47 11.76L4.41 12.82L7.59 16L13.53 10.06Z"
      fill="currentColor"
    />
  </Icon>
);

export default EventIcon;
