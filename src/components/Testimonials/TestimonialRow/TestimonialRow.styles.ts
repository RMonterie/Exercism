import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const TestimonialListItemContainer = styled.li`
  border-bottom: 1px solid #c8d5ef;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
`;

export const RowLeftSection = styled.div`
  display: flex;
  align-items: center;
  min-width: 40%;
`;

export const TrackIconImage = styled.img`
  width: 30px;
  height: 32px;
  margin-left: 10px;
  margin-right: 16px;
`;

export const MentorImage = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const HandleTrackGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Content = styled.div`
  min-width: 40%;
`;

export const Date = styled.div`
  min-width: 15%;
`;

export const Chevron = styled(FontAwesomeIcon)`
  min-width: 5%;
`;
