(window["webpackJsonpteste-bexs"]=window["webpackJsonpteste-bexs"]||[]).push([[0],{27:function(e,a,t){e.exports=t(87)},31:function(e,a,t){},83:function(e,a,t){},84:function(e,a,t){},85:function(e,a,t){},86:function(e,a,t){},87:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(23),s=t.n(c),l=(t(31),t(24)),o=t(7),i=t(9),m=t(11),d=t(10),u=t(12),h=t(5),p=t(25),v=t(26),f=t.n(v),E=(t(82),t(83),function(e){function a(){var e,t;Object(o.a)(this,a);for(var n=arguments.length,c=new Array(n),s=0;s<n;s++)c[s]=arguments[s];return(t=Object(m.a)(this,(e=Object(d.a)(a)).call.apply(e,[this].concat(c)))).img=r.a.createElement("img",{src:"/images/logo.png",alt:"logo"}),t}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.Navbar,{brand:this.img,className:"white nav",alignLinks:"right"},r.a.createElement(h.NavItem,{href:"",className:"nav-item"}),r.a.createElement(h.NavItem,{href:"",className:"nav-item"}),r.a.createElement(h.NavItem,{href:"",className:"nav-item"}),r.a.createElement(h.NavItem,{href:"",className:"nav-item"}),r.a.createElement(h.NavItem,{href:"",className:"nav-item"}))}}]),a}(n.Component)),N=(t(84),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"info-container"},r.a.createElement("div",{className:"info"}),r.a.createElement("hr",null),r.a.createElement("div",{className:"info left"})," ",r.a.createElement("div",{className:"info right"}),r.a.createElement("div",{className:"info left"})," ",r.a.createElement("div",{className:"info right"}),r.a.createElement("div",{className:"info left"})," ",r.a.createElement("div",{className:"info right"}),r.a.createElement("div",{className:"info left result"})," ",r.a.createElement("div",{className:"info right result"}))}}]),a}(n.Component)),b=(t(85),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(d.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,"desktop"===this.props.type?r.a.createElement("div",{className:"row desktop-steps"},this.props.steps.map(function(a,t){return e.props.active-1===t?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"checked"},r.a.createElement("i",{className:"Tiny material-icons"},"check")),a,t+1<e.props.steps.length?r.a.createElement("i",{className:"small material-icons"},"chevron_right"):""):r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,t+1)," ",a,t+1<e.props.steps.length?r.a.createElement("i",{className:"small material-icons"},"chevron_right"):"")})):r.a.createElement("div",{className:"step-info"},r.a.createElement("i",{className:"small material-icons"},"chevron_left"),r.a.createElement("a",{href:"#!"},r.a.createElement("strong",null,"Etapa ",this.props.active)," de ",this.props.total," ")))}}]),a}(n.Component)),g=function e(){var a=this;Object(o.a)(this,e),this._defaultUrl="http://mock-api",this.saveCard=function(e){return a.mockCaller("/pagar",e,!1)},this.mockCaller=function(e,t,n){return console.log("chamada api","URL: ".concat(a._defaultUrl,"/").concat(e,", Method: POST")),new Promise(function(e,a){n&&a({code:400,message:"N\xe3o foi possivel salvar o cart\xe3o!"}),e({code:200,message:"Cart\xe3o salvo com sucesso!"})})}},C=(t(86),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(m.a)(this,Object(d.a)(a).call(this))).applyMask=function(e,a){var t=document.getElementById(e),n={mask:a};f()(t,n)},e.handleChange=function(a){var t=a.target,n="checkbox"===t.type?t.checked:t.value,r=t.name;"SELECT"===t.nodeName&&document.getElementsByClassName("select-dropdown")[0].classList.remove("invalid");e.focusCard(r,n),e.setState(Object(l.a)({},r,n))},e.focusCard=function(a,t){switch(a){case"cardNumber":e.setState({focused:"number"});break;case"cardName":e.setState({focused:"name"});break;case"cardCode":t?e.setState({focused:"cvc"}):e.setState({focused:"number"});break;case"cardDate":e.setState({focused:"expiry"});break;default:e.setState({focused:"number"})}},e.sendCardInfo=function(a){(a.preventDefault(),e.checkFormErros(a.target))||(new g).saveCard(e.state).then(function(e){alert(e.message)})},e.checkFormErros=function(a){for(var t=!1,n=a.elements,r=0;r<n.length;r++)if(n[r]&&("INPUT"===n[r].nodeName||"SELECT"===n[r].nodeName)&&!e.state[n[r].name])if(n[r].classList.contains("select-dropdown")){if(!e.state.cardPortions&&!document.getElementById("select-error")){var c=document.createElement("SPAN");c.setAttribute("id","select-error"),c.setAttribute("class","helper-text"),c.setAttribute("data-error","Selecione o n\xfamero de parcelas"),n[r].parentNode.insertBefore(c,n[r].nextSibling),n[r].classList.add("invalid")}}else t=!0,n[r].classList.add("invalid");return t},e.state={cardNumber:"",cardCode:"",cardName:"",cardDate:"",cardPortions:""},e}return Object(u.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){this.applyMask("cardNumber","0000 0000 0000 0000"),this.applyMask("cardDate","00/00"),this.applyMask("cardCode","000")}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(E,null),r.a.createElement("div",{className:"content payment-container"},r.a.createElement("div",{className:"row flex-content"},r.a.createElement("div",{className:"card-container"},r.a.createElement(b,{type:"mobile",active:2,total:3}),r.a.createElement("a",{href:"#!"},r.a.createElement("i",{className:"small material-icons"},"chevron_left")," Alterar forma de pagamento"),r.a.createElement("div",{className:"add-card"},r.a.createElement("p",null,r.a.createElement("img",{src:"/images/card-icon.png",alt:"card icon"}),r.a.createElement("span",null,"Adicione um novo",r.a.createElement("br",null)," cart\xe3o de cr\xe9dito"))),r.a.createElement("div",{className:"credit-card"},r.a.createElement(p.a,{number:this.state.cardNumber,name:this.state.cardName,expiry:this.state.cardDate,cvc:this.state.cardCode,focused:this.state.focused}))),r.a.createElement("div",{className:"form-container"},r.a.createElement(b,{type:"desktop",active:1,steps:["Carrinho","Pagamento","Confirma\xe7\xe3o"]}),r.a.createElement("div",{className:"row"},r.a.createElement("form",{noValidate:!0,onSubmit:this.sendCardInfo},r.a.createElement(h.TextInput,{id:"cardNumber",name:"cardNumber",onChange:this.handleChange,s:12,error:"N\xfamero do cart\xe3o inv\xe1lido",label:"N\xfamero do cart\xe3o",validate:!0,required:!0}),r.a.createElement(h.TextInput,{id:"cardName",name:"cardName",onChange:this.handleChange,s:12,error:"Insira seu nome completo",label:"Nome (igual ao cart\xe3o)",validate:!0,required:!0}),r.a.createElement(h.TextInput,{name:"cardDate",id:"cardDate",onChange:this.handleChange,s:6,error:"Data inv\xe1lida",label:"Validade",validate:!0,required:!0}),r.a.createElement(h.TextInput,{name:"cardCode",id:"cardCode",onChange:this.handleChange,s:6,error:"C\xf3digo inv\xe1lido",label:"CVV",validate:!0,required:!0}),r.a.createElement(h.Select,{onChange:this.handleChange,name:"cardPortions",s:12,error:"Selecione o n\xfamero de parcelas",validate:!0,required:!0},r.a.createElement("option",{value:""},"N\xfamero de parcelas"),r.a.createElement("option",{value:"1"},"12 x de R$ 1000,00 sem juros")),r.a.createElement("div",{className:"row submit-button"},r.a.createElement(h.Button,{type:"submit",large:!0},"Continuar"))))),r.a.createElement(N,null))))}}]),a}(n.Component));var k=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[27,1,2]]]);
//# sourceMappingURL=main.f466a9cc.chunk.js.map