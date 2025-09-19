import Intern from '@assets/fonts/Inter_28pt-Regular.ttf';
import background from '@assets/icons/background.png';
import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${({ theme }) => css`
    @font-face {
      font-family: 'Intern';
      src: url(${Intern}) format('truetype');
      font-weight: ${theme.fontWeight.xs};
      font-style: normal;
      font-display: swap;
    }

    *,
    *::before,
    *::after {
      box-sizing: border-box;
      font-family: 'Intern', sans-serif;
      transition: all 0.2s ease-in-out;
      color: ${theme.colors.black};
    }

    html {
      scroll-behavior: smooth;
      font-size: ${theme.fontSizes.xxs};
    }

    body {
      font-family: 'Intern', sans-serif;
      background-image: url(${background});
      font-size: ${theme.fontSizes.xl};
      background-color: ${theme.colors.white};
      color: ${theme.colors.black};
      min-height: ${theme.sizes.full};
      overflow-x: hidden;
      padding: ${theme.paddings.null};
      margin: ${theme.margins.null};
      transition:
        background-color 0.3s ease,
        color 0.3s ease;
    }

    main {
      width: ${theme.sizes.full};
    }

    p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    ul,
    li {
      margin: ${theme.margins.null};
      padding: ${theme.paddings.null};
    }

    ul,
    ol {
      list-style: none;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    button {
      background-color: black;
      color: white;
      border: none;
      font-size: ${theme.fontSizes.xl};
      cursor: pointer;
      font-family: inherit;
      padding: ${theme.paddings.null};
      margin: ${theme.margins.null};
    }

    input,
    textarea {
      font-family: inherit;
      background: none;
      color: inherit;
    }

    img {
      max-width: ${theme.sizes.full};
      display: block;
    }

    #root {
      display: flex;
      min-height: ${theme.sizes.full};
      flex-direction: column;
      padding: ${theme.paddings.null};
    }
  `}
`;
