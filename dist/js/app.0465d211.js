(function(){"use strict";var t={8846:function(t,e,a){var n=a(9242),r=a(3396);const i=(0,r.uE)('<section id="footer"><div id="lki" class="footer container"><h2>Muhammad Dzaki Fakhrezi</h2><p>Copyright © 2023 Dzaki. All rights reserved</p><div id="medsos" class="social-icon"><div class="social-item"><a href="https://api.whatsapp.com/send/?phone=%2B628999234378&amp;text&amp;type=phone_number&amp;app_absent=0" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/whatsapp.png"></a></div><div class="social-item"><a href="https://www.instagram.com/rezi_trix/" target="_blank"><img src="https://img.icons8.com/bubbles/100/000000/instagram.png"></a></div></div></div></section>',1);function o(t,e,a,n,o,s){const l=(0,r.up)("NavBar"),c=(0,r.up)("router-view");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(l),(0,r.Wm)(c),i],64)}var s=a(4870),l=a(6265),c=a.n(l),u=a(7139);const d={id:"coy",class:"navbar navbar-expand-lg navbar-light fixed-top"},p={class:"container-fluid"},m=(0,r._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,r._)("span",{class:"navbar-toggler-icon"})],-1),f={class:"collapse navbar-collapse",id:"navbarSupportedContent"},g={class:"navbar-nav me-auto mb-2 mb- lg-0"},h={class:"nav-item"},b=(0,r.Uk)("Beranda"),v={class:"nav-item"},y=(0,r.Uk)("Kontak"),w={class:"dropdown"},x=(0,r._)("a",{class:"btn dropdown-toggle text-black",href:"#",role:"button",id:"dropdownMenuLink","data-bs-toggle":"dropdown","aria-expanded":"false"}," Pilih Surah Yang diinginkan ",-1),_={class:"dropdown-menu","aria-labelledby":"dropdownMenuLink"};function k(t,e,a,n,i,o){const s=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)("nav",d,[(0,r._)("div",p,[m,(0,r._)("div",f,[(0,r._)("ul",g,[(0,r._)("li",h,[(0,r.Wm)(s,{class:"nav-link active text-black",to:"/"},{default:(0,r.w5)((()=>[b])),_:1})]),(0,r._)("li",v,[(0,r.Wm)(s,{class:"nav-link active text-black",to:"/kontak"},{default:(0,r.w5)((()=>[y])),_:1})]),(0,r._)("div",w,[x,(0,r._)("ul",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(i.listSurah,(t=>((0,r.wg)(),(0,r.iD)("li",{key:t.id},[(0,r.Wm)(s,{class:"dropdown-item",to:{name:"baca",params:{id:t.id}}},{default:(0,r.w5)((()=>[(0,r.Uk)((0,u.zw)(t.name_simple),1)])),_:2},1032,["to"])])))),128))])])])])])])}var S={data(){return{nomor:"1",judul:"",arti:"",listSurah:(0,s.iH)([]),namaSurah:""}},watch:{nomor(){this.getSurah()}},mounted(){this.getSurah(),this.getlistSurah()},methods:{getSurah(){c().get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`).then((t=>{this.judul=t.data.chapter,this.arti=this.judul.translated_name})).catch((t=>{console.log(t)}))},getlistSurah(){c().get("https://api.quran.com/api/v4/chapters?language=id").then((t=>{this.listSurah=t.data.chapters})).catch((t=>{console.log(t)}))}}},j=a(89);const C=(0,j.Z)(S,[["render",k]]);var O=C,E={components:{Navbar:O,axios:c(),ref:s.iH}};const D=(0,j.Z)(E,[["render",o]]);var z=D,A=a(678);const P=t=>((0,r.dD)("data-v-677021fa"),t=t(),(0,r.Cn)(),t),T=P((()=>(0,r._)("div",{class:"jumbotron jumbotron-fluid mt-5"},[(0,r._)("div",{class:"container text-center"},[(0,r._)("br"),(0,r._)("h1",{id:"test",class:"mt-5 display-4 fw-bolder"},"Alquran Flexibel Dzaki"),(0,r._)("p",{class:"lead"},"Bisa diakses kapan dan dimana saja")])],-1))),N={class:"container"},H={class:"row align-item-center justify-content-center"},q={class:"col-xl-12 col-md-12 col-lg-12 col-sm-12 col-12 p-1 mt-4"},W={class:"content-surah mx-5"},F={class:"row"},L={class:"card mx-3 my-3"},U={class:"card-content"},B={class:"card-body"},K={class:"media d-flex"},M={class:"media-body m-auto text-center"},Y={class:"card-title"},Z={class:"card-text"},I=(0,r.Uk)("View ");function V(t,e,a,i,o,s){const l=(0,r.up)("router-link");return(0,r.wg)(),(0,r.iD)(r.HY,null,[T,(0,r._)("div",N,[(0,r._)("div",H,[(0,r._)("form",q,[(0,r.wy)((0,r._)("input",{class:"form-control form-control-lg mb-1 font-italic",type:"text","onUpdate:modelValue":e[0]||(e[0]=t=>o.search=t),placeholder:"cari surah yang kamu inginkan... 🔍"},null,512),[[n.nr,o.search]])])])]),(0,r._)("div",W,[(0,r._)("div",F,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(s.filterSurah,((t,e)=>((0,r.wg)(),(0,r.iD)("div",{class:"col-xl-3 col-sm-6 col-12 p-1",key:e},[(0,r._)("div",L,[(0,r._)("div",U,[(0,r._)("div",B,[(0,r._)("div",K,[(0,r._)("div",M,[(0,r._)("h5",Y,(0,u.zw)(t.name_simple),1),(0,r._)("p",Z,(0,u.zw)(t.translated_name.name),1),(0,r.Wm)(l,{to:{name:"baca",params:{id:t.id}},id:"warna",class:"btn btn"},{default:(0,r.w5)((()=>[I])),_:2},1032,["to"])])])])])])])))),128))])])],64)}var $={data(){return{nomor:"1",judul:"",arti:"",listSurah:(0,s.iH)([]),namaSurah:"",search:""}},watch:{nomor(){this.getSurah()}},mounted(){this.getSurah(),this.getlistSurah()},methods:{getSurah(){c().get(`https://api.quran.com/api/v4/chapters/${this.nomor}?language=id`).then((t=>{this.judul=t.data.chapter,this.arti=this.judul.translated_name})).catch((t=>{console.log(t)}))},getlistSurah(){c().get("https://api.quran.com/api/v4/chapters?language=id").then((t=>{this.listSurah=t.data.chapters})).catch((t=>{console.log(t)}))}},computed:{filterSurah:function(){return this.listSurah.filter((t=>t.name_simple.toLowerCase().split("-").join(" ").match(this.search)))}}};const J=(0,j.Z)($,[["render",V],["__scopeId","data-v-677021fa"]]);var X=J;const G=(0,r._)("head",null,[(0,r._)("meta",{charset:"UTF-8"}),(0,r._)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),(0,r._)("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),(0,r._)("title",null,"Contact from app"),(0,r._)("link",{href:"https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",rel:"stylesheet",src:"https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js"})],-1),Q={id:"gambarku",class:"text-gray-600 body-font"},R={id:"contact-form",action:"https://formspree.io/f/xpzeovjj",method:"POST"},tt={class:"container px-5 py-24 mx-auto"},et={class:"flex flex-col text-center w-full mb-12"},at=(0,r._)("h1",{class:"sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"},"Kontak Saya ",-1),nt=(0,r._)("p",{class:"lg:w-2/3 mx-auto leading-relaxed text-base"}," Terima kasih, Mohon Hubungi Kontak Saya Jika Ada kendala dalam proses penggunaan pada aplikasi alquran ini . ",-1),rt=(0,r.uE)('<div class="lg:w-1/3 w-full mx-auto px-8"><div class="relative flex-grow w-full"><label for="full-name" class="leading-7 text-sm text-gray-600">Nama Pengirim</label><input type="text" id="full-name" name="full-name" class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative flex-grow w-full"><label for="email" class="leading-7 text-sm text-gray-600">Email Pengirim</label><input type="email" id="email" name="email" class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative flex-grow w-full"><label for="subject" class="leading-7 text-sm text-gray-600">Subjek</label><input type="text" id="subject" name="subject" class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></div><div class="relative flex-grow w-full"><label for="message" class="leading-7 text-sm text-gray-600">Pesan</label><textarea type="text" id="message" name="message" class="w-full bg-white bg-opacity-50 rounded border border-gray-300 focus:border-red-500 focus:bg-transparent focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea></div><button type="submit" id="iniaja" class="mt-3 w-full text-light bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"> Kirim pesan </button></div>',1);function it(t,e){const a=(0,r.up)("Navbar"),n=(0,r.up)("lord-icon"),i=(0,r.up)("Footer");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(a),G,(0,r._)("body",null,[(0,r._)("section",Q,[(0,r._)("form",R,[(0,r._)("div",tt,[(0,r._)("div",et,[(0,r.Wm)(n,{src:"https://assets10.lottiefiles.com/packages/lf20_lshv4smz.json",trigger:"hover",style:{width:"1450px",height:"150px"},class:"hidden lg:flex"}),at,nt]),rt])])])]),(0,r.Wm)(i)],64)}const ot={},st=(0,j.Z)(ot,[["render",it]]);var lt=st;const ct=[{path:"/",name:"home",component:X},{path:"/kontak",name:"kontak",component:lt},{path:"/about",name:"about",component:()=>a.e(443).then(a.bind(a,8086))},{path:"/baca/:id",name:"baca",component:()=>a.e(329).then(a.bind(a,2329))}],ut=(0,A.p7)({history:(0,A.PO)("/"),routes:ct});var dt=ut;a(5654);(0,n.ri)(z).use(dt).mount("#app")}},e={};function a(n){var r=e[n];if(void 0!==r)return r.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,a),i.exports}a.m=t,function(){var t=[];a.O=function(e,n,r,i){if(!n){var o=1/0;for(u=0;u<t.length;u++){n=t[u][0],r=t[u][1],i=t[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||o>=i)&&Object.keys(a.O).every((function(t){return a.O[t](n[l])}))?n.splice(l--,1):(s=!1,i<o&&(o=i));if(s){t.splice(u--,1);var c=r();void 0!==c&&(e=c)}}return e}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[n,r,i]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var n in e)a.o(e,n)&&!a.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})}}(),function(){a.f={},a.e=function(t){return Promise.all(Object.keys(a.f).reduce((function(e,n){return a.f[n](t,e),e}),[]))}}(),function(){a.u=function(t){return"js/"+(443===t?"about":t)+"."+{329:"94bb641d",443:"f2c56946"}[t]+".js"}}(),function(){a.miniCssF=function(t){return"css/"+t+".c4ff88a4.css"}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="utsdzaki:";a.l=function(n,r,i,o){if(t[n])t[n].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==e+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,a.nc&&s.setAttribute("nonce",a.nc),s.setAttribute("data-webpack",e+i),s.src=n),t[n]=[r];var p=function(e,a){s.onerror=s.onload=null,clearTimeout(m);var r=t[n];if(delete t[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(t){return t(a)})),e)return e(a)},m=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t=function(t,e,a,n){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var i=function(i){if(r.onerror=r.onload=null,"load"===i.type)a();else{var o=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.href||e,l=new Error("Loading CSS chunk "+t+" failed.\n("+s+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=o,l.request=s,r.parentNode.removeChild(r),n(l)}};return r.onerror=r.onload=i,r.href=e,document.head.appendChild(r),r},e=function(t,e){for(var a=document.getElementsByTagName("link"),n=0;n<a.length;n++){var r=a[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===t||i===e))return r}var o=document.getElementsByTagName("style");for(n=0;n<o.length;n++){r=o[n],i=r.getAttribute("data-href");if(i===t||i===e)return r}},n=function(n){return new Promise((function(r,i){var o=a.miniCssF(n),s=a.p+o;if(e(o,s))return r();t(n,s,r,i)}))},r={143:0};a.f.miniCss=function(t,e){var a={329:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=n(t).then((function(){r[t]=0}),(function(e){throw delete r[t],e})))}}(),function(){var t={143:0};a.f.j=function(e,n){var r=a.o(t,e)?t[e]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(a,n){r=t[e]=[a,n]}));n.push(r[2]=i);var o=a.p+a.u(e),s=new Error,l=function(n){if(a.o(t,e)&&(r=t[e],0!==r&&(t[e]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",s.name="ChunkLoadError",s.type=i,s.request=o,r[1](s)}};a.l(o,l,"chunk-"+e,e)}},a.O.j=function(e){return 0===t[e]};var e=function(e,n){var r,i,o=n[0],s=n[1],l=n[2],c=0;if(o.some((function(e){return 0!==t[e]}))){for(r in s)a.o(s,r)&&(a.m[r]=s[r]);if(l)var u=l(a)}for(e&&e(n);c<o.length;c++)i=o[c],a.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return a.O(u)},n=self["webpackChunkutsdzaki"]=self["webpackChunkutsdzaki"]||[];n.forEach(e.bind(null,0)),n.push=e.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(8846)}));n=a.O(n)})();
//# sourceMappingURL=app.0465d211.js.map