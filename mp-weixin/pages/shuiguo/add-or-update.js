(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shuiguo/add-or-update"],{"2c10":function(e,u,t){"use strict";t.r(u);var n=t("3902"),i=t("eac7");for(var r in i)"default"!==r&&function(e){t.d(u,e,(function(){return i[e]}))}(r);t("f80f");var o,s=t("f0c5"),a=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"3867e2c9",null,!1,n["a"],o);u["default"]=a.exports},3902:function(e,u,t){"use strict";t.d(u,"b",(function(){return i})),t.d(u,"c",(function(){return r})),t.d(u,"a",(function(){return n}));var n={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"b7aa"))}},i=function(){var e=this,u=e.$createElement;e._self._c},r=[]},"69e2":function(e,u,t){},"86eb":function(e,u,t){"use strict";(function(e){Object.defineProperty(u,"__esModule",{value:!0}),u.default=void 0;var n=i(t("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,u,t,n,i,r,o){try{var s=e[r](o),a=s.value}catch(c){return void t(c)}s.done?u(a):Promise.resolve(a).then(n,i)}function o(e){return function(){var u=this,t=arguments;return new Promise((function(n,i){var o=e.apply(u,t);function s(e){r(o,n,i,s,a,"next",e)}function a(e){r(o,n,i,s,a,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("b7aa"))}.bind(null,t)).catch(t.oe)},a={data:function(){return{cross:"",ro:{shuiguoName:!1,shuiguoPhoto:!1,shuiguoTypes:!1,shuiguoKucunNumber:!1,shuiguoOldMoney:!1,shuiguoNewMoney:!1,shuiguoClicknum:!1,shangxiaTypes:!1,shuiguoDelete:!1,shuiguoContent:!1,createTime:!1},ruleForm:{shuiguoName:"",shuiguoPhoto:"",shuiguoTypes:"",shuiguoValue:"",shuiguoKucunNumber:"",shuiguoOldMoney:"",shuiguoNewMoney:"",shuiguoClicknum:"",shangxiaTypes:"",shangxiaValue:"",shuiguoDelete:"",shuiguoContent:"",createTime:""},user:{},shuiguoTypesOptions:[],shuiguoTypesIndex:0,shangxiaTypesOptions:[],shangxiaTypesIndex:0}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var u=this;return o(n.default.mark((function t(){var i,r,o,s,a;return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i={page:1,limit:100,dicCode:"shuiguo_types"},t.next=3,u.$api.page("dictionary",i);case 3:return r=t.sent,u.shuiguoTypesOptions=r.data.list,o={page:1,limit:100,dicCode:"shangxia_types"},t.next=8,u.$api.page("dictionary",o);case 8:if(s=t.sent,u.shangxiaTypesOptions=s.data.list,!e.id){t.next=16;break}return u.ruleForm.id=e.id,t.next=14,u.$api.info("shuiguo",u.ruleForm.id);case 14:a=t.sent,u.ruleForm=a.data;case 16:e.shuiguoId&&(u.ruleForm.shuiguoId=e.shuiguoId);case 17:case"end":return t.stop()}}),t)})))()},methods:{shuiguoTypesChange:function(e){this.shuiguoTypesIndex=e.target.value,this.ruleForm.shuiguoValue=this.shuiguoTypesOptions[this.shuiguoTypesIndex].indexName,this.ruleForm.shuiguoTypes=this.shuiguoTypesOptions[this.shuiguoTypesIndex].codeIndex},shangxiaTypesChange:function(e){this.shangxiaTypesIndex=e.target.value,this.ruleForm.shangxiaValue=this.shangxiaTypesOptions[this.shangxiaTypesIndex].indexName,this.ruleForm.shangxiaTypes=this.shangxiaTypesOptions[this.shangxiaTypesIndex].codeIndex},shuiguoPhotoTap:function(){var e=this;this.$api.upload((function(u){e.ruleForm.shuiguoPhoto=e.$base.url+"upload/"+u.file,e.$forceUpdate(),e.$nextTick((function(){}))}))},createTimeConfirm:function(e){console.log(e),this.ruleForm.createTime=e.result,this.$forceUpdate()},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var u=this;return o(n.default.mark((function t(){return n.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(u.ruleForm.shuiguoName){t.next=3;break}return u.$utils.msg("水果名称不能为空"),t.abrupt("return");case 3:if(u.ruleForm.shuiguoPhoto){t.next=6;break}return u.$utils.msg("水果照片不能为空"),t.abrupt("return");case 6:if(u.ruleForm.shuiguoKucunNumber||u.$validate.isIntNumer(u.ruleForm.shuiguoKucunNumber)||!(u.ruleForm.shuiguoKucunNumber>0)){t.next=9;break}return u.$utils.msg("水果库存不能为空，不能小于0 格式为数字"),t.abrupt("return");case 9:if(u.ruleForm.shuiguoClicknum||u.$validate.isIntNumer(u.ruleForm.shuiguoClicknum)||!(u.ruleForm.shuiguoClicknum>0)){t.next=12;break}return u.$utils.msg("点击次数不能为空，不能小于0 格式为数字"),t.abrupt("return");case 12:if(!u.ruleForm.id){t.next=17;break}return t.next=15,u.$api.update("shuiguo",u.ruleForm);case 15:t.next=19;break;case 17:return t.next=19,u.$api.save("shuiguo",u.ruleForm);case 19:e.setStorageSync("pingluenStateState",!0),u.$utils.msgBack("提交成功");case 21:case"end":return t.stop()}}),t)})))()},getDate:function(e){var u=new Date,t=u.getFullYear(),n=u.getMonth()+1,i=u.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),n=n>9?n:"0"+n,i=i>9?i:"0"+i,"".concat(t,"-").concat(n,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};u.default=a}).call(this,t("543d")["default"])},eac7:function(e,u,t){"use strict";t.r(u);var n=t("86eb"),i=t.n(n);for(var r in n)"default"!==r&&function(e){t.d(u,e,(function(){return n[e]}))}(r);u["default"]=i.a},ebde:function(e,u,t){"use strict";(function(e){t("48e8");n(t("66fd"));var u=n(t("2c10"));function n(e){return e&&e.__esModule?e:{default:e}}wx.__webpack_require_UNI_MP_PLUGIN__=t,e(u.default)}).call(this,t("543d")["createPage"])},f80f:function(e,u,t){"use strict";var n=t("69e2"),i=t.n(n);i.a}},[["ebde","common/runtime","common/vendor"]]]);