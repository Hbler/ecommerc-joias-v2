import styled from "styled-components";
import { mq } from "../../styles/global";

export const HomeCardNode = styled.article`
  width: 75vw;
  max-width: 360px;

  scroll-snap-align: center;

  position: relative;

  ${mq[1]} {
    width: 35vw;
  }

  ${mq[2]} {
    width: 29vw;
  }

  ${mq[3]} {
    width: 25vw;
  }

  figure {
    height: 60vh;

    display: flex;
    justify-content: center;

    overflow: hidden;

    border-radius: 4px;
    background-color: ${({ theme: { colors } }) => colors.secondary};
    position: relative;

    img {
      width: fit-content;
      height: 90%;

      cursor: pointer;
    }

    div {
      bottom: 0;
      width: 100%;
      padding: 0.5rem 0.8rem;

      display: flex;
      flex-wrap: wrap;
      column-gap: 0.8rem;

      background-color: ${({ theme: { colors } }) => colors.bgAlpha};
      backdrop-filter: blur(3px);
      position: absolute;

      p {
        width: 100%;
        font-size: 0.8rem;

        cursor: pointer;

        :hover {
          color: ${({ theme: { colors } }) => colors.highlight};
        }
      }

      small {
        cursor: pointer;
        :hover {
          color: ${({ theme: { colors } }) => colors.highlight};
        }
      }

      button {
        right: 0.8rem;
        top: 25%;

        font-size: 1.5rem;
        color: ${({ theme: { colors } }) => colors.text};

        background-color: transparent;
        position: absolute;

        :hover {
          color: ${({ theme: { colors } }) => colors.highlight};
        }
      }
    }
  }
`;
