import { GlobalStyle } from "./theme/GlobalAppStyle";

import * as S from "./App.styles";

import { Header } from "./components/Header/Header";
import { TestimonialContainer } from "./components/Testimonials/TestimonialContainer/TestimonialContainer";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <S.HeroContainer>
        <span>😃</span>
        <h1>Testimonials I've left</h1>
        <img
          src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNzggMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIgMTMgOC40LTlMMjYgMTYgMzkuMiA0LjkgNTMgMTZsOS4zLTEwLjJMNzYuNCAxNiIgc3Ryb2tlPSIjMDAwIiBzdHJva2Utd2lkdGg9IjMiLz48L3N2Zz4="
          alt="divider"
          height={90}
          width={110}
        />
      </S.HeroContainer>
      <S.TestimonialsContainer>
        <TestimonialContainer />
      </S.TestimonialsContainer>
    </>
  );
}

export default App;
