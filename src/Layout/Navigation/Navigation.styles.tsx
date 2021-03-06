import styled, { css } from 'styled-components'
import { Link } from 'gatsby'

export const NavigationContainer = styled.div`
	input {
		display: none;

		:checked ~ div {
			transform: scale(100);
		}

		:checked ~ nav {
			opacity: 1;
			pointer-events: all;
			width: 100%;
		}

		:checked + label span {
			background-color: transparent;
		}

		:checked + label span::before {
			top: 0;
			transform: rotate(135deg);
		}

		:checked + label span::after {
			top: 0;
			transform: rotate(-135deg);
		}
	}

	label {
		height: 4rem;
		width: 4rem;
		position: fixed;
		top: 3rem;
		right: 3rem;
		border-radius: 50%;
		text-align: center;
		cursor: pointer;
		box-shadow: ${({ theme }) => theme.shadowLight};
		background-color: ${({ theme }) => theme.color.tertiaryLight};
		background-image: linear-gradient(
			315deg,
			${({ theme }) => theme.color.tertiaryLight} 0%,
			${({ theme }) => theme.color.primaryLight} 70%
		);
		z-index: 7000;
		transition: 0.4s;

		:hover {
			box-shadow: ${({ theme }) => theme.shadowDark};
		}

		span {
			position: relative;
			margin-top: 2rem;
			width: 2.4rem;
			height: 2px;
			background-color: ${({ theme }) => theme.color.grayLight2};
			display: inline-block;

			::before,
			::after {
				width: 2.4rem;
				height: 2px;
				background-color: ${({ theme }) => theme.color.grayLight2};
				display: inline-block;
				content: "";
				position: absolute;
				left: 0;
				transition: all .4s;
			}

			::before {
				top: -6.5px;
			}

			::after {
				top: 6px;
			}
		}

		:hover span::before {
			top: -8px;

			@media only screen and (max-width: 56.25em) {
				top: -6px;
			}
		}

		:hover span::after {
			top: 8px;

			@media only screen and (max-width: 56.25em) {
				top: 6px;
			}
		}

		@media only screen and (max-width: 56.25em) {
			top: 2.4rem;
			right: 2.4rem;
		}

		@media only screen and (max-width: 37.5em) {
			top: 1.8rem;
			right: 1.8rem;
		}
	}

	div {
		height: 4rem;
		width: 4rem;
		border-radius: 50%;
		position: fixed;
		top: 3rem;
		right: 3rem;
		background-color: ${({ theme }) => theme.color.tertiaryLight};
		background-image: linear-gradient(
			315deg,
			${({ theme }) => theme.color.tertiaryLight} 10%,
			${({ theme }) => theme.color.primaryLight} 100%
		);
		transition: 0.8s cubic-bezier(0.86, 0, 0.07, 1);
		z-index: 5000;

		@media only screen and (max-width: 56.25em) {
			top: 2.4rem;
			right: 2.4rem;
		}

		@media only screen and (max-width: 37.5em) {
			top: 1.8rem;
			right: 1.8rem;
		}
	}
`

export const NavigationContentContainer = styled.nav`
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 6000;
	opacity: 0;
	pointer-events: none;
	width: 0;
	transition: 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`

export const NavigationListContainer = styled.ul`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	list-style: none;
	text-align: center;
	width: 100%;
`

export const NavigationItemContainer = styled.li`
	margin: 1rem;

	a {
		:link,
		:visited {
			display: inline-block;
			font-size: 3rem;
			font-weight: 400;
			padding: 1rem 2rem;
			text-decoration: none;
			text-transform: uppercase;
			color: ${({ theme }) => theme.color.grayLight1};
			background-image: linear-gradient(
				120deg,
				transparent 0%,
				transparent 50%,
				${({ theme }) => theme.color.grayLight1} 50%
			);
			background-size: 220%;
			transition: 0.4s;
		}

		:link span,
		:visited span {
			margin-right: 1.5rem;
			display: inline-block;
		}

		:hover,
		:active {
			background-position: 100%;
			color: ${({ theme }) => theme.color.primaryLight};
			transform: translateX(1rem);
		}
	}
`

const loginAndSignupStyles = css`
	height: 3.6rem;
	width: auto;
	min-width: 8rem;
	position: fixed;
	top: 3.2rem;
	right: 8rem;
	border-radius: 2rem;
	z-index: 2000;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	box-shadow: ${({ theme }) => theme.shadowLight};
	background-color: ${({ theme }) => theme.color.tertiaryLight};
	background-image: linear-gradient(
		315deg,
		${({ theme }) => theme.color.tertiaryLight} 0%,
		${({ theme }) => theme.color.primaryLight} 70%
	);
	transition: 0.4s;

	:hover {
		box-shadow: ${({ theme }) => theme.shadowDark};
	}

	img {
		height: 100%;
		border-radius: 50%;
	}

	span {
		display: inline-block;
		color: ${({ theme }) => theme.color.grayLight2};
		text-transform: uppercase;
		font-weight: 400;
		font-size: 1.5rem;
		letter-spacing: .08rem;
		padding: 0 1.5rem;
		line-height: 1;
		transform: translateY(1.2rem);
	}

	@media only screen and (max-width: 56.25em) {
		top: 2.6rem;
		right: 7rem;
	}

	@media only screen and (max-width: 37.5em) {
		top: 2rem;
		right: 6.5rem;
	}

	@media only screen and (max-width: 24em) {
		right: auto;
		left: 2rem;
	}
`

export const NavigationLoginContainer = styled(Link)`
  ${loginAndSignupStyles}
`

export const NavigationSignupContainer = styled(Link)`
  ${loginAndSignupStyles}
  right: 17rem;

  @media only screen and (max-width: 56.25em) {
    right: 15.2rem;
  }

  @media only screen and (max-width: 24em) {
    right: auto;
    left: 11rem;
  }
`

export const NavigationProfileContainer = styled(Link)`
  ${loginAndSignupStyles}
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    padding: 0 1rem 0 0.6rem;
    transform: translateY(0);
  }
`

export const NavigationTitleContainer = styled(Link)`
  height: 3.6rem;
  width: auto;
  position: fixed;
  top: 3.2rem;
  left: 3rem;
  line-height: 0.9;
  border-radius: 5rem;
  z-index: 2000;
  text-align: center;
  cursor: pointer;
  box-shadow: ${({ theme }) => theme.shadowLight};
  background-color: ${({ theme }) => theme.color.tertiaryLight};
  background-image: linear-gradient(315deg, ${({ theme }) => theme.color.tertiaryLight} 0%, ${({ theme }) =>
	theme.color.primaryLight} 70%);
  transition: 0.4s;

  :hover {
    box-shadow: ${({ theme }) => theme.shadowDark};
  }

  h1 {
    display: inline-block;
    color: ${({ theme }) => theme.color.grayLight2};
    text-transform: uppercase;
    font-weight: 400;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    padding: 0 2rem;
    transform: translateY(1.2rem);
  }

  @media only screen and (max-width: 56.25em) {
    top: 3rem;
    left: 3rem;
  }

  @media only screen and (max-width: 37.5em) {
    top: 2rem;
    left: 2rem;
  }

  @media only screen and (max-width: 24em) {
    display: none;
  }
`
