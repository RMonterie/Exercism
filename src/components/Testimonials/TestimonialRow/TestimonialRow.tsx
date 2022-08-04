import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

import { Exercise } from "../../../types/Exercise";
import { Mentor } from "../../../types/Mentor";
import { Track } from "../../../types/Track";

import { truncateDescription } from "../../../utils/truncateDescription";

import * as S from "./TestimonialRow.styles";

interface Props {
  content: string;
  createdAt: Date;
  exercise: Exercise;
  mentor: Mentor;
  track: Track;
}

export const TestimonialRow: React.FC<Props> = ({
  content,
  createdAt,
  exercise,
  mentor,
  track,
}) => {
  return (
    <S.TestimonialListItemContainer>
      <S.RowLeftSection>
        <S.TrackIconImage src={track?.icon_url} alt={track?.title} />
        <S.MentorImage src={mentor.avatar_url} alt={mentor.handle} />
        <S.HandleTrackGroup>
          <span>
            <b>{mentor.handle}</b>
          </span>
          <span>{`on ${exercise.title} in ${track.title}`}</span>
        </S.HandleTrackGroup>
      </S.RowLeftSection>
      <S.Content>{truncateDescription(content, 35)}</S.Content>
      <S.Date>{createdAt.toString()}</S.Date>
      <S.Chevron icon={faChevronRight} />
    </S.TestimonialListItemContainer>
  );
};
