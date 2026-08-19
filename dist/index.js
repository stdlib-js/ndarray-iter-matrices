"use strict";var E=function(i,r){return function(){try{return r||i((r={exports:{}}).exports,r),r.exports}catch(e){throw r=0,e}}};var h=E(function(G,q){"use strict";var y=require("@stdlib/utils-define-nonenumerable-read-only-property"),j=require("@stdlib/assert-is-plain-object"),T=require("@stdlib/assert-is-boolean").isPrimitive,F=require("@stdlib/assert-is-ndarray-like"),P=require("@stdlib/ndarray-base-assert-is-read-only"),S=require("@stdlib/assert-has-own-property"),g=require("@stdlib/symbol-iterator"),x=require("@stdlib/array-base-zeros"),C=require("@stdlib/ndarray-shape"),L=require("@stdlib/ndarray-base-numel"),R=require("@stdlib/ndarray-base-slice"),V=require("@stdlib/ndarray-base-next-cartesian-index").assign,k=require("@stdlib/slice-base-args2multislice"),v=require("@stdlib/string-format");function p(i){var r,e,n,t,u,d,a,o,w,s,m;if(!F(i))throw new TypeError(v("invalid argument. First argument must be an ndarray. Value: `%s`.",i));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!j(r))throw new TypeError(v("invalid argument. Options argument must be an object. Value: `%s`.",r));if(S(r,"readonly")){if(!T(r.readonly))throw new TypeError(v("invalid option. `%s` option must be a boolean. Option: `%s`.","readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&P(i))throw new Error(v("invalid option. Cannot write to read-only array."))}}if(e=C(i),n=e.length,n<3)throw new TypeError("invalid argument. First argument must be an ndarray having at least three dimensions.");return s=L(e),s===0&&(d=!0),s/=e[n-1]*e[n-2],o=n-3,w=e[o],m=-1,a=x(n),a[n-1]=null,a[n-2]=null,u={},y(u,"next",b),y(u,"return",c),g&&y(u,g,O),u;function b(){var l,f;return m+=1,d||m>=s?{done:!0}:(l=k(a),f=(a[o]+1)%w,a[o]=f,f===0&&(a=V(e,"row-major",a,o-1,a)),{value:R(i,l,!0,t.writable),done:!1})}function c(l){return d=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return p(i,t)}}q.exports=p});var z=h();module.exports=z;
/**
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
