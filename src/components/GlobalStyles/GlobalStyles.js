import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
/* http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
  font-size: 100%;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}


/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}

#root {
  /*
    Create a stacking context, without a z-index.
    This ensures that all portal content (modals and tooltips) will
    float above the app.

  KEY: To sort the sticky header not sticking I have resorted to put overflow: auto in the root component #root here so that the sticky header works as its supposed to by being contained by the root Component hence sticking at the top. Otherwise I could have put overflow auto below in the rule for -ms-hyphenate-limit-chars, body and #root

  ALTERNATIVELY: I would have needed to just change the height below to min-height (that all) and not have to deal with overflow here. But I didn't want to mess with the height measurement of height 100%. Though set min-height 100% may have the same implication as with height 100% will have to confirm that and revisit here.

  TODO: Read the above and revisit whether to use min-height instead of overflow property.
  */
  isolation: isolate;
  overflow: auto;
}

/* KEY: This is good for our height measurements in the children elements


*/


html, body, #root {
  height: 100%;
}
`;

export default GlobalStyles;
