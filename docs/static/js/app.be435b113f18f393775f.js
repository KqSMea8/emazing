webpackJsonp([1],{"5AqT":function(e,t){},"7tlo":function(e,t){},"8tpp":function(e,t){},D4uH:function(e,t,n){"use strict";var i={},r={name:"icon",props:{name:{type:String,validator:function(e){return e?e in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlease make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,n=e.height;return Math.max(t,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g,function(e,n,i){var r="fa-"+(o++).toString(16);return t[i]=r,' id="'+r+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,n,i,r){var o=n||r;return o&&t[o]?"#"+t[o]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e){var n=e[t];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[t]=n}},icons:i},o=870711;var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,i){return n("path",e._b({key:"path-"+i},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,i){return n("polygon",e._b({key:"polygon-"+i},"polygon",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.raw?[n("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},staticRenderFns:[]};var a=n("VU/8")(r,s,!1,function(e){n("5AqT")},null,null);t.a=a.exports},EMxx:function(e,t){},knZk:function(e,t){},lRwf:function(e,t){e.exports=Vue},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("lRwf"),r=n.n(i),o=n("pRNm"),s=n.n(o),a=n("//Fk"),c=n.n(a);var l=function(e,t){return 0!==(t=t||"").replace(/\s/g,"").length&&new RegExp(" "+t+" ").test(" "+e.className+" ")},u="Emazing",h=sessionStorage.getItem("egg");function p(e){return new c.a(function(t,n){e===u||h===u?(sessionStorage.setItem("egg",u),t()):(sessionStorage.removeItem("egg"),n(new Error))})}var f={data:function(){return{text:"We Are ",typedText:"",typingText:[],typingEnd:!1,egg:""}},methods:{typing:function(e){var t=this;return new c.a(function(n,i){if(e?t.typingText=e.split(""):(t.typedText+=t.typingText.shift(),t.typingEnd=t.typedText===t.text,t.typingEnd&&(t.$el.querySelector(".input").focus(),function(e,t){if(l(e,t)){for(var n=" "+e.className.replace(/[\t\r\n]/g,"")+" ";n.indexOf(" "+t+" ")>=0;)n=n.replace(" "+t+" "," ");e.className=n.replace(/^\s+|\s+$/g,"")}}(t.$el.querySelector(".typing"),"typing"))),t.typingText.length){var r=300*Math.random();r=r<150?150:r,setTimeout(function(){n(t.typing())},r)}else n()})},keyPress:function(e){"Enter"===e.key&&this.check()},pass:function(){sessionStorage.setItem("egg",this.egg),this.$router.push("/home")},check:function(){var e=this;p(this.egg).then(function(){e.pass()}).catch(function(){console.log("Aha...")})}},mounted:function(){this.check(),this.typing(this.text),this.$el.querySelector(".input").addEventListener("keypress",this.keyPress)}},d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fun-body flex columns justify-center align-center"},[n("div",{staticClass:"typing flex align-center",class:{"typing-end":e.typingEnd},attrs:{id:"welcome"}},[n("span",{staticClass:"yellow"},[e._v(e._s(e.typedText))]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.egg,expression:"egg"}],staticClass:"input",attrs:{spellcheck:"false",placeholder:"Emm..."},domProps:{value:e.egg},on:{input:function(t){t.target.composing||(e.egg=t.target.value)}}})])])},staticRenderFns:[]};var g=n("VU/8")(f,d,!1,function(e){n("7tlo")},null,null).exports,m={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"fun-body flex align-center justify-center"},[t("img",{attrs:{src:"https://fuss10.elemecdn.com/f/7b/0b7dd75a395c15670538a83145719png.png",id:"continue-img",draggable:"false"}})])}]};var v=n("VU/8")({data:function(){return{}}},m,!1,function(e){n("8tpp")},null,null).exports;r.a.use(s.a);var y=[{path:"/",name:"index",component:g},{path:"/welcome",name:"welcome",component:g},{path:"/home",name:"home",component:v}],x=new s.a({routes:y,mode:"hash",scrollBehavior:function(){return{x:0,y:0}}}),w=(n("H7zp"),n("LcEa"),n("D4uH")),_={mounted:function(){var e=this;p().catch(function(){e.$router.push("/welcome")})}},E={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var S=n("VU/8")(_,E,!1,function(e){n("EMxx")},null,null).exports;n("knZk");r.a.component("icon",w.a);var b;(b=document.getElementById("loading-wrapper"))&&b.parentNode.removeChild(b),new r.a({el:"#app",components:{App:S},template:"<App />",router:x})},pRNm:function(e,t){e.exports=VueRouter}},["lVK7"]);
//# sourceMappingURL=app.be435b113f18f393775f.js.map