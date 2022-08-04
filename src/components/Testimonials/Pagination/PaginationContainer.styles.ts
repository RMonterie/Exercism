import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const PrevButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  background: #e0e0ed;
  color: #76709f;
  font-weight: 500;
  font-size: 14px;
  line-height: 170%;
  border: none;
`;

export const NextButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 0px 1px rgba(203, 201, 217, 0.6);
  font-weight: 500;
  font-size: 14px;
  line-height: 170%;
  color: #5c5589;
  border: none;
`;

export const NumberButton = styled.button`
  border-radius: 5px;
  padding: 8px 16px 8px 16px;
  background: rgba(255, 255, 255, 1);
  background: #ffffff;
  border: 1px solid #d5d8e4;
  margin: 0px 4px;
`;
