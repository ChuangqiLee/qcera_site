/* 奇创纪元 Qichuang Era — brand motion
   The company logo as live vector geometry. Its two arcs share one orbit: the
   upper arc ends as the E of ERA, the lower one begins as the H of CHUANG.
   Built on that: the first-visit intro (both arcs ignite on the left, sweep
   round the orbit and land as the logo, which then docks in the header), the
   header mark's colour run, the About page construction drawing, the footer
   wordmark under a roving spotlight, the scroll-orbit back-to-top button and
   the 404 orbit. Decorative only: the <img> logos stay as the fallback, and
   with reduced motion everything is static or skipped. */
(function () {
  'use strict';
  var root = document.documentElement, body = document.body;
  if (!body || !window.requestAnimationFrame || !document.createElementNS) return;
  var D = {"t":"M530.9 178.1L554.4 178.1L555.2 169.3L532.7 169.3C532.9 168 533.1 166.6 533.3 165.3C533.6 162.7 533.9 160.1 534 157.5C536.6 112.2 511.5 69.9 465.5 45.5C382 1.2 247.1 25.9 150.4 103.4L264.9 103.4C332.2 70.4 411.2 64.2 464.6 92.5C492.1 107.1 505.8 131.2 510 157.5C512.5 172.5 511.8 188.2 508.9 203.4C506.4 216.5 502.2 229.2 496.9 240.5C502.6 234.1 507.6 227.5 512 220.9L550 220.9L550.9 212.1L517.4 212.1C519 209.2 520.5 206.3 521.9 203.4C522.8 201.6 523.5 199.9 524.3 198.1L550 198.1L550.9 189.4L527.7 189.4C528.4 187.3 529 185.2 529.6 183.1C530.1 181.4 530.5 179.8 530.9 178.1","b":"M388.5 241.4C330.3 265 262 269.5 215.9 249.2C192 238.8 180.2 221.5 176.5 202.6C176.3 201.1 176 199.6 175.8 198.1L193.7 198.1L190.2 220.9L207.7 220.9L214.7 169.3L194.6 169.3L197.3 172.8L194.8 189.3L175.2 189.3C175.2 186.3 175.4 183.2 175.7 180.1L176.2 176.4C176.5 174.2 177 172 177.5 169.8C179.6 160.4 183.2 151.3 187.9 143.2C178.8 151.6 171.7 160.4 166.5 169.3C166.4 169.5 166.3 169.6 166.3 169.8C165.2 171.6 164.2 173.5 163.3 175.4C161.8 178.4 160.6 181.3 159.6 184.3C158.9 186.2 158.4 188 157.9 189.9C157.3 192.3 156.8 194.7 156.4 197.1C156.1 198.9 155.9 200.8 155.8 202.6C155.4 208.8 155.8 214.9 157.1 220.9C162.4 246.2 182.8 268.7 215 282.9C287.3 314.6 403.9 296.9 487.5 241.4Z","l":[["M37.7 199.9L30.7 197.3L29 207.8L36 210.4L36 212.1L18.5 212.1L22.9 178.1L40.4 178.1ZM53.5 206L57.8 175.4C58.3 173.7 57.9 172.2 56.8 171.1C55.7 169.9 54.3 169.3 52.5 169.3L7.1 169.3L1 214.8C0.8 215.6 0.8 216.4 0.9 217.2C1.1 217.9 1.5 218.6 2 219.1C2.5 219.7 3.1 220.1 3.9 220.4C4.6 220.7 5.4 220.9 6.2 220.9L49.1 220.9L49.9 215.6L56.9 218.2L58.7 207.8ZM53.5 206",1,59],["M64.8 169.3L67.5 172.8L61.4 220.9L77.9 220.9L85.9 169.3ZM64.8 169.3",61,86],["M149.5 178.1L150.4 169.3L95.3 169.3L89.2 214.8C89 215.6 89 216.4 89.1 217.2C89.3 217.9 89.7 218.6 90.2 219.1C90.7 219.7 91.3 220.1 92 220.4C92.8 220.7 93.6 220.9 94.4 220.9L143.4 220.9L145.1 208.7L140.8 212.1L106.7 212.1L111.1 178.1ZM149.5 178.1",89,150],["M258.5 169.3L262.1 171.9L255.9 212.1L234.9 212.1L241 169.3L220.9 169.3L223.6 171.9L217.5 214.8C217.5 216.5 217.9 218 218.8 219.1C219.7 220.3 221 220.9 222.7 220.9L272.5 220.9L279.5 169.3ZM258.5 169.3",218,280],["M306.6 198.1L315.3 178.1L321.4 178.1L324 198.1ZM335.4 169.3L299.6 169.3L302.2 171.9L282.1 220.9L296.9 220.9L303 206.8L324.9 206.8L326.7 220.9L342.3 220.9ZM335.4 169.3",282,342],["M392 169.3L387.6 201.6L369.4 169.3L348.3 169.3L351.9 172.8L344.9 220.9L360.6 220.9L365 189.4L382.5 220.9L399.9 220.9L407 169.3ZM392 169.3",345,407],["M469.3 184.2L471 169.3L416 169.3L409.9 214.8C409.6 215.6 409.6 216.4 409.8 217.2C410 217.9 410.3 218.6 410.8 219.1C411.3 219.7 411.9 220.1 412.7 220.4C413.4 220.7 414.2 220.9 415.1 220.9L464 220.9L467.5 192.9L443.9 192.9L449.2 201.6L448.3 212.1L427.4 212.1L431.7 178.1L452.6 178.1L451.8 184.2ZM469.3 184.2",410,471],["M597.7 192.9L578.4 192.9L580.2 178.1L599.4 178.1ZM609.9 201.2C610.7 200.9 611.4 200.5 612.1 199.9C612.8 199.4 613.3 198.7 613.7 198C614.1 197.2 614.3 196.4 614.3 195.5L617.7 169.3L561 169.3L563.6 172.8L557.5 220.9L575 220.9L577.6 201.6L595.1 220.9L614.3 220.9L595.9 201.6L607.3 201.6C608.2 201.6 609 201.5 609.9 201.2",558,618],["M644.8 198.1L653.5 178.1L659.6 178.1L662.2 198.1ZM673.6 169.3L637.8 169.3L640.4 171.9L620.3 220.9L635.1 220.9L641.2 206.8L663.1 206.8L664.9 220.9L680.5 220.9ZM673.6 169.3",620,680]],"c":[["M13.2 135L20.8 135C21.1 135 21.4 134.9 21.6 134.6C21.9 134.4 22 134.1 22 133.8L22 131.7L13.2 131.7ZM7.9 137.9L7.9 128.8L27.2 128.8L27.2 133.7C27.2 134.3 27.1 134.9 26.9 135.4C26.7 135.9 26.4 136.3 26 136.7C25.6 137.1 25.2 137.4 24.7 137.6C24.2 137.8 23.6 137.9 23.1 137.9ZM33.1 117.9L39.5 122.7L32.8 122.7L26.7 117.9L22.8 117.9L14.5 122.7L6.5 122.7L14.9 117.9L6.4 117.9L6.4 114.2L20.3 114.2L20.3 111.9L25.7 111.9L25.7 114.2L39.5 114.2L39.5 117.9ZM30.7 135.9C31.1 135.9 31.4 135.8 31.6 135.6C31.8 135.3 31.9 135 31.9 134.7L31.9 127.4L6.1 127.4L6.1 123.7L39.2 123.7L39.2 127.4L37.2 127.4L37.2 135C37.2 135.6 37 136.1 36.8 136.6C36.6 137.1 36.3 137.6 35.9 137.9C35.6 138.3 35.1 138.6 34.6 138.8C34.1 139 33.6 139.1 33 139.1L27.7 139.1L29.2 135.9ZM30.7 135.9",6,40],["M77.1 135.1C77.1 135.6 77 136.2 76.8 136.7C76.6 137.2 76.3 137.6 75.9 138C75.5 138.3 75.1 138.6 74.6 138.9C74.1 139.1 73.6 139.2 73 139.2L69.9 139.2L71.3 135.5L71.6 135.5C71.9 135.5 72.2 135.4 72.5 135.1C72.7 134.9 72.8 134.6 72.8 134.3L72.8 111.9L77.1 111.9ZM71.2 134L66.9 134L66.9 113.8L71.2 113.8ZM57.5 129.7C57.9 129.7 58.2 129.6 58.4 129.4C58.6 129.2 58.7 128.9 58.7 128.6L58.7 126L50.7 126L50.7 134.4C50.7 134.7 50.8 135 51.1 135.2C51.3 135.5 51.6 135.6 51.9 135.6L63.9 135.6L62.6 139.2L50.1 139.2C49.5 139.2 49 139.1 48.5 138.9C48 138.6 47.5 138.3 47.1 138C46.8 137.6 46.5 137.1 46.3 136.6C46 136.1 45.9 135.6 45.9 135L45.9 122.5L63.5 122.5L63.5 129.2C63.5 129.8 63.4 130.3 63.2 130.8C62.9 131.3 62.6 131.7 62.3 132.1C61.9 132.5 61.5 132.8 61 133C60.4 133.2 59.9 133.3 59.3 133.3L53.7 133.3L55 129.7ZM65.2 121.3L60.2 121.3L57.8 115.1L51.5 115.1L49 121L44 121L47.9 111.9L61.2 111.9ZM65.2 121.3",44,77],["M100.5 135.1C100.7 135.3 101 135.4 101.4 135.4L115 135.4L112.6 139.2L99.1 139.2C98.5 139.2 98 139.1 97.5 138.8C97 138.7 96.6 138.4 96.2 138C95.8 137.6 95.5 137.1 95.3 136.6C95.1 136.2 95 135.6 95 135L95 122.8L107.8 122.8C108.2 122.8 108.5 122.7 108.7 122.4C108.9 122.2 109 121.9 109 121.6L109 115.7L95 115.7L95 112L114.2 112L114.2 122.4C114.2 122.9 114.1 123.5 113.9 124C113.7 124.5 113.4 124.9 113 125.3C112.7 125.7 112.2 126 111.7 126.2C111.2 126.4 110.7 126.5 110.1 126.5L100.2 126.5L100.2 134.2C100.2 134.6 100.3 134.8 100.5 135.1M81.6 135.7L93.2 135.7L93.2 139.1L81.6 139.1ZM88.6 130.5L93.2 130.5L93.2 133.9L81.6 133.9L85.8 124.6L81.6 124.6L87.2 111.9L92.7 111.9L88.6 121.2L92.8 121.2ZM88.6 130.5",82,115],["M120.8 112L151.2 112L151.2 115.9L120.8 115.9ZM126.9 124.7L119.5 124.7L119.5 120.8L152.5 120.8L152.5 124.7L144.4 124.7L144.4 134.4C144.4 134.8 144.5 135 144.8 135.2C145 135.5 145.3 135.6 145.6 135.6L152.5 135.6L150.8 139.1L143 139.1C142.5 139.1 142 139 141.5 138.8C141 138.6 140.6 138.3 140.3 138C140 137.6 139.7 137.2 139.5 136.8C139.3 136.3 139.2 135.9 139.2 135.3L139.2 124.7L132.4 124.7L125.9 139.1L120.4 139.1ZM126.9 124.7",120,152],["M180.8 120.7L178.1 120.7L180.8 127.2L175.8 127.2L172.4 119.1L175.1 119.1L172.4 112.6L177.4 112.6ZM187 128.9L190.2 128.9L190.2 132.3L187 132.3L187 138.9L181.9 138.9L181.9 132.3L171.6 132.3L171.6 128.9L181.9 128.9L181.9 112.1L187 112.1ZM170 122.9L170.7 138.9L167.6 138.9L166.9 122.9ZM157.2 138.9L158 122.9L161.1 122.9L160.3 138.9ZM165.9 115.8L165.9 118.5L170.6 118.5L170.6 121.7L165.9 121.7L165.9 138.9L161.9 138.9L161.9 121.7L157.2 121.7L157.2 118.5L161.9 118.5L161.9 115.9L157.6 116.1L157.6 112.6L170.7 112.2L170.7 115.6ZM165.9 115.8",157,190],["M227.1 124.7C226.9 125.8 226.2 127.1 225.2 128.5C224.2 129.9 223 131.3 221.5 132.6C222.5 133.4 223.6 134 224.7 134.6C225.9 135.2 227 135.6 228 135.8L228 139.3C226.4 139.1 224.8 138.7 223.2 137.9C221.5 137.2 219.9 136.2 218.4 135.1C216.9 136.2 215.3 137.2 213.7 137.9C212 138.7 210.4 139.1 208.8 139.3L208.8 135.8C209.9 135.6 210.9 135.2 212.1 134.6C213.2 134 214.3 133.4 215.3 132.6C214.1 131.5 213 130.3 212.1 129.1C211.2 127.9 210.5 126.8 210.1 125.7L214.4 125.7C214.7 126.3 215.3 127 216 127.8C216.7 128.5 217.5 129.3 218.4 130.2C219.7 129 220.8 127.9 221.6 126.9C222.4 125.9 222.9 125.2 223 124.7L209.7 124.7L209.7 121.3L215.9 121.3L215.9 118.4L209.7 118.4L209.7 114.9L215.9 114.9L215.9 112L220.5 112L220.5 114.9L227.1 114.9L227.1 118.4L220.5 118.4L220.5 121.3L227.1 121.3ZM204.5 117.9L204.5 121.1L209.8 121.1L204.5 127.8L204.5 135.2C204.5 135.8 204.4 136.3 204.2 136.8C204 137.3 203.7 137.7 203.3 138.1C203 138.5 202.5 138.8 202 139C201.5 139.2 201 139.3 200.4 139.3L196.5 139.3L197.9 136L198.5 136C198.9 136 199.1 135.9 199.4 135.7C199.6 135.5 199.7 135.2 199.7 134.9L199.7 132.6L194.9 132.6L199.7 126.4L199.7 117.9L195.7 117.9L195.7 114.1L199.7 114.1L199.7 111.8L204.5 111.8L204.5 114.1L208.8 114.1L208.8 117.9ZM204.5 117.9",195,228],["M259.8 128.5L241.8 128.5L241.8 130.7L259.8 130.7ZM241.8 122.9L241.8 125.3L259.8 125.3L259.8 124.1C259.8 123.8 259.7 123.5 259.4 123.3C259.2 123 258.9 122.9 258.6 122.9ZM232.8 125.3L237.6 117L233.7 117L233.7 113.3L239.8 113.3L240.5 112L245.6 112L244.9 113.3L265.5 113.3L265.5 117L242.7 117L241.4 119.3L260.9 119.3C261.9 119.3 262.7 119.6 263.4 120.3C264.1 121 264.4 121.8 264.4 122.8L264.4 136.3C264.4 137.1 264.2 137.7 263.6 138.3C263.1 138.8 262.4 139.1 261.6 139.1L255.8 139.1L257.2 135.8L259 135.8C259.2 135.8 259.4 135.7 259.5 135.6C259.7 135.4 259.8 135.2 259.8 135L259.8 134L241.8 134L241.8 139.1L237.1 139.1L237.1 125.3ZM232.8 125.3",233,266],["M301.3 134.3L299.4 134.3L302.2 139.2L297.4 139.2L291.5 128.9L296.4 128.9L297.8 131.4L298.8 129.5L303.4 129.5ZM297.7 124.2C298 124.2 298.3 124.1 298.5 123.9C298.7 123.7 298.8 123.4 298.8 123.1L298.8 121.4L290.1 121.4L290.1 124.2ZM290.1 118.1L298.8 118.1L298.8 115.3L290.1 115.3ZM290.1 111.9L303.3 111.9L303.3 123.5C303.3 124.1 303.1 124.6 302.9 125.1C302.7 125.6 302.4 126 302 126.4C301.7 126.8 301.2 127.1 300.7 127.3C300.2 127.5 299.7 127.6 299.1 127.6L290.1 127.6L290.1 135C290.1 135.4 290.2 135.7 290.4 135.9C290.7 136.1 290.9 136.2 291.3 136.2L294.2 136.2L295.5 139.1L289.8 139.1C289.2 139.1 288.7 139 288.2 138.7C287.7 138.5 287.3 138.2 286.9 137.9C286.5 137.5 286.2 137.1 286 136.6C285.8 136.1 285.7 135.5 285.7 134.9L285.7 111.9ZM275.4 139L270.3 139L270.3 112L285.3 112L282.1 123.7L285.3 123.7L280.8 137.1L275.7 137.1L279.3 126.7L275.9 126.7L279.1 115.6L275.4 115.6ZM275.4 139",270,303],["M333.6 112L341.1 123.9L335.4 123.9L327.9 112ZM335.1 126.8L341.2 139.1L335.2 139.1L334.9 138.5L308.1 138.5L317.8 122L324 122L316 134.8L333.1 134.8L329.1 126.8ZM313.7 123.9L308 123.9L315 112L320.7 112ZM313.7 123.9",308,341],["M364.4 132.9C364.6 132.9 364.8 132.8 364.9 132.7C365.1 132.5 365.2 132.3 365.2 132.1L365.2 127.4L352.4 127.4L352.4 132.9ZM369.4 123.7L369.4 133.8C369.4 134.6 369.1 135.3 368.6 135.8C368.1 136.3 367.4 136.6 366.6 136.6L347.8 136.6L347.8 123.7ZM370 121.6L347.3 121.6L347.3 117.9L370 117.9ZM346.3 112.2L376.4 112.2L376.4 112.2L378.3 112.2L378.3 136.1C378.3 136.9 378.1 137.6 377.5 138.1C377 138.6 376.3 138.9 375.5 138.9L369.8 138.9L371.2 135.2L372.8 135.2C373.1 135.2 373.3 135.1 373.4 135C373.6 134.8 373.7 134.6 373.7 134.4L373.7 115.9L346.3 115.9ZM346.3 112.2",346,378]],"cx":352.8,"cy":161.1,"mt":[[167.5,104.4],[183.7,99.6],[197.9,95.4],[210.4,91.6],[221.4,88.2],[231.1,85.1],[239.9,82.0],[247.9,79.1],[255.3,76.3],[262.2,73.6],[268.7,70.9],[275.0,68.4],[281.1,66.0],[287.1,63.7],[293.0,61.6],[298.9,59.7],[304.7,57.9],[310.5,56.3],[316.3,55.0],[322.0,53.8],[327.8,52.8],[333.6,51.9],[339.3,51.3],[345.1,50.7],[350.9,50.3],[356.7,50.0],[362.5,49.9],[368.4,49.8],[374.4,49.9],[380.5,50.0],[386.7,50.3],[393.0,50.7],[399.4,51.3],[406.0,52.0],[412.7,53.0],[419.6,54.2],[426.6,55.7],[433.7,57.6],[440.9,59.8],[448.1,62.4],[455.4,65.5],[462.6,69.0],[469.7,73.0],[476.6,77.6],[483.3,82.7],[489.6,88.3],[495.6,94.5],[501.2,101.2],[506.2,108.3],[510.6,115.9],[514.3,123.8],[517.3,132.1],[519.6,140.6],[521.1,149.3],[521.8,158.1],[521.8,167.0],[521.0,175.8],[519.5,184.5],[517.5,193.1],[514.9,201.5],[511.9,209.7],[508.6,217.8],[505.2,225.8],[501.8,233.8]],"mb":[[186.7,161.1],[177.7,170.3],[171.7,180.3],[168.4,190.5],[167.4,200.8],[168.6,210.8],[171.5,220.5],[176.0,229.5],[181.7,237.9],[188.6,245.5],[196.2,252.3],[204.5,258.3],[213.3,263.4],[222.3,267.8],[231.6,271.4],[240.8,274.3],[250.1,276.6],[259.1,278.3],[268.0,279.4],[276.7,280.1],[285.1,280.4],[293.2,280.3],[301.0,280.0],[308.5,279.5],[315.7,278.7],[322.7,277.8],[329.4,276.8],[335.8,275.7],[342.1,274.6],[348.1,273.4],[354.0,272.2],[359.8,271.1],[365.5,269.9],[371.2,268.8],[376.9,267.7],[382.5,266.6],[388.3,265.6],[394.2,264.6],[400.2,263.6],[406.4,262.7],[413.0,261.8],[419.8,261.0],[427.1,260.1],[434.9,259.3],[443.3,258.3],[452.3,257.4],[462.1,256.2],[472.8,254.9]],"at":[197,386],"ab":[180,38]};
  var reduceQ = matchMedia('(prefers-reduced-motion: reduce)');
  var fineQ = matchMedia('(hover: hover) and (pointer: fine)');
  function reduced() { return reduceQ.matches; }
  function en() { return root.lang === 'en'; }
  var VB = '0 22 682 278';
  var NS = 'http://www.w3.org/2000/svg';
  var uid = 0;

  /* ------------------------------------------------------------------
     Geometry
     ------------------------------------------------------------------ */
  function lerp(a, b, t) { return a + (b - a) * t; }
  function clamp(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function ease(t) { t = clamp(t); return t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { t = clamp(t); return 1 - Math.pow(1 - t, 3); }
  // point at fraction p along a midline (uniform in angle)
  function at(line, p) {
    var f = clamp(p) * (line.length - 1), i = Math.floor(f), k = f - i;
    var a = line[i], b = line[Math.min(i + 1, line.length - 1)];
    return [lerp(a[0], b[0], k), lerp(a[1], b[1], k)];
  }
  function trail(line, p0, p1, n) {
    var s = '';
    for (var i = 0; i <= n; i++) { var q = at(line, lerp(clamp(p0), clamp(p1), i / n)); s += (i ? 'L' : 'M') + q[0].toFixed(1) + ' ' + q[1].toFixed(1); }
    return s;
  }
  function linePath(line) { return trail(line, 0, 1, line.length - 1); }
  // pie wedge from the orbit centre, a0 → a1 in degrees (SVG y-down: increasing = clockwise)
  function wedge(a0, a1) {
    var span = a1 - a0;
    if (Math.abs(span) < .05) return 'M0 0Z';
    var r = 480, cx = D.cx, cy = D.cy, rad = Math.PI / 180;
    return 'M' + cx + ' ' + cy +
      'L' + (cx + r * Math.cos(a0 * rad)).toFixed(1) + ' ' + (cy + r * Math.sin(a0 * rad)).toFixed(1) +
      'A' + r + ' ' + r + ' 0 ' + (Math.abs(span) > 180 ? 1 : 0) + ' ' + (span > 0 ? 1 : 0) + ' ' +
      (cx + r * Math.cos(a1 * rad)).toFixed(1) + ' ' + (cy + r * Math.sin(a1 * rad)).toFixed(1) + 'Z';
  }
  // the reveal edge for progress p on each arc (head angle plus a small lead)
  // (the arc is painted just behind the comet head, so it starts empty)
  function topWedge(p) { return p >= 1 ? wedge(186, 398) : wedge(186, Math.max(186, lerp(D.at[0], D.at[1], p) - 8 + 10 * p)); }
  function botWedge(p) { return p >= 1 ? wedge(194, 24) : wedge(194, Math.min(194, lerp(D.ab[0], D.ab[1], p) + 8 - 10 * p)); }

  /* ------------------------------------------------------------------
     Markup
     ------------------------------------------------------------------ */
  function paths(list, cls, extra) {
    return list.map(function (l, i) { return '<path class="' + cls + '" d="' + l[0] + '"' + (extra ? extra(l, i) : '') + '/>'; }).join('');
  }
  function arcs(cls, attrs) {
    attrs = attrs || {};
    return '<path class="qb-arc qb-t ' + (cls || '') + '" d="' + D.t + '"' + (attrs.t || '') + '/>' +
      '<path class="qb-arc qb-b ' + (cls || '') + '" d="' + D.b + '"' + (attrs.b || '') + '/>';
  }
  function words(lcls, ccls) { return paths(D.l, 'qb-l ' + (lcls || '')) + paths(D.c, 'qb-c ' + (ccls || '')); }
  function svg(cls, body, vb) {
    return '<svg class="' + cls + '" viewBox="' + (vb || VB) + '" fill="none" aria-hidden="true" focusable="false">' + body + '</svg>';
  }
  function parse(html) { var t = document.createElement('div'); t.innerHTML = html; return t.firstElementChild; }
  function bi(zh, enText, tag) { tag = tag || 'tspan'; return '<' + tag + ' data-zh="' + zh + '" data-en="' + enText + '">' + (en() ? enText : zh) + '</' + tag + '>'; }

  // the colour run: a blurred band travelling along both midlines, clipped to the arcs
  function runLayer(id) {
    return '<defs><clipPath id="' + id + 'c"><path d="' + D.t + '"/><path d="' + D.b + '"/></clipPath>' +
      '<filter id="' + id + 'f" x="-10%" y="-20%" width="120%" height="140%"><feGaussianBlur stdDeviation="9"/></filter></defs>' +
      '<g class="qb-run" clip-path="url(#' + id + 'c)"><g filter="url(#' + id + 'f)">' +
      '<path class="qb-run-t" d="' + linePath(D.mt) + '" pathLength="1"/>' +
      '<path class="qb-run-b" d="' + linePath(D.mb) + '" pathLength="1"/></g></g>';
  }

  /* ------------------------------------------------------------------
     Header mark: the vector logo replaces the image, runs on hover
     ------------------------------------------------------------------ */
  var brand = document.querySelector('.site-header .brand');
  var mark = null;
  if (brand && brand.querySelector('img')) {
    var id = 'qb' + (uid++);
    mark = parse(svg('qb-svg', arcs() + words() + runLayer(id)));
    brand.insertBefore(mark, brand.firstChild);
    brand.classList.add('has-svg');
    var run = function () {
      if (reduced()) return;
      brand.classList.remove('is-run'); void mark.getBoundingClientRect(); brand.classList.add('is-run');
    };
    brand.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') run(); });
    brand.addEventListener('focus', run);
    mark.addEventListener('animationend', function (e) { if (e.animationName === 'qbRun' && e.target.classList.contains('qb-run-b')) brand.classList.remove('is-run'); });
  }

  /* ------------------------------------------------------------------
     Intro: first page of a visit. The head script sets .qc-intro-on so a
     cover is there from the first paint; if this script arrives late the
     cover has already lifted itself and the intro is skipped.
     ------------------------------------------------------------------ */
  var introDone = false;
  function finishIntro() {
    if (introDone) return;
    introDone = true;
    root.classList.remove('qc-intro-run');
    if (brand) setTimeout(function () { brand.classList.remove('is-hidden'); if (!reduced()) { brand.classList.add('is-run', 'is-landed'); setTimeout(function () { brand.classList.remove('is-landed'); }, 900); } }, 0);
  }
  if (root.classList.contains('qc-intro-on')) {
    if (!mark || reduced() || performance.now() - (self.qcIntroAt || 0) > 1600) { root.classList.remove('qc-intro-on'); introDone = true; }
    else intro();
  } else introDone = true;

  function intro() {
    var touch = !fineQ.matches;
    var veil = document.createElement('div');
    veil.className = 'qc-intro';
    veil.setAttribute('aria-hidden', 'true');
    var beamX = function (l) { return l[1] + (l[2] - l[1]) * .35; };
    veil.innerHTML =
      '<div class="qi-stage">' +
        svg('qi-logo',
          '<defs>' +
            '<mask id="qi-mt" maskUnits="userSpaceOnUse" x="-200" y="-300" width="1100" height="900"><path class="qi-w" fill="#fff"/></mask>' +
            '<mask id="qi-mb" maskUnits="userSpaceOnUse" x="-200" y="-300" width="1100" height="900"><path class="qi-w" fill="#fff"/></mask>' +
            '<radialGradient id="qi-gt"><stop offset="0" stop-color="#d8e6ff" stop-opacity=".95"/><stop offset=".35" stop-color="#6ea8ff" stop-opacity=".45"/><stop offset="1" stop-color="#6ea8ff" stop-opacity="0"/></radialGradient>' +
            '<radialGradient id="qi-gb"><stop offset="0" stop-color="#ffe2cf" stop-opacity=".95"/><stop offset=".35" stop-color="#ff6e2e" stop-opacity=".5"/><stop offset="1" stop-color="#ff6e2e" stop-opacity="0"/></radialGradient>' +
            '<linearGradient id="qi-beam" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>' +
            '<radialGradient id="qi-wake"><stop offset="0" stop-color="#9cc2ff" stop-opacity=".3"/><stop offset="1" stop-color="#6ea8ff" stop-opacity="0"/></radialGradient>' +
          '</defs>' +
          '<g class="qi-ghost">' + arcs('', { t: ' pathLength="1"', b: ' pathLength="1"' }) + paths(D.l, 'qb-l', function () { return ' pathLength="1"'; }) + paths(D.c, 'qb-c', function () { return ' pathLength="1"'; }) + '</g>' +
          '<g class="qi-fill">' + arcs('', { t: ' mask="url(#qi-mt)"', b: ' mask="url(#qi-mb)"' }) +
            paths(D.l, 'qb-l qi-l', function (l) { return ' data-x="' + beamX(l) + '"'; }) +
            paths(D.c, 'qb-c qi-c', function (l) { return ' data-x="' + beamX(l) + '"'; }) + '</g>' +
          '<g class="qi-beam"><ellipse cx="-6" cy="166" rx="30" ry="86" fill="url(#qi-wake)"/><rect x="-.8" y="96" width="1.6" height="140" fill="url(#qi-beam)"/></g>' +
          '<g class="qi-comet qi-ct"><path class="qi-tail a"/><path class="qi-tail b"/><path class="qi-tail c"/><circle class="qi-halo" r="34" fill="url(#qi-gt)"/><circle class="qi-core" r="3.4"/></g>' +
          '<g class="qi-comet qi-cb"><path class="qi-tail a"/><path class="qi-tail b"/><path class="qi-tail c"/><circle class="qi-halo" r="34" fill="url(#qi-gb)"/><circle class="qi-core" r="3.4"/></g>' +
          '<circle class="qi-flash" r="30"/>') +
        '<p class="qi-cap"><span>QICHUANG ERA</span><i></i><span class="qi-cap-b">' + (en() ? 'Technology-driven medical research' : '科技驱动医学研究') + '</span></p>' +
        '<div class="qi-bar"><i></i></div>' +
      '</div>' +
      '<span class="qi-skip">' + (en() ? (touch ? 'Tap to skip' : 'Click to skip') : (touch ? '轻点跳过' : '点击任意处跳过')) + '</span>';
    body.appendChild(veil);
    root.classList.add('qc-intro-run');
    root.classList.remove('qc-intro-on');   // the veil is opaque itself; the cover would sit above it
    brand.classList.add('is-hidden');

    var logo = veil.querySelector('.qi-logo');
    var wt = veil.querySelector('#qi-mt .qi-w'), wb = veil.querySelector('#qi-mb .qi-w');
    var letters = Array.prototype.slice.call(veil.querySelectorAll('.qi-l,.qi-c'));
    var beam = veil.querySelector('.qi-beam');
    var cometT = veil.querySelector('.qi-ct'), cometB = veil.querySelector('.qi-cb');
    var flash = veil.querySelector('.qi-flash');
    var cap = veil.querySelector('.qi-cap');
    wt.setAttribute('d', topWedge(0)); wb.setAttribute('d', botWedge(0));
    var end = at(D.mt, 1), end2 = at(D.mb, 1);
    flash.setAttribute('cx', ((end[0] + end2[0]) / 2).toFixed(1));
    flash.setAttribute('cy', ((end[1] + end2[1]) / 2).toFixed(1));

    // timeline (ms)
    var C0 = 150, C1 = 1150, B0 = 360, B1 = 1180, HOLD = 1900;
    var t0 = 0, raf = 0, gone = false, lit = false, flashed = false, capped = false;
    function comet(g, line, p) {
      var tails = g.querySelectorAll('.qi-tail'), h = at(line, p);
      tails[0].setAttribute('d', trail(line, p - .22, p, 14));
      tails[1].setAttribute('d', trail(line, p - .11, p, 8));
      tails[2].setAttribute('d', trail(line, p - .045, p, 4));
      g.querySelector('.qi-halo').setAttribute('cx', h[0].toFixed(1)); g.querySelector('.qi-halo').setAttribute('cy', h[1].toFixed(1));
      g.querySelector('.qi-core').setAttribute('cx', h[0].toFixed(1)); g.querySelector('.qi-core').setAttribute('cy', h[1].toFixed(1));
    }
    function frame(now) {
      if (gone) return;
      try { step(now); } catch (e) { leave(); }
    }
    function step(now) {
      if (!t0) t0 = now;
      var t = now - t0;
      var p = ease((t - C0) / (C1 - C0));
      wt.setAttribute('d', topWedge(p)); wb.setAttribute('d', botWedge(p));
      if (t >= C0) { if (!lit) { lit = true; veil.classList.add('is-lit'); } comet(cometT, D.mt, p); comet(cometB, D.mb, p); }
      var bx = lerp(-20, 712, ease((t - B0) / (B1 - B0)));
      beam.setAttribute('transform', 'translate(' + bx.toFixed(1) + ' 0)');
      for (var i = 0; i < letters.length; i++) if (!letters[i].__on && bx > +letters[i].getAttribute('data-x')) { letters[i].__on = 1; letters[i].classList.add('on'); }
      if (t >= B1) veil.classList.add('beam-off');
      if (p >= 1 && !flashed) { flashed = true; veil.classList.add('is-landed'); }
      if (t > 820 && !capped) { capped = true; veil.classList.add('cap-on'); scramble(cap.querySelectorAll('span')); }
      if (t >= HOLD) { leave(); return; }
      raf = requestAnimationFrame(frame);
    }
    // never let the veil outstay its welcome (background tab, a script error)
    var failsafe = setTimeout(function () { leave(); }, 4200);
    function complete() {
      wt.setAttribute('d', topWedge(1)); wb.setAttribute('d', botWedge(1));
      letters.forEach(function (l) { l.classList.add('on', 'now'); });
      veil.classList.add('is-done');
    }
    function leave() {
      if (gone) return;
      gone = true;
      cancelAnimationFrame(raf);
      clearTimeout(failsafe);
      ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (t) { removeEventListener(t, leave, true); });
      try {
        complete();
        var a = logo.getBoundingClientRect(), b = mark.getBoundingClientRect();
        if (a.width && b.width) logo.style.transform = 'translate(' + (b.left - a.left).toFixed(1) + 'px,' + (b.top - a.top).toFixed(1) + 'px) scale(' + (b.width / a.width).toFixed(4) + ')';
      } catch (e) { /* the veil still lifts */ }
      veil.classList.add('is-leaving');
      setTimeout(function () { root.classList.remove('qc-intro-run'); }, 120);   // the page builds in while the mark flies
      setTimeout(function () { if (veil.parentNode) veil.parentNode.removeChild(veil); finishIntro(); }, 860);
    }
    ['pointerdown', 'keydown', 'wheel', 'touchstart'].forEach(function (t) { addEventListener(t, leave, { capture: true, passive: true }); });
    requestAnimationFrame(function () { veil.classList.add('is-on'); raf = requestAnimationFrame(frame); });
  }

  // short labels settle from random glyphs
  function scramble(nodes) {
    var G = '01ABCDEFGHJKLMNPQRSTUVWXYZ#%&*+<>/\\=';
    Array.prototype.forEach.call(nodes, function (n) {
      var text = n.textContent, start = performance.now(), dur = 520;
      (function tick(now) {
        var k = clamp((now - start) / dur), out = '';
        for (var i = 0; i < text.length; i++) {
          var c = text[i];
          out += (c === ' ' || i < k * text.length) ? c : (/[⺀-鿿]/.test(c) ? '▪' : G[(Math.random() * G.length) | 0]);
        }
        n.textContent = out;
        if (k < 1) requestAnimationFrame(tick); else n.textContent = text;
      })(start);
    });
  }

  /* ------------------------------------------------------------------
     Scroll orbit: back to top, the arcs fill with page progress
     ------------------------------------------------------------------ */
  (function () {
    var id = 'qo' + (uid++);
    var vb = '138 12 430 298';
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'qc-orbit';
    var label = function () { btn.setAttribute('aria-label', en() ? 'Back to top' : '回到顶部'); };
    label();
    document.addEventListener('qcera:lang', label);
    btn.innerHTML = svg('qo-svg',
      '<defs><mask id="' + id + 't" maskUnits="userSpaceOnUse" x="-200" y="-300" width="1100" height="900"><path fill="#fff"/></mask>' +
      '<mask id="' + id + 'b" maskUnits="userSpaceOnUse" x="-200" y="-300" width="1100" height="900"><path fill="#fff"/></mask></defs>' +
      '<g class="qo-ring"><g class="qo-base">' + arcs() + '</g>' +
      '<g class="qo-fill">' + arcs('', { t: ' mask="url(#' + id + 't)"', b: ' mask="url(#' + id + 'b)"' }) + '</g></g>' +
      '<path class="qo-arrow" d="M' + D.cx + ' ' + (D.cy + 46) + 'V' + (D.cy - 44) + 'M' + (D.cx - 34) + ' ' + (D.cy - 10) + 'L' + D.cx + ' ' + (D.cy - 46) + 'L' + (D.cx + 34) + ' ' + (D.cy - 10) + '"/>', vb);
    body.appendChild(btn);
    var mt = btn.querySelector('#' + id + 't path'), mb = btn.querySelector('#' + id + 'b path');
    var ticking = false, last = -1;
    function update() {
      ticking = false;
      var max = document.documentElement.scrollHeight - innerHeight;
      var p = max > 0 ? clamp(scrollY / max) : 0;
      btn.classList.toggle('is-shown', scrollY > Math.min(560, innerHeight * .7));
      btn.classList.toggle('is-full', p > .995);
      var q = Math.round(p * 400) / 400;
      if (q === last) return;
      last = q;
      mt.setAttribute('d', topWedge(q)); mb.setAttribute('d', botWedge(q));
    }
    addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
    addEventListener('resize', update);
    update();
    btn.addEventListener('click', function () {
      scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' });
      var skip = document.querySelector('.skip');
      if (brand) brand.focus({ preventScroll: true }); else if (skip) skip.focus({ preventScroll: true });
    });
  })();

  /* ------------------------------------------------------------------
     Footer: the wordmark at full width under a roving spotlight
     ------------------------------------------------------------------ */
  (function () {
    var word = document.querySelector('.footer-word');
    var footer = document.querySelector('.site-footer');
    if (!word || !footer) return;
    var id = 'qf' + (uid++);
    var vb = '0 60 682 196';
    word.innerHTML = svg('qf-svg',
      '<defs><radialGradient id="' + id + 'g"><stop offset="0" stop-color="#fff"/><stop offset=".55" stop-color="#fff" stop-opacity=".45"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient>' +
      '<mask id="' + id + 'm" maskUnits="userSpaceOnUse" x="0" y="0" width="682" height="320"><circle class="qf-spot" cx="-200" cy="170" r="118" fill="url(#' + id + 'g)"/></mask></defs>' +
      '<g class="qf-line">' + arcs() + words() + '</g>' +
      '<g class="qf-lit" mask="url(#' + id + 'm)">' + arcs() + words() + '</g>', vb);
    word.classList.add('is-logo');
    var spot = word.querySelector('.qf-spot'), s = word.querySelector('svg');
    if (reduced()) { spot.setAttribute('cx', 180); return; }
    var pos = { x: -200, y: 170 }, goal = null, lastMove = 0, raf = 0, visible = false, start = performance.now();
    footer.addEventListener('pointermove', function (e) {
      var m = s.getScreenCTM();
      if (!m) return;
      var pt = s.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
      var q = pt.matrixTransform(m.inverse());
      goal = { x: q.x, y: q.y }; lastMove = performance.now();
    });
    footer.addEventListener('pointerleave', function () { lastMove = 0; });
    function loop(now) {
      raf = 0;
      if (!visible || document.hidden) return;
      var idle = now - lastMove > 1600 || !goal;
      var tx, ty;
      if (idle) { var k = (now - start) / 1000; tx = 341 + 300 * Math.sin(k * .42); ty = 178 + 36 * Math.sin(k * .9 + 1); }
      else { tx = goal.x; ty = goal.y; }
      pos.x += (tx - pos.x) * (idle ? .05 : .18); pos.y += (ty - pos.y) * (idle ? .05 : .18);
      spot.setAttribute('cx', pos.x.toFixed(1)); spot.setAttribute('cy', pos.y.toFixed(1));
      raf = requestAnimationFrame(loop);
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        visible = en[0].isIntersecting;
        if (visible && !raf) raf = requestAnimationFrame(loop);
      }).observe(word);
    }
    document.addEventListener('visibilitychange', function () { if (!document.hidden && visible && !raf) raf = requestAnimationFrame(loop); });
  })();

  /* ------------------------------------------------------------------
     About: the logo's construction drawing, with a CAD-style readout
     ------------------------------------------------------------------ */
  (function () {
    if (body.getAttribute('data-page') !== 'about') return;
    var hero = document.querySelector('.page-hero .wrap');
    var lead = hero && hero.querySelector('.lead');
    if (!lead) return;
    var cx = D.cx, cy = D.cy, rad = Math.PI / 180;
    function ray(a, r0, r1) {
      return '<path class="bp-ray" d="M' + (cx + r0 * Math.cos(a * rad)).toFixed(1) + ' ' + (cy + r0 * Math.sin(a * rad)).toFixed(1) + 'L' + (cx + r1 * Math.cos(a * rad)).toFixed(1) + ' ' + (cy + r1 * Math.sin(a * rad)).toFixed(1) + '"/>';
    }
    function arcMark(a0, a1, r) {
      var s = a1 - a0;
      return '<path class="bp-sweep" d="M' + (cx + r * Math.cos(a0 * rad)).toFixed(1) + ' ' + (cy + r * Math.sin(a0 * rad)).toFixed(1) + 'A' + r + ' ' + r + ' 0 ' + (Math.abs(s) > 180 ? 1 : 0) + ' ' + (s > 0 ? 1 : 0) + ' ' + (cx + r * Math.cos(a1 * rad)).toFixed(1) + ' ' + (cy + r * Math.sin(a1 * rad)).toFixed(1) + '" pathLength="1"/>';
    }
    function label(x, y, zh, enText, cls) { return '<text class="bp-t ' + (cls || '') + '" x="' + x + '" y="' + y + '">' + bi(zh, enText) + '</text>'; }
    function deg(a) { return Math.round(((a % 360) + 360) % 360) + '°'; }
    function num(a, r) { r = r || 252; return '<text class="bp-t bp-num" x="' + (cx + r * Math.cos(a * rad)).toFixed(1) + '" y="' + (cy + 5 + r * Math.sin(a * rad)).toFixed(1) + '">' + deg(a) + '</text>'; }
    var at0 = D.at[0], at1 = D.at[1], ab0 = D.ab[0], ab1 = D.ab[1];
    var guides =
      '<g class="bp-grid">' +
        '<path d="M-40 112H722M-40 139H722M-40 169H722M-40 221H722"/>' +
        '<path class="bp-axis" d="M' + cx + ' -14V318M-40 ' + cy + 'H722"/>' +
      '</g>' +
      '<g class="bp-guides">' +
        ray(at0, 30, 236) + ray(at1, 30, 236) + ray(ab0, 30, 236) + ray(ab1, 30, 236) +
        arcMark(at0, at1, 54) + arcMark(ab0, ab1, 40) +
        '<path class="bp-orbit" d="' + linePath(D.mt) + '"/>' +
        '<path class="bp-orbit" d="' + linePath(D.mb) + '"/>' +
        '<circle class="bp-o" cx="' + cx + '" cy="' + cy + '" r="5"/>' +
        '<path class="bp-corner" d="M-6 30V16H8M674 16H688V30M688 286V300H674M8 300H-6V286"/>' +
      '</g>' +
      '<g class="bp-labels">' +
        label(cx + 12, cy - 9, 'O · 轨道中心', 'O · orbit centre') +
        num(at0) + num(at1) + num(ab0, 372) + num(ab1) +
        label(722, 174, 'CAP', 'CAP', 'bp-side') + label(722, 226, 'BASE', 'BASE', 'bp-side') + label(722, 131, '中文', 'CN', 'bp-side') +
        label(768, 334, '上弧 · 收于 E', 'Upper arc · ends as E', 'bp-call bp-end') +
        label(-40, 334, '下弧 · 起于 H', 'Lower arc · begins as H', 'bp-call') +
      '</g>';
    var html = '<figure class="qc-blueprint" aria-hidden="true">' +
      '<figcaption class="bp-head"><span>QCERA · BRAND CONSTRUCTION</span><span class="bp-read">x — · y —</span></figcaption>' +
      svg('bp-svg', guides +
        '<g class="bp-draw">' + arcs('', { t: ' pathLength="1" style="--d:0"', b: ' pathLength="1" style="--d:120"' }) +
          paths(D.l, 'qb-l', function (l, i) { return ' pathLength="1" style="--d:' + (260 + i * 55) + '"'; }) +
          paths(D.c, 'qb-c', function (l, i) { return ' pathLength="1" style="--d:' + (520 + i * 40) + '"'; }) + '</g>' +
        '<g class="bp-comet"><circle class="bp-c1" r="4.5"/><circle class="bp-c2" r="4.5"/></g>' +
        '<g class="bp-cross"><path d="M-12 0H12M0 -12V12"/><circle r="22"/></g>', '-46 -18 818 362') +
      '<p class="bp-foot">' + bi('两道弧线 · 同一条轨道', 'Two arcs · one orbit', 'span') + '</p>' +
      '</figure>';
    var fig = parse(html);
    hero.parentNode.classList.add('has-blueprint');
    lead.parentNode.insertBefore(fig, lead.nextSibling);

    var sv = fig.querySelector('.bp-svg'), read = fig.querySelector('.bp-read'), cross = fig.querySelector('.bp-cross');
    var c1 = fig.querySelector('.bp-c1'), c2 = fig.querySelector('.bp-c2');
    function on() { fig.classList.add('is-on'); if (!reduced()) orbit(); }
    if ('IntersectionObserver' in window && !reduced()) {
      var io = new IntersectionObserver(function (en) {
        if (!en[0].isIntersecting) return;
        io.disconnect();
        var go = function () { setTimeout(on, 150); };
        if (introDone) go(); else (function wait() { if (introDone) go(); else setTimeout(wait, 120); })();
      }, { threshold: .25 });
      io.observe(fig);
    } else fig.classList.add('is-on', 'is-static');

    // a comet pair travels the orbit every few seconds
    function orbit() {
      var t0 = 0;
      function f(now) {
        if (!t0) t0 = now;
        var k = ((now - t0) % 5200) / 2600;
        if (k <= 1 && !document.hidden) {
          var p = ease(k), a = at(D.mt, p), b = at(D.mb, p);
          c1.setAttribute('cx', a[0].toFixed(1)); c1.setAttribute('cy', a[1].toFixed(1));
          c2.setAttribute('cx', b[0].toFixed(1)); c2.setAttribute('cy', b[1].toFixed(1));
          fig.classList.add('comet-on');
        } else fig.classList.remove('comet-on');
        requestAnimationFrame(f);
      }
      setTimeout(function () { requestAnimationFrame(f); }, 1600);
    }
    if (fineQ.matches) {
      sv.addEventListener('pointermove', function (e) {
        var m = sv.getScreenCTM(); if (!m) return;
        var pt = sv.createSVGPoint(); pt.x = e.clientX; pt.y = e.clientY;
        var q = pt.matrixTransform(m.inverse());
        cross.setAttribute('transform', 'translate(' + q.x.toFixed(1) + ' ' + q.y.toFixed(1) + ')');
        var dx = q.x - cx, dy = q.y - cy;
        read.textContent = 'x ' + q.x.toFixed(1) + ' · y ' + q.y.toFixed(1) + ' · ' + deg(Math.atan2(dy, dx) / rad);
        fig.classList.add('is-reading');
      });
      sv.addEventListener('pointerleave', function () { fig.classList.remove('is-reading'); read.textContent = 'x — · y —'; });
    }
  })();

  /* ------------------------------------------------------------------
     404: the two arcs keep circling the missing page
     ------------------------------------------------------------------ */
  (function () {
    var nf = document.querySelector('.nf .code');
    if (!nf) return;
    var stage = document.createElement('div');
    stage.className = 'nf-stage';
    nf.parentNode.insertBefore(stage, nf);
    stage.appendChild(parse(svg('nf-orbit', '<g class="nf-spin"><path class="nf-t" d="' + linePath(D.mt) + '"/><path class="nf-b" d="' + linePath(D.mb) + '"/></g>', '100 -40 506 402')));
    stage.appendChild(nf);
  })();
})();
