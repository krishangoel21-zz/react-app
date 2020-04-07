import { css } from "styled-components";

export const clearFix = css`
  &:after {
    content: '';
    display: table;
    clear: both;
  }
`;