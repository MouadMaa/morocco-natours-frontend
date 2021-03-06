import styled, { css, keyframes } from 'styled-components'

const headingStyles = css`
  color: ${({ theme }) => theme.color.grayLight3};
  text-transform: uppercase;
  backface-visibility: hidden;

  span {
    padding: 1rem 1.5rem;
    line-height: 1;
    box-decoration-break: clone;
    background-color: ${({ theme }) => theme.color.tertiaryLight};
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
  }
`

const moveInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-10rem);
  }
  80% {
    transform: translateX(1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`

const moveInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(10rem);
  }
  80% {
    transform: translateX(-1rem);
  }
  100% {
    opacity: 1;
    transform: translate(0);
  }
`

export const HeadingPrimary = styled.h1`
  font-size: 5rem;
  text-align: center;
  width: 70%;
  margin: 0 auto;
  margin-bottom: 5rem;
  ${headingStyles}

  div:first-child {
    font-size: 6rem;
    font-weight: 400;
    letter-spacing: 3.6rem;
    animation: ${moveInLeft} 1s ease-out;

    @media only screen and (max-width: 37.5em) {
      font-size: 4rem;
      letter-spacing: 0.8rem;
    }
  }

  div:last-child {
    font-size: 2rem;
    font-weight: 600;
    letter-spacing: 1.75rem;
    padding-right: 1.6rem;
    animation: ${moveInRight} 1s ease-out;

    @media only screen and (max-width: 37.5em) {
      font-size: 1.8rem;
      padding: 0;
      letter-spacing: .5rem;
    }
  }
`

export const HeadingSecondary = styled.h2`
  font-size: 2.25rem;
  text-transform: uppercase;
  font-weight: 400;
  background-color: ${({ theme }) => theme.color.tertiaryLight};
  background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
  -webkit-background-clip: text;
  text-shadow: ${({ theme }) => theme.shadowDark};
  background-clip: text;
  color: transparent;
  letter-spacing: 0.1rem;
  line-height: 1.3;
  display: inline-block;

  > div {
    margin-top: 0.2rem;
    height: 0.25rem;
    width: 105%;
    transform: translateX(-2%);
    background-color: ${({ theme }) => theme.color.tertiaryLight};
    background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) => theme.color.primaryLight} 70%);
  }
`

export const HeadingTertiary = styled.h3`
  font-size: 1.4rem;
  font-weight: 400;
  text-align: right;
  position: absolute;
  bottom: 1rem;
  right: 2rem;
  width: 70%;
  z-index: 10;
  ${headingStyles}
`
