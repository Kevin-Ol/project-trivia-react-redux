(this["webpackJsonptrivia-test"]=this["webpackJsonptrivia-test"]||[]).push([[0],{23:function(e,t,a){e.exports=a.p+"static/media/trivia.8ee717d1.png"},31:function(e,t,a){e.exports=a.p+"static/media/arrow.12ac286a.png"},34:function(e,t,a){e.exports=a(54)},39:function(e,t,a){},43:function(e,t,a){},47:function(e,t){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),i=a.n(c),o=(a(39),a(9)),l=a(5),s=a(15),u=a(17),m=a(2),d=a(3),p=a(6),h=a(4),f=a(8),b=a(7),y=a(23),E=a.n(y),v=(a(43),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={name:"",email:""},a.handleChange=a.handleChange.bind(Object(f.a)(a)),a.handleClick=a.handleClick.bind(Object(f.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"handleClick",value:function(){var e=this.props,t=e.requestToken,a=e.storeName,n=e.storeEmail,r=this.state,c=r.name,i=r.email;a(c),n(i),t()}},{key:"handleChange",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState(Object(u.a)({},a,n))}},{key:"validateInputs",value:function(){var e=this.state,t=e.name,a=e.email;return!(/^[a-z0-9_.-]+@[a-z]+\.[a-z]{2,3}(?:\.[a-z]{2})?$/.test(a)&&t.length>=1)}},{key:"render",value:function(){var e=this.state,t=e.name,a=e.email;return r.a.createElement("form",null,r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("fieldset",{className:"container"},r.a.createElement("input",{name:"name",placeholder:"Nome","data-testid":"input-player-name",value:t,onChange:this.handleChange}),r.a.createElement("input",{name:"email",placeholder:"Email","data-testid":"input-gravatar-email",value:a,onChange:this.handleChange}),r.a.createElement(o.b,{to:"/game"},r.a.createElement("button",{type:"button","data-testid":"btn-play",disabled:this.validateInputs(),className:this.validateInputs()?"btn-disabled":"btn-login",onClick:this.handleClick},"Jogar")),r.a.createElement(o.b,{to:"/config"},r.a.createElement("button",{type:"button","data-testid":"btn-settings",className:"btn-settings"},"Configura\xe7\xf5es"))))}}]),t}(n.Component)),g=Object(l.b)(null,(function(e){return{requestToken:function(){return e((function(e){return fetch("https://opentdb.com/api_token.php?command=request").then((function(e){return e.json()})).then((function(t){localStorage.setItem("token",t.token),e({type:"UPDATE_TOKEN",payload:t.token})}))}))},storeName:function(t){return e({type:"UPDATE_NAME",payload:t})},storeEmail:function(t){return e({type:"UPDATE_EMAIL",payload:t})}}}))(v),O=a(19),k=a(30),j=a.n(k),C=(a(48),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"hashCreate",value:function(){var e=this.props,t=e.email,a=e.saveImage,n=j()(t).toString(),r="https://www.gravatar.com/avatar/".concat(n);return a(r),r}},{key:"render",value:function(){var e=this.props,t=e.name,a=e.score;return r.a.createElement("header",null,r.a.createElement("img",{src:this.hashCreate(),"data-testid":"header-profile-picture",alt:"Foto do perfil"}),r.a.createElement("p",null,"Jogador: ",r.a.createElement("span",{"data-testid":"header-player-name"},t)),r.a.createElement("p",null,"Score: ",r.a.createElement("span",{"data-testid":"header-score"},a)))}}]),t}(n.Component)),S=Object(l.b)((function(e){return{email:e.player.gravatarEmail,name:e.player.name,score:e.player.score}}),(function(e){return{saveImage:function(t){return e({type:"SAVE_IMAGE_URL",payload:t})}}}))(C),N=(a(49),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.name,a=e.score,n=e.picture;(0,e.resetQuestions)();var r=localStorage.getItem("ranking");if(r){var c=JSON.parse(r),i=[].concat(Object(O.a)(c),[{name:t,score:a,picture:n}]);localStorage.setItem("ranking",JSON.stringify(i))}else localStorage.setItem("ranking",JSON.stringify([{name:t,score:a,picture:n}]))}},{key:"render",value:function(){var e=this.props,t=e.assertions,a=e.score;return r.a.createElement("div",{className:"feedback-page"},r.a.createElement(S,null),r.a.createElement("div",{className:"feedback-container"},r.a.createElement("h3",{"data-testid":"feedback-text"},t>=3?"Mandou bem!":"Podia ser melhor...!"),r.a.createElement("p",null,"Acertos: ",r.a.createElement("span",{"data-testid":"feedback-total-question"},parseInt(t,10))),r.a.createElement("p",null,"Score: ",r.a.createElement("span",{"data-testid":"feedback-total-score"},parseInt(a,10))),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{type:"button","data-testid":"btn-play-again"},"Jogar novamente")),r.a.createElement(o.b,{to:"/ranking"},r.a.createElement("button",{type:"button","data-testid":"btn-ranking"},"Ver Ranking"))))}}]),t}(n.Component)),A=Object(l.b)((function(e){return{assertions:e.player.assertions,score:e.player.score,name:e.player.name,picture:e.player.gravatarUrl}}),(function(e){return{resetQuestions:function(){return e({type:"CLEAR_QUESTIONS"})}}}))(N),w=(a(50),function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){(0,this.props.clearPlayerState)()}},{key:"renderThead",value:function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Posi\xe7\xe3o"),r.a.createElement("th",null,"Avatar"),r.a.createElement("th",null,"Nome"),r.a.createElement("th",null,"Pontua\xe7\xe3o")))}},{key:"render",value:function(){var e=JSON.parse(localStorage.getItem("ranking")).sort((function(e,t){return t.score-e.score}));return r.a.createElement("div",{className:"ranking-container"},r.a.createElement("section",{className:"ranking"},r.a.createElement("h1",{"data-testid":"ranking-title"},"Ranking"),r.a.createElement("div",{className:"table-container"},r.a.createElement("table",null,this.renderThead(),r.a.createElement("tbody",null,e.map((function(e,t){var a=e.name,n=e.score,c=e.picture;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,t+1),r.a.createElement("td",null,r.a.createElement("img",{className:"ranking-avatar",src:c,alt:"Imagem do jogador"})),r.a.createElement("td",{"data-testid":"player-name-".concat(t)},a),r.a.createElement("td",{"data-testid":"player-score-".concat(t)},n))}))))),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{type:"button","data-testid":"btn-go-home"},"In\xedcio"))))}}]),t}(n.Component)),T=Object(l.b)(null,(function(e){return{clearPlayerState:function(){return e({type:"CLEAR_SCORE"})}}}))(w),I=(a(51),function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).state={categories:[],category:"",difficulty:"",type:""},e.handleClick=e.handleClick.bind(Object(f.a)(e)),e.handleChange=e.handleChange.bind(Object(f.a)(e)),e}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://opentdb.com/api_category.php").then((function(e){return e.json()})).then((function(t){return e.setState({categories:t.trivia_categories})}))}},{key:"handleChange",value:function(e){var t=e.target,a=t.value,n=t.name;this.setState(Object(u.a)({},n,a))}},{key:"handleClick",value:function(e,t,a){(0,this.props.saveConfig)({category:e,difficulty:t,type:a})}},{key:"renderButton",value:function(){var e=this,t=this.state,a=t.category,n=t.difficulty,c=t.type;return r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn-config",onClick:function(){return e.handleClick(a,n,c)}},"Salvar"))}},{key:"renderCategoryList",value:function(){var e=this.state,t=e.categories,a=e.category;return r.a.createElement("label",{htmlFor:"category-select"},"Categoria",r.a.createElement("select",{id:"category-select",value:a,name:"category",onChange:this.handleChange},r.a.createElement("option",{value:""},"Qualquer"),t.map((function(e){var t=e.id,a=e.name;return r.a.createElement("option",{key:t,value:t},a)}))))}},{key:"renderDifficulty",value:function(){var e=this.state.difficulty;return r.a.createElement("label",{htmlFor:"dificulty-select"},"Dificuldade",r.a.createElement("select",{id:"dificulty-select",value:e,name:"difficulty",onChange:this.handleChange},r.a.createElement("option",{value:""},"Todas"),["easy","medium","hard"].map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))}},{key:"renderTypeList",value:function(){var e=this.state.type;return r.a.createElement("label",{htmlFor:"type-select"},"Tipo de perguntas",r.a.createElement("select",{id:"type-select",value:e,name:"type",onChange:this.handleChange},r.a.createElement("option",{value:""},"Todas"),r.a.createElement("option",{value:"multiple"},"M\xfaltipla Escolha"),r.a.createElement("option",{value:"boolean"},"V ou F")))}},{key:"render",value:function(){return r.a.createElement("div",{className:"config-page"},r.a.createElement("img",{src:E.a,className:"App-logo",alt:"logo"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{"data-testid":"settings-title"},"Configura\xe7\xf5es"),this.renderCategoryList(),this.renderDifficulty(),this.renderTypeList(),this.renderButton()))}}]),t}(n.Component)),_=Object(l.b)(null,(function(e){return{saveConfig:function(t){return e({type:"SAVE_CONFIG_OPTIONS",payload:t})}}}))(I),R=function(e){function t(){return Object(m.a)(this,t),Object(p.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NotFound")}}]),t}(n.Component),q=(a(52),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={count:30},a.timer=a.timer.bind(Object(f.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.timer()}},{key:"componentDidUpdate",value:function(e,t){var a=this.props,n=a.setTimer,r=a.clicked;(n(this.state.count),1===t.count||r)&&(clearInterval(this.interval),(0,this.props.timeOut)(!1))}},{key:"timer",value:function(){var e=this;this.interval=setInterval((function(){return e.setState((function(e){return{count:e.count-1}}))}),1e3)}},{key:"render",value:function(){var e=this.state.count;return r.a.createElement("div",null,"Tempo:",e)}}]),t}(n.Component)),Q=Object(l.b)(null,(function(e){return{setTimer:function(t){return e({type:"GET_TIME",payload:t})}}}))(q),D=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={clicked:!1,randomized:[]},a.onClickQuestion=a.onClickQuestion.bind(Object(f.a)(a)),a.randomize=a.randomize.bind(Object(f.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.randomize()}},{key:"onClickQuestion",value:function(e){var t=this.props,a=t.questionAPI,n=t.setAssertion,r=t.setScore,c=t.getTimer,i=t.saveScore,o=t.setVisibility,l=10+{hard:3,medium:2,easy:1}[a.difficulty]*c;this.setState({clicked:!0}),e?(n(),r(l)):r(0),i(),o(!0)}},{key:"randomize",value:function(){var e=2;"multiple"===this.props.questionAPI.type&&(e+=2);for(var t=Object(O.a)(Array(e).keys()),a=t.length-1;a>=0;a-=1){var n=Math.floor(Math.random()*(a+1)),r=t[a];t[a]=t[n],t[n]=r}this.setState({randomized:Object(O.a)(t)})}},{key:"render",value:function(){var e=this,t=this.props.questionAPI,a=this.state,n=a.clicked,c=a.randomized,i=t.category,o=t.question,l=t.correct_answer,s=t.incorrect_answers,u=r.a.createElement("button",{type:"button","data-testid":"correct-answer",key:"4",onClick:function(){return e.onClickQuestion(!0)},className:"answer-option ".concat(n?"correctAnswer":"alternative"),disabled:n},l),m=s.map((function(t,a){return r.a.createElement("button",{type:"button",key:a,"data-testid":"wrong-answer-".concat(a),onClick:function(){return e.onClickQuestion(!1)},className:"answer-option ".concat(n?"incorrectAnswer":"alternative"),disabled:n},t)})),d=[u].concat(Object(O.a)(m));return r.a.createElement("section",null,r.a.createElement("div",{className:"question-title"},r.a.createElement("h3",{"data-testid":"question-category"},i),r.a.createElement(Q,{timeOut:this.onClickQuestion,clicked:n})),r.a.createElement("p",{"data-testid":"question-text"},o),r.a.createElement("div",{className:"answers"},d.map((function(e,t,a){return a[c[t]]}))))}}]),t}(n.Component),M=Object(l.b)((function(e){return{getTimer:e.game.timer}}),(function(e){return{setAssertion:function(){return e({type:"INCREASE_ASSERTIONS"})},setScore:function(t){return e({type:"INCREASE_SCORE",payload:t})},saveScore:function(){return e({type:"SAVE_STORAGE"})}}}))(D),P=(a(53),a(31)),U=a.n(P),V=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(p.a)(this,Object(h.a)(t).call(this,e))).state={questionNumber:0,clicked:!1},a.nextQuestion=a.nextQuestion.bind(Object(f.a)(a)),a.setVisibility=a.setVisibility.bind(Object(f.a)(a)),a}return Object(b.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.getToken,a=e.sendQuestions,n=e.clrScore,r=e.saveScore;a({getToken:t,category:e.category,difficulty:e.difficulty,type:e.type}),n(),r()}},{key:"setVisibility",value:function(e){this.setState({clicked:e})}},{key:"nextQuestion",value:function(){this.setState((function(e){return{questionNumber:e.questionNumber+1,clicked:!1}}))}},{key:"renderQuestion",value:function(){var e=this,t=this.state.questionNumber,a=this.props.getQuestions;return t<=4?a.map((function(t,a){return r.a.createElement(M,{key:a,setVisibility:e.setVisibility,questionAPI:t})}))[t]:r.a.createElement(s.a,{to:"/feedback"})}},{key:"render",value:function(){var e=this.state.clicked;return r.a.createElement("div",{className:"game-page"},r.a.createElement(S,null),r.a.createElement("div",{className:"game"},this.renderQuestion(),e&&r.a.createElement("button",{type:"button","data-testid":"btn-next",onClick:this.nextQuestion,visibility:e,className:"btn-next"},r.a.createElement("img",{src:U.a,alt:"imagem de flecha",className:"btn-image"}))))}}]),t}(n.Component),x=Object(l.b)((function(e){return{getToken:e.game.token,getQuestions:e.game.questions,category:e.game.category,difficulty:e.game.difficulty,type:e.game.type}}),(function(e){return{sendQuestions:function(t){return e(function(e){var t=e.getToken,a=e.category,n=e.difficulty,r=e.type;return function(e){return fetch("https://opentdb.com/api.php?amount=5&category=".concat(a,"&difficulty=").concat(n,"&type=").concat(r,"&token=").concat(t,"&encode=base64")).then((function(e){return e.json()})).then((function(t){e({type:"UPDATE_QUESTION",payload:t.results})}))}}(t))},clrScore:function(){return e({type:"CLEAR_SCORE"})},saveScore:function(){return e({type:"SAVE_STORAGE"})}}}))(V);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var L=a(18),z=a(32),J=a(33),G=a(11),F={name:"",assertions:0,score:0,gravatarEmail:"",gravatarUrl:""},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLEAR_SCORE":return Object(G.a)({},e,{score:0,assertions:0});case"SAVE_IMAGE_URL":return Object(G.a)({},e,{gravatarUrl:t.payload});case"UPDATE_NAME":return Object(G.a)({},e,{name:t.payload});case"UPDATE_EMAIL":return Object(G.a)({},e,{gravatarEmail:t.payload});case"INCREASE_ASSERTIONS":return Object(G.a)({},e,{assertions:e.assertions+1});case"INCREASE_SCORE":return Object(G.a)({},e,{score:e.score+t.payload});case"SAVE_STORAGE":var a=JSON.stringify({player:e});return localStorage.setItem("state",a),e;default:return e}},W={token:"",questions:[],timer:30,category:"",difficulty:"",type:""},K=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SAVE_CONFIG_OPTIONS":var a=t.payload,n=a.category,r=a.difficulty,c=a.type;return Object(G.a)({},e,{category:n,difficulty:r,type:c});case"UPDATE_TOKEN":return Object(G.a)({},e,{token:t.payload});case"UPDATE_QUESTION":var i=t.payload.map((function(e){return Object(G.a)({},e,{question:window.atob(e.question),category:window.atob(e.category),type:window.atob(e.type),difficulty:window.atob(e.difficulty),correct_answer:window.atob(e.correct_answer),incorrect_answers:e.incorrect_answers.map((function(e){return window.atob(e)}))})}));return Object(G.a)({},e,{questions:i});case"GET_TIME":return Object(G.a)({},e,{timer:t.payload});case"CLEAR_QUESTIONS":return Object(G.a)({},e,{questions:[]});default:return e}},$=Object(L.combineReducers)({player:B,game:K}),H=Object(L.createStore)($,Object(z.composeWithDevTools)(Object(L.applyMiddleware)(J.a)));window.Cypress&&(window.store=H);var X=H;i.a.render(r.a.createElement(o.a,{basename:"project-trivia-react-redux"},r.a.createElement(l.a,{store:X},r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(s.d,null,r.a.createElement(s.b,{exact:!0,path:"/",component:g}),r.a.createElement(s.b,{path:"/feedback",component:A}),r.a.createElement(s.b,{path:"/ranking",component:T}),r.a.createElement(s.b,{path:"/config",component:_}),r.a.createElement(s.b,{path:"/game",component:x}),r.a.createElement(s.b,{path:"*",component:R})))}),null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.eededc42.chunk.js.map