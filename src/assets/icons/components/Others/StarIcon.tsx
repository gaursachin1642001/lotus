import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}

export const StarIcon = (props: Props) => (
  <Icon viewBox="0 0 17 16" {...props}>
    <path
      d="M15.2321 7.15251C13.5312 7.15251 11.9338 6.49635 10.7337 5.30474C9.53399 4.11378 8.87346 2.52751 8.87346 0.838211C8.87346 0.37523 8.49802 0 8.03525 0C7.57227 0 7.19704 0.37523 7.19704 0.838211C7.19704 2.52751 6.5363 4.11378 5.33661 5.30474C4.13648 6.49635 2.53908 7.15251 0.838211 7.15251C0.37523 7.15251 0 7.52774 0 7.99072C0 8.4537 0.37523 8.82893 0.838211 8.82893C4.34429 8.82893 7.19704 11.6699 7.19704 15.1618C7.19704 15.6248 7.57227 16 8.03525 16C8.49802 16 8.87346 15.6248 8.87346 15.1618C8.87346 11.6699 11.726 8.82893 15.2321 8.82893C15.6951 8.82893 16.0703 8.4537 16.0703 7.99072C16.0703 7.52774 15.6951 7.15251 15.2321 7.15251ZM8.03525 11.6018C7.25685 10.0448 5.98447 8.77414 4.42418 7.99531C5.18927 7.61593 5.89563 7.11213 6.51774 6.49439C7.14269 5.87402 7.65195 5.16897 8.03504 4.40497C8.41834 5.16897 8.9276 5.87402 9.55233 6.49439C10.1744 7.11213 10.881 7.61593 11.6459 7.99531C10.0858 8.77414 8.81344 10.0448 8.03525 11.6018Z"
      fill="currentColor"
    />
  </Icon>
);

export default StarIcon;
