import{v as P,r as y,w as h,x as b,y as B,z as v,A as C,u as D,a as k,B as O,o as E,b as M,i as g,t as z,F as A}from"./entry.69c04789.js";import{u as H}from"./composables.262898d4.js";import"./app.config.21fb9323.js";const j=()=>null;function F(...i){var _;const o=typeof i[i.length-1]=="string"?i.pop():void 0;typeof i[0]!="string"&&i.unshift(o);let[a,c,t={}]=i;if(typeof a!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof c!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??j,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const e=P(),d=()=>e.isHydrating?e.payload.data[a]:e.static.data[a],l=()=>d()!==void 0;e._asyncData[a]||(e._asyncData[a]={data:y(d()??((_=t.default)==null?void 0:_.call(t))??null),pending:y(!l()),error:y(e.payload._errors[a]?h(e.payload._errors[a]):null)});const r={...e._asyncData[a]};r.refresh=r.execute=(s={})=>{if(e._asyncDataPromises[a]){if(s.dedupe===!1)return e._asyncDataPromises[a];e._asyncDataPromises[a].cancelled=!0}if(s._initial&&l())return d();r.pending.value=!0;const u=new Promise((n,f)=>{try{n(c(e))}catch(w){f(w)}}).then(n=>{if(u.cancelled)return e._asyncDataPromises[a];t.transform&&(n=t.transform(n)),t.pick&&(n=N(n,t.pick)),r.data.value=n,r.error.value=null}).catch(n=>{var f;if(u.cancelled)return e._asyncDataPromises[a];r.error.value=n,r.data.value=D(((f=t.default)==null?void 0:f.call(t))??null)}).finally(()=>{u.cancelled||(r.pending.value=!1,e.payload.data[a]=r.data.value,r.error.value&&(e.payload._errors[a]=h(r.error.value)),delete e._asyncDataPromises[a])});return e._asyncDataPromises[a]=u,e._asyncDataPromises[a]};const p=()=>r.refresh({_initial:!0}),x=t.server!==!1&&e.payload.serverRendered;{const s=b();if(s&&!s._nuxtOnBeforeMountCbs){s._nuxtOnBeforeMountCbs=[];const n=s._nuxtOnBeforeMountCbs;s&&(B(()=>{n.forEach(f=>{f()}),n.splice(0,n.length)}),v(()=>n.splice(0,n.length)))}x&&e.isHydrating&&l()?r.pending.value=!1:s&&(e.payload.serverRendered&&e.isHydrating||t.lazy)&&t.immediate?s._nuxtOnBeforeMountCbs.push(p):t.immediate&&p(),t.watch&&C(t.watch,()=>r.refresh());const u=e.hook("app:data:refresh",n=>{if(!n||n.includes(a))return r.refresh()});s&&v(u)}const m=Promise.resolve(e._asyncDataPromises[a]).then(()=>r);return Object.assign(m,r),m}function N(i,o){const a={};for(const c of o)a[c]=i[c];return a}const R=g("div",null,"vision",-1),K=k({__name:"vision",async setup(i){let o,a;const{data:c}=([o,a]=O(()=>F("mountains",()=>$fetch("https://api.nuxtjs.dev/mountains"))),o=await o,a(),o),e=y(c.value).value.filter((d,l)=>l===0)[0];return H({title:e.title}),(d,l)=>(E(),M(A,null,[R,g("div",null,z(D(e).title),1)],64))}});export{K as default};
