import { Icon } from '@chakra-ui/icons';
import React from 'react';
interface Props {
  color?: string;
  boxSize?: string;
}
export const Reddit = (props: Props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <path
      d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
      fill="#FF4500"
    />
    <path
      d="M20 12C20 11.0316 19.214 10.2456 18.2456 10.2456C17.7684 10.2456 17.3474 10.428 17.0386 10.7368C15.8456 9.88068 14.1895 9.31927 12.3649 9.2491L13.1649 5.50173L15.7614 6.0491C15.7895 6.70875 16.3368 7.24208 17.0105 7.24208C17.6983 7.24208 18.2597 6.68068 18.2597 5.99296C18.2597 5.30524 17.6983 4.74384 17.0105 4.74384C16.5193 4.74384 16.0983 5.02454 15.9018 5.44559L12.9965 4.82805C12.9123 4.81401 12.8281 4.82805 12.7579 4.87015C12.6877 4.91226 12.6456 4.98243 12.6176 5.06664L11.7333 9.2491C9.86667 9.30524 8.1965 9.85261 6.98948 10.7368C6.68071 10.4421 6.24562 10.2456 5.78246 10.2456C4.81404 10.2456 4.02808 11.0316 4.02808 12C4.02808 12.7158 4.44913 13.3193 5.06667 13.6C5.0386 13.7684 5.02457 13.9509 5.02457 14.1333C5.02457 16.828 8.15439 19.0035 12.0281 19.0035C15.9018 19.0035 19.0316 16.828 19.0316 14.1333C19.0316 13.9509 19.0175 13.7824 18.9895 13.614C19.5649 13.3333 20 12.7158 20 12ZM8.00001 13.2491C8.00001 12.5614 8.56141 12 9.24913 12C9.93685 12 10.4983 12.5614 10.4983 13.2491C10.4983 13.9368 9.93685 14.4982 9.24913 14.4982C8.56141 14.4982 8.00001 13.9368 8.00001 13.2491ZM14.9754 16.5473C14.1193 17.4035 12.4912 17.4596 12.014 17.4596C11.5368 17.4596 9.89474 17.3895 9.05264 16.5473C8.92632 16.421 8.92632 16.2105 9.05264 16.0842C9.17895 15.9579 9.38948 15.9579 9.5158 16.0842C10.0491 16.6175 11.2 16.814 12.0281 16.814C12.8561 16.814 13.993 16.6175 14.5404 16.0842C14.6667 15.9579 14.8772 15.9579 15.0035 16.0842C15.1018 16.2245 15.1018 16.421 14.9754 16.5473ZM14.7509 14.4982C14.0632 14.4982 13.5018 13.9368 13.5018 13.2491C13.5018 12.5614 14.0632 12 14.7509 12C15.4386 12 16 12.5614 16 13.2491C16 13.9368 15.4386 14.4982 14.7509 14.4982Z"
      fill="white"
    />
  </Icon>
);

export default Reddit;