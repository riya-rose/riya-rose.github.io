import{n as c,s as h}from"./scheduler.8e784f9d.js";const t=[];function d(n,l=c){let i;const o=new Set;function r(e){if(h(n,e)&&(n=e,i)){const b=!t.length;for(const s of o)s[1](),t.push(s,n);if(b){for(let s=0;s<t.length;s+=2)t[s][0](t[s+1]);t.length=0}}}function a(e){r(e(n))}function _(e,b=c){const s=[e,b];return o.add(s),o.size===1&&(i=l(r,a)||c),e(n),()=>{o.delete(s),o.size===0&&i&&(i(),i=null)}}return{set:r,update:a,subscribe:_}}var f;const p=((f=globalThis.__sveltekit_1x52bea)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_1x52bea)==null?void 0:u.assets)??p;export{q as a,p as b,d as w};