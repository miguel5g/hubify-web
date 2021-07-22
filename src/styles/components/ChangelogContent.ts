import styled from 'styled-components';
import { transparentize } from 'polished';

export const ChangelogContentContainer = styled.div`
  display: flex;
  flex: 1;

  ul {
    display: flex;
    flex-direction: column;

    li {
      display: grid;
      grid-template-columns: 16px auto;
      grid-gap: 8px;

      list-style: none;

      .marker {
        position: relative;

        &::before {
          content: '';

          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;

          width: 2px;

          background: ${({ theme }) => theme.colors.blueLight};
          box-shadow: 0 1px 5px 0.1px
            ${({ theme }) => transparentize(0.54, theme.colors.blueLight)};

          transform: translateX(-50%);
        }

        div {
          &::before {
            content: '';

            position: absolute;
            top: 50%;
            left: 50%;

            width: 4px;
            height: 4px;

            background: ${({ theme }) => theme.colors.blueLight};
            border: 4px solid ${({ theme }) => theme.colors.primary200};
            border-radius: 50%;

            transform: translateX(-50%) translateY(-50%);
          }

          &::after {
            content: '';

            position: absolute;
            top: 50%;
            left: 50%;

            width: 12px;
            height: 12px;

            background: none;
            border: 2px solid ${({ theme }) => theme.colors.blueLight};
            border-radius: 50%;
            box-shadow: 0 1px 5px 0.1px
              ${({ theme }) => transparentize(0.54, theme.colors.blueLight)};

            transform: translateX(-50%) translateY(-50%);
          }
        }
      }

      .content {
        display: flex;
        flex-direction: column;

        margin: 8px 0;
        padding: 8px;

        background: ${({ theme }) => theme.colors.primary100};
        border-radius: 4px;
        border: 1px solid ${({ theme }) => theme.colors.primary300};

        header {
          display: flex;
          align-items: center;

          margin-bottom: 8px;

          img {
            object-fit: cover;
            border-radius: 50%;
          }

          > div:nth-child(2) {
            display: flex;
            flex-direction: column;

            margin-left: 8px;

            strong {
              ${({ theme }) => theme.typography.bodyHeavy}
            }

            span {
              color: ${({ theme }) => theme.colors.primary700};
              ${({ theme }) => theme.typography.bodyLight}
            }
          }
        }

        > strong {
          margin-bottom: 4px;

          ${({ theme }) => theme.typography.titleHeavy};
        }

        p {
          color: ${({ theme }) => theme.colors.primary700};
          ${({ theme }) => theme.typography.bodyLight};
        }
      }

      &:first-child {
        .marker::before {
          top: 50%;

          height: 50%;
        }
      }

      &:last-child {
        .marker::before {
          height: 50%;
        }
      }
    }
  }

  @media (min-width: 840px) {
    ul li {
      grid-gap: 16px;

      .content {
        padding: 16px;
      }
    }
  }
`;
