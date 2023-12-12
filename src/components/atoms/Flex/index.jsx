import styled from 'styled-components';

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${props => (props.$column ? 'column' : 'row')};
  justify-content: ${props => props.$justifyContent || 'flex-start'};
  align-items: ${props => props.$alignItems || 'stretch'};
  flex-wrap: ${props => (props.$noWrap ? 'nowrap' : 'wrap')};
  gap: ${props => props.$gap || '1rem'};
`;

export const FlexItem = styled.div`
  flex: ${props => props.$flex || ''};
  margin: ${props => props.$margin || '0'};
  padding: ${props => props.$padding || '0'};
  order: ${props => props.$order || '0'};
`;
