(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{770:function(t,e,r){"use strict";r.r(e);r(48);var n={components:{AgGridVue:r(769).AgGridVue},data:function(){return{gridApi:null,rowData:[],columnDefs:[],rowSelection:"single",columnFilter:"",overlayNoRowsTemplate:"",returnObject:!1,clearInputValue:!1,cellValue:"",filteredRowData:null,inputValue:"",useApi:!1,apiEndpoint:null,queryChars:2,gridHeight:175,gridWidth:375,propertyName:null,isCanceled:!0,selectedObject:{},input:null}},methods:{onGridReady:function(t){this.gridApi=t.api,this.gridApi.sizeColumnsToFit(),this.columnFilter=this.gridApi.getFilterInstance(this.propertyName)},rowClicked:function(t){this.selectedObject=t.data,this.isCanceled=!1,this.params.api.stopEditing(),this.$refs.autoCompleteArea.removeEventListener("keydown",(function(){return null}))},rowConfirmed:function(){this.gridApi.getSelectedRows()[0]&&(this.selectedObject=this.gridApi.getSelectedRows()[0],this.isCanceled=!1),this.params.api.stopEditing(),this.$refs.autoCompleteArea.removeEventListener("keydown",(function(){return null}))},onKeydown:function(t){return t.stopPropagation(),"Escape"===t.key?(this.params.api.stopEditing(),this.$refs.autoCompleteArea.removeEventListener("keydown",(function(){return null})),!1):"Enter"===t.key||"Tab"===t.key?(this.rowConfirmed(),!1):"ArrowUp"===t.key||"ArrowDown"===t.key?(this.navigateGrid(),!1):void 0},processDataInput:function(t){var e=this;!0===this.useApi?(t.length<this.queryChars&&this.gridApi.setRowData([]),t.length===this.queryChars&&this.getApiData(t).then((function(data){e.rowData=data.data,window.setTimeout((function(){e.updateFilter()}))})),t.length>this.queryChars&&this.updateFilter()):this.updateFilter()},getApiData:function(filter){return this.$axios.get(this.apiEndpoint+this.toQueryString(filter))},toQueryString:function(filter){return"?"+this.propertyName+"="+filter},updateFilter:function(){this.columnFilter&&this.gridApi&&(this.columnFilter.setModel({type:"startsWith",filter:this.inputValue}),this.columnFilter.onFilterChanged(),this.gridApi.getDisplayedRowAtIndex(0)?(this.gridApi.getDisplayedRowAtIndex(0).setSelected(!0),this.gridApi.ensureIndexVisible(0,"top")):this.gridApi.deselectAll())},navigateGrid:function(){null==this.gridApi.getFocusedCell()||null==this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex)?(this.gridApi.setFocusedCell(this.gridApi.getDisplayedRowAtIndex(0).rowIndex,this.propertyName),this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex).setSelected(!0)):(this.gridApi.setFocusedCell(this.gridApi.getFocusedCell().rowIndex,this.propertyName),this.gridApi.getDisplayedRowAtIndex(this.gridApi.getFocusedCell().rowIndex).setSelected(!0))},overLayLoading:function(){return'<span class="ag-overlay-no-rows-center">No rows to be shown. <br> Loading...</span>'},overLayMinimumCharacters:function(){return'<span class="ag-overlay-no-rows-center">No rows to be shown. <br> This search field requires at least '.concat(this.queryChars," characters.</span>")}},beforeMount:function(){var t=this;this.params.rowData?this.rowData=this.params.rowData:(this.apiEndpoint=this.params.apiEndpoint,this.useApi=!0),this.params.gridHeight&&(this.gridHeight=this.params.gridHeight),this.params.gridWidth&&(this.gridWidth=this.params.gridWidth),this.params.queryChars>-1&&(this.queryChars=this.params.queryChars),this.columnDefs=this.params.columnDefs,this.propertyName=this.params.propertyRendered,this.returnObject=this.params.returnObject,this.clearInputValue=this.params.clearInputValue,this.cellValue=""===this.params.propertyRendered||!1===this.params.returnObject||null==this.params.value?"":this.params.value[this.propertyName],0===this.queryChars?this.overlayNoRowsTemplate=this.overLayLoading():this.overlayNoRowsTemplate=this.overLayMinimumCharacters(),this.params.charPress?this.inputValue=this.params.charPress:null==this.cellValue||this.clearInputValue||(this.inputValue=this.cellValue),!0===this.useApi&&(0===this.queryChars||null!=this.inputValue&&""!==this.inputValue&&this.inputValue.length>this.queryChars)&&this.getApiData(this.inputValue).then((function(data){t.rowData=data.data,window.setTimeout((function(){t.updateFilter()}))}))},mounted:function(){var t=this;this.input=this.$refs.input,this.$nextTick((function(){t.inputValue===t.cellValue?t.input.select():t.input.focus(),t.inputValue&&!t.useApi&&t.updateFilter()})),this.gridComponent.getValue=function(){return t.returnObject?t.selectedObject:t.selectedObject[t.propertyName]},this.gridComponent.isPopup=function(){return!0},this.gridComponent.isCancelAfterEnd=function(){return t.isCanceled},this.$refs.autoCompleteArea.addEventListener("keydown",this.onKeydown)},watch:{inputValue:function(t){this.processDataInput(t)}}},o=r(47),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"autoCompleteArea",style:{width:t.gridWidth+"px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.inputValue,expression:"inputValue"}],ref:"input",staticStyle:{height:"28px","font-weight":"400","font-size":"12px"},style:{width:t.params.column.actualWidth+"px"},domProps:{value:t.inputValue},on:{input:function(e){e.target.composing||(t.inputValue=e.target.value)}}}),t._v(" "),r("ag-grid-vue",{staticClass:"ag-theme-alpine",staticStyle:{"font-weight":"150"},style:{height:t.gridHeight+"px","max-width":t.gridWidth+"px"},attrs:{columnDefs:t.columnDefs,rowData:t.rowData,rowSelection:t.rowSelection,overlayNoRowsTemplate:t.overlayNoRowsTemplate},on:{gridReady:function(e){return t.onGridReady(e)},rowClicked:function(e){return t.rowClicked(e)}}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);