import{i as we,t as se}from"../chunks/projects.ebb82d15.js";import{s as he,e as oe,i as T,n as J,d as h,f as y,a as M,l as H,g as E,h as I,c as S,m as K,I as Z,k as me,J as te,j as $,L as m,M as A,x as ye,p as Q,u as ge,P as U,N as le}from"../chunks/scheduler.8e784f9d.js";import{S as ve,i as $e,b as z,d as B,m as L,t as V,c as W,a as x,e as R,g as X}from"../chunks/index.cca70a41.js";import{g as Y,U as ee,e as G}from"../chunks/UIcon.80bda872.js";import{b as ae}from"../chunks/paths.639435cc.js";import{C as Ee}from"../chunks/CardLogo.2698d05d.js";import{M as Ce}from"../chunks/app.d33e099a.js";import{B as je,M as Ie}from"../chunks/Banner.e5baa937.js";import{T as De}from"../chunks/TabTitle.a6d2b5ef.js";import{C as be}from"../chunks/Chip.cf3df41a.js";import{C as ke}from"../chunks/CardDivider.6cc8e9d9.js";function xe({params:n}){if(n.slug)return{project:we.find(l=>l.slug===n.slug)}}const nt=Object.freeze(Object.defineProperty({__proto__:null,load:xe},Symbol.toStringTag,{value:"Module"}));function ie(n){var g;let e,l,t,r,a,o,s,i=((g=n[0])==null?void 0:g.label)+"",f,d,C,u="Click outside the frame to close",b,p;return{c(){e=y("div"),l=y("div"),t=y("div"),r=y("iframe"),o=M(),s=y("p"),f=H(i),d=M(),C=y("p"),C.textContent=u,this.h()},l(w){e=E(w,"DIV",{class:!0});var k=I(e);l=E(k,"DIV",{class:!0});var q=I(l);t=E(q,"DIV",{class:!0});var N=I(t);r=E(N,"IFRAME",{style:!0,src:!0,width:!0,height:!0,allow:!0}),I(r).forEach(h),o=S(N),s=E(N,"P",{class:!0});var j=I(s);f=K(j,i),j.forEach(h),N.forEach(h),d=S(q),C=E(q,"P",{class:!0,["data-svelte-h"]:!0}),Z(C)!=="svelte-hpptvy"&&(C.textContent=u),q.forEach(h),k.forEach(h),this.h()},h(){var w;me(r,"display","block"),te(r.src,a=`${(w=n[0])==null?void 0:w.src}`)||$(r,"src",a),$(r,"width","1000"),$(r,"height","480"),$(r,"allow","autoplay"),$(s,"class","font-italic m-t-auto m-x-auto m-b-5 inline-flex bg-[var(--main-60)] border-solid border-1px border-[var(--border)] p-x-5 p-2 rounded-xl"),$(t,"class","aspect-video col bg-contain w-100% rounded-xl bg-no-repeat bg-contains bg-center"),$(C,"class","text-[var(--accent-text)] text-0.7em"),$(l,"class","w-full w-100% md:w-80% lg:w-70% col text-center gap-5 bg-[var(--main)] border-solid border-1px border-[var(--border)] p-5 rounded-xl"),$(e,"class","fixed inset-0px top-51px bg-[#000000dd] col-center p-50px")},m(w,k){T(w,e,k),m(e,l),m(l,t),m(t,r),m(t,o),m(t,s),m(s,f),m(l,d),m(l,C),b||(p=[A(l,"click",Pe),A(l,"keydown",n[7]),A(l,"keypress",n[8]),A(l,"keyup",n[9]),A(l,"keyup",n[10]),A(e,"click",function(){ye(n[1])&&n[1].apply(this,arguments)}),A(e,"click",Me),A(e,"keydown",n[3]),A(e,"keypress",n[4]),A(e,"keyup",n[5]),A(e,"keyup",n[6])],b=!0)},p(w,k){var q,N;n=w,k&1&&!te(r.src,a=`${(q=n[0])==null?void 0:q.src}`)&&$(r,"src",a),k&1&&i!==(i=((N=n[0])==null?void 0:N.label)+"")&&Q(f,i)},d(w){w&&h(e),b=!1,ge(p)}}}function Ve(n){let e,l=n[2]&&ie(n);return{c(){l&&l.c(),e=oe()},l(t){l&&l.l(t),e=oe()},m(t,r){l&&l.m(t,r),T(t,e,r)},p(t,[r]){t[2]?l?l.p(t,r):(l=ie(t),l.c(),l.m(e.parentNode,e)):l&&(l.d(1),l=null)},i:J,o:J,d(t){t&&h(e),l&&l.d(t)}}}const Pe=n=>n.stopPropagation(),Me=n=>n.stopPropagation();function Se(n,e,l){let t,{screenshot:r=void 0}=e,{onClose:a=()=>{l(0,r=void 0)}}=e;function o(p){U.call(this,n,p)}function s(p){U.call(this,n,p)}function i(p){U.call(this,n,p)}function f(p){U.call(this,n,p)}function d(p){U.call(this,n,p)}function C(p){U.call(this,n,p)}function u(p){U.call(this,n,p)}function b(p){U.call(this,n,p)}return n.$$set=p=>{"screenshot"in p&&l(0,r=p.screenshot),"onClose"in p&&l(1,a=p.onClose)},n.$$.update=()=>{n.$$.dirty&1&&l(2,t=typeof r<"u")},[r,a,t,o,s,i,f,d,C,u,b]}class Ne extends ve{constructor(e){super(),$e(this,e,Se,Ve,he,{screenshot:0,onClose:1})}}function ce(n,e,l){const t=n.slice();return t[11]=e[l],t[13]=l,t}function fe(n,e,l){const t=n.slice();return t[11]=e[l],t}function ue(n,e,l){const t=n.slice();return t[11]=e[l],t}function Te(n){let e,l,t,r,a,o,s,i,f,d,C,u,b,p;l=new je({props:{img:Y(n[0].project.logo),$$slots:{default:[Re]},$$scope:{ctx:n}}});const g=[qe,Ue],w=[];function k(D,c){return D[0].project.description?0:1}o=k(n),s=w[o]=g[o](n),d=new ke({});const q=[Oe,Fe],N=[];function j(D,c){return D[4].length>0?0:1}return u=j(n),b=N[u]=q[u](n),{c(){e=y("div"),z(l.$$.fragment),t=M(),r=y("div"),a=y("div"),s.c(),i=M(),f=y("div"),z(d.$$.fragment),C=M(),b.c(),this.h()},l(D){e=E(D,"DIV",{class:!0});var c=I(e);B(l.$$.fragment,c),t=S(c),r=E(c,"DIV",{class:!0});var _=I(r);a=E(_,"DIV",{class:!0});var P=I(a);s.l(P),P.forEach(h),i=S(_),f=E(_,"DIV",{class:!0});var v=I(f);B(d.$$.fragment,v),v.forEach(h),C=S(_),b.l(_),_.forEach(h),c.forEach(h),this.h()},h(){$(a,"class","px-10px m-y-5"),$(f,"class","w-100% m-t-8"),$(r,"class","pt-3 pb-1 overflow-x-hidden w-full"),$(e,"class","flex flex-col items-center overflow-x-hidden")},m(D,c){T(D,e,c),L(l,e,null),m(e,t),m(e,r),m(r,a),w[o].m(a,null),m(r,i),m(r,f),L(d,f,null),m(r,C),N[u].m(r,null),p=!0},p(D,c){const _={};c&1&&(_.img=Y(D[0].project.logo)),c&262145&&(_.$$scope={dirty:c,ctx:D}),l.$set(_);let P=o;o=k(D),o===P?w[o].p(D,c):(X(),V(w[P],1,1,()=>{w[P]=null}),W(),s=w[o],s?s.p(D,c):(s=w[o]=g[o](D),s.c()),x(s,1),s.m(a,null)),b.p(D,c)},i(D){p||(x(l.$$.fragment,D),x(s),x(d.$$.fragment,D),x(b),p=!0)},o(D){V(l.$$.fragment,D),V(s),V(d.$$.fragment,D),V(b),p=!1},d(D){D&&h(e),R(l),w[o].d(),R(d),N[u].d()}}}function Ae(n){let e,l,t,r,a="Could not load project data...",o;return l=new ee({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=y("div"),z(l.$$.fragment),t=M(),r=y("p"),r.textContent=a,this.h()},l(s){e=E(s,"DIV",{class:!0});var i=I(e);B(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(r)!=="svelte-18mwztv"&&(r.textContent=a),i.forEach(h),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),o=!0},p:J,i(s){o||(x(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),R(l)}}}function ze(n){let e=n[0].project.name+"",l;return{c(){l=H(e)},l(t){l=K(t,e)},m(t,r){T(t,l,r)},p(t,r){r&1&&e!==(e=t[0].project.name+"")&&Q(l,e)},d(t){t&&h(l)}}}function Be(n){let e,l,t,r,a=n[11].label+"",o,s,i;return l=new ee({props:{icon:"i-carbon-link"}}),{c(){e=y("div"),z(l.$$.fragment),t=M(),r=y("span"),o=H(a),s=M(),this.h()},l(f){e=E(f,"DIV",{class:!0});var d=I(e);B(l.$$.fragment,d),t=S(d),r=E(d,"SPAN",{});var C=I(r);o=K(C,a),C.forEach(h),d.forEach(h),s=S(f),this.h()},h(){$(e,"class","row-center gap-2")},m(f,d){T(f,e,d),L(l,e,null),m(e,t),m(e,r),m(r,o),T(f,s,d),i=!0},p(f,d){(!i||d&1)&&a!==(a=f[11].label+"")&&Q(o,a)},i(f){i||(x(l.$$.fragment,f),i=!0)},o(f){V(l.$$.fragment,f),i=!1},d(f){f&&(h(e),h(s)),R(l)}}}function de(n){let e,l;return e=new be({props:{href:n[11].to,$$slots:{default:[Be]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.href=t[11].to),r&262145&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Le(n){let e,l,t,r=n[11].name+"",a,o,s;return e=new Ee({props:{src:Y(n[11].logo),alt:n[11].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){z(e.$$.fragment),l=M(),t=y("span"),a=H(r),o=M(),this.h()},l(i){B(e.$$.fragment,i),l=S(i),t=E(i,"SPAN",{class:!0});var f=I(t);a=K(f,r),f.forEach(h),o=S(i),this.h()},h(){$(t,"class","text-[0.9em]")},m(i,f){L(e,i,f),T(i,l,f),T(i,t,f),m(t,a),T(i,o,f),s=!0},p(i,f){const d={};f&1&&(d.src=Y(i[11].logo)),f&1&&(d.alt=i[11].name),e.$set(d),(!s||f&1)&&r!==(r=i[11].name+"")&&Q(a,r)},i(i){s||(x(e.$$.fragment,i),s=!0)},o(i){V(e.$$.fragment,i),s=!1},d(i){i&&(h(l),h(t),h(o)),R(e,i)}}}function pe(n){let e,l;return e=new be({props:{classes:"inline-flex flex-row items-center justify-center",href:`${ae}/skills/${n[11].slug}`,$$slots:{default:[Le]},$$scope:{ctx:n}}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.href=`${ae}/skills/${t[11].slug}`),r&262145&&(a.$$scope={dirty:r,ctx:t}),e.$set(a)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Re(n){let e,l,t,r,a,o=n[0].project.type+"",s,i,f,d,C,u,b,p,g;t=new Ce({props:{$$slots:{default:[ze]},$$scope:{ctx:n}}}),d=new ke({});let w=G(n[0].project.links),k=[];for(let c=0;c<w.length;c+=1)k[c]=de(ue(n,w,c));const q=c=>V(k[c],1,1,()=>{k[c]=null});let N=G(n[0].project.skills),j=[];for(let c=0;c<N.length;c+=1)j[c]=pe(fe(n,N,c));const D=c=>V(j[c],1,1,()=>{j[c]=null});return{c(){e=y("div"),l=y("div"),z(t.$$.fragment),r=M(),a=y("p"),s=H(o),i=M(),f=y("div"),z(d.$$.fragment),C=M(),u=y("div");for(let c=0;c<k.length;c+=1)k[c].c();b=M(),p=y("div");for(let c=0;c<j.length;c+=1)j[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var _=I(e);l=E(_,"DIV",{class:!0});var P=I(l);B(t.$$.fragment,P),P.forEach(h),r=S(_),a=E(_,"P",{class:!0});var v=I(a);s=K(v,o),v.forEach(h),i=S(_),f=E(_,"DIV",{class:!0});var F=I(f);B(d.$$.fragment,F),F.forEach(h),C=S(_),u=E(_,"DIV",{class:!0});var re=I(u);for(let O=0;O<k.length;O+=1)k[O].l(re);re.forEach(h),b=S(_),p=E(_,"DIV",{class:!0});var ne=I(p);for(let O=0;O<j.length;O+=1)j[O].l(ne);ne.forEach(h),_.forEach(h),this.h()},h(){$(l,"class","text-0.9em"),$(a,"class","font-300 text-center text-[var(--tertiary-text)] m-y-2"),$(f,"class","w-75%"),$(u,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),$(p,"class","row-center flex-wrap m-b-2"),$(e,"class","col-center p-y-20")},m(c,_){T(c,e,_),m(e,l),L(t,l,null),m(e,r),m(e,a),m(a,s),m(e,i),m(e,f),L(d,f,null),m(e,C),m(e,u);for(let P=0;P<k.length;P+=1)k[P]&&k[P].m(u,null);m(e,b),m(e,p);for(let P=0;P<j.length;P+=1)j[P]&&j[P].m(p,null);g=!0},p(c,_){const P={};if(_&262145&&(P.$$scope={dirty:_,ctx:c}),t.$set(P),(!g||_&1)&&o!==(o=c[0].project.type+"")&&Q(s,o),_&1){w=G(c[0].project.links);let v;for(v=0;v<w.length;v+=1){const F=ue(c,w,v);k[v]?(k[v].p(F,_),x(k[v],1)):(k[v]=de(F),k[v].c(),x(k[v],1),k[v].m(u,null))}for(X(),v=w.length;v<k.length;v+=1)q(v);W()}if(_&1){N=G(c[0].project.skills);let v;for(v=0;v<N.length;v+=1){const F=fe(c,N,v);j[v]?(j[v].p(F,_),x(j[v],1)):(j[v]=pe(F),j[v].c(),x(j[v],1),j[v].m(p,null))}for(X(),v=N.length;v<j.length;v+=1)D(v);W()}},i(c){if(!g){x(t.$$.fragment,c),x(d.$$.fragment,c);for(let _=0;_<w.length;_+=1)x(k[_]);for(let _=0;_<N.length;_+=1)x(j[_]);g=!0}},o(c){V(t.$$.fragment,c),V(d.$$.fragment,c),k=k.filter(Boolean);for(let _=0;_<k.length;_+=1)V(k[_]);j=j.filter(Boolean);for(let _=0;_<j.length;_+=1)V(j[_]);g=!1},d(c){c&&h(e),R(t),R(d),le(k,c),le(j,c)}}}function Ue(n){let e,l,t,r,a="No description",o;return l=new ee({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=y("div"),z(l.$$.fragment),t=M(),r=y("p"),r.textContent=a,this.h()},l(s){e=E(s,"DIV",{class:!0});var i=I(e);B(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(r)!=="svelte-1ugej71"&&(r.textContent=a),i.forEach(h),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),o=!0},p:J,i(s){o||(x(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),R(l)}}}function qe(n){let e,l;return e=new Ie({props:{content:n[0].project.description}}),{c(){z(e.$$.fragment)},l(t){B(e.$$.fragment,t)},m(t,r){L(e,t,r),l=!0},p(t,r){const a={};r&1&&(a.content=t[0].project.description),e.$set(a)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){V(e.$$.fragment,t),l=!1},d(t){R(e,t)}}}function Fe(n){let e,l,t,r,a="No screenshots",o;return l=new ee({props:{icon:"i-carbon-image",classes:"text-3.5em"}}),{c(){e=y("div"),z(l.$$.fragment),t=M(),r=y("p"),r.textContent=a,this.h()},l(s){e=E(s,"DIV",{class:!0});var i=I(e);B(l.$$.fragment,i),t=S(i),r=E(i,"P",{class:!0,["data-svelte-h"]:!0}),Z(r)!=="svelte-s36p3y"&&(r.textContent=a),i.forEach(h),this.h()},h(){$(r,"class","font-300"),$(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(s,i){T(s,e,i),L(l,e,null),m(e,t),m(e,r),o=!0},p:J,i(s){o||(x(l.$$.fragment,s),o=!0)},o(s){V(l.$$.fragment,s),o=!1},d(s){s&&h(e),R(l)}}}function Oe(n){let e,l=G(n[4]),t=[];for(let r=0;r<l.length;r+=1)t[r]=_e(ce(n,l,r));return{c(){e=y("div");for(let r=0;r<t.length;r+=1)t[r].c();this.h()},l(r){e=E(r,"DIV",{class:!0});var a=I(e);for(let o=0;o<t.length;o+=1)t[o].l(a);a.forEach(h),this.h()},h(){$(e,"class","px-10px grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-t-10 ")},m(r,a){T(r,e,a);for(let o=0;o<t.length;o+=1)t[o]&&t[o].m(e,null)},p(r,a){if(a&18){l=G(r[4]);let o;for(o=0;o<l.length;o+=1){const s=ce(r,l,o);t[o]?t[o].p(s,a):(t[o]=_e(s),t[o].c(),t[o].m(e,null))}for(;o<t.length;o+=1)t[o].d(1);t.length=l.length}},i:J,o:J,d(r){r&&h(e),le(t,r)}}}function _e(n){let e,l,t,r,a,o,s,i=n[11].label+"",f,d,C,u;function b(){return n[9](n[13])}return{c(){e=y("div"),l=y("div"),t=M(),r=y("iframe"),o=M(),s=y("p"),f=H(i),d=M(),this.h()},l(p){e=E(p,"DIV",{class:!0});var g=I(e);l=E(g,"DIV",{class:!0}),I(l).forEach(h),t=S(g),r=E(g,"IFRAME",{style:!0,src:!0,width:!0,height:!0,allow:!0}),I(r).forEach(h),o=S(g),s=E(g,"P",{class:!0});var w=I(s);f=K(w,i),w.forEach(h),d=S(g),g.forEach(h),this.h()},h(){$(l,"class","screenshot aspect-video bg-contain w-100% cursor-pointer svelte-o4z7e5"),me(r,"pointer-events","none"),te(r.src,a=`${n[11].src}`)||$(r,"src",a),$(r,"width","640"),$(r,"height","480"),$(r,"allow","autoplay"),$(s,"class","text-[var(--tertiary-text)] font-300"),$(e,"class","col-center gap-3 overflow-hidden w-100% h-100% rounded-10px")},m(p,g){T(p,e,g),m(e,l),m(e,t),m(e,r),m(e,o),m(e,s),m(s,f),m(e,d),C||(u=[A(e,"click",b),A(e,"keydown",n[5]),A(e,"keypress",n[6]),A(e,"keyup",n[7]),A(e,"keyup",n[8])],C=!0)},p(p,g){n=p},d(p){p&&h(e),C=!1,ge(u)}}}function Je(n){let e,l,t,r,a,o,s,i;e=new De({props:{title:n[2]}});const f=[Ae,Te],d=[];function C(u,b){return u[0].project===void 0?0:1}return r=C(n),a=d[r]=f[r](n),s=new Ne({props:{screenshot:n[3],onClose:n[10]}}),{c(){z(e.$$.fragment),l=M(),t=y("div"),a.c(),o=M(),z(s.$$.fragment),this.h()},l(u){B(e.$$.fragment,u),l=S(u),t=E(u,"DIV",{class:!0});var b=I(t);a.l(b),b.forEach(h),o=S(u),B(s.$$.fragment,u),this.h()},h(){$(t,"class","pb-10 overflow-x-hidden col flex-1")},m(u,b){L(e,u,b),T(u,l,b),T(u,t,b),d[r].m(t,null),T(u,o,b),L(s,u,b),i=!0},p(u,[b]){const p={};b&4&&(p.title=u[2]),e.$set(p);let g=r;r=C(u),r===g?d[r].p(u,b):(X(),V(d[g],1,1,()=>{d[g]=null}),W(),a=d[r],a?a.p(u,b):(a=d[r]=f[r](u),a.c()),x(a,1),a.m(t,null));const w={};b&8&&(w.screenshot=u[3]),b&2&&(w.onClose=u[10]),s.$set(w)},i(u){i||(x(e.$$.fragment,u),x(a),x(s.$$.fragment,u),i=!0)},o(u){V(e.$$.fragment,u),V(a),V(s.$$.fragment,u),i=!1},d(u){u&&(h(l),h(t),h(o)),R(e,u),d[r].d(),R(s,u)}}}function Ge(n,e,l){var p;let t,r,{data:a}=e;const o=((p=a.project)==null?void 0:p.screenshots)??[];let s;function i(g){U.call(this,n,g)}function f(g){U.call(this,n,g)}function d(g){U.call(this,n,g)}function C(g){U.call(this,n,g)}const u=g=>l(1,s=g),b=()=>l(1,s=void 0);return n.$$set=g=>{"data"in g&&l(0,a=g.data)},n.$$.update=()=>{n.$$.dirty&2&&l(3,t=typeof s<"u"&&o[s]?o[s]:void 0),n.$$.dirty&1&&l(2,r=a.project?`${a.project.name} - ${se}`:se)},[a,s,r,t,o,i,f,d,C,u,b]}class st extends ve{constructor(e){super(),$e(this,e,Ge,Je,he,{data:0})}}export{st as component,nt as universal};
