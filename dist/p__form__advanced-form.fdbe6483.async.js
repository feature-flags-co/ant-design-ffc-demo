(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[8529],{34540:function(te,H,l){"use strict";var T=l(67294),A=l(43424),J=l(86190),L=l(66758),V=["fieldProps","proFieldProps"];function y(){return y=Object.assign||function(i){for(var u=1;u<arguments.length;u++){var o=arguments[u];for(var c in o)Object.prototype.hasOwnProperty.call(o,c)&&(i[c]=o[c])}return i},y.apply(this,arguments)}function M(i,u){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(i);u&&(c=c.filter(function(a){return Object.getOwnPropertyDescriptor(i,a).enumerable})),o.push.apply(o,c)}return o}function K(i){for(var u=1;u<arguments.length;u++){var o=arguments[u]!=null?arguments[u]:{};u%2?M(Object(o),!0).forEach(function(c){W(i,c,o[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):M(Object(o)).forEach(function(c){Object.defineProperty(i,c,Object.getOwnPropertyDescriptor(o,c))})}return i}function W(i,u,o){return u in i?Object.defineProperty(i,u,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[u]=o,i}function z(i,u){if(i==null)return{};var o=N(i,u),c,a;if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(i);for(a=0;a<p.length;a++)c=p[a],!(u.indexOf(c)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,c)||(o[c]=i[c]))}return o}function N(i,u){if(i==null)return{};var o={},c=Object.keys(i),a,p;for(p=0;p<c.length;p++)a=c[p],!(u.indexOf(a)>=0)&&(o[a]=i[a]);return o}var b="dateRange",g=T.forwardRef(function(i,u){var o=i.fieldProps,c=i.proFieldProps,a=z(i,V),p=(0,T.useContext)(L.Z);return T.createElement(A.Z,y({ref:u,mode:"edit",fieldProps:K({getPopupContainer:p.getPopupContainer},o),valueType:b,proFieldProps:c,filedConfig:{valueType:b,lightFilterLabelFormatter:function(m){return(0,J.Z)(m,"YYYY-MM-DD")}}},a))});H.Z=g},64317:function(te,H,l){"use strict";var T=l(67294),A=l(43424),J=l(22270),L=l(66758),V=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","showSearch","options"],y=["fieldProps","children","params","proFieldProps","mode","valueEnum","request","options"];function M(){return M=Object.assign||function(a){for(var p=1;p<arguments.length;p++){var v=arguments[p];for(var m in v)Object.prototype.hasOwnProperty.call(v,m)&&(a[m]=v[m])}return a},M.apply(this,arguments)}function K(a,p){var v=Object.keys(a);if(Object.getOwnPropertySymbols){var m=Object.getOwnPropertySymbols(a);p&&(m=m.filter(function(j){return Object.getOwnPropertyDescriptor(a,j).enumerable})),v.push.apply(v,m)}return v}function W(a){for(var p=1;p<arguments.length;p++){var v=arguments[p]!=null?arguments[p]:{};p%2?K(Object(v),!0).forEach(function(m){z(a,m,v[m])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(v)):K(Object(v)).forEach(function(m){Object.defineProperty(a,m,Object.getOwnPropertyDescriptor(v,m))})}return a}function z(a,p,v){return p in a?Object.defineProperty(a,p,{value:v,enumerable:!0,configurable:!0,writable:!0}):a[p]=v,a}function N(a,p){if(a==null)return{};var v=b(a,p),m,j;if(Object.getOwnPropertySymbols){var Z=Object.getOwnPropertySymbols(a);for(j=0;j<Z.length;j++)m=Z[j],!(p.indexOf(m)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,m)||(v[m]=a[m]))}return v}function b(a,p){if(a==null)return{};var v={},m=Object.keys(a),j,Z;for(Z=0;Z<m.length;Z++)j=m[Z],!(p.indexOf(j)>=0)&&(v[j]=a[j]);return v}var g=T.forwardRef(function(a,p){var v=a.fieldProps,m=a.children,j=a.params,Z=a.proFieldProps,Q=a.mode,ne=a.valueEnum,X=a.request,oe=a.showSearch,q=a.options,ae=N(a,V),le=(0,T.useContext)(L.Z);return T.createElement(A.Z,M({mode:"edit",valueEnum:(0,J.h)(ne),request:X,params:j,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:W({options:q,mode:Q,showSearch:oe,getPopupContainer:le.getPopupContainer},v),ref:p,proFieldProps:Z},ae),m)}),i=T.forwardRef(function(a,p){var v=a.fieldProps,m=a.children,j=a.params,Z=a.proFieldProps,Q=a.mode,ne=a.valueEnum,X=a.request,oe=a.options,q=N(a,y),ae=W({options:oe,mode:Q||"multiple",labelInValue:!0,showSearch:!0,showArrow:!1,autoClearSearchValue:!0,optionLabelProp:"label"},v),le=(0,T.useContext)(L.Z);return T.createElement(A.Z,M({mode:"edit",valueEnum:(0,J.h)(ne),request:X,params:j,valueType:"select",filedConfig:{customLightMode:!0},fieldProps:W({getPopupContainer:le.getPopupContainer},ae),ref:p,proFieldProps:Z},q),m)}),u=g,o=i,c=u;c.SearchSelect=o,c.displayName="ProFormComponent",H.Z=c},5966:function(te,H,l){"use strict";var T=l(67294),A=l(43424),J=["fieldProps","proFieldProps"],L=["fieldProps","proFieldProps"];function V(){return V=Object.assign||function(b){for(var g=1;g<arguments.length;g++){var i=arguments[g];for(var u in i)Object.prototype.hasOwnProperty.call(i,u)&&(b[u]=i[u])}return b},V.apply(this,arguments)}function y(b,g){if(b==null)return{};var i=M(b,g),u,o;if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(b);for(o=0;o<c.length;o++)u=c[o],!(g.indexOf(u)>=0)&&(!Object.prototype.propertyIsEnumerable.call(b,u)||(i[u]=b[u]))}return i}function M(b,g){if(b==null)return{};var i={},u=Object.keys(b),o,c;for(c=0;c<u.length;c++)o=u[c],!(g.indexOf(o)>=0)&&(i[o]=b[o]);return i}var K="text",W=function(g){var i=g.fieldProps,u=g.proFieldProps,o=y(g,J);return T.createElement(A.Z,V({mode:"edit",valueType:K,fieldProps:i,filedConfig:{valueType:K},proFieldProps:u},o))},z=function(g){var i=g.fieldProps,u=g.proFieldProps,o=y(g,L);return T.createElement(A.Z,V({mode:"edit",valueType:"password",fieldProps:i,proFieldProps:u,filedConfig:{valueType:K}},o))},N=W;N.Password=z,N.displayName="ProFormComponent",H.Z=N},5393:function(te){te.exports={card:"card___1dsH6",errorIcon:"errorIcon___3jptF",anticon:"anticon___A0Hdx",errorPopover:"errorPopover___FGjVx",errorListItem:"errorListItem___1rmVg",errorField:"errorField___2Y7eW",editable:"editable___WRDur"}},64878:function(te,H,l){"use strict";l.r(H),l.d(H,{default:function(){return qe}});var T=l(58024),A=l(39144),J=l(13062),L=l(71230),V=l(89032),y=l(15746),M=l(34792),K=l(48086),W=l(3182),z=l(20136),N=l(55241),b=l(2824),g=l(94043),i=l.n(g),u=l(73218),o=l(67294),c=l(43424),a=l(86190),p=l(66758),v=["fieldProps","proFieldProps"],m=["fieldProps","proFieldProps"];function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},j.apply(this,arguments)}function Z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),r.push.apply(r,n)}return r}function Q(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?Z(Object(r),!0).forEach(function(n){ne(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Z(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function X(e,t){if(e==null)return{};var r=oe(e,t),n,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(d=0;d<f.length;d++)n=f[d],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function oe(e,t){if(e==null)return{};var r={},n=Object.keys(e),d,f;for(f=0;f<n.length;f++)d=n[f],!(t.indexOf(d)>=0)&&(r[d]=e[d]);return r}var q="time",ae=o.forwardRef(function(e,t){var r=e.fieldProps,n=e.proFieldProps,d=X(e,v),f=(0,o.useContext)(p.Z);return o.createElement(c.Z,j({ref:t,mode:"edit",fieldProps:Q({getPopupContainer:f.getPopupContainer},r),valueType:"timeRange",proFieldProps:n,filedConfig:{valueType:"timeRange",lightFilterLabelFormatter:function(F){return(0,a.Z)(F,"HH:mm:SS")}}},d))}),le=function(t){var r=t.fieldProps,n=t.proFieldProps,d=X(t,m),f=(0,o.useContext)(p.Z);return o.createElement(c.Z,j({mode:"edit",fieldProps:Q({getPopupContainer:f.getPopupContainer},r),valueType:q,proFieldProps:n,filedConfig:{customLightMode:!0,valueType:q}},d))},pe=le;pe.RangePicker=ae;var Te=pe,fe=l(952),ue=l(5966),_=l(64317),Ze=l(34540),lr=l(57663),Re=l(71577),ir=l(9715),Se=l(86585),De=l(21770),Ie=l(49101),me=l(22270),Ae=l(93130),Le=l(59660),Be=["onTableChange","maxLength","formItemProps","recordCreatorProps","rowKey","controlled"],Me=["record","position","creatorButtonText","newRecordType","parentKey"];function ee(){return ee=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},ee.apply(this,arguments)}function ve(e,t){return Ve(e)||Ne(e,t)||We(e,t)||Ke()}function Ke(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function We(e,t){if(!!e){if(typeof e=="string")return Pe(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return Pe(e,t)}}function Pe(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function Ne(e,t){var r=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n=[],d=!0,f=!1,h,F;try{for(r=r.call(e);!(d=(h=r.next()).done)&&(n.push(h.value),!(t&&n.length===t));d=!0);}catch(E){f=!0,F=E}finally{try{!d&&r.return!=null&&r.return()}finally{if(f)throw F}}return n}}function Ve(e){if(Array.isArray(e))return e}function ge(e,t){if(e==null)return{};var r=$e(e,t),n,d;if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(e);for(d=0;d<f.length;d++)n=f[d],!(t.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,n)||(r[n]=e[n]))}return r}function $e(e,t){if(e==null)return{};var r={},n=Object.keys(e),d,f;for(f=0;f<n.length;f++)d=n[f],!(t.indexOf(d)>=0)&&(r[d]=e[d]);return r}function he(e,t,r,n,d,f,h){try{var F=e[f](h),E=F.value}catch(x){r(x);return}F.done?t(E):Promise.resolve(E).then(n,d)}function Ue(e){return function(){var t=this,r=arguments;return new Promise(function(n,d){var f=e.apply(t,r);function h(E){he(f,n,d,h,F,"next",E)}function F(E){he(f,n,d,h,F,"throw",E)}h(void 0)})}}function ye(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(d){return Object.getOwnPropertyDescriptor(e,d).enumerable})),r.push.apply(r,n)}return r}function se(e){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?arguments[t]:{};t%2?ye(Object(r),!0).forEach(function(n){be(e,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ye(Object(r)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))})}return e}function be(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var Oe=o.createContext(void 0);function je(e){var t=e.children,r=e.record,n=e.position,d=e.newRecordType,f=e.parentKey,h=(0,o.useContext)(Oe);return o.cloneElement(t,se(se({},t.props),{},{onClick:function(){var F=Ue(regeneratorRuntime.mark(function x(R){var C,$,O,w;return regeneratorRuntime.wrap(function(D){for(;;)switch(D.prev=D.next){case 0:return D.next=2,(C=($=t.props).onClick)===null||C===void 0?void 0:C.call($,R);case 2:if(w=D.sent,w!==!1){D.next=5;break}return D.abrupt("return");case 5:h==null||(O=h.current)===null||O===void 0||O.addEditRecord(r,{position:n,newRecordType:d,parentKey:f});case 6:case"end":return D.stop()}},x)}));function E(x){return F.apply(this,arguments)}return E}()}))}function Ee(e){var t,r=e.onTableChange,n=e.maxLength,d=e.formItemProps,f=e.recordCreatorProps,h=e.rowKey,F=e.controlled,E=ge(e,Be),x=(0,o.useRef)(),R=Se.Z.useForm(),C=ve(R,1),$=C[0];(0,o.useImperativeHandle)(E.actionRef,function(){return x.current});var O=(0,De.Z)(function(){return e.value||[]},{value:e.value,onChange:e.onChange}),w=ve(O,2),P=w[0],D=w[1],_e=o.useMemo(function(){return typeof h=="function"&&h?h:function(U,I){return U[h]||I}},[h]);(0,o.useEffect)(function(){!e.controlled||P.forEach(function(U,I){$.setFieldsValue(be({},_e(U,I),U))},{})},[P,e.controlled]);var re=f||{},er=re.record,xe=re.position,rr=re.creatorButtonText,tr=re.newRecordType,nr=re.parentKey,or=ge(re,Me),Ce=xe==="top",ie=(0,o.useMemo)(function(){return n&&n<=(P==null?void 0:P.length)?!1:f!==!1&&o.createElement(je,{record:(0,me.h)(er,P==null?void 0:P.length,P)||{},position:xe,parentKey:(0,me.h)(nr,P==null?void 0:P.length,P),newRecordType:tr},o.createElement(Re.Z,ee({type:"dashed",style:{display:"block",margin:"10px 0",width:"100%"},icon:o.createElement(Ie.Z,null)},or),rr||"\u6DFB\u52A0\u4E00\u884C\u6570\u636E"))},[f,n,P==null?void 0:P.length]),ar=(0,o.useMemo)(function(){return ie?Ce?{components:{header:{wrapper:function(I){var B,k=I.className,Y=I.children;return o.createElement("thead",{className:k},Y,o.createElement("tr",{style:{position:"relative"}},o.createElement("td",{colSpan:0,style:{visibility:"hidden"}},ie),o.createElement("td",{style:{position:"absolute",left:0,width:"100%"},colSpan:(B=E.columns)===null||B===void 0?void 0:B.length},ie)))}}}}:{tableViewRender:function(I,B){var k,Y;return o.createElement(o.Fragment,null,(k=(Y=e.tableViewRender)===null||Y===void 0?void 0:Y.call(e,I,B))!==null&&k!==void 0?k:B,ie)}}:{}},[Ce,ie]),we=se({form:$},e.editable);return((e==null?void 0:e.onValuesChange)||((t=e.editable)===null||t===void 0?void 0:t.onValuesChange)||e.controlled&&(e==null?void 0:e.onChange))&&(we.onValuesChange=function(U,I){var B,k,Y;if((B=e.editable)===null||B===void 0||(k=B.onValuesChange)===null||k===void 0||k.call(B,U,I),(Y=e.onValuesChange)===null||Y===void 0||Y.call(e,I,U),e.controlled){var ce;e==null||(ce=e.onChange)===null||ce===void 0||ce.call(e,I)}}),o.createElement(Oe.Provider,{value:x},o.createElement(Le.Z,ee({search:!1,options:!1,pagination:!1,rowKey:h},E,ar,{tableLayout:"fixed",actionRef:x,onChange:r,dataSource:P,editable:we,onDataSourceChange:D})))}function Fe(e){var t=e.name,r=e.formItemProps;return t?o.createElement(Ae.gN,ee({shouldUpdate:!0,name:e.name},r,{isList:!0}),function(n){return o.createElement(Ee,ee({},e,{value:n.value,onChange:n.onChange}))}):o.createElement(Ee,e)}Fe.RecordCreator=je;var ke=Fe,Ye=l(85224),He=l(75362),Ge=l(21010);function Je(e){return de.apply(this,arguments)}function de(){return de=(0,W.Z)(i().mark(function e(t){return i().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,Ge.WY)("/api/advancedForm",{method:"POST",data:t}));case 1:case"end":return n.stop()}},e)})),de.apply(this,arguments)}var ze=l(5393),G=l.n(ze),s=l(85893),S={name:"\u4ED3\u5E93\u540D",url:"\u4ED3\u5E93\u57DF\u540D",owner:"\u4ED3\u5E93\u7BA1\u7406\u5458",approver:"\u5BA1\u6279\u4EBA",dateRange:"\u751F\u6548\u65E5\u671F",type:"\u4ED3\u5E93\u7C7B\u578B",name2:"\u4EFB\u52A1\u540D",url2:"\u4EFB\u52A1\u63CF\u8FF0",owner2:"\u6267\u884C\u4EBA",approver2:"\u8D23\u4EFB\u4EBA",dateRange2:"\u751F\u6548\u65E5\u671F",type2:"\u4EFB\u52A1\u7C7B\u578B"},Qe=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],Xe=function(){var t=(0,o.useState)([]),r=(0,b.Z)(t,2),n=r[0],d=r[1],f=function(R){var C=R.filter(function(w){return w.errors.length>0}).length;if(!R||C===0)return null;var $=function(P){var D=document.querySelector('label[for="'.concat(P,'"]'));D&&D.scrollIntoView(!0)},O=R.map(function(w){if(!w||w.errors.length===0)return null;var P=w.name[0];return(0,s.jsxs)("li",{className:G().errorListItem,onClick:function(){return $(P)},children:[(0,s.jsx)(u.Z,{className:G().errorIcon}),(0,s.jsx)("div",{className:G().errorMessage,children:w.errors[0]}),(0,s.jsx)("div",{className:G().errorField,children:S[P]})]},P)});return(0,s.jsxs)("span",{className:G().errorIcon,children:[(0,s.jsx)(N.Z,{title:"\u8868\u5355\u6821\u9A8C\u4FE1\u606F",content:O,overlayClassName:G().errorPopover,trigger:"click",getPopupContainer:function(P){return P&&P.parentNode?P.parentNode:P},children:(0,s.jsx)(u.Z,{})}),C]})},h=function(){var x=(0,W.Z)(i().mark(function R(C){return i().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:return d([]),O.prev=1,O.next=4,Je(C);case 4:K.default.success("\u63D0\u4EA4\u6210\u529F"),O.next=9;break;case 7:O.prev=7,O.t0=O.catch(1);case 9:case"end":return O.stop()}},R,null,[[1,7]])}));return function(C){return x.apply(this,arguments)}}(),F=function(R){d(R.errorFields)},E=[{title:"\u6210\u5458\u59D3\u540D",dataIndex:"name",key:"name",width:"20%"},{title:"\u5DE5\u53F7",dataIndex:"workId",key:"workId",width:"20%"},{title:"\u6240\u5C5E\u90E8\u95E8",dataIndex:"department",key:"department",width:"40%"},{title:"\u64CD\u4F5C",key:"action",valueType:"option",render:function(R,C,$,O){return[(0,s.jsx)("a",{onClick:function(){O==null||O.startEditable(C.key)},children:"\u7F16\u8F91"},"eidit")]}}];return(0,s.jsx)(fe.ZP,{layout:"vertical",hideRequiredMark:!0,submitter:{render:function(R,C){return(0,s.jsxs)(Ye.Z,{children:[f(n),C]})}},initialValues:{members:Qe},onFinish:h,onFinishFailed:F,children:(0,s.jsxs)(He.ZP,{content:"\u9AD8\u7EA7\u8868\u5355\u5E38\u89C1\u4E8E\u4E00\u6B21\u6027\u8F93\u5165\u548C\u63D0\u4EA4\u5927\u6279\u91CF\u6570\u636E\u7684\u573A\u666F\u3002",children:[(0,s.jsxs)(A.Z,{title:"\u4ED3\u5E93\u7BA1\u7406",className:G().card,bordered:!1,children:[(0,s.jsxs)(L.Z,{gutter:16,children:[(0,s.jsx)(y.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(ue.Z,{label:S.name,name:"name",rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"}],placeholder:"\u8BF7\u8F93\u5165\u4ED3\u5E93\u540D\u79F0"})}),(0,s.jsx)(y.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(ue.Z,{label:S.url,name:"url",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}],fieldProps:{style:{width:"100%"},addonBefore:"http://",addonAfter:".com"},placeholder:"\u8BF7\u8F93\u5165"})}),(0,s.jsx)(y.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(_.Z,{label:S.owner,name:"owner",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"})})]}),(0,s.jsxs)(L.Z,{gutter:16,children:[(0,s.jsx)(y.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(_.Z,{label:S.approver,name:"approver",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"})}),(0,s.jsx)(y.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(Ze.Z,{label:S.dateRange,name:"dateRange",fieldProps:{style:{width:"100%"}},rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u751F\u6548\u65E5\u671F"}]})}),(0,s.jsx)(y.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(_.Z,{label:S.type,name:"type",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,s.jsxs)(A.Z,{title:"\u4EFB\u52A1\u7BA1\u7406",className:G().card,bordered:!1,children:[(0,s.jsxs)(L.Z,{gutter:16,children:[(0,s.jsx)(y.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(ue.Z,{label:S.name2,name:"name2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}]})}),(0,s.jsx)(y.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(ue.Z,{label:S.url2,name:"url2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9"}]})}),(0,s.jsx)(y.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(_.Z,{label:S.owner2,name:"owner2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u7BA1\u7406\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}]})})]}),(0,s.jsxs)(L.Z,{gutter:16,children:[(0,s.jsx)(y.Z,{lg:6,md:12,sm:24,children:(0,s.jsx)(_.Z,{label:S.approver2,name:"approver2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"}],options:[{label:"\u4ED8\u6653\u6653",value:"xiao"},{label:"\u5468\u6BDB\u6BDB",value:"mao"}],placeholder:"\u8BF7\u9009\u62E9\u5BA1\u6279\u5458"})}),(0,s.jsx)(y.Z,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24,children:(0,s.jsx)(Te,{label:S.dateRange2,name:"dateRange2",rules:[{required:!0,message:"\u8BF7\u8F93\u5165"}],placeholder:"\u63D0\u9192\u65F6\u95F4",fieldProps:{style:{width:"100%"}}})}),(0,s.jsx)(y.Z,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24,children:(0,s.jsx)(_.Z,{label:S.type2,name:"type2",rules:[{required:!0,message:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"}],options:[{label:"\u79C1\u5BC6",value:"private"},{label:"\u516C\u5F00",value:"public"}],placeholder:"\u8BF7\u9009\u62E9\u4ED3\u5E93\u7C7B\u578B"})})]})]}),(0,s.jsx)(A.Z,{title:"\u6210\u5458\u7BA1\u7406",bordered:!1,children:(0,s.jsx)(fe.ZP.Item,{name:"members",children:(0,s.jsx)(ke,{recordCreatorProps:{record:function(){return{key:"0".concat(Date.now())}}},columns:E,rowKey:"key"})})})]})})},qe=Xe}}]);
