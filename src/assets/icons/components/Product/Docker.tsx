import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Docker = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle cx="12" cy="12" r="10.5" fill="#1794D4" />
    <path d="M13.5 5.25H12V6.75H13.5V5.25Z" fill="white" />
    <path d="M7.5 7.5H9V9H7.5V7.5Z" fill="white" />
    <path
      d="M4.50116 12.7061C4.62933 14.882 5.9252 18 10.5 18C15.6 18 17.875 14.25 18.375 12.375C19 12.375 20.4 12 21 10.5C20.625 10.125 19.125 10.125 18.375 10.5C18.375 9.90002 18 8.625 17.25 8.25C16.75 8.75 15.975 10.05 16.875 11.25C16.5 12 15.5 12 15 12H5.20717C4.81007 12 4.47781 12.3096 4.50116 12.7061Z"
      fill="white"
    />
    <path d="M6.75 9.75H5.25V11.25H6.75V9.75Z" fill="white" />
    <path d="M7.5 9.75H9V11.25H7.5V9.75Z" fill="white" />
    <path d="M11.25 9.75H9.75V11.25H11.25V9.75Z" fill="white" />
    <path d="M12 9.75H13.5V11.25H12V9.75Z" fill="white" />
    <path d="M15.75 9.75H14.25V11.25H15.75V9.75Z" fill="white" />
    <path d="M11.25 7.5H9.75V9H11.25V7.5Z" fill="white" />
    <path d="M12 7.5H13.5V9H12V7.5Z" fill="white" />
  </Icon>
);

export default Docker;
