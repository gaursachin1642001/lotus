import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const ZeroFeeIcon = (props: Props) => (
  <Icon viewBox="5 5 46 46" {...props}>
    <path
      d="M11.6668 7.5H20.0002L19.1668 9.16667H16.4502C16.8502 9.65 17.1502 10.2167 17.3252 10.8333H20.0002L19.1668 12.5H17.5002C17.2918 14.6417 15.6168 16.3583 13.5002 16.6333V16.6667H12.9168L17.9168 22.5H15.8335L10.8335 16.6667V15H12.9168C14.3835 15 15.6002 13.9167 15.8002 12.5H10.8335L11.6668 10.8333H15.5502C15.0835 9.85 14.0835 9.16667 12.9168 9.16667H10.8335L11.6668 7.5Z"
      fill="#6E71CC"
    />
    <path
      d="M39.24 29.4927C39.24 33.0302 38.3676 35.7492 36.6228 37.6495C34.8779 39.5498 32.377 40.5 29.12 40.5C25.863 40.5 23.3621 39.5498 21.6172 37.6495C19.8724 35.7492 19 33.0205 19 29.4635C19 25.9064 19.8724 23.1924 21.6172 21.3213C23.3718 19.4404 25.8824 18.5 29.1491 18.5C32.4158 18.5 34.9119 19.4453 36.6373 21.3359C38.3724 23.2265 39.24 25.9454 39.24 29.4927ZM23.7256 29.4927C23.7256 31.8803 24.1763 33.6783 25.0778 34.8867C25.9793 36.0951 27.3267 36.6993 29.12 36.6993C32.7163 36.6993 34.5144 34.2971 34.5144 29.4927C34.5144 24.6785 32.726 22.2714 29.1491 22.2714C27.3558 22.2714 26.0035 22.8805 25.0924 24.0987C24.1812 25.3071 23.7256 27.1051 23.7256 29.4927Z"
      fill="currentColor"
    />
  </Icon>
);

export default ZeroFeeIcon;