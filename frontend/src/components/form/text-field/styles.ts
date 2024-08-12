import { Field } from 'formik';
import styled from 'styled-components';

export const StyledFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: ${({ theme }): string => theme.spacing(1)};
`;

export const StyledFieldWrapper = styled.div`
  position: relative;
  width: 100%;
  border-radius: ${({ theme }): string => theme.radius(1)};
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background-color: ${({ theme }): string => theme.colors.primary};
    transform: scale(0);
    transform-origin: 100% 0;
    transition: ${({ theme }): string => theme.transition('transform')};
  }

  &:focus-within {
    &::before {
      transform: scale(1);
    }
  }
`;

export const StyledTextField = styled(Field)`
  padding: ${({ theme }): string => theme.spacing(0.5, 2)};
  width: 100%;
  outline: none;
  border: 1px solid transparent;
  border-radius: ${({ theme }): string => theme.radius(1)};
  background-color: ${({ theme }): string => theme.colors.background};
  cursor: pointer;
  transition: ${({ theme }): string => theme.transition('border-color')};

  &:hover {
    border-color: ${({ theme }): string => theme.colors.secondary};
  }

  &:focus {
    border-color: ${({ theme }): string => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }): string => theme.colors.text};
    opacity: 0.3;
    font-size: ${({ theme }): string => theme.font.size.label};
  }
`;
