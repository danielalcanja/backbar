"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6257],{19238:(t,e,s)=>{s.r(e),s.d(e,{default:()=>_});var n=s(20629),a=s(74865),r=s.n(a);const i={computed:(0,n.Se)(["currentUserPermissions","currentUser"]),metaInfo:{title:"Detail Sale Return"},data:function(){return{isLoading:!0,sale_return:{},details:[],company:{},email:{}}},methods:{Return_PDF:function(){var t=this;r().start(),r().set(.1);var e=this.$route.params.id;axios.get("return_sale_pdf/".concat(e),{responseType:"blob",headers:{"Content-Type":"application/json"}}).then((function(e){var s=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=s,n.setAttribute("download","Sale_Return-"+t.sale_return.Ref+".pdf"),document.body.appendChild(n),n.click(),setTimeout((function(){return r().done()}),500)})).catch((function(){setTimeout((function(){return r().done()}),500)}))},print:function(){this.$htmlToPaper("print_Invoice")},makeToast:function(t,e,s){this.$root.$bvToast.toast(e,{title:s,variant:t,solid:!0})},formatNumber:function(t,e){var s=("string"==typeof t?t:t.toString()).split(".");if(e<=0)return s[0];var n=s[1]||"";if(n.length>e)return"".concat(s[0],".").concat(n.substr(0,e));for(;n.length<e;)n+="0";return"".concat(s[0],".").concat(n)},Get_Details:function(){var t=this,e=this.$route.params.id;axios.get("returns/sale/".concat(e)).then((function(e){t.sale_return=e.data.sale_Return,t.details=e.data.details,t.company=e.data.company,t.isLoading=!1})).catch((function(e){setTimeout((function(){t.isLoading=!1}),500)}))},Delete_Return:function(){var t=this,e=this.$route.params.id;this.$swal({title:this.$t("Delete.Title"),text:this.$t("Delete.Text"),type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",cancelButtonText:this.$t("Delete.cancelButtonText"),confirmButtonText:this.$t("Delete.confirmButtonText")}).then((function(s){s.value&&axios.delete("returns/sale/"+e).then((function(){t.$swal(t.$t("Delete.Deleted"),t.$t("Delete.ReturnDeleted"),"success"),t.$router.push({name:"index_sale_return"})})).catch((function(){t.$swal(t.$t("Delete.Failed"),t.$t("Delete.Therewassomethingwronge"),"warning")}))}))}},created:function(){this.Get_Details()}};const _=(0,s(51900).Z)(i,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"main-content"},[e("breadcumb",{attrs:{page:t.$t("ReturnDetail"),folder:t.$t("ListReturns")}}),t._v(" "),t.isLoading?e("div",{staticClass:"loading_page spinner spinner-primary mr-3"}):t._e(),t._v(" "),t.isLoading?t._e():e("b-card",[e("b-row",[e("b-col",{staticClass:"mb-5",attrs:{md:"12"}},[t.currentUserPermissions&&t.currentUserPermissions.includes("Sale_Returns_edit")?e("router-link",{staticClass:"btn btn-success btn-icon ripple btn-sm",attrs:{title:"Edit",to:"/app/sale_return/edit/"+t.$route.params.id+"/"+t.sale_return.sale_id}},[e("i",{staticClass:"i-Edit"}),t._v(" "),e("span",[t._v(t._s(t.$t("EditReturn")))])]):t._e(),t._v(" "),e("button",{staticClass:"btn btn-primary btn-icon ripple btn-sm",on:{click:function(e){return t.Return_PDF()}}},[e("i",{staticClass:"i-File-TXT"}),t._v(" PDF\n        ")]),t._v(" "),e("button",{staticClass:"btn btn-warning btn-icon ripple btn-sm",on:{click:function(e){return t.print()}}},[e("i",{staticClass:"i-Billing"}),t._v("\n          "+t._s(t.$t("print"))+"\n        ")]),t._v(" "),t.currentUserPermissions&&t.currentUserPermissions.includes("Sale_Returns_delete")?e("button",{staticClass:"btn btn-danger btn-icon ripple btn-sm",on:{click:function(e){return t.Delete_Return()}}},[e("i",{staticClass:"i-Close-Window"}),t._v("\n          "+t._s(t.$t("Del"))+"\n        ")]):t._e()],1)],1),t._v(" "),e("div",{staticClass:"invoice",attrs:{id:"print_Invoice"}},[e("div",{staticClass:"invoice-print"},[e("b-row",{staticClass:"justify-content-md-center"},[e("h4",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("ReturnDetail"))+" : "+t._s(t.sale_return.Ref))])]),t._v(" "),e("hr"),t._v(" "),e("b-row",{staticClass:"mt-5"},[e("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[e("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Customer_Info")))]),t._v(" "),e("div",[t._v(t._s(t.sale_return.client_name))]),t._v(" "),e("div",[t._v(t._s(t.sale_return.client_email))]),t._v(" "),e("div",[t._v(t._s(t.sale_return.client_phone))]),t._v(" "),e("div",[t._v(t._s(t.sale_return.client_adr))])]),t._v(" "),e("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[e("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Company_Info")))]),t._v(" "),e("div",[t._v(t._s(t.company.CompanyName))]),t._v(" "),e("div",[t._v(t._s(t.company.email))]),t._v(" "),e("div",[t._v(t._s(t.company.CompanyPhone))]),t._v(" "),e("div",[t._v(t._s(t.company.CompanyAdress))])]),t._v(" "),e("b-col",{staticClass:"mb-4",attrs:{lg:"4",md:"4",sm:"12"}},[e("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Return_Info")))]),t._v(" "),e("div",[t._v(t._s(t.$t("Reference"))+" : "+t._s(t.sale_return.Ref))]),t._v(" "),e("div",[t._v(t._s(t.$t("Sale_Ref"))+" : "+t._s(t.sale_return.sale_ref))]),t._v(" "),e("div",[t._v("\n              "+t._s(t.$t("PaymentStatus"))+" :\n              "),"paid"==t.sale_return.payment_status?e("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Paid")))]):"partial"==t.sale_return.payment_status?e("span",{staticClass:"badge badge-outline-primary"},[t._v(t._s(t.$t("partial")))]):e("span",{staticClass:"badge badge-outline-warning"},[t._v(t._s(t.$t("Unpaid")))])]),t._v(" "),e("div",[t._v(t._s(t.$t("warehouse"))+" : "+t._s(t.sale_return.warehouse))]),t._v(" "),e("div",[t._v("\n              "+t._s(t.$t("Status"))+" :\n              "),"received"==t.sale_return.statut?e("span",{staticClass:"badge badge-outline-success"},[t._v(t._s(t.$t("Received")))]):e("span",{staticClass:"badge badge-outline-info"},[t._v(t._s(t.$t("Pending")))])])])],1),t._v(" "),e("b-row",{staticClass:"mt-3"},[e("b-col",{attrs:{md:"12"}},[e("h5",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("list_product_returns")))]),t._v(" "),e("div",{staticClass:"alert alert-danger"},[t._v(t._s(t.$t("products_refunded_alert")))]),t._v(" "),e("div",{staticClass:"table-responsive"},[e("table",{staticClass:"table table-hover table-md"},[e("thead",{staticClass:"bg-gray-300"},[e("tr",[e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("ProductName")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Net_Unit_Price")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Qty_return")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("UnitPrice")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("Tax")))]),t._v(" "),e("th",{attrs:{scope:"col"}},[t._v(t._s(t.$t("SubTotal")))])])]),t._v(" "),e("tbody",t._l(t.details,(function(s){return e("tr",[e("td",[e("span",[t._v(t._s(s.code)+" ("+t._s(s.name)+")")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:s.is_imei&&null!==s.imei_number,expression:"detail.is_imei && detail.imei_number !==null "}]},[t._v(t._s(t.$t("IMEI_SN"))+" : "+t._s(s.imei_number))])]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.Net_price,3)))]),t._v(" "),e("td",[t._v(t._s(t.formatNumber(s.quantity,2))+" "+t._s(s.unit_sale))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.price,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.DiscountNet,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.formatNumber(s.taxe,2)))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(s.total.toFixed(2)))])])})),0)])])]),t._v(" "),e("div",{staticClass:"offset-md-9 col-md-3 mt-4"},[e("table",{staticClass:"table table-striped table-sm"},[e("tbody",[e("tr",[e("td",[t._v(t._s(t.$t("OrderTax")))]),t._v(" "),e("td",[e("span",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.TaxNet.toFixed(2))+" ("+t._s(t.formatNumber(t.sale_return.tax_rate,2))+" %)")])])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("Discount")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.discount.toFixed(2)))])]),t._v(" "),e("tr",[e("td",[t._v(t._s(t.$t("Shipping")))]),t._v(" "),e("td",[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.shipping.toFixed(2)))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Total")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.GrandTotal))])])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Paid")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.paid_amount))])])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.$t("Due")))])]),t._v(" "),e("td",[e("span",{staticClass:"font-weight-bold"},[t._v(t._s(t.currentUser.currency)+" "+t._s(t.sale_return.due))])])])])])])],1),t._v(" "),e("hr",{directives:[{name:"show",rawName:"v-show",value:t.sale_return.note,expression:"sale_return.note"}]}),t._v(" "),e("b-row",{staticClass:"mt-4"},[e("b-col",{attrs:{md:"12"}},[e("p",[t._v(t._s(t.sale_return.note))])])],1)],1)])],1)],1)}),[],!1,null,null,null).exports}}]);