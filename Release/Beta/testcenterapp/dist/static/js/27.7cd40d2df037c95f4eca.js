webpackJsonp([27],{YBQJ:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n("vLgD");var a={filters:{statusFilter:function(e){return{published:"success",draft:"gray",deleted:"danger"}[e]}},data:function(){return{accountList:[],roleList:[],filterRoleNameList:[],listLoading:!1,total:0,listQuery:{page:1,size:9,list:null,listLoading:!0}}},created:function(){this.getAccountList()},methods:{unix2CurrentTime:n("0xDb").b,getAccountList:function(){var e,t=this;this.listLoading=!0,(e=this.listQuery,Object(i.a)({url:"/test",method:"get",params:e})).then(function(e){t.accountList=e.data.list,t.total=e.data.total;for(var n=0;n<t.accountList.length;n++){var i={};i.text=t.accountList[n].roleName,i.value=t.accountList[n].roleName,t.filterRoleNameList.push(i)}t.listLoading=!1}).catch(function(e){t.$message.error("加载账户列表失败")})},handleSizeChange:function(e){this.listQuery.size=e,this.listQuery.page=1,this.getAccountList()},handleCurrentChange:function(e){this.listQuery.page=e,this.getAccountList()},getIndex:function(e){return(this.listQuery.page-1)*this.listQuery.size+e+1}}},l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading.body",value:e.listLoading,expression:"listLoading",modifiers:{body:!0}}],attrs:{data:e.accountList,"element-loading-text":"loading",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{label:"编号",align:"center",width:"60"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("span",{domProps:{textContent:e._s(e.getIndex(t.$index))}})]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"账户名",align:"center",prop:"name",width:"80"}}),e._v(" "),n("el-table-column",{attrs:{label:"邮箱",align:"center",prop:"email",width:"200"}}),e._v(" "),n("el-table-column",{attrs:{label:"注册时间",align:"center",prop:"registerTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(e.unix2CurrentTime(t.row.registerTime)))]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"最后登录时间",align:"center",prop:"loginTime",width:"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v(e._s(t.row.loginTime?e.unix2CurrentTime(t.row.loginTime):"从未登录")+"\n      ")]}}])}),e._v(" "),n("el-table-column",{attrs:{label:"角色",align:"center",prop:"roleName",width:"120"}})],1),e._v(" "),n("el-pagination",{attrs:{"current-page":e.listQuery.page,"page-size":e.listQuery.size,total:e.total,"page-sizes":[9,18,36,72],layout:"total, sizes, prev, pager, next, jumper"},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentChange}})],1)},staticRenderFns:[]},r=n("VU/8")(a,l,!1,null,null,null);t.default=r.exports}});
//# sourceMappingURL=27.7cd40d2df037c95f4eca.js.map