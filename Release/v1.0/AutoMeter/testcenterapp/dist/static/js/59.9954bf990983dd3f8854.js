webpackJsonp([59],{UKWE:function(i,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("Dd8w"),a=n.n(e),o=n("vLgD");function s(i){return Object(o.a)({url:"/condition/api/search",method:"post",data:i})}var c=n("IBLw"),d=n("W+bg"),l=n("2d0t"),p=n("XcM5"),r=n("0xDb"),u=n("NYxO"),m={filters:{statusFilter:function(i){return{published:"success",draft:"gray",deleted:"danger"}[i]}},data:function(){return{id:null,itemKey:null,tmpconditionname:"",conditionList:[],apiconditionList:[],apiList:[],caseList:[],deployunitList:[],listLoading:!1,total:0,deployunitQuery:{deployunitid:"",modelid:0,deployunitname:""},apiquery:{casedeployunitname:"",caseapiname:"",apiid:"",deployunitid:""},apicaseQuery:{apiname:""},listQuery:{page:1,size:10,listLoading:!0},dialogStatus:"add",dialogFormVisible:!1,textMap:{updateRole:"修改接口条件",update:"修改接口条件",add:"添加接口条件"},btnLoading:!1,tmpapicondition:{id:"",conditionid:"",subconditionname:"",conditionname:"",deployunitid:"",deployunitname:"",apiname:"",apiid:"",caseid:"",casename:"",memo:"",creator:"",projectid:""},search:{page:1,size:10,conditionname:null,projectid:""}}},computed:a()({},Object(u.b)(["name","sidebar","projectlist","projectid"])),created:function(){this.search.projectid=window.localStorage.getItem("pid"),this.getapiconditionList(),this.getdepunitLists(),this.getalltestcondition()},activated:function(){this.getdepunitLists(),this.getalltestcondition()},methods:{unix2CurrentTime:r.b,deployunitselectChanged:function(i){for(var t=this,n=0;n<this.deployunitList.length;n++)this.deployunitList[n].deployunitname===i&&(this.tmpapicondition.deployunitid=this.deployunitList[n].id,this.deployunitQuery.deployunitid=this.deployunitList[n].id,this.apiquery.deployunitid=this.deployunitList[n].id);this.tmpapicondition.apiname="",this.tmpapicondition.casename="",this.deployunitQuery.deployunitname=i,Object(d.d)(this.deployunitQuery).then(function(i){t.apiList=i.data}).catch(function(i){t.$message.error("加载api列表失败")})},apiselectChanged:function(i){for(var t=this,n=0;n<this.apiList.length;n++)this.apiList[n].apiname===i&&(this.tmpapicondition.apiid=this.apiList[n].id);this.tmpapicondition.casename="",this.apiquery.caseapiname=i,this.apiquery.casedeployunitname=this.deployunitQuery.deployunitname,this.apiquery.apiid=this.tmpapicondition.apiid,Object(l.d)(this.apiquery).then(function(i){t.caseList=i.data}).catch(function(i){t.$message.error("加载apicase列表失败")})},testcaseselectChanged:function(i){for(var t=0;t<this.caseList.length;t++)this.caseList[t].casename===i&&(this.tmpapicondition.caseid=this.caseList[t].id)},ConditionselectChanged:function(i){for(var t=0;t<this.conditionList.length;t++)this.conditionList[t].conditionname===i&&(this.tmpapicondition.conditionid=this.conditionList[t].id),this.tmpapicondition.deployunitname="",this.tmpapicondition.apiname="",this.tmpapicondition.casename=""},selectChangedMN:function(i){for(var t=0;t<this.machinenameList.length;t++)this.machinenameList[t].machinename===i&&(this.tmpapicondition.machineid=this.machinenameList[t].id),console.log(this.machinenameList[t].id)},getdepunitLists:function(){var i=this;this.listLoading=!0,Object(p.e)(this.search).then(function(t){i.deployunitList=t.data,i.listLoading=!1}).catch(function(t){i.$message.error("加载微服务列表失败")})},getapiconditionList:function(){var i=this;this.listLoading=!0,this.search.conditionname=this.tmpconditionname,s(this.search).then(function(t){i.apiconditionList=t.data.list,i.total=t.data.total,i.listLoading=!1}).catch(function(t){i.$message.error("加载测试接口条件列表失败")})},getalltestcondition:function(){var i=this;this.listLoading=!0,Object(c.b)(this.search).then(function(t){i.conditionList=t.data,i.total=t.data.total,i.listLoading=!1}).catch(function(t){i.$message.error("加载条件列表失败")})},searchBy:function(){var i=this;this.search.page=1,this.listLoading=!0,s(this.search).then(function(t){i.itemKey=Math.random(),i.apiconditionList=t.data.list,i.total=t.data.total}).catch(function(t){i.$message.error("搜索失败")}),this.tmpconditionname=this.search.conditionname,this.listLoading=!1,this.btnLoading=!1},handleSizeChange:function(i){this.search.page=1,this.search.size=i,this.getapiconditionList()},handleCurrentChange:function(i){this.search.page=i,this.getapiconditionList()},getIndex:function(i){return(this.search.page-1)*this.search.size+i+1},showAddapiconditionDialog:function(){this.dialogFormVisible=!0,this.dialogStatus="add",this.tmpapicondition.id="",this.tmpapicondition.subconditionname="",this.tmpapicondition.conditionname="",this.tmpapicondition.deployunitname="",this.tmpapicondition.apiname="",this.tmpapicondition.casename="",this.tmpapicondition.creator=this.name,this.tmpapicondition.projectid=window.localStorage.getItem("pid")},addapicondition:function(){var i=this;this.$refs.tmpapicondition.validate(function(t){var n;t&&(i.btnLoading=!0,(n=i.tmpapicondition,Object(o.a)({url:"/condition/api",method:"post",data:n})).then(function(){i.$message.success("添加成功"),i.getapiconditionList(),i.dialogFormVisible=!1,i.btnLoading=!1}).catch(function(t){i.$message.error("添加失败"),i.btnLoading=!1}))})},showUpdateapiconditionDialog:function(i){var t=this;this.dialogFormVisible=!0,this.dialogStatus="update",this.tmpapicondition.id=this.apiconditionList[i].id,this.tmpapicondition.conditionid=this.apiconditionList[i].conditionid,this.tmpapicondition.deployunitid=this.apiconditionList[i].deployunitid,this.tmpapicondition.caseid=this.apiconditionList[i].caseid,this.tmpapicondition.apiid=this.apiconditionList[i].apiid,this.tmpapicondition.conditionname=this.apiconditionList[i].conditionname,this.tmpapicondition.deployunitname=this.apiconditionList[i].deployunitname,this.tmpapicondition.subconditionname=this.apiconditionList[i].subconditionname,this.deployunitQuery.deployunitname=this.tmpapicondition.deployunitname,this.deployunitQuery.deployunitid=this.apiconditionList[i].deployunitid,Object(d.d)(this.deployunitQuery).then(function(i){t.apiList=i.data}).catch(function(i){t.$message.error("加载api列表失败")}),this.tmpapicondition.apiname=this.apiconditionList[i].apiname,this.apiquery.caseapiname=this.tmpapicondition.apiname,this.apiquery.casedeployunitname=this.tmpapicondition.deployunitname,this.apiquery.deployunitid=this.apiconditionList[i].deployunitid,this.apiquery.apiid=this.apiconditionList[i].apiid,Object(l.d)(this.apiquery).then(function(i){t.caseList=i.data}).catch(function(i){t.$message.error("加载apicase列表失败")}),this.tmpapicondition.casename=this.apiconditionList[i].casename,this.tmpapicondition.creator=this.name},updateapicondition:function(){var i=this;this.$refs.tmpapicondition.validate(function(t){var n;t&&(n=i.tmpapicondition,Object(o.a)({url:"/condition/api/detail",method:"put",data:n})).then(function(){i.$message.success("更新成功"),i.getapiconditionList(),i.dialogFormVisible=!1}).catch(function(t){i.$message.error("更新失败")})})},removeapicondition:function(i){var t=this;this.$confirm("删除该接口条件？","警告",{confirmButtonText:"是",cancelButtonText:"否",type:"warning"}).then(function(){var n,e=t.apiconditionList[i].id;(n=e,Object(o.a)({url:"/condition/api/"+n,method:"delete"})).then(function(){t.$message.success("删除成功"),t.getapiconditionList()})}).catch(function(){t.$message.info("已取消删除")})},isUniqueDetail:function(i){for(var t=0;t<this.apiconditionList.length;t++)if(this.apiconditionList[t].id!==i.id&&this.apiconditionList[t].enviromentname===i.enviromentname&&this.apiconditionList[t].machinename===i.machinename)return this.$message.error("接口条件名已存在"),!1;return!0}}},h={render:function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("div",{staticClass:"app-container"},[n("div",{staticClass:"filter-container"},[n("el-form",{attrs:{inline:!0}},[n("el-form-item",[i.hasPermission("apicondition:list")?n("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-refresh"},nativeOn:{click:function(t){return t.preventDefault(),i.getapiconditionList(t)}}},[i._v("刷新")]):i._e(),i._v(" "),i.hasPermission("apicondition:add")?n("el-button",{attrs:{type:"primary",size:"mini",icon:"el-icon-plus"},nativeOn:{click:function(t){return t.preventDefault(),i.showAddapiconditionDialog(t)}}},[i._v("添加接口条件")]):i._e()],1),i._v(" "),i.hasPermission("apicondition:search")?n("span",[n("el-form-item",{attrs:{label:"父条件名："}},[n("el-select",{attrs:{placeholder:"父条件名",clearable:""},model:{value:i.search.conditionname,callback:function(t){i.$set(i.search,"conditionname",t)},expression:"search.conditionname"}},[n("el-option",{attrs:{label:"请选择",value:""}}),i._v(" "),i._l(i.conditionList,function(i,t){return n("div",{key:t},[n("el-option",{attrs:{label:i.conditionname,value:i.conditionname}})],1)})],2)],1),i._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary",loading:i.btnLoading},on:{click:i.searchBy}},[i._v("查询")])],1)],1):i._e()],1)],1),i._v(" "),n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:i.listLoading,expression:"listLoading",modifiers:{body:!0}}],key:i.itemKey,attrs:{data:i.apiconditionList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:i._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:i._s(i.getIndex(t.$index))}})]}}])}),i._v(" "),n("el-table-column",{attrs:{label:"父条件名",align:"center",prop:"conditionname",width:"180"}}),i._v(" "),n("el-table-column",{attrs:{label:"子条件名",align:"center",prop:"subconditionname",width:"170"}}),i._v(" "),n("el-table-column",{attrs:{label:"微服务名",align:"center",prop:"deployunitname",width:"120"}}),i._v(" "),n("el-table-column",{attrs:{label:"API名",align:"center",prop:"apiname",width:"100"}}),i._v(" "),n("el-table-column",{attrs:{label:"接口名",align:"center",prop:"casename",width:"100"}}),i._v(" "),n("el-table-column",{attrs:{label:"操作人",align:"center",prop:"creator",width:"70"}}),i._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"创建时间",align:"center",prop:"createTime",width:"120"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v(i._s(i.unix2CurrentTime(t.row.createTime)))]}}])}),i._v(" "),n("el-table-column",{attrs:{"show-overflow-tooltip":!0,label:"最后修改时间",align:"center",prop:"lastmodifyTime",width:"120"},scopedSlots:i._u([{key:"default",fn:function(t){return[i._v(i._s(i.unix2CurrentTime(t.row.lastmodifyTime))+"\n      ")]}}])}),i._v(" "),i.hasPermission("apicondition:update")||i.hasPermission("apicondition:delete")?n("el-table-column",{attrs:{label:"管理",align:"center",width:"150"},scopedSlots:i._u([{key:"default",fn:function(t){return[i.hasPermission("apicondition:update")&&t.row.id!==i.id?n("el-button",{attrs:{type:"warning",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),i.showUpdateapiconditionDialog(t.$index)}}},[i._v("修改")]):i._e(),i._v(" "),i.hasPermission("apicondition:delete")&&t.row.id!==i.id?n("el-button",{attrs:{type:"danger",size:"mini"},nativeOn:{click:function(n){return n.preventDefault(),i.removeapicondition(t.$index)}}},[i._v("删除")]):i._e()]}}],null,!1,2643348166)}):i._e()],1),i._v(" "),n("el-pagination",{attrs:{"current-page":i.search.page,"page-size":i.search.size,total:i.total,"page-sizes":[10,20,30,40],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":i.handleSizeChange,"current-change":i.handleCurrentChange}}),i._v(" "),n("el-dialog",{attrs:{title:i.textMap[i.dialogStatus],visible:i.dialogFormVisible},on:{"update:visible":function(t){i.dialogFormVisible=t}}},[n("el-form",{ref:"tmpapicondition",staticClass:"small-space",staticStyle:{width:"450px","margin-left":"50px"},attrs:{"status-icon":"","label-position":"left","label-width":"120px",model:i.tmpapicondition}},[n("el-form-item",{attrs:{label:"子条件名",prop:"subconditionname",required:""}},[n("el-input",{attrs:{type:"text",maxlength:"30","prefix-icon":"el-icon-edit","auto-complete":"off"},model:{value:i.tmpapicondition.subconditionname,callback:function(t){i.$set(i.tmpapicondition,"subconditionname",t)},expression:"tmpapicondition.subconditionname"}})],1),i._v(" "),n("el-form-item",{attrs:{label:"父条件名",prop:"conditionname",required:""}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"父条件名"},on:{change:function(t){return i.ConditionselectChanged(t)}},model:{value:i.tmpapicondition.conditionname,callback:function(t){i.$set(i.tmpapicondition,"conditionname",t)},expression:"tmpapicondition.conditionname"}},[n("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),i._v(" "),i._l(i.conditionList,function(i,t){return n("div",{key:t},[n("el-option",{attrs:{label:i.conditionname,value:i.conditionname,required:""}})],1)})],2)],1),i._v(" "),n("el-form-item",{attrs:{label:"微服务",prop:"deployunitname",required:""}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"微服务"},on:{change:function(t){return i.deployunitselectChanged(t)}},model:{value:i.tmpapicondition.deployunitname,callback:function(t){i.$set(i.tmpapicondition,"deployunitname",t)},expression:"tmpapicondition.deployunitname"}},[n("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),i._v(" "),i._l(i.deployunitList,function(i,t){return n("div",{key:t},[n("el-option",{attrs:{label:i.deployunitname,value:i.deployunitname,required:""}})],1)})],2)],1),i._v(" "),n("el-form-item",{attrs:{label:"API",prop:"apiname",required:""}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"API"},on:{change:function(t){return i.apiselectChanged(t)}},model:{value:i.tmpapicondition.apiname,callback:function(t){i.$set(i.tmpapicondition,"apiname",t)},expression:"tmpapicondition.apiname"}},[n("el-option",{attrs:{label:"请选择",value:""}}),i._v(" "),i._l(i.apiList,function(i,t){return n("div",{key:t},[n("el-option",{attrs:{label:i.apiname,value:i.apiname}})],1)})],2)],1),i._v(" "),n("el-form-item",{attrs:{label:"接口",prop:"casename",required:""}},[n("el-select",{staticStyle:{width:"100%"},attrs:{placeholder:"接口"},on:{change:function(t){return i.testcaseselectChanged(t)}},model:{value:i.tmpapicondition.casename,callback:function(t){i.$set(i.tmpapicondition,"casename",t)},expression:"tmpapicondition.casename"}},[n("el-option",{staticStyle:{display:"none"},attrs:{label:"请选择",value:"''"}}),i._v(" "),i._l(i.caseList,function(i,t){return n("div",{key:t},[n("el-option",{attrs:{label:i.casename,value:i.casename,required:""}})],1)})],2)],1)],1),i._v(" "),n("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{nativeOn:{click:function(t){t.preventDefault(),i.dialogFormVisible=!1}}},[i._v("取消")]),i._v(" "),"add"===i.dialogStatus?n("el-button",{attrs:{type:"danger"},nativeOn:{click:function(t){return t.preventDefault(),i.$refs.tmpapicondition.resetFields()}}},[i._v("重置")]):i._e(),i._v(" "),"add"===i.dialogStatus?n("el-button",{attrs:{type:"success",loading:i.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),i.addapicondition(t)}}},[i._v("添加")]):i._e(),i._v(" "),"update"===i.dialogStatus?n("el-button",{attrs:{type:"success",loading:i.btnLoading},nativeOn:{click:function(t){return t.preventDefault(),i.updateapicondition(t)}}},[i._v("修改")]):i._e()],1)],1)],1)},staticRenderFns:[]},g=n("VU/8")(m,h,!1,null,null,null);t.default=g.exports}});
//# sourceMappingURL=59.9954bf990983dd3f8854.js.map