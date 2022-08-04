import { useEffect } from "react";
import axios from "axios";

import * as S from "./TrackDropdown.styles";

interface TrackDropdownProps {
  isOpen: boolean;
  tracks: string[];
  selectTrack: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TrackDropdown: React.FC<TrackDropdownProps> = ({
  isOpen,
  tracks,
  selectTrack,
}) => {
  useEffect(() => {
    const getTracks = async () => {
      const fetchedTracks = await axios.get(
        "https://exercism.org/api/v2/tracks"
      );
      console.log(fetchedTracks);
    };

    getTracks();
  }, []);

  const formatTrackName = (trackName: string): string => {
    switch (trackName) {
      case "csharp":
        return "C#";
      case "fsharp":
        return "F#";
      case "cpp":
        return "C++";
      default:
        return trackName;
    }
  };

  return (
    <>
      {isOpen && (
        <S.TrackDropdownContainer>
          <ul>
            {tracks.map((track, index) => (
              <S.DropdownItem key={index}>
                <input
                  type="radio"
                  name={track}
                  value={track}
                  onChange={selectTrack}
                />
                <S.LabelContainer>
                  <S.TrackIconImage
                    src={`https://dg8krxphbh767.cloudfront.net/tracks/${track}.svg`}
                    alt=""
                  />
                  <S.TrackLabel>{formatTrackName(track)}</S.TrackLabel>
                </S.LabelContainer>
              </S.DropdownItem>
            ))}
          </ul>
        </S.TrackDropdownContainer>
      )}
    </>
  );
};
