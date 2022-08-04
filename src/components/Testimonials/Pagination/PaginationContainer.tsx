import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { Pagination } from "../../../types/Pagination";

import * as S from "./PaginationContainer.styles";
import React from "react";

interface Props {
  pages: Partial<Pagination>;
}

export const PaginationContainer: React.FC<Props> = ({ pages }) => {
  return (
    <S.PaginationContainer>
      <S.PrevButton>
        <FontAwesomeIcon icon={faArrowLeft} />
        Prev
      </S.PrevButton>
      <div>
        <S.NumberButton>1</S.NumberButton>
        <S.NumberButton>2</S.NumberButton>
        <S.NumberButton>3</S.NumberButton>
        ...
        <S.NumberButton>
          {pages.total_pages !== undefined && pages.total_pages - 2}
        </S.NumberButton>
        <S.NumberButton>
          {pages.total_pages !== undefined && pages.total_pages - 1}
        </S.NumberButton>
        <S.NumberButton>{pages.total_pages}</S.NumberButton>
      </div>
      <S.NextButton>
        Next
        <FontAwesomeIcon icon={faArrowRight} />
      </S.NextButton>
    </S.PaginationContainer>
  );
};
