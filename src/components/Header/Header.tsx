import * as S from "./Header.styles";

export const Header = () => {
  return (
    <S.NavBar>
      <S.NavBarLeftSection>
        <img
          src="https://d24y9kuxp2d7l2.cloudfront.net/assets/icons/exercism-with-logo-black-b427c06c6a068ba9f391734115e4d22dfa876d1d.svg"
          alt="exercism"
        />
        <S.LinkList>
          <S.Link>⏱Dashboard</S.Link>
          <S.Link>🛤Tracks</S.Link>
          <S.Link>💬Mentoring</S.Link>
          <S.Link>🧱Contribute</S.Link>
        </S.LinkList>
      </S.NavBarLeftSection>
      <div>
        <S.Icon>😀</S.Icon>
        <S.Icon>🔶</S.Icon>
        <S.Icon>🔔</S.Icon>
        <S.PillBorder>
          <S.Pill>🥇 300K</S.Pill>
        </S.PillBorder>
        <S.Icon>🧑</S.Icon>
        <S.Icon>⚙</S.Icon>
      </div>
    </S.NavBar>
  );
};
