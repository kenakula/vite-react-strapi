import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    display: none;
    opacity: 0;
    transform: translateY(10px);
  }
  
  1% {
    display: block;
    opacity: 0;
    transform: translateY(10px);
  }
  
  100% {
    display: block;
    opacity: 1;
    transform: translateY(0);
  }
`;
