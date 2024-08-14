import{i as xe,t as oe}from"../chunks/experience.89798734.js";import{s as ke,a as y,f as w,c as T,g as E,h as D,d as _,j as C,i as P,L as $,I as de,n as he,l as A,m as L,p as J,N as ce}from"../chunks/scheduler.8e784f9d.js";import{S as we,i as Ee,b as S,d as M,m as j,t as k,c as Y,a as x,e as B,g as Z}from"../chunks/index.cca70a41.js";import{g as ee,U as re,e as X}from"../chunks/UIcon.4685ec6d.js";import{b as fe}from"../chunks/paths.6dee5412.js";import{g as ue,M as Ce}from"../chunks/app.d33e099a.js";import{C as De}from"../chunks/CardLogo.2698d05d.js";import{B as Ie,M as Ve}from"../chunks/Banner.e5baa937.js";import{T as ye}from"../chunks/TabTitle.a6d2b5ef.js";import{C as ge}from"../chunks/Chip.cf3df41a.js";import{C as Te}from"../chunks/CardDivider.6cc8e9d9.js";function Pe({params:o}){if(o.slug)return{experience:xe.find(l=>l.slug===o.slug)}}const Ze=Object.freeze(Object.defineProperty({__proto__:null,load:Pe},Symbol.toStringTag,{value:"Module"}));function pe(o,e,l){const t=o.slice();return t[2]=e[l],t}function me(o,e,l){const t=o.slice();return t[2]=e[l],t}function Se(o){let e,l,t,n,r,f,a,s;l=new Ie({props:{img:ee(o[0].experience.logo),$$slots:{default:[Ae]},$$scope:{ctx:o}}});const m=[Ue,Le],i=[];function b(d,v){return d[0].experience.description?0:1}return f=b(o),a=i[f]=m[f](o),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("div"),r=w("div"),a.c(),this.h()},l(d){e=E(d,"DIV",{class:!0});var v=D(e);M(l.$$.fragment,v),t=T(v),n=E(v,"DIV",{class:!0});var N=D(n);r=E(N,"DIV",{class:!0});var V=D(r);a.l(V),V.forEach(_),N.forEach(_),v.forEach(_),this.h()},h(){C(r,"class","px-10px m-y-5"),C(n,"class","pt-3 pb-1 overflow-x-hidden w-full"),C(e,"class","flex flex-col items-center overflow-x-hidden")},m(d,v){P(d,e,v),j(l,e,null),$(e,t),$(e,n),$(n,r),i[f].m(r,null),s=!0},p(d,v){const N={};v&1&&(N.img=ee(d[0].experience.logo)),v&129&&(N.$$scope={dirty:v,ctx:d}),l.$set(N);let V=f;f=b(d),f===V?i[f].p(d,v):(Z(),k(i[V],1,1,()=>{i[V]=null}),Y(),a=i[f],a?a.p(d,v):(a=i[f]=m[f](d),a.c()),x(a,1),a.m(r,null))},i(d){s||(x(l.$$.fragment,d),x(a),s=!0)},o(d){k(l.$$.fragment,d),k(a),s=!1},d(d){d&&_(e),B(l),i[f].d()}}}function Me(o){let e,l,t,n,r="Could not load experience data...",f;return l=new re({props:{icon:"i-carbon-cube",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=D(e);M(l.$$.fragment,s),t=T(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-1o82fhi"&&(n.textContent=r),s.forEach(_),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--accent-text)]")},m(a,s){P(a,e,s),j(l,e,null),$(e,t),$(e,n),f=!0},p:he,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),B(l)}}}function je(o){let e=o[0].experience.name+"",l;return{c(){l=A(e)},l(t){l=L(t,e)},m(t,n){P(t,l,n)},p(t,n){n&1&&e!==(e=t[0].experience.name+"")&&J(l,e)},d(t){t&&_(l)}}}function Be(o){let e,l,t,n,r=o[2].label+"",f,a,s;return l=new re({props:{icon:"i-carbon-link"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("span"),f=A(r),a=y(),this.h()},l(m){e=E(m,"DIV",{class:!0});var i=D(e);M(l.$$.fragment,i),t=T(i),n=E(i,"SPAN",{});var b=D(n);f=L(b,r),b.forEach(_),i.forEach(_),a=T(m),this.h()},h(){C(e,"class","row-center gap-2")},m(m,i){P(m,e,i),j(l,e,null),$(e,t),$(e,n),$(n,f),P(m,a,i),s=!0},p(m,i){(!s||i&1)&&r!==(r=m[2].label+"")&&J(f,r)},i(m){s||(x(l.$$.fragment,m),s=!0)},o(m){k(l.$$.fragment,m),s=!1},d(m){m&&(_(e),_(a)),B(l)}}}function $e(o){let e,l;return e=new ge({props:{href:o[2].to,$$slots:{default:[Be]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=t[2].to),n&129&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ne(o){let e,l,t,n=o[2].name+"",r,f,a;return e=new De({props:{src:ee(o[2].logo),alt:o[2].name,radius:"0px",size:15,classes:"mr-2"}}),{c(){S(e.$$.fragment),l=y(),t=w("span"),r=A(n),f=y(),this.h()},l(s){M(e.$$.fragment,s),l=T(s),t=E(s,"SPAN",{class:!0});var m=D(t);r=L(m,n),m.forEach(_),f=T(s),this.h()},h(){C(t,"class","text-[0.9em]")},m(s,m){j(e,s,m),P(s,l,m),P(s,t,m),$(t,r),P(s,f,m),a=!0},p(s,m){const i={};m&1&&(i.src=ee(s[2].logo)),m&1&&(i.alt=s[2].name),e.$set(i),(!a||m&1)&&n!==(n=s[2].name+"")&&J(r,n)},i(s){a||(x(e.$$.fragment,s),a=!0)},o(s){k(e.$$.fragment,s),a=!1},d(s){s&&(_(l),_(t),_(f)),B(e,s)}}}function _e(o){let e,l;return e=new ge({props:{classes:"inline-flex flex-row items-center justify-center",href:`${fe}/skills/${o[2].slug}`,$$slots:{default:[Ne]},$$scope:{ctx:o}}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.href=`${fe}/skills/${t[2].slug}`),n&129&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function Ae(o){let e,l,t,n,r,f=o[0].experience.company+"",a,s,m=o[0].experience.location+"",i,b,d=o[0].experience.type+"",v,N,V,Q=ue(o[0].experience.period.from,o[0].experience.period.to)+"",W,te,K,O,le,q,ne,R,U;t=new Ce({props:{$$slots:{default:[je]},$$scope:{ctx:o}}}),O=new Te({});let F=X(o[0].experience.links),h=[];for(let c=0;c<F.length;c+=1)h[c]=$e(me(o,F,c));const ve=c=>k(h[c],1,1,()=>{h[c]=null});let G=X(o[0].experience.skills),g=[];for(let c=0;c<G.length;c+=1)g[c]=_e(pe(o,G,c));const be=c=>k(g[c],1,1,()=>{g[c]=null});return{c(){e=w("div"),l=w("div"),S(t.$$.fragment),n=y(),r=w("p"),a=A(f),s=A(" · "),i=A(m),b=A(" · "),v=A(d),N=y(),V=w("p"),W=A(Q),te=y(),K=w("div"),S(O.$$.fragment),le=y(),q=w("div");for(let c=0;c<h.length;c+=1)h[c].c();ne=y(),R=w("div");for(let c=0;c<g.length;c+=1)g[c].c();this.h()},l(c){e=E(c,"DIV",{class:!0});var u=D(e);l=E(u,"DIV",{class:!0});var I=D(l);M(t.$$.fragment,I),I.forEach(_),n=T(u),r=E(u,"P",{class:!0});var p=D(r);a=L(p,f),s=L(p," · "),i=L(p,m),b=L(p," · "),v=L(p,d),p.forEach(_),N=T(u),V=E(u,"P",{class:!0});var z=D(V);W=L(z,Q),z.forEach(_),te=T(u),K=E(u,"DIV",{class:!0});var se=D(K);M(O.$$.fragment,se),se.forEach(_),le=T(u),q=E(u,"DIV",{class:!0});var ae=D(q);for(let H=0;H<h.length;H+=1)h[H].l(ae);ae.forEach(_),ne=T(u),R=E(u,"DIV",{class:!0});var ie=D(R);for(let H=0;H<g.length;H+=1)g[H].l(ie);ie.forEach(_),u.forEach(_),this.h()},h(){C(l,"class","text-0.9em"),C(r,"class","font-300 text-[var(--tertiary-text)] m-y-2 text-center"),C(V,"class","font-300 text-0.9em text-[var(--tertiary-text)] m-y-2 text-center"),C(K,"class","w-75%"),C(q,"class","row-center flex-wrap text-[0.9em] text-[var(--tertiary-text)] m-b-2"),C(R,"class","row-center flex-wrap m-b-2"),C(e,"class","col-center p-y-20")},m(c,u){P(c,e,u),$(e,l),j(t,l,null),$(e,n),$(e,r),$(r,a),$(r,s),$(r,i),$(r,b),$(r,v),$(e,N),$(e,V),$(V,W),$(e,te),$(e,K),j(O,K,null),$(e,le),$(e,q);for(let I=0;I<h.length;I+=1)h[I]&&h[I].m(q,null);$(e,ne),$(e,R);for(let I=0;I<g.length;I+=1)g[I]&&g[I].m(R,null);U=!0},p(c,u){const I={};if(u&129&&(I.$$scope={dirty:u,ctx:c}),t.$set(I),(!U||u&1)&&f!==(f=c[0].experience.company+"")&&J(a,f),(!U||u&1)&&m!==(m=c[0].experience.location+"")&&J(i,m),(!U||u&1)&&d!==(d=c[0].experience.type+"")&&J(v,d),(!U||u&1)&&Q!==(Q=ue(c[0].experience.period.from,c[0].experience.period.to)+"")&&J(W,Q),u&1){F=X(c[0].experience.links);let p;for(p=0;p<F.length;p+=1){const z=me(c,F,p);h[p]?(h[p].p(z,u),x(h[p],1)):(h[p]=$e(z),h[p].c(),x(h[p],1),h[p].m(q,null))}for(Z(),p=F.length;p<h.length;p+=1)ve(p);Y()}if(u&1){G=X(c[0].experience.skills);let p;for(p=0;p<G.length;p+=1){const z=pe(c,G,p);g[p]?(g[p].p(z,u),x(g[p],1)):(g[p]=_e(z),g[p].c(),x(g[p],1),g[p].m(R,null))}for(Z(),p=G.length;p<g.length;p+=1)be(p);Y()}},i(c){if(!U){x(t.$$.fragment,c),x(O.$$.fragment,c);for(let u=0;u<F.length;u+=1)x(h[u]);for(let u=0;u<G.length;u+=1)x(g[u]);U=!0}},o(c){k(t.$$.fragment,c),k(O.$$.fragment,c),h=h.filter(Boolean);for(let u=0;u<h.length;u+=1)k(h[u]);g=g.filter(Boolean);for(let u=0;u<g.length;u+=1)k(g[u]);U=!1},d(c){c&&_(e),B(t),B(O),ce(h,c),ce(g,c)}}}function Le(o){let e,l,t,n,r="No description...",f;return l=new re({props:{icon:"i-carbon-text-font",classes:"text-3.5em"}}),{c(){e=w("div"),S(l.$$.fragment),t=y(),n=w("p"),n.textContent=r,this.h()},l(a){e=E(a,"DIV",{class:!0});var s=D(e);M(l.$$.fragment,s),t=T(s),n=E(s,"P",{class:!0,["data-svelte-h"]:!0}),de(n)!=="svelte-kl0ixf"&&(n.textContent=r),s.forEach(_),this.h()},h(){C(n,"class","font-300"),C(e,"class","p-5 col-center gap-3 m-y-auto text-[var(--border)]")},m(a,s){P(a,e,s),j(l,e,null),$(e,t),$(e,n),f=!0},p:he,i(a){f||(x(l.$$.fragment,a),f=!0)},o(a){k(l.$$.fragment,a),f=!1},d(a){a&&_(e),B(l)}}}function Ue(o){let e,l;return e=new Ve({props:{content:o[0].experience.description??"This place is yet to be filled..."}}),{c(){S(e.$$.fragment)},l(t){M(e.$$.fragment,t)},m(t,n){j(e,t,n),l=!0},p(t,n){const r={};n&1&&(r.content=t[0].experience.description??"This place is yet to be filled..."),e.$set(r)},i(t){l||(x(e.$$.fragment,t),l=!0)},o(t){k(e.$$.fragment,t),l=!1},d(t){B(e,t)}}}function ze(o){let e,l,t,n,r,f;e=new ye({props:{title:o[1]}});const a=[Me,Se],s=[];function m(i,b){return i[0].experience===void 0?0:1}return n=m(o),r=s[n]=a[n](o),{c(){S(e.$$.fragment),l=y(),t=w("div"),r.c(),this.h()},l(i){M(e.$$.fragment,i),l=T(i),t=E(i,"DIV",{class:!0});var b=D(t);r.l(b),b.forEach(_),this.h()},h(){C(t,"class","pb-10 overflow-x-hidden col flex-1")},m(i,b){j(e,i,b),P(i,l,b),P(i,t,b),s[n].m(t,null),f=!0},p(i,[b]){const d={};b&2&&(d.title=i[1]),e.$set(d);let v=n;n=m(i),n===v?s[n].p(i,b):(Z(),k(s[v],1,1,()=>{s[v]=null}),Y(),r=s[n],r?r.p(i,b):(r=s[n]=a[n](i),r.c()),x(r,1),r.m(t,null))},i(i){f||(x(e.$$.fragment,i),x(r),f=!0)},o(i){k(e.$$.fragment,i),k(r),f=!1},d(i){i&&(_(l),_(t)),B(e,i),s[n].d()}}}function Oe(o,e,l){let t,{data:n}=e;return o.$$set=r=>{"data"in r&&l(0,n=r.data)},o.$$.update=()=>{o.$$.dirty&1&&l(1,t=n.experience?`${n.experience.name} - ${oe}`:oe)},[n,t]}class et extends we{constructor(e){super(),Ee(this,e,Oe,ze,ke,{data:0})}}export{et as component,Ze as universal};