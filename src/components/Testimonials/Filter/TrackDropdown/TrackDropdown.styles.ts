import styled from "styled-components";

export const TrackDropdownContainer = styled.div`
  position: absolute;
  top: 50px;
  left: 10px;
  max-height: 350px;
  padding: 5px;
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 4px 42px 0px rgba(79, 114, 205, 0.15);
  overflow-y: auto;
`;

export const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 5px;
`;

export const LabelContainer = styled.label`
  display: flex;
  align-items: center;
`;

export const TrackIconImage = styled.img`
  height: 40px;
  width: 40px;
  margin-left: 10px;
  margin-right: 5px;
`;

export const TrackLabel = styled.span`
  text-transform: capitalize;
`;
