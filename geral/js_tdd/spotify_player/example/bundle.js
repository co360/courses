!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var u in e)n.d(r,u,function(t){return e[t]}.bind(null,u));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=2)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t={Authorization:"Bearer ".concat(e)};return{search:function(e,n){return(0,r.search)(e,n,t)},searchArtists:function(e){return(0,r.searchArtists)(e,t)},searchAlbums:function(e){return(0,r.searchAlbums)(e,t)},searchTracks:function(e){return(0,r.searchTracks)(e,t)},searchPlaylists:function(e){return(0,r.searchPlaylists)(e,t)}}};var r=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.search=c,t.searchArtists=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(e,"artist",t)},t.searchAlbums=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(e,"album",t)},t.searchTracks=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(e,"track",t)},t.searchPlaylists=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return c(e,"playlist",t)};var r="https://api.spotify.com/v1",u=function(){return function(e){return e.json()}};function c(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c="".concat(r,"/search?q=").concat(e,"&type=").concat(t);return fetch(c,{headers:n}).then(u())}},function(e,t,n){"use strict";n.r(t);var r=n(0);function u(e,t){const n=function(e){return e.map(e=>`\n  <div class="menu-item">\n    <img class="menu-item__image" src="${e.images[2].url}" alt="album">\n    <div class="menu-item__description">\n      <p class="menu-item__title">${e.name}</p>\n      <p class="menu-item__subtitle">${e.artists[0].name}</p>\n    </div>\n  </div>`).join("")}(e);t.innerHTML=n}n.n(r)()("BQD9-iY2yZfluXTRA7Vf7qWg9m6zLT5LSMNDzWOYxm75fJTNnbk2VH8cNkjLlvMWqB5Xx8nKfeFNVuygltUtXZSQW9he1a_Nxn3-38qQAHdgh_sr37dZ3Cpc1tgQDVl8atMJPWx6NiyY").searchAlbums("Linkin Park").then(({albums:e})=>e).then(({items:e})=>e).then(e=>u(e,document.querySelector("[data-menu-albums]"))).catch(console.error)}]);