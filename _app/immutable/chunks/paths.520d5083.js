import{n as c,s as g}from"./scheduler.8e784f9d.js";const e=[];function d(n,a=c){let i;const o=new Set;function r(t){if(g(n,t)&&(n=t,i)){const b=!e.length;for(const s of o)s[1](),e.push(s,n);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function f(t){r(t(n))}function _(t,b=c){const s=[t,b];return o.add(s),o.size===1&&(i=a(r,f)||c),t(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:f,subscribe:_}}var u;const h=((u=globalThis.__sveltekit_tgl8m2)==null?void 0:u.base)??"";var l;const m=((l=globalThis.__sveltekit_tgl8m2)==null?void 0:l.assets)??h;export{m as a,h as b,d as w};
