(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[6989],{8212:function(V,R,o){"use strict";o.d(R,{Z:function(){return g}});var v=o(28991),E=o(67294),l={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},X=l,z=o(27029),A=function(Q,J){return E.createElement(z.Z,(0,v.Z)((0,v.Z)({},Q),{},{ref:J,icon:X}))};A.displayName="EditOutlined";var g=E.forwardRef(A)},47828:function(){},59289:function(V,R,o){"use strict";o.d(R,{Z:function(){return ct}});var v=o(22122),E=o(96156),l=o(67294),X=o(94184),z=o.n(X),A=o(42550),g=o(65632),P=o(21687),Q=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},J=function(r,i){var e=r.prefixCls,t=r.component,a=t===void 0?"article":t,s=r.className,d=r["aria-label"],c=r.setContentRef,p=r.children,f=Q(r,["prefixCls","component","className","aria-label","setContentRef","children"]),u=i;return c&&((0,P.Z)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),u=(0,A.sQ)(i,c)),l.createElement(g.C,null,function(h){var b=h.getPrefixCls,I=h.direction,L=a,O=b("typography",e),U=z()(O,(0,E.Z)({},"".concat(O,"-rtl"),I==="rtl"),s);return l.createElement(L,(0,v.Z)({className:U,"aria-label":d,ref:u},f),p)})},F=l.forwardRef(J);F.displayName="Typography";var W=F,C=W,K=o(90484),_=o(98423),M=o(85061),Y=o(6610),Ce=o(5991),xe=o(10379),be=o(60446),ne=o(50344),Oe=o(20640),Se=o.n(Oe),Ze=o(8212),Te=o(79508),Ne=o(99165),Pe=o(31739),Re=o(69224),Le=o(42051),fe=o(34952),re=o(32637),ve=o(31808),ie=o(69713),De=o(28481),ye=o(15105),he=o(28991),we={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},Ae=we,Ie=o(27029),me=function(r,i){return l.createElement(Ie.Z,(0,he.Z)((0,he.Z)({},r),{},{ref:i,icon:Ae}))};me.displayName="EnterOutlined";var je=l.forwardRef(me),Me=o(68100),ke=function(r){var i=r.prefixCls,e=r["aria-label"],t=r.className,a=r.style,s=r.direction,d=r.maxLength,c=r.autoSize,p=c===void 0?!0:c,f=r.value,u=r.onSave,h=r.onCancel,b=r.onEnd,I=l.useRef(),L=l.useRef(!1),O=l.useRef(),U=l.useState(f),$=(0,De.Z)(U,2),D=$[0],G=$[1];l.useEffect(function(){G(f)},[f]),l.useEffect(function(){if(I.current&&I.current.resizableTextArea){var x=I.current.resizableTextArea.textArea;x.focus();var Z=x.value.length;x.setSelectionRange(Z,Z)}},[]);var y=function(Z){var N=Z.target;G(N.value.replace(/[\n\r]/g,""))},m=function(){L.current=!0},w=function(){L.current=!1},T=function(Z){var N=Z.keyCode;L.current||(O.current=N)},j=function(){u(D.trim())},B=function(Z){var N=Z.keyCode,ce=Z.ctrlKey,de=Z.altKey,pe=Z.metaKey,ue=Z.shiftKey;O.current===N&&!L.current&&!ce&&!de&&!pe&&!ue&&(N===ye.Z.ENTER?(j(),b==null||b()):N===ye.Z.ESC&&h())},k=function(){j()},H=z()(i,"".concat(i,"-edit-content"),(0,E.Z)({},"".concat(i,"-rtl"),s==="rtl"),t);return l.createElement("div",{className:H,style:a},l.createElement(Me.Z,{ref:I,maxLength:d,value:D,onChange:y,onKeyDown:T,onKeyUp:B,onCompositionStart:m,onCompositionEnd:w,onBlur:k,"aria-label":e,autoSize:p}),l.createElement(je,{className:"".concat(i,"-edit-content-confirm")}))},Ke=ke,ae=o(73935),Ue=1,ze=3,$e=8,S,oe={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function le(n){if(!n)return 0;var r=n.match(/^\d*(\.\d*)?/);return r?Number(r[0]):0}function Be(n){var r=Array.prototype.slice.apply(n);return r.map(function(i){return"".concat(i,": ").concat(n.getPropertyValue(i),";")}).join("")}function He(n){var r=[];return n.forEach(function(i){var e=r[r.length-1];typeof i=="string"&&typeof e=="string"?r[r.length-1]+=i:r.push(i)}),r}function ge(n,r){n.setAttribute("aria-hidden","true");var i=window.getComputedStyle(r),e=Be(i);n.setAttribute("style",e),n.style.position="fixed",n.style.left="0",n.style.height="auto",n.style.minHeight="auto",n.style.maxHeight="auto",n.style.top="-999999px",n.style.zIndex="-1000",n.style.textOverflow="clip",n.style.whiteSpace="normal",n.style.webkitLineClamp="none"}function We(n){var r=document.createElement("div");ge(r,n),r.appendChild(document.createTextNode("text")),document.body.appendChild(r);var i=r.offsetHeight,e=le(window.getComputedStyle(n).lineHeight);return document.body.removeChild(r),i>e?i:e}var Fe=function(n,r,i,e,t){S||(S=document.createElement("div"),S.setAttribute("aria-hidden","true")),S.parentNode||document.body.appendChild(S);var a=r.rows,s=r.suffix,d=s===void 0?"":s,c=window.getComputedStyle(n),p=We(n),f=Math.floor(p)*(a+1)+le(c.paddingTop)+le(c.paddingBottom);ge(S,n);var u=He((0,ne.Z)(i));(0,ae.render)(l.createElement("div",{style:oe},l.createElement("span",{style:oe},u,d),l.createElement("span",{style:oe},e)),S);function h(){return Math.ceil(S.getBoundingClientRect().height)<f}if(h())return(0,ae.unmountComponentAtNode)(S),{content:i,text:S.innerHTML,ellipsis:!1};var b=Array.prototype.slice.apply(S.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter(function(y){var m=y.nodeType;return m!==$e}),I=Array.prototype.slice.apply(S.childNodes[0].childNodes[1].cloneNode(!0).childNodes);(0,ae.unmountComponentAtNode)(S);var L=[];S.innerHTML="";var O=document.createElement("span");S.appendChild(O);var U=document.createTextNode(t+d);O.appendChild(U),I.forEach(function(y){S.appendChild(y)});function $(y){O.insertBefore(y,U)}function D(y,m){var w=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,T=arguments.length>3&&arguments[3]!==void 0?arguments[3]:m.length,j=arguments.length>4&&arguments[4]!==void 0?arguments[4]:0,B=Math.floor((w+T)/2),k=m.slice(0,B);if(y.textContent=k,w>=T-1)for(var H=T;H>=w;H-=1){var x=m.slice(0,H);if(y.textContent=x,h()||!x)return H===m.length?{finished:!1,reactNode:m}:{finished:!0,reactNode:x}}return h()?D(y,m,B,T,B):D(y,m,w,B,j)}function G(y,m){var w=y.nodeType;if(w===Ue)return $(y),h()?{finished:!1,reactNode:u[m]}:(O.removeChild(y),{finished:!0,reactNode:null});if(w===ze){var T=y.textContent||"",j=document.createTextNode(T);return $(j),D(j,T)}return{finished:!1,reactNode:null}}return b.some(function(y,m){var w=G(y,m),T=w.finished,j=w.reactNode;return j&&L.push(j),T}),{content:L,text:S.innerHTML,ellipsis:!0}},Ge=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Ve=(0,ve.GL)("webkitLineClamp"),Xe=(0,ve.GL)("textOverflow");function Qe(n,r){var i=n.mark,e=n.code,t=n.underline,a=n.delete,s=n.strong,d=n.keyboard,c=n.italic,p=r;function f(u,h){!u||(p=l.createElement(h,{},p))}return f(s,"strong"),f(t,"u"),f(a,"del"),f(e,"code"),f(i,"mark"),f(d,"kbd"),f(c,"i"),p}function ee(n,r,i){return n===!0||n===void 0?r:n||i&&r}var Ee="...",se=function(n){(0,xe.Z)(i,n);var r=(0,be.Z)(i);function i(){var e;return(0,Y.Z)(this,i),e=r.apply(this,arguments),e.contentRef=l.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls,a=e.context.getPrefixCls;return a("typography",t)},e.onExpandClick=function(t){var a,s=e.getEllipsis(),d=s.onExpand;e.setState({expanded:!0}),(a=d)===null||a===void 0||a(t)},e.onEditClick=function(t){t.preventDefault(),e.triggerEdit(!0)},e.onEditChange=function(t){var a=e.getEditable(),s=a.onChange;s==null||s(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,a;(a=(t=e.getEditable()).onCancel)===null||a===void 0||a.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var a=e.props,s=a.children,d=a.copyable,c=(0,v.Z)({},(0,K.Z)(d)==="object"?d:null);c.text===void 0&&(c.text=String(s)),Se()(c.text||""),e.setState({copied:!0},function(){c.onCopy&&c.onCopy(),e.copyId=window.setTimeout(function(){e.setState({copied:!1})},3e3)})},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var a=e.getEditable(),s=a.onStart;t&&s&&s(),e.setState({edit:t},function(){!t&&e.editIcon&&e.editIcon.focus()})},e.resizeOnNextFrame=function(){re.Z.cancel(e.rafId),e.rafId=(0,re.Z)(function(){e.syncEllipsis()})},e}return(0,Ce.Z)(i,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(t){var a=this.props.children,s=this.getEllipsis(),d=this.getEllipsis(t);(a!==t.children||s.rows!==d.rows)&&this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),re.Z.cancel(this.rafId)}},{key:"getEditable",value:function(t){var a=this.state.edit,s=t||this.props,d=s.editable;return d?(0,v.Z)({editing:a},(0,K.Z)(d)==="object"?d:null):{editing:a}}},{key:"getEllipsis",value:function(t){var a=t||this.props,s=a.ellipsis;return s?(0,v.Z)({rows:1,expandable:!1},(0,K.Z)(s)==="object"?s:null):{}}},{key:"canUseCSSEllipsis",value:function(){var t=this.state.clientRendered,a=this.props,s=a.editable,d=a.copyable,c=this.getEllipsis(),p=c.rows,f=c.expandable,u=c.suffix,h=c.onEllipsis,b=c.tooltip;return u||b||s||d||f||!t||h?!1:p===1?Xe:Ve}},{key:"syncEllipsis",value:function(){var t=this.state,a=t.ellipsisText,s=t.isEllipsis,d=t.expanded,c=this.getEllipsis(),p=c.rows,f=c.suffix,u=c.onEllipsis,h=this.props.children;if(!(!p||p<0||!this.contentRef.current||d)&&!this.canUseCSSEllipsis()){(0,P.Z)((0,ne.Z)(h).every(function(U){return typeof U=="string"}),"Typography","`ellipsis` should use string as children only.");var b=Fe(this.contentRef.current,{rows:p,suffix:f},h,this.renderOperations(!0),Ee),I=b.content,L=b.text,O=b.ellipsis;(a!==L||s!==O)&&(this.setState({ellipsisText:L,ellipsisContent:I,isEllipsis:O}),s!==O&&u&&u(O))}}},{key:"renderExpand",value:function(t){var a=this.getEllipsis(),s=a.expandable,d=a.symbol,c=this.state,p=c.expanded,f=c.isEllipsis;if(!s||!t&&(p||!f))return null;var u;return d?u=d:u=this.expandStr,l.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},u)}},{key:"renderEdit",value:function(){var t=this.props.editable;if(!!t){var a=t.icon,s=t.tooltip,d=(0,ne.Z)(s)[0]||this.editStr,c=typeof d=="string"?d:"";return l.createElement(ie.Z,{key:"edit",title:s===!1?"":d},l.createElement(fe.Z,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":c},a||l.createElement(Ze.Z,{role:"button"})))}}},{key:"renderCopy",value:function(){var t=this.state.copied,a=this.props.copyable;if(!!a){var s=this.getPrefixCls(),d=a.tooltips,c=a.icon,p=Array.isArray(d)?d:[d],f=Array.isArray(c)?c:[c],u=t?ee(p[1],this.copiedStr):ee(p[0],this.copyStr),h=t?this.copiedStr:this.copyStr,b=typeof u=="string"?u:h;return l.createElement(ie.Z,{key:"copy",title:u},l.createElement(fe.Z,{className:z()("".concat(s,"-copy"),t&&"".concat(s,"-copy-success")),onClick:this.onCopyClick,"aria-label":b},t?ee(f[1],l.createElement(Te.Z,null),!0):ee(f[0],l.createElement(Ne.Z,null),!0)))}}},{key:"renderEditInput",value:function(){var t=this.props,a=t.children,s=t.className,d=t.style,c=this.context.direction,p=this.getEditable(),f=p.maxLength,u=p.autoSize,h=p.onEnd;return l.createElement(Ke,{value:typeof a=="string"?a:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:h,prefixCls:this.getPrefixCls(),className:s,style:d,direction:c,maxLength:f,autoSize:u})}},{key:"renderOperations",value:function(t){return[this.renderExpand(t),this.renderEdit(),this.renderCopy()].filter(function(a){return a})}},{key:"renderContent",value:function(){var t=this,a=this.state,s=a.ellipsisContent,d=a.isEllipsis,c=a.expanded,p=this.props,f=p.component,u=p.children,h=p.className,b=p.type,I=p.disabled,L=p.style,O=Ge(p,["component","children","className","type","disabled","style"]),U=this.context.direction,$=this.getEllipsis(),D=$.rows,G=$.suffix,y=$.tooltip,m=this.getPrefixCls(),w=(0,_.Z)(O,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard","italic"].concat((0,M.Z)(Re.nf))),T=this.canUseCSSEllipsis(),j=D===1&&T,B=D&&D>1&&T,k=u;if(D&&d&&!c&&!T){var H=O.title,x=H||"";!H&&(typeof u=="string"||typeof u=="number")&&(x=String(u)),x=x.slice(String(s||"").length),k=l.createElement(l.Fragment,null,s,l.createElement("span",{title:x,"aria-hidden":"true"},Ee),G),y&&(k=l.createElement(ie.Z,{title:y===!0?u:y},l.createElement("span",null,k)))}else k=l.createElement(l.Fragment,null,u,G);return k=Qe(this.props,k),l.createElement(Le.Z,{componentName:"Text"},function(Z){var N,ce=Z.edit,de=Z.copy,pe=Z.copied,ue=Z.expand;return t.editStr=ce,t.copyStr=de,t.copiedStr=pe,t.expandStr=ue,l.createElement(Pe.Z,{onResize:t.resizeOnNextFrame,disabled:T},l.createElement(C,(0,v.Z)({className:z()((N={},(0,E.Z)(N,"".concat(m,"-").concat(b),b),(0,E.Z)(N,"".concat(m,"-disabled"),I),(0,E.Z)(N,"".concat(m,"-ellipsis"),D),(0,E.Z)(N,"".concat(m,"-single-line"),D===1),(0,E.Z)(N,"".concat(m,"-ellipsis-single-line"),j),(0,E.Z)(N,"".concat(m,"-ellipsis-multiple-line"),B),N),h),style:(0,v.Z)((0,v.Z)({},L),{WebkitLineClamp:B?D:void 0}),component:f,ref:t.contentRef,direction:U},w),k,t.renderOperations()))})}},{key:"render",value:function(){var t=this.getEditable(),a=t.editing;return a?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(t){var a=t.children,s=t.editable;return(0,P.Z)(!s||typeof a=="string","Typography","When `editable` is enabled, the `children` should use string."),{}}}]),i}(l.Component);se.contextType=g.E_,se.defaultProps={children:""};var te=se,Je=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},Ye=function(r){var i=r.ellipsis,e=Je(r,["ellipsis"]),t=l.useMemo(function(){return i&&(0,K.Z)(i)==="object"?(0,_.Z)(i,["expandable","rows"]):i},[i]);return(0,P.Z)((0,K.Z)(i)!=="object"||!i||!("expandable"in i)&&!("rows"in i),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),l.createElement(te,(0,v.Z)({},e,{ellipsis:t,component:"span"}))},qe=Ye,_e=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},et=function(r,i){var e=r.ellipsis,t=r.rel,a=_e(r,["ellipsis","rel"]);(0,P.Z)((0,K.Z)(e)!=="object","Typography.Link","`ellipsis` only supports boolean value.");var s=l.useRef(null);l.useImperativeHandle(i,function(){var c;return(c=s.current)===null||c===void 0?void 0:c.contentRef.current});var d=(0,v.Z)((0,v.Z)({},a),{rel:t===void 0&&a.target==="_blank"?"noopener noreferrer":t});return delete d.navigate,l.createElement(te,(0,v.Z)({},d,{ref:s,ellipsis:!!e,component:"a"}))},tt=l.forwardRef(et),nt=o(93355),rt=function(n,r){var i={};for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&r.indexOf(e)<0&&(i[e]=n[e]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(n);t<e.length;t++)r.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(n,e[t])&&(i[e[t]]=n[e[t]]);return i},it=(0,nt.a)(1,2,3,4,5),at=function(r){var i=r.level,e=i===void 0?1:i,t=rt(r,["level"]),a;return it.indexOf(e)!==-1?a="h".concat(e):((0,P.Z)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),a="h1"),l.createElement(te,(0,v.Z)({},t,{component:a}))},ot=at,lt=function(r){return l.createElement(te,(0,v.Z)({},r,{component:"div"}))},st=lt,q=C;q.Text=qe,q.Link=tt,q.Title=ot,q.Paragraph=st;var ct=q},402:function(V,R,o){"use strict";var v=o(65056),E=o.n(v),l=o(47828),X=o.n(l),z=o(22385),A=o(47673)},20640:function(V,R,o){"use strict";var v=o(11742),E={"text/plain":"Text","text/html":"Url",default:"Text"},l="Copy to clipboard: #{key}, Enter";function X(A){var g=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return A.replace(/#{\s*key\s*}/g,g)}function z(A,g){var P,Q,J,F,W,C,K=!1;g||(g={}),P=g.debug||!1;try{J=v(),F=document.createRange(),W=document.getSelection(),C=document.createElement("span"),C.textContent=A,C.style.all="unset",C.style.position="fixed",C.style.top=0,C.style.clip="rect(0, 0, 0, 0)",C.style.whiteSpace="pre",C.style.webkitUserSelect="text",C.style.MozUserSelect="text",C.style.msUserSelect="text",C.style.userSelect="text",C.addEventListener("copy",function(M){if(M.stopPropagation(),g.format)if(M.preventDefault(),typeof M.clipboardData=="undefined"){P&&console.warn("unable to use e.clipboardData"),P&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var Y=E[g.format]||E.default;window.clipboardData.setData(Y,A)}else M.clipboardData.clearData(),M.clipboardData.setData(g.format,A);g.onCopy&&(M.preventDefault(),g.onCopy(M.clipboardData))}),document.body.appendChild(C),F.selectNodeContents(C),W.addRange(F);var _=document.execCommand("copy");if(!_)throw new Error("copy command was unsuccessful");K=!0}catch(M){P&&console.error("unable to copy using execCommand: ",M),P&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(g.format||"text",A),g.onCopy&&g.onCopy(window.clipboardData),K=!0}catch(Y){P&&console.error("unable to copy using clipboardData: ",Y),P&&console.error("falling back to prompt"),Q=X("message"in g?g.message:l),window.prompt(Q,A)}}finally{W&&(typeof W.removeRange=="function"?W.removeRange(F):W.removeAllRanges()),C&&document.body.removeChild(C),J()}return K}V.exports=z},11742:function(V){V.exports=function(){var R=document.getSelection();if(!R.rangeCount)return function(){};for(var o=document.activeElement,v=[],E=0;E<R.rangeCount;E++)v.push(R.getRangeAt(E));switch(o.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":o.blur();break;default:o=null;break}return R.removeAllRanges(),function(){R.type==="Caret"&&R.removeAllRanges(),R.rangeCount||v.forEach(function(l){R.addRange(l)}),o&&o.focus()}}}}]);
