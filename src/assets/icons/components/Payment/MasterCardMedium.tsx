import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const MasterCardMedium = (props: Props) => (
  <Icon viewBox="0 0 34 24" {...props}>
    <path
      d="M0 6C0 2.68629 2.68629 0 6 0H40C43.3137 0 46 2.68629 46 6V26C46 29.3137 43.3137 32 40 32H6C2.68629 32 0 29.3137 0 26V6Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.9053 22.4392C21.3266 23.77 19.2787 24.5733 17.0409 24.5733C12.0478 24.5733 8 20.5737 8 15.64C8 10.7062 12.0478 6.70662 17.0409 6.70662C19.2787 6.70662 21.3266 7.50995 22.9053 8.84068C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z"
      fill="#ED0006"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9173 24.8492 10.4792 22.9053 8.84067C24.484 7.50995 26.5319 6.70662 28.7697 6.70662C33.7628 6.70662 37.8106 10.7062 37.8106 15.64C37.8106 20.5737 33.7628 24.5733 28.7697 24.5733C26.5319 24.5733 24.484 23.77 22.9053 22.4392Z"
      fill="#F9A000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.9053 22.4392C24.8492 20.8007 26.0818 18.3626 26.0818 15.64C26.0818 12.9174 24.8492 10.4793 22.9053 8.84071C20.9614 10.4793 19.7288 12.9174 19.7288 15.64C19.7288 18.3626 20.9614 20.8007 22.9053 22.4392Z"
      fill="#FF5E00"
    />
    <path
      d="M6 1H40V-1H6V1ZM45 6V26H47V6H45ZM40 31H6V33H40V31ZM1 26V6H-1V26H1ZM6 31C3.23858 31 1 28.7614 1 26H-1C-1 29.866 2.13401 33 6 33V31ZM45 26C45 28.7614 42.7614 31 40 31V33C43.866 33 47 29.866 47 26H45ZM40 1C42.7614 1 45 3.23858 45 6H47C47 2.13401 43.866 -1 40 -1V1ZM6 -1C2.13401 -1 -1 2.13401 -1 6H1C1 3.23858 3.23858 1 6 1V-1Z"
      fill="#F3F2F2"
    />
  </Icon>
);

export default MasterCardMedium;
