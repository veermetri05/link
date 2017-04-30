var cdxEditorLink=function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=6)}([function(e,t,n){"use strict";e.exports=function(){function e(){var e=document.createElement("INPUT");return e.type="input",e.classList.add(d.inputElement),e.placeholder="Paste Link...",e}function t(){var e=document.createElement("DIV");return e.classList.add(d.linkHolder),e}function r(e){var n=t(),r=document.createElement("DIV"),o=document.createElement("IMG"),i=document.createElement("DIV"),l=document.createElement("A");return n.classList.add(d.linkHolder,d.holderWithSmallCover),n.dataset.style="smallCover",o.src=e.image,o.classList.add(d.cover,d.smallCover),r.textContent=e.title,r.classList.add(d.embedTitle),i.textContent=e.description,i.classList.add(d.description),l.textContent=e.linkText,l.href=e.linkUrl,l.classList.add(d.anchor),n.appendChild(o),n.appendChild(r),n.appendChild(i),n.appendChild(l),n}function o(e){var n=t(),r=document.createElement("IMG"),o=document.createElement("DIV"),i=document.createElement("DIV"),l=document.createElement("DIV"),a=document.createElement("A");return n.classList.add(d.linkHolder,d.holderWithBigCover),n.dataset.style="bigCover",r.src=e.image,r.classList.add(d.cover,d.bigCover),o.textContent=e.title,o.classList.add(d.embedTitle),l.textContent=e.description,l.classList.add(d.description),a.textContent=e.linkText,a.href=e.linkUrl,a.classList.add(d.anchor),i.classList.add(d.contentWrapper),i.appendChild(o),i.appendChild(l),i.appendChild(a),n.appendChild(r),n.appendChild(i),n}function i(){var e=document.createElement("DIV");return e.classList.add(d.linkSettings),e}function l(e,t){var n=document.createElement("SPAN");return n.textContent=e[t],n.classList.add(d.linkSettingsItem),n}function a(){var e=document.createElement("LABEL");return e.classList.add(d.label),e}function c(e){var t=codex.editor.content.currentNode,n=e||t.querySelector("."+d.linkHolder),r=t.querySelector("."+d.embedTitle),o=t.querySelector("."+d.cover),i=t.querySelector("."+d.description),l=t.querySelector("."+d.anchor),a={};return a.style=n.dataset.style,a.image=o.src,a.title=r.textContent,a.description=i.innerHTML,a.linkText=l.innerHTML,a.linkUrl=l.href,a}var d={linkHolder:"cdx-link-tool",holderWithSmallCover:"cdx-link-tool--small-cover",holderWithBigCover:"cdx-link-tool--big-cover",contentWrapper:"cdx-link-tool-wrapper",embedTitle:"cdx-link-tool__title",cover:"cdx-link-tool__cover",smallCover:"cdx-link-tool__cover--small",bigCover:"cdx-link-tool__cover--big",description:"cdx-link-tool__description",anchor:"cdx-link-tool__anchor",inputElement:"cdx-link-tool__input",label:"cdx-link-tool__label",labelLoading:"cdx-link-tool__label--loading",labelError:"cdx-link-tool__label--error",linkSettings:"link-settings",linkSettingsItem:"link-settings__item"};return n(7),{css:d,drawInput:e,drawLabel:a,drawLinkHolder:t,drawEmbedWithSmallCover:r,drawEmbedWithBigCover:o,drawSettingsHolder:i,drawSettingsItem:l,getDataFromHTML:c}}()},function(e,t,n){"use strict";e.exports=function(){function e(e){var t=void 0;if(e&&e.style)switch(e.style){case"smallCover":t=r.drawEmbedWithSmallCover(e);break;case"bigCover":t=r.drawEmbedWithBigCover(e)}else{var n=void 0;t=r.drawLinkHolder(),n=r.drawInput(),n.addEventListener("paste",o.URLPasted.bind(n)),t.appendChild(n)}return t}function t(t){return e(t)}return t}();var r=n(0),o=n(5)},function(e,t,n){"use strict";var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports=function(e){return e.config=null,e.prepare=function(t){return new Promise(function(n,o){"object"===(void 0===t?"undefined":r(t))&&t.fetchURL?(e.config=t,n()):o("Cant initialize plugin without fetch server")})},e}({})},function(e,t,n){"use strict";e.exports=function(){function e(e){var t={tags:{}},n={tags:{p:{}}},r={tags:{p:{},a:{href:!0,target:"_blank",rel:"nofollow"},b:{},i:{}}};return"bigCover"===e.style&&"smallCover"===e.style||(e.style="smallCover"),e.title=codex.editor.sanitizer.clean(e.title,n),e.description=codex.editor.sanitizer.clean(e.description,r),e.linkText=codex.editor.sanitizer.clean(e.linkText,t),e.linkUrl=codex.editor.sanitizer.clean(e.linkUrl,t),e.image=codex.editor.sanitizer.clean(e.image,t),e}function t(t){return e(r.getDataFromHTML(t))}return t}();var r=n(0)},function(e,t,n){"use strict";e.exports=function(){function e(){var e=r.drawSettingsHolder(),n={smallCover:"Маленькая обложка",bigCover:"Большая обложка"};for(var o in n){var i=r.drawSettingsItem(n,o);e.appendChild(i),i.dataset.style=o,i.addEventListener("click",t)}return e}function t(){var e=codex.editor.content.currentNode;switch(this.dataset.style){case"smallCover":n(e);break;case"bigCover":i(e)}codex.editor.toolbar.settings.close()}function n(e){var t=r.getDataFromHTML(),n=void 0;t.style="smallCover",n=o(t),codex.editor.content.switchBlock(e,n)}function i(e){var t=r.getDataFromHTML(),n=void 0;t.style="bigCover",n=o(t),codex.editor.content.switchBlock(e,n)}return e}();var r=n(0),o=n(1)},function(e,t,n){"use strict";e.exports=function(){function e(e){var i=this,a=void 0,c=void 0;a=e.clipboardData||window.clipboardData,c=a.getData("Text"),i.classList.remove(r.css.labelError),codex.editor.core.ajax({url:o.config.fetchURL+"?url="+c,type:"GET",beforeSend:t.bind(i),success:n,error:l.bind(i.parentNode)})}function t(){var e=this,t=r.drawLabel();return e.parentNode.insertBefore(t,e),window.setTimeout(function(){t.classList.add(r.css.labelLoading)},50),e.parentNode}function n(e){var t=codex.editor.content.currentNode,n=void 0,r=void 0;try{n=JSON.parse(e),n.style=o.config.defaultStyle,r=i(n),codex.editor.content.switchBlock(t,r)}catch(e){l.call(this)}}function l(e){var t=this,n=t.querySelector("."+r.css.label),o=t.querySelector("."+r.css.inputElement);n.remove(),o.classList.add(r.css.labelError)}return{URLPasted:e}}();var r=n(0),o=n(2),i=n(1)},function(e,t,n){"use strict";e.exports=function(){var e=n(1),t=n(3),r=n(4);return{prepare:n(2).prepare,render:e,save:t,settings:r}}()},function(e,t){}]);