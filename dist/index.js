"use strict";var E=function(a,r){return function(){return r||a((r={exports:{}}).exports,r),r.exports}};var h=E(function(G,q){
var y=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),j=require('@stdlib/assert-is-plain-object/dist'),T=require('@stdlib/assert-is-boolean/dist').isPrimitive,F=require('@stdlib/assert-is-ndarray-like/dist'),P=require('@stdlib/ndarray-base-assert-is-read-only/dist'),S=require('@stdlib/assert-has-own-property/dist'),g=require('@stdlib/symbol-iterator/dist'),x=require('@stdlib/array-base-zeros/dist'),C=require('@stdlib/ndarray-shape/dist'),L=require('@stdlib/ndarray-base-numel/dist'),R=require('@stdlib/ndarray-base-slice/dist'),V=require('@stdlib/ndarray-base-next-cartesian-index/dist').assign,k=require('@stdlib/slice-base-args2multislice/dist'),v=require('@stdlib/error-tools-fmtprodmsg/dist');function p(a){var r,n,i,t,u,d,e,o,w,s,m;if(!F(a))throw new TypeError(v('1lN4f',a));if(t={writable:!1},arguments.length>1){if(r=arguments[1],!j(r))throw new TypeError(v('1lN2V',r));if(S(r,"readonly")){if(!T(r.readonly))throw new TypeError(v('1lN2o',"readonly",r.readonly));if(t.writable=!r.readonly,t.writable&&P(a))throw new Error(v('1lNF4'))}}if(n=C(a),i=n.length,i<3)throw new TypeError(v('1lNFA'));return s=L(n),s===0&&(d=!0),s/=n[i-1]*n[i-2],o=i-3,w=n[o],m=-1,e=x(i),e[i-1]=null,e[i-2]=null,u={},y(u,"next",b),y(u,"return",c),g&&y(u,g,O),u;function b(){var l,f;return m+=1,d||m>=s?{done:!0}:(l=k(e),f=(e[o]+1)%w,e[o]=f,f===0&&(e=V(n,"row-major",e,o-1,e)),{value:R(a,l,!0,t.writable),done:!1})}function c(l){return d=!0,arguments.length?{value:l,done:!0}:{done:!0}}function O(){return p(a,t)}}q.exports=p
});var z=h();module.exports=z;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
