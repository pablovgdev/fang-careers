import { css, Global } from '@emotion/react';
import { AppProps } from 'next/app';
import React from 'react';

const globalStyles = css`
  @import url("https://fonts.googleapis.com/css2?family=Fira+Sans:wght@300;400;500;700&display=swap");
  html, body {
    background-color: #F6F6F6;
  }
  * {
    padding: 0;
    margin: 0;
    font-family: 'Fira Sans', monospace;
    line-height: 2em;
    /* font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif; */
  }
  a {
    color: inherit;
    text-decoration: underline;
  }
  * {
    box-sizing: border-box;
  }
  @media (min-width: 576px) {
    /* mobile */
  }
  @media (min-width: 769px) {
    /* tablet */
  }
  @media (min-width: 992px) {
    /* tablet */
  }
  @media (min-width: 1200px) {
    /* laptop */
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Global styles={globalStyles} />
      <Component {...pageProps} />
    </>
  )
};