import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Twitter = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M7.54752 21.7507C16.6042 21.7507 21.5578 14.2473 21.5578 7.74046C21.5578 7.52734 21.5578 7.31518 21.5434 7.10398C22.507 6.40693 23.3389 5.54386 24 4.55518C23.1014 4.95358 22.148 5.21473 21.1718 5.3299C22.1998 4.71459 22.9692 3.74668 23.3366 2.60638C22.3701 3.17999 21.3126 3.58421 20.2099 3.80158C19.4675 3.01216 18.4856 2.48942 17.4162 2.31426C16.3468 2.13911 15.2494 2.32129 14.294 2.83263C13.3385 3.34397 12.5782 4.15595 12.1307 5.14293C11.6833 6.1299 11.5735 7.23684 11.8186 8.29246C9.86089 8.19426 7.94576 7.68549 6.19745 6.79918C4.44915 5.91288 2.90676 4.66884 1.6704 3.14782C1.04073 4.23181 0.847872 5.51505 1.1311 6.73624C1.41433 7.95744 2.15234 9.02477 3.19488 9.72094C2.41123 9.69798 1.64465 9.48657 0.96 9.10462V9.16702C0.960311 10.3039 1.35385 11.4056 2.07387 12.2854C2.79389 13.1652 3.79606 13.7688 4.9104 13.9939C4.18548 14.1916 3.42487 14.2205 2.68704 14.0784C3.00181 15.0567 3.61443 15.9122 4.43924 16.5253C5.26405 17.1384 6.25983 17.4785 7.28736 17.4979C6.26644 18.3004 5.09731 18.8937 3.84687 19.2439C2.59643 19.5941 1.28921 19.6943 0 19.5389C2.25183 20.9839 4.87192 21.7504 7.54752 21.7469"
      fill="#1DA1F2"
    />
  </Icon>
);

export default Twitter;
