(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3dc42e56"],{"7d65":function(e,t,s){},"9d64":function(e,t,s){e.exports=s.p+"img/logo.f46d9f19.png"},a55b:function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("van-nav-bar",{attrs:{title:"登录","left-text":"注册","right-text":"关闭"},on:{"click-left":function(t){return e.goPage("Register")}}}),e._m(0),s("div",{staticClass:"title"},[e._v("Drink")]),s("van-form",{on:{submit:e.login}},[s("van-field",{attrs:{type:"text",label:"手机号",placeholder:"手机号",clearable:"","right-icon":"close","left-icon":"phone-o"},model:{value:e.userInfo.phone,callback:function(t){e.$set(e.userInfo,"phone",t)},expression:"userInfo.phone"}}),s("van-field",{attrs:{type:e.isEye?"text":"password",label:"密码",placeholder:"密码","left-icon":"lock","right-icon":e.isEye?"eye-o":"closed-eye"},on:{"click-right-icon":e.viewPassword},model:{value:e.userInfo.password,callback:function(t){e.$set(e.userInfo,"password",t)},expression:"userInfo.password"}}),s("div",{staticClass:"register-btn"},[s("van-button",{staticClass:"zhuce",attrs:{round:"",block:"",type:"info","native-type":"submit"}},[e._v("登录")]),s("div",{staticClass:"forgot",on:{click:function(t){return e.goPage("Forget")}}},[s("span",{staticClass:"fr"},[e._v("忘记密码？")])])],1)],1)],1)},a=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"logo"},[n("img",{staticClass:"auto-img",attrs:{src:s("9d64"),alt:""}})])}],o=(s("7d65"),s("e3a8")),r={data:function(){return{userInfo:{phone:"",password:""},isEye:!1}},methods:{goPage:function(e){this.$router.push({name:e})},viewPassword:function(){this.isEye=!this.isEye},login:function(){var e=this;if(o["a"].validUserForm(this.userInfo)){var t=Object.assign({},this.userInfo);t.appkey=this.appkey,this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0}),this.axios({method:"POST",url:"/login",data:t}).then((function(t){e.$toast.clear(),200==t.data.code?(e.$router.push({name:"Menu"}),localStorage.setItem("&tk",t.data.token)):e.$toast(t.data.msg)})).catch((function(t){e.$toast.clear()}))}}}},i=r,l=s("2877"),c=Object(l["a"])(i,n,a,!1,null,null,null);t["default"]=c.exports},e3a8:function(e,t,s){"use strict";s("e7e5");var n=s("d399");function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var s=0;s<t.length;s++){var n=t[s];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,t,s){return t&&o(e.prototype,t),s&&o(e,s),e}var i=function(){function e(){a(this,e),this.validUserFormReg={nickName:{reg:/^[\u4e00-\u9fa5\w]{1,10}$/,msg:"昵称格式不正确"},phone:{reg:/^1[3-9]\d{9}$/,msg:"手机号格式不正确"},password:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码号格式不正确"},oldPassword:{reg:/^[a-zA-Z]\w{5,15}$/,msg:"密码号格式不正确"},email:{reg:/^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,msg:"邮箱格式不正确"},code:{reg:/^\d{6}$/,msg:"格式正确"}}}return r(e,[{key:"validUserForm",value:function(e){for(var t in e)if(!this.validUserFormReg[t].reg.test(e[t]))return Object(n["a"])(this.validUserFormReg[t].msg),!1;return!0}}]),e}();t["a"]=new i}}]);
//# sourceMappingURL=chunk-3dc42e56.414327da.js.map