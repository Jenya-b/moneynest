import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		padding: 0;
		margin: 0;
		border: 0;
	}
	*,
	*::before,
	*::after {
		-moz-box-sizing: border-box;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
	}
	:focus,
	:active {
		outline: none;
	}
	a:focus,
	a:active {
		outline: none;
	}
	nav,
	footer,
	header,
	section,
	aside {
		display: block;
	}
	html,
	body {
		font-family: 'Nunito', sans-serif;
		height: 100%;
		width: 100%;
		font-size: 100%;
		line-height: 1;
		font-size: 14px;
		-ms-text-size-adjust: 100%;
		-moz-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
	}
	input,
	button,
	textarea {
		font-family: inherit;
	}
	input::-ms-clear {
		display: none;
	}
	button {
		cursor: pointer;
	}
	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}
	a,
	a:visited {
		text-decoration: none;
	}
	a:hover {
		text-decoration: none;
	}
	ul li {
		list-style: none;
	}
	img {
		vertical-align: top;
	}
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: 400;
	}
	#root{
		min-height: 100vh;
	}

	/* !Rechart */
	.recharts-sector {
		stroke: none;
	}
	.recharts-tooltip-cursor {
		fill: ${({ theme }) => theme.colors.bgTertiary};
		opacity: 0.5;
	}
	.recharts-cartesian-grid-vertical {
		display: none;
	}
	.recharts-cartesian-grid-horizontal {
		opacity: 0.5;

		line {
			stroke: #7171C0;

			:nth-child(1) {
				display: none;
			}
		}
	}
	.recharts-line-dot {
		display: none;
	}
`;
