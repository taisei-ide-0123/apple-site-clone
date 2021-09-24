import styled from 'styled-components';
import { Box } from './Box.styled';

export const GuideContainer = styled(Box)`
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f5f5f7;
`;

export const GuideText = styled.div`
  display: inline-block;
  width: min(66%, 600px);
  padding: 12px 0;
  color: #1d1d1f;
  line-height: 1.47;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: -0.022em;
  text-align: center;
  font-family: 'SF Pro Text';
  @media (max-width: 768px) {
    width: 86%;
  }
`;
