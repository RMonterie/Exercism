import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const spinner = keyframes`
0%{
  transform: rotate(0deg);
}
100%{
  transform: rotate(360deg);
}
`;

export const TestimonialRowContainer = styled.div`
  min-width: 1350px;
  border-radius: 8px;
  box-shadow: 0px 4px 42px 0px rgba(79, 114, 205, 0.15);
  margin-bottom: 20px;
`;

export const FiltersContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

export const FiltersLeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const SelectedIconImage = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 8px;
`;

export const OpenDropdownButton = styled(FontAwesomeIcon)`
  cursor: pointer;
  user-select: none;
  margin-right: 10px;
`;

export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 800px;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 10px solid #f3f3f3; /* Light grey */
  border-top: 10px solid #383636; /* Black */
  border-radius: 50%;
  animation: ${spinner} 1.5s linear infinite;
`;
