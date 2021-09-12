var app=function(){"use strict";function t(){}function n(t,n){for(const e in n)t[e]=n[e];return t}function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function u(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function s(n,...e){if(null==n)return t;const o=n.subscribe(...e);return o.unsubscribe?()=>o.unsubscribe():o}function i(t,n,e){t.$$.on_destroy.push(s(n,e))}function l(t,n,e,o){if(t){const r=a(t,n,e,o);return t[0](r)}}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,n,e,o){if(t[2]&&o){const r=t[2](o(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let o=0;o<e;o+=1)t[o]=n.dirty[o]|r[o];return t}return n.dirty|r}return n.dirty}function p(t,n,e,o,r,c){if(r){const u=a(n,e,o,c);t.p(u,r)}}function $(t){if(t.ctx.length>32){const n=[],e=t.ctx.length/32;for(let t=0;t<e;t++)n[t]=-1;return n}return-1}function d(t){const n={};for(const e in t)"$"!==e[0]&&(n[e]=t[e]);return n}function h(t,n){const e={};n=new Set(n);for(const o in t)n.has(o)||"$"===o[0]||(e[o]=t[o]);return e}function m(t,n){t.appendChild(n)}function g(t,n,e){t.insertBefore(n,e||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function x(){return b(" ")}function w(){return b("")}function k(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function E(t,n){const e=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in n)null==n[o]?t.removeAttribute(o):"style"===o?t.style.cssText=n[o]:"__value"===o?t.value=t[o]=n[o]:e[o]&&e[o].set?t[o]=n[o]:_(t,o,n[o])}function j(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function C(t,n){t.value=null==n?"":n}let P;function S(t){P=t}function O(){if(!P)throw new Error("Function called outside component initialization");return P}function R(){const t=O();return(n,e)=>{const o=t.$$.callbacks[n];if(o){const r=function(t,n,e=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,e,!1,n),o}(n,e);o.slice().forEach((n=>{n.call(t,r)}))}}}function A(t,n){O().$$.context.set(t,n)}function N(t){return O().$$.context.get(t)}const L=[],q=[],B=[],K=[],T=Promise.resolve();let D=!1;function z(t){B.push(t)}let M=!1;const U=new Set;function I(){if(!M){M=!0;do{for(let t=0;t<L.length;t+=1){const n=L[t];S(n),F(n.$$)}for(S(null),L.length=0;q.length;)q.pop()();for(let t=0;t<B.length;t+=1){const n=B[t];U.has(n)||(U.add(n),n())}B.length=0}while(L.length);for(;K.length;)K.pop()();D=!1,M=!1,U.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(z)}}const H=new Set;let G;function J(){G={r:0,c:[],p:G}}function Q(){G.r||r(G.c),G=G.p}function V(t,n){t&&t.i&&(H.delete(t),t.i(n))}function W(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),G.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}function X(t,n){const e={},o={},r={$$scope:1};let c=t.length;for(;c--;){const u=t[c],s=n[c];if(s){for(const t in u)t in s||(o[t]=1);for(const t in s)r[t]||(e[t]=s[t],r[t]=1);t[c]=s}else for(const t in u)r[t]=1}for(const t in o)t in e||(e[t]=void 0);return e}function Y(t){return"object"==typeof t&&null!==t?t:{}}function Z(t){t&&t.c()}function tt(t,n,o,u){const{fragment:s,on_mount:i,on_destroy:l,after_update:a}=t.$$;s&&s.m(n,o),u||z((()=>{const n=i.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),a.forEach(z)}function nt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function et(t,n){-1===t.$$.dirty[0]&&(L.push(t),D||(D=!0,T.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ot(n,e,c,u,s,i,l,a=[-1]){const f=P;S(n);const p=n.$$={fragment:null,ctx:null,props:i,update:t,not_equal:s,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:e.context||[]),callbacks:o(),dirty:a,skip_bound:!1,root:e.target||f.$$.root};l&&l(p.root);let $=!1;if(p.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return p.ctx&&s(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),$&&et(n,t)),e})):[],p.update(),$=!0,r(p.before_update),p.fragment=!!u&&u(p.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();e.intro&&V(n.$$.fragment),tt(n,e.target,e.anchor,e.customElement),I()}S(f)}class rt{$destroy(){nt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const ct=[];function ut(n,e=t){let o;const r=new Set;function c(t){if(u(n,t)&&(n=t,o)){const t=!ct.length;for(const t of r)t[1](),ct.push(t,n);if(t){for(let t=0;t<ct.length;t+=2)ct[t][0](ct[t+1]);ct.length=0}}}return{set:c,update:function(t){c(t(n))},subscribe:function(u,s=t){const i=[u,s];return r.add(i),1===r.size&&(o=e(c)||t),u(n),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function st(n,e,o){const u=!Array.isArray(n),i=u?[n]:n,l=e.length<2;return{subscribe:ut(o,(n=>{let o=!1;const a=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=e(u?a[0]:a,n);l?n(o):p=c(o)?o:t},d=i.map(((t,n)=>s(t,(t=>{a[n]=t,f&=~(1<<n),o&&$()}),(()=>{f|=1<<n}))));return o=!0,$(),function(){r(d),p()}})).subscribe}}var it=ut({token:null,username:null});class lt{async login(t,n){await new Promise((t=>setTimeout(t,500))),it.set({username:t,token:"token"})}async logout(){it.set({token:null,username:null})}}const at={},ft={};function pt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const $t=function(t,n){const e=[];let o=pt(t);return{get location(){return o},listen(n){e.push(n);const r=()=>{o=pt(t),n({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=e.indexOf(n);e.splice(o,1)}},navigate(n,{state:r,replace:c=!1}={}){r={...r,key:Date.now()+""};try{c?t.history.replaceState(r,null,n):t.history.pushState(r,null,n)}catch(e){t.location[c?"replace":"assign"](n)}o=pt(t),e.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let n=0;const e=[{pathname:t,search:""}],o=[];return{get location(){return e[n]},addEventListener(t,n){},removeEventListener(t,n){},history:{get entries(){return e},get index(){return n},get state(){return o[n]},pushState(t,r,c){const[u,s=""]=c.split("?");n++,e.push({pathname:u,search:s}),o.push(t)},replaceState(t,r,c){const[u,s=""]=c.split("?");e[n]={pathname:u,search:s},o[n]=t}}}}()),{navigate:dt}=$t,ht=/^:(.+)/;function mt(t,n){return t.substr(0,n.length)===n}function gt(t){return"*"===t[0]}function yt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function vt(t){return t.replace(/(^\/+|\/+$)/g,"")}function bt(t,n){return{route:t,score:t.default?0:yt(t.path).reduce(((t,n)=>(t+=4,!function(t){return""===t}(n)?!function(t){return ht.test(t)}(n)?gt(n)?t-=5:t+=3:t+=2:t+=1,t)),0),index:n}}function xt(t,n){let e,o;const[r]=n.split("?"),c=yt(r),u=""===c[0],s=function(t){return t.map(bt).sort(((t,n)=>t.score<n.score?1:t.score>n.score?-1:t.index-n.index))}(t);for(let t=0,r=s.length;t<r;t++){const r=s[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:n};continue}const l=yt(r.path),a={},f=Math.max(c.length,l.length);let p=0;for(;p<f;p++){const t=l[p],n=c[p];if(void 0!==t&&gt(t)){a["*"===t?"*":t.slice(1)]=c.slice(p).map(decodeURIComponent).join("/");break}if(void 0===n){i=!0;break}let e=ht.exec(t);if(e&&!u){const t=decodeURIComponent(n);a[e[1]]=t}else if(t!==n){i=!0;break}}if(!i){e={route:r,params:a,uri:"/"+c.slice(0,p).join("/")};break}}return e||o||null}function wt(t,n){return t+(n?`?${n}`:"")}function kt(t,n){return`${vt("/"===n?t:`${vt(t)}/${vt(n)}`)}/`}function _t(t){let n;const e=t[9].default,o=l(e,t,t[8],null);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,[r]){o&&o.p&&(!n||256&r)&&p(o,e,t,t[8],n?f(e,t[8],r,null):$(t[8]),null)},i(t){n||(V(o,t),n=!0)},o(t){W(o,t),n=!1},d(t){o&&o.d(t)}}}function Et(t,n,e){let o,r,c,{$$slots:u={},$$scope:s}=n,{basepath:l="/"}=n,{url:a=null}=n;const f=N(at),p=N(ft),$=ut([]);i(t,$,(t=>e(6,r=t)));const d=ut(null);let h=!1;const m=f||ut(a?{pathname:a}:$t.location);i(t,m,(t=>e(5,o=t)));const g=p?p.routerBase:ut({path:l,uri:l});i(t,g,(t=>e(7,c=t)));const y=st([g,d],(([t,n])=>{if(null===n)return t;const{path:e}=t,{route:o,uri:r}=n;return{path:o.default?e:o.path.replace(/\*.*$/,""),uri:r}}));var v;return f||(v=()=>$t.listen((t=>{m.set(t.location)})),O().$$.on_mount.push(v),A(at,m)),A(ft,{activeRoute:d,base:g,routerBase:y,registerRoute:function(t){const{path:n}=c;let{path:e}=t;if(t._path=e,t.path=kt(n,e),"undefined"==typeof window){if(h)return;const n=function(t,n){return xt([t],n)}(t,o.pathname);n&&(d.set(n),h=!0)}else $.update((n=>(n.push(t),n)))},unregisterRoute:function(t){$.update((n=>{const e=n.indexOf(t);return n.splice(e,1),n}))}}),t.$$set=t=>{"basepath"in t&&e(3,l=t.basepath),"url"in t&&e(4,a=t.url),"$$scope"in t&&e(8,s=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=c;$.update((n=>(n.forEach((n=>n.path=kt(t,n._path))),n)))}if(96&t.$$.dirty){const t=xt(r,o.pathname);d.set(t)}},[$,m,g,l,a,o,r,c,s,u]}class jt extends rt{constructor(t){super(),ot(this,t,Et,_t,u,{basepath:3,url:4})}}const Ct=t=>({params:4&t,location:16&t}),Pt=t=>({params:t[2],location:t[4]});function St(t){let n,e,o,r;const c=[Rt,Ot],u=[];function s(t,n){return null!==t[0]?0:1}return n=s(t),e=u[n]=c[n](t),{c(){e.c(),o=w()},m(t,e){u[n].m(t,e),g(t,o,e),r=!0},p(t,r){let i=n;n=s(t),n===i?u[n].p(t,r):(J(),W(u[i],1,1,(()=>{u[i]=null})),Q(),e=u[n],e?e.p(t,r):(e=u[n]=c[n](t),e.c()),V(e,1),e.m(o.parentNode,o))},i(t){r||(V(e),r=!0)},o(t){W(e),r=!1},d(t){u[n].d(t),t&&y(o)}}}function Ot(t){let n;const e=t[10].default,o=l(e,t,t[9],Pt);return{c(){o&&o.c()},m(t,e){o&&o.m(t,e),n=!0},p(t,r){o&&o.p&&(!n||532&r)&&p(o,e,t,t[9],n?f(e,t[9],r,Ct):$(t[9]),Pt)},i(t){n||(V(o,t),n=!0)},o(t){W(o,t),n=!1},d(t){o&&o.d(t)}}}function Rt(t){let e,o,r;const c=[{location:t[4]},t[2],t[3]];var u=t[0];function s(t){let e={};for(let t=0;t<c.length;t+=1)e=n(e,c[t]);return{props:e}}return u&&(e=new u(s())),{c(){e&&Z(e.$$.fragment),o=w()},m(t,n){e&&tt(e,t,n),g(t,o,n),r=!0},p(t,n){const r=28&n?X(c,[16&n&&{location:t[4]},4&n&&Y(t[2]),8&n&&Y(t[3])]):{};if(u!==(u=t[0])){if(e){J();const t=e;W(t.$$.fragment,1,0,(()=>{nt(t,1)})),Q()}u?(e=new u(s()),Z(e.$$.fragment),V(e.$$.fragment,1),tt(e,o.parentNode,o)):e=null}else u&&e.$set(r)},i(t){r||(e&&V(e.$$.fragment,t),r=!0)},o(t){e&&W(e.$$.fragment,t),r=!1},d(t){t&&y(o),e&&nt(e,t)}}}function At(t){let n,e,o=null!==t[1]&&t[1].route===t[7]&&St(t);return{c(){o&&o.c(),n=w()},m(t,r){o&&o.m(t,r),g(t,n,r),e=!0},p(t,[e]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,e),2&e&&V(o,1)):(o=St(t),o.c(),V(o,1),o.m(n.parentNode,n)):o&&(J(),W(o,1,1,(()=>{o=null})),Q())},i(t){e||(V(o),e=!0)},o(t){W(o),e=!1},d(t){o&&o.d(t),t&&y(n)}}}function Nt(t,e,o){let r,c,{$$slots:u={},$$scope:s}=e,{path:l=""}=e,{component:a=null}=e;const{registerRoute:f,unregisterRoute:p,activeRoute:$}=N(ft);i(t,$,(t=>o(1,r=t)));const h=N(at);i(t,h,(t=>o(4,c=t)));const m={path:l,default:""===l};let g={},y={};var v;return f(m),"undefined"!=typeof window&&(v=()=>{p(m)},O().$$.on_destroy.push(v)),t.$$set=t=>{o(13,e=n(n({},e),d(t))),"path"in t&&o(8,l=t.path),"component"in t&&o(0,a=t.component),"$$scope"in t&&o(9,s=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:n,...r}=e;o(3,y=r)}},e=d(e),[a,r,g,y,c,$,h,m,l,s,u]}class Lt extends rt{constructor(t){super(),ot(this,t,Nt,At,u,{path:8,component:0})}}function qt(t){let e,o,r,c;const u=t[16].default,s=l(u,t,t[15],null);let i=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],a={};for(let t=0;t<i.length;t+=1)a=n(a,i[t]);return{c(){e=v("a"),s&&s.c(),E(e,a)},m(n,u){g(n,e,u),s&&s.m(e,null),o=!0,r||(c=k(e,"click",t[5]),r=!0)},p(t,[n]){s&&s.p&&(!o||32768&n)&&p(s,u,t,t[15],o?f(u,t[15],n,null):$(t[15]),null),E(e,a=X(i,[(!o||1&n)&&{href:t[0]},(!o||4&n)&&{"aria-current":t[2]},2&n&&t[1],64&n&&t[6]]))},i(t){o||(V(s,t),o=!0)},o(t){W(s,t),o=!1},d(t){t&&y(e),s&&s.d(t),r=!1,c()}}}function Bt(t,e,o){let r;const c=["to","replace","state","getProps"];let u,s,l=h(e,c),{$$slots:a={},$$scope:f}=e,{to:p="#"}=e,{replace:$=!1}=e,{state:m={}}=e,{getProps:g=(()=>({}))}=e;const{base:y}=N(ft);i(t,y,(t=>o(14,s=t)));const v=N(at);i(t,v,(t=>o(13,u=t)));const b=R();let x,w,k,_;return t.$$set=t=>{e=n(n({},e),d(t)),o(6,l=h(e,c)),"to"in t&&o(7,p=t.to),"replace"in t&&o(8,$=t.replace),"state"in t&&o(9,m=t.state),"getProps"in t&&o(10,g=t.getProps),"$$scope"in t&&o(15,f=t.$$scope)},t.$$.update=()=>{16512&t.$$.dirty&&o(0,x="/"===p?s.uri:function(t,n){if(mt(t,"/"))return t;const[e,o]=t.split("?"),[r]=n.split("?"),c=yt(e),u=yt(r);if(""===c[0])return wt(r,o);if(!mt(c[0],"."))return wt(("/"===r?"":"/")+u.concat(c).join("/"),o);const s=u.concat(c),i=[];return s.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),wt("/"+i.join("/"),o)}(p,s.uri)),8193&t.$$.dirty&&o(11,w=mt(u.pathname,x)),8193&t.$$.dirty&&o(12,k=x===u.pathname),4096&t.$$.dirty&&o(2,r=k?"page":void 0),15361&t.$$.dirty&&o(1,_=g({location:u,href:x,isPartiallyCurrent:w,isCurrent:k}))},[x,_,r,y,v,function(t){if(b("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const n=u.pathname===x||$;dt(x,{state:m,replace:n})}},l,p,$,m,g,w,k,u,s,f,a]}class Kt extends rt{constructor(t){super(),ot(this,t,Bt,qt,u,{to:7,replace:8,state:9,getProps:10})}}function Tt(n){let e,o,c,u,s,i,l,a,f,p,$,d,h,b,w;return{c(){e=v("div"),o=v("form"),c=v("p"),c.textContent="Имя пользователя",u=x(),s=v("input"),i=x(),l=v("p"),l.textContent="Пароль",a=x(),f=v("input"),p=x(),$=v("input"),d=x(),h=v("input"),_(s,"type","text"),_(f,"type","password"),_($,"type","button"),$.value="Войти",_($,"class","svelte-1cpmqoj"),_(h,"type","button"),h.value="У меня нет аккаунта",_(h,"class","svelte-1cpmqoj"),_(o,"class","svelte-1cpmqoj"),_(e,"class","svelte-1cpmqoj")},m(t,r){g(t,e,r),m(e,o),m(o,c),m(o,u),m(o,s),C(s,n[0]),m(o,i),m(o,l),m(o,a),m(o,f),C(f,n[1]),m(o,p),m(o,$),m(o,d),m(o,h),b||(w=[k(s,"input",n[4]),k(f,"input",n[5]),k($,"click",n[2]),k(h,"click",n[3])],b=!0)},p(t,[n]){1&n&&s.value!==t[0]&&C(s,t[0]),2&n&&f.value!==t[1]&&C(f,t[1])},i:t,o:t,d(t){t&&y(e),b=!1,r(w)}}}function Dt(t,n,e){const o=N(lt);let r="",c="";return[r,c,async()=>{await o.login(r,c),dt("/")},async()=>{dt("/signup")},function(){r=this.value,e(0,r)},function(){c=this.value,e(1,c)}]}class zt extends rt{constructor(t){super(),ot(this,t,Dt,Tt,u,{})}}function Mt(t,n,e){const o=t.slice();return o[4]=n[e],o}function Ut(t){let n,e=t[4].title+"";return{c(){n=b(e)},m(t,e){g(t,n,e)},p(t,o){1&o&&e!==(e=t[4].title+"")&&j(n,e)},d(t){t&&y(n)}}}function It(t){let n,e,o,r,u,s;return e=new Kt({props:{to:t[4].path,$$slots:{default:[Ut]},$$scope:{ctx:t}}}),{c(){n=v("div"),Z(e.$$.fragment),o=x(),_(n,"class","svelte-9slss8")},m(i,l){g(i,n,l),tt(e,n,null),m(n,o),r=!0,u||(s=k(n,"click",(function(){c(t[4].onclick)&&t[4].onclick.apply(this,arguments)})),u=!0)},p(n,o){t=n;const r={};1&o&&(r.to=t[4].path),129&o&&(r.$$scope={dirty:o,ctx:t}),e.$set(r)},i(t){r||(V(e.$$.fragment,t),r=!0)},o(t){W(e.$$.fragment,t),r=!1},d(t){t&&y(n),nt(e),u=!1,s()}}}function Ft(t){let n,e,o=t[0],r=[];for(let n=0;n<o.length;n+=1)r[n]=It(Mt(t,o,n));const c=t=>W(r[t],1,1,(()=>{r[t]=null}));return{c(){n=v("nav");for(let t=0;t<r.length;t+=1)r[t].c();_(n,"class","svelte-9slss8")},m(t,o){g(t,n,o);for(let t=0;t<r.length;t+=1)r[t].m(n,null);e=!0},p(t,[e]){if(1&e){let u;for(o=t[0],u=0;u<o.length;u+=1){const c=Mt(t,o,u);r[u]?(r[u].p(c,e),V(r[u],1)):(r[u]=It(c),r[u].c(),V(r[u],1),r[u].m(n,null))}for(J(),u=o.length;u<r.length;u+=1)c(u);Q()}},i(t){if(!e){for(let t=0;t<o.length;t+=1)V(r[t]);e=!0}},o(t){r=r.filter(Boolean);for(let t=0;t<r.length;t+=1)W(r[t]);e=!1},d(t){t&&y(n),function(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}(r,t)}}}function Ht(t,n,e){let o,r,c;i(t,it,(t=>e(2,c=t)));const u=N(lt);return t.$$.update=()=>{4&t.$$.dirty&&e(1,o=c.token?{title:"Выйти",path:"/",onclick:()=>u.logout()}:{title:"Войти",path:"login"}),2&t.$$.dirty&&e(0,r=[{title:"Главная",path:"/"},o])},[r,o,c]}class Gt extends rt{constructor(t){super(),ot(this,t,Ht,Ft,u,{})}}function Jt(n){let e;return{c(){e=v("h3"),e.textContent="Что бы воспользоваться полным функционалом, войдите в систему"},m(t,n){g(t,e,n)},p:t,d(t){t&&y(e)}}}function Qt(t){let n,e,o,r=t[0].username+"";return{c(){n=v("h2"),e=b("Вы авторизованы как "),o=b(r)},m(t,r){g(t,n,r),m(n,e),m(n,o)},p(t,n){1&n&&r!==(r=t[0].username+"")&&j(o,r)},d(t){t&&y(n)}}}function Vt(n){let e,o,r,c,u,s,i;function l(t,n){return t[0].token?Qt:Jt}let a=l(n),f=a(n);return{c(){e=v("h1"),e.textContent="Трекер привычек",o=x(),r=v("h2"),r.textContent="Тут вы можете поставить цель для привычки и добиться ее",c=x(),u=v("p"),u.textContent="В разработке...",s=x(),f.c(),i=w(),_(e,"class","svelte-1cxhk4e")},m(t,n){g(t,e,n),g(t,o,n),g(t,r,n),g(t,c,n),g(t,u,n),g(t,s,n),f.m(t,n),g(t,i,n)},p(t,[n]){a===(a=l(t))&&f?f.p(t,n):(f.d(1),f=a(t),f&&(f.c(),f.m(i.parentNode,i)))},i:t,o:t,d(t){t&&y(e),t&&y(o),t&&y(r),t&&y(c),t&&y(u),t&&y(s),f.d(t),t&&y(i)}}}function Wt(t,n,e){let o;return i(t,it,(t=>e(0,o=t))),[o]}class Xt extends rt{constructor(t){super(),ot(this,t,Wt,Vt,u,{})}}function Yt(n){let e,o,r,c,u,s,i,l;return e=new Gt({}),r=new Lt({props:{component:Xt,path:"/"}}),u=new Lt({props:{component:zt,path:"login"}}),i=new Lt({props:{component:Xt,path:"KekToDo"}}),{c(){Z(e.$$.fragment),o=x(),Z(r.$$.fragment),c=x(),Z(u.$$.fragment),s=x(),Z(i.$$.fragment)},m(t,n){tt(e,t,n),g(t,o,n),tt(r,t,n),g(t,c,n),tt(u,t,n),g(t,s,n),tt(i,t,n),l=!0},p:t,i(t){l||(V(e.$$.fragment,t),V(r.$$.fragment,t),V(u.$$.fragment,t),V(i.$$.fragment,t),l=!0)},o(t){W(e.$$.fragment,t),W(r.$$.fragment,t),W(u.$$.fragment,t),W(i.$$.fragment,t),l=!1},d(t){nt(e,t),t&&y(o),nt(r,t),t&&y(c),nt(u,t),t&&y(s),nt(i,t)}}}function Zt(t){let n,e,o;return e=new jt({props:{url:t[0],$$slots:{default:[Yt]},$$scope:{ctx:t}}}),{c(){n=v("main"),Z(e.$$.fragment),_(n,"class","svelte-177t831")},m(t,r){g(t,n,r),tt(e,n,null),o=!0},p(t,[n]){const o={};1&n&&(o.url=t[0]),2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(V(e.$$.fragment,t),o=!0)},o(t){W(e.$$.fragment,t),o=!1},d(t){t&&y(n),nt(e)}}}function tn(t,n,e){let{url:o=""}=n;return A(lt,new lt),t.$$set=t=>{"url"in t&&e(0,o=t.url)},[o]}return new class extends rt{constructor(t){super(),ot(this,t,tn,Zt,u,{url:0})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map