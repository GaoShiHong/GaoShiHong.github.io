(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7c3a4264"],{"2a00":function(t,e,n){},"43b3":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"titles"},[n("Arrow"),t._t("default")],2)},s=[],o=n("a4df"),r={components:{Arrow:o["a"]}},i=r,u=(n("6618"),n("2877")),l=Object(u["a"])(i,a,s,!1,null,"72d296c6",null);e["a"]=l.exports},4902:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"novelDetail"},[n("Title",[t._v(t._s(t.cont.title))]),n("div",{staticClass:"introd"},[n("img",{attrs:{src:t.imgsrc,alt:""}}),n("div",{staticClass:"text"},[n("strong",[t._v(t._s(t.cont.title))]),n("p",[n("span",[t._v(t._s(t.cont.author))])]),n("p",[n("span",[t._v(t._s(t.updated))]),t._v("|\n        "),n("span",[t._v(t._s(t.wordCount)+"字")]),t._v("|\n        "),n("span",[t._v(t._s(t.majorCate))])])]),n("button",{staticClass:"newtext",on:{click:t.getLast}},[t._v("追更新")]),n("button",{staticClass:"firsttext",on:{click:t.getFirst}},[t._v("开始阅读")])]),n("div",{staticClass:"numbers"},[n("li",[n("p",[t._v("追书人气")]),n("p",[t._v(t._s(t.latelyFollower))])]),n("li",[n("p",[t._v("读者留存率")]),n("p",[t._v(t._s(t.retentionRatio))])]),n("li",[n("p",[t._v("日更新字数")]),n("p",[t._v(t._s(t.serializeWordCount))])])]),n("div",{staticClass:"tag"},t._l(t.tags,function(e,a){return n("button",{key:a},[t._v(t._s(e))])}),0),n("div",{staticClass:"longIntro"},[n("p",[t._v(t._s(t.longIntro))])])],1)},s=[],o=n("43b3"),r=n("bc3a"),i=n.n(r),u={components:{Title:o["a"]},data:function(){return{cont:null,imgsrc:null,gethttp:null,substance:null,updated:null,wordCount:null,majorCate:null,latelyFollower:null,retentionRatio:null,serializeWordCount:null,tags:null,longIntro:null}},created:function(){var t=this;this.cont=this.$route.params.detail,this.gethttp="http://api.kele8.cn/agent?url=http://api.zhuishushenqi.com/book/"+this.cont["_id"],i.a.get(this.gethttp).then(function(e){t.substance=e.data,t.imgsrc="http://statics.zhuishushenqi.com"+t.substance.cover,t.updated=t.substance.updated,t.wordCount=t.substance.wordCount,t.majorCate=t.substance.majorCate,t.latelyFollower=t.substance.latelyFollower,t.retentionRatio=t.substance.retentionRatio,t.serializeWordCount=t.substance.serializeWordCount,t.tags=t.substance.tags,t.longIntro=t.substance.longIntro}).catch(function(t){console.error(t)})},methods:{getFirst:function(){this.$router.push({name:"novelcontent",params:{cont:this.cont},query:{gender:this.gender,major:this.major}})},getLast:function(){this.$router.push({name:"novelcontent",params:{cont:this.cont},query:{gender:this.gender,major:this.major}})}},beforeRouteLeave:function(t,e,n){"seniorityContentId"==t.name?(t.params.gaoshi=e.params.gaoshi,t.query.userid=e.query.userid):"xuanhuanitem"==t.name&&(console.log("out--name=xuanhuanitem"),t.params.partDetail=e.params.detail,t.query.back="yes",t.query.gender=e.query.gender,t.query.major=e.query.major),n()},beforeRouteEnter:function(t,e,n){"seniorityContentId"==e.name?(t.params.gaoshi=e.params.gaoshi,t.query.userid=e.query.userid):"xuanhuanitem"==e.name&&(console.log("in--name=xuanhuanitem"),t.query.major=e.query.major,t.query.gender=e.query.gender),n()}},l=u,c=(n("97e8"),n("2877")),d=Object(c["a"])(l,a,s,!1,null,"406b03a4",null);e["default"]=d.exports},6618:function(t,e,n){"use strict";var a=n("2a00"),s=n.n(a);s.a},6738:function(t,e,n){},"97e8":function(t,e,n){"use strict";var a=n("6738"),s=n.n(a);s.a},a4df:function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:this.$route.meta.isArrowShow,expression:"this.$route.meta.isArrowShow"}],staticClass:"arrow",on:{click:t.back}},[n("span",{staticClass:"fa fa-arrow-left"})])},s=[],o={name:"arrow",methods:{back:function(){this.$router.go(-1)}}},r=o,i=(n("ec48"),n("2877")),u=Object(i["a"])(r,a,s,!1,null,"2742b4f0",null);e["a"]=u.exports},e292:function(t,e,n){},ec48:function(t,e,n){"use strict";var a=n("e292"),s=n.n(a);s.a}}]);
//# sourceMappingURL=chunk-7c3a4264.8d9e152b.js.map