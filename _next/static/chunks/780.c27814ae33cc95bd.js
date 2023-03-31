"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[780],{7290:function(e,t,r){var a=(0,r(4012).Z)(Object.getPrototypeOf,Object);t.Z=a},353:function(e,t,r){var a=r(2940),o=r(7290),l=r(3195),i=Object.prototype,n=Function.prototype.toString,s=i.hasOwnProperty,d=n.call(Object);t.Z=function(e){if(!(0,l.Z)(e)||"[object Object]"!=(0,a.Z)(e))return!1;var t=(0,o.Z)(e);if(null===t)return!0;var r=s.call(t,"constructor")&&t.constructor;return"function"==typeof r&&r instanceof r&&n.call(r)==d}},8775:function(e,t,r){r.r(t),r.d(t,{diagram:function(){return P}});var a=r(298),o=r(2488),l=r(2342),i=r(1497),n=r(7237),s=r(6914),d=r(249),c=r(7295),p=r.n(c);r(7856),r(7484),r(7967);let h=(e,t,r)=>{let{parentById:a}=r,o=new Set,l=e;for(;l;){if(o.add(l),l===t)return l;l=a[l]}for(l=t;l;){if(o.has(l))return l;l=a[l]}return"root"},u=new(p()),b={},g={},y={},f=function(e,t,r,a,o,s,c){let p=r.select(`[id="${t}"]`),h=p.insert("g").attr("class","nodes"),u=Object.keys(e);return u.forEach(function(t){let r,c,u;let b=e[t],g="default";b.classes.length>0&&(g=b.classes.join(" "));let f=(0,d.m)(b.styles),w=void 0!==b.text?b.text:b.id,k={width:0,height:0};if((0,n.j)((0,n.g)().flowchart.htmlLabels)){let e={label:w.replace(/fa[blrs]?:fa-[\w-]+/g,e=>`<i class='${e.replace(":"," ")}'></i>`)};r=(0,i.a)(p,e).node();let t=r.getBBox();k.width=t.width,k.height=t.height,k.labelNode=r,r.parentNode.removeChild(r)}else{let e=a.createElementNS("http://www.w3.org/2000/svg","text");e.setAttribute("style",f.labelStyle.replace("color:","fill:"));let t=w.split(n.d.lineBreakRegex);for(let r of t){let t=a.createElementNS("http://www.w3.org/2000/svg","tspan");t.setAttributeNS("http://www.w3.org/XML/1998/namespace","xml:space","preserve"),t.setAttribute("dy","1em"),t.setAttribute("x","1"),t.textContent=r,e.appendChild(t)}r=e;let o=r.getBBox();k.width=o.width,k.height=o.height,k.labelNode=r}let x=[{id:b.id+"-west",layoutOptions:{"port.side":"WEST"}},{id:b.id+"-east",layoutOptions:{"port.side":"EAST"}},{id:b.id+"-south",layoutOptions:{"port.side":"SOUTH"}},{id:b.id+"-north",layoutOptions:{"port.side":"NORTH"}}],m=0,v="",_={};switch(b.type){case"round":m=5,v="rect";break;case"square":case"group":default:v="rect";break;case"diamond":v="question",_={portConstraints:"FIXED_SIDE"};break;case"hexagon":v="hexagon";break;case"odd":case"odd_right":v="rect_left_inv_arrow";break;case"lean_right":v="lean_right";break;case"lean_left":v="lean_left";break;case"trapezoid":v="trapezoid";break;case"inv_trapezoid":v="inv_trapezoid";break;case"circle":v="circle";break;case"ellipse":v="ellipse";break;case"stadium":v="stadium";break;case"subroutine":v="subroutine";break;case"cylinder":v="cylinder";break;case"doublecircle":v="doublecircle"}let E={labelStyle:f.labelStyle,shape:v,labelText:w,rx:m,ry:m,class:g,style:f.style,id:b.id,link:b.link,linkTarget:b.linkTarget,tooltip:o.db.getTooltip(b.id)||"",domId:o.db.lookUpDomId(b.id),haveCallback:b.haveCallback,width:"group"===b.type?500:void 0,dir:b.dir,type:b.type,props:b.props,padding:(0,n.g)().flowchart.padding};"group"!==E.type&&(c=(u=(0,l.e)(h,E,b.dir)).node().getBBox());let S={id:b.id,ports:"diamond"===b.type?x:[],layoutOptions:_,labelText:w,labelData:k,domId:o.db.lookUpDomId(b.id),width:null==c?void 0:c.width,height:null==c?void 0:c.height,type:b.type,el:u,parent:s.parentById[b.id]};y[E.id]=S}),c},w=(e,t,r)=>{let a={TB:{in:{north:"north"},out:{south:"west",west:"east",east:"south"}},LR:{in:{west:"west"},out:{east:"south",south:"north",north:"east"}},RL:{in:{east:"east"},out:{west:"north",north:"south",south:"west"}},BT:{in:{south:"south"},out:{north:"east",east:"west",west:"north"}}};return a.TD=a.TB,n.l.info("abc88",r,t,e),a[r][t][e]},k=(e,t,r)=>{if(n.l.info("getNextPort abc88",{node:e,edgeDirection:t,graphDirection:r}),!b[e])switch(r){case"TB":case"TD":b[e]={inPosition:"north",outPosition:"south"};break;case"BT":b[e]={inPosition:"south",outPosition:"north"};break;case"RL":b[e]={inPosition:"east",outPosition:"west"};break;case"LR":b[e]={inPosition:"west",outPosition:"east"}}let a="in"===t?b[e].inPosition:b[e].outPosition;return"in"===t?b[e].inPosition=w(b[e].inPosition,t,r):b[e].outPosition=w(b[e].outPosition,t,r),a},x=(e,t)=>{let r=e.start,a=e.end,o=r,l=a,i=y[r],n=y[a];return i&&n?("diamond"===i.type&&(r=`${r}-${k(r,"out",t)}`),"diamond"===n.type&&(a=`${a}-${k(a,"in",t)}`),{source:r,target:a,sourceId:o,targetId:l}):{source:r,target:a}},m=function(e,t,r,a){let i,s;n.l.info("abc78 edges = ",e);let c=a.insert("g").attr("class","edgeLabels"),p={},h=t.db.getDirection();if(void 0!==e.defaultStyle){let t=(0,d.m)(e.defaultStyle);i=t.style,s=t.labelStyle}return e.forEach(function(t){var a="L-"+t.start+"-"+t.end;void 0===p[a]?(p[a]=0,n.l.info("abc78 new entry",a,p[a])):(p[a]++,n.l.info("abc78 new entry",a,p[a]));let u=a+"-"+p[a];n.l.info("abc78 new link id to be used is",a,u,p[a]);var b="LS-"+t.start,y="LE-"+t.end;let f={style:"",labelStyle:""};switch(f.minlen=t.length||1,"arrow_open"===t.type?f.arrowhead="none":f.arrowhead="normal",f.arrowTypeStart="arrow_open",f.arrowTypeEnd="arrow_open",t.type){case"double_arrow_cross":f.arrowTypeStart="arrow_cross";case"arrow_cross":f.arrowTypeEnd="arrow_cross";break;case"double_arrow_point":f.arrowTypeStart="arrow_point";case"arrow_point":f.arrowTypeEnd="arrow_point";break;case"double_arrow_circle":f.arrowTypeStart="arrow_circle";case"arrow_circle":f.arrowTypeEnd="arrow_circle"}let w="",k="";switch(t.stroke){case"normal":w="fill:none;",void 0!==i&&(w=i),void 0!==s&&(k=s),f.thickness="normal",f.pattern="solid";break;case"dotted":f.thickness="normal",f.pattern="dotted",f.style="fill:none;stroke-width:2px;stroke-dasharray:3;";break;case"thick":f.thickness="thick",f.pattern="solid",f.style="stroke-width: 3.5px;fill:none;"}if(void 0!==t.style){let e=(0,d.m)(t.style);w=e.style,k=e.labelStyle}f.style=f.style+=w,f.labelStyle=f.labelStyle+=k,void 0!==t.interpolate?f.curve=(0,d.n)(t.interpolate,o.c_6):void 0!==e.defaultInterpolate?f.curve=(0,d.n)(e.defaultInterpolate,o.c_6):f.curve=(0,d.n)(g.curve,o.c_6),void 0===t.text?void 0!==t.style&&(f.arrowheadStyle="fill: #333"):(f.arrowheadStyle="fill: #333",f.labelpos="c"),f.labelType="text",f.label=t.text.replace(n.d.lineBreakRegex,"\n"),void 0===t.style&&(f.style=f.style||"stroke: #333; stroke-width: 1.5px;fill:none;"),f.labelStyle=f.labelStyle.replace("color:","fill:"),f.id=u,f.classes="flowchart-link "+b+" "+y;let m=(0,l.f)(c,f),{source:v,target:_,sourceId:E,targetId:S}=x(t,h);n.l.debug("abc78 source and target",v,_),r.edges.push({id:"e"+t.start+t.end,sources:[v],targets:[_],sourceId:E,targetId:S,labelEl:m,labels:[{width:f.width,height:f.height,orgWidth:f.width,orgHeight:f.height,text:f.label,layoutOptions:{"edgeLabels.inline":"true","edgeLabels.placement":"CENTER"}}],edgeData:f})}),r},v=function(e,t,r,a){let o="";switch(a&&(o=(o=(o=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search).replace(/\(/g,"\\(")).replace(/\)/g,"\\)")),t.arrowTypeStart){case"arrow_cross":e.attr("marker-start","url("+o+"#"+r+"-crossStart)");break;case"arrow_point":e.attr("marker-start","url("+o+"#"+r+"-pointStart)");break;case"arrow_barb":e.attr("marker-start","url("+o+"#"+r+"-barbStart)");break;case"arrow_circle":e.attr("marker-start","url("+o+"#"+r+"-circleStart)");break;case"aggregation":e.attr("marker-start","url("+o+"#"+r+"-aggregationStart)");break;case"extension":e.attr("marker-start","url("+o+"#"+r+"-extensionStart)");break;case"composition":e.attr("marker-start","url("+o+"#"+r+"-compositionStart)");break;case"dependency":e.attr("marker-start","url("+o+"#"+r+"-dependencyStart)");break;case"lollipop":e.attr("marker-start","url("+o+"#"+r+"-lollipopStart)")}switch(t.arrowTypeEnd){case"arrow_cross":e.attr("marker-end","url("+o+"#"+r+"-crossEnd)");break;case"arrow_point":e.attr("marker-end","url("+o+"#"+r+"-pointEnd)");break;case"arrow_barb":e.attr("marker-end","url("+o+"#"+r+"-barbEnd)");break;case"arrow_circle":e.attr("marker-end","url("+o+"#"+r+"-circleEnd)");break;case"aggregation":e.attr("marker-end","url("+o+"#"+r+"-aggregationEnd)");break;case"extension":e.attr("marker-end","url("+o+"#"+r+"-extensionEnd)");break;case"composition":e.attr("marker-end","url("+o+"#"+r+"-compositionEnd)");break;case"dependency":e.attr("marker-end","url("+o+"#"+r+"-dependencyEnd)");break;case"lollipop":e.attr("marker-end","url("+o+"#"+r+"-lollipopEnd)")}},_=function(e){let t={parentById:{},childrenById:{}},r=e.getSubGraphs();return n.l.info("Subgraphs - ",r),r.forEach(function(e){e.nodes.forEach(function(r){t.parentById[r]=e.id,void 0===t.childrenById[e.id]&&(t.childrenById[e.id]=[]),t.childrenById[e.id].push(r)})}),r.forEach(function(e){e.id,void 0!==t.parentById[e.id]&&t.parentById[e.id]}),t},E=function(e,t,r){let a=h(e,t,r);if(void 0===a||"root"===a)return{x:0,y:0};let o=y[a].offset;return{x:o.posX,y:o.posY}},S=function(e,t,r,a,l){let i=E(t.sourceId,t.targetId,l),n=t.sections[0].startPoint,s=t.sections[0].endPoint,d=t.sections[0].bendPoints?t.sections[0].bendPoints:[],c=d.map(e=>[e.x+i.x,e.y+i.y]),p=[[n.x+i.x,n.y+i.y],...c,[s.x+i.x,s.y+i.y]],h=(0,o.jvg)().curve(o.c_6),u=e.insert("path").attr("d",h(p)).attr("class","path").attr("fill","none"),b=e.insert("g").attr("class","edgeLabel"),g=(0,o.Ys)(b.node().appendChild(t.labelEl)),y=g.node().firstChild.getBoundingClientRect();g.attr("width",y.width),g.attr("height",y.height),b.attr("transform",`translate(${t.labels[0].x+i.x}, ${t.labels[0].y+i.y})`),v(u,r,a.type,a.arrowMarkerAbsolute)},$=(e,t)=>{e.forEach(e=>{e.children||(e.children=[]);let r=t.childrenById[e.id];r&&r.forEach(t=>{e.children.push(y[t])}),$(e.children,t)})},T=async function(e,t,r,a){var i;let d,c;a.db.clear(),y={},a.db.setGen("gen-2"),a.parser.parse(e);let p=(0,o.Ys)("body").append("div").attr("style","height:400px").attr("id","cy"),h={id:"root",layoutOptions:{"elk.hierarchyHandling":"INCLUDE_CHILDREN","org.eclipse.elk.padding":"[top=100, left=100, bottom=110, right=110]","elk.layered.spacing.edgeNodeBetweenLayers":"30","elk.direction":"DOWN"},children:[],edges:[]};switch(n.l.info("Drawing flowchart using v3 renderer",u),a.db.getDirection()){case"BT":h.layoutOptions["elk.direction"]="UP";break;case"TB":h.layoutOptions["elk.direction"]="DOWN";break;case"LR":h.layoutOptions["elk.direction"]="RIGHT";break;case"RL":h.layoutOptions["elk.direction"]="LEFT"}let{securityLevel:b,flowchart:g}=(0,n.g)();"sandbox"===b&&(d=(0,o.Ys)("#i"+t));let w="sandbox"===b?(0,o.Ys)(d.nodes()[0].contentDocument.body):(0,o.Ys)("body"),k="sandbox"===b?d.nodes()[0].contentDocument:document,x=w.select(`[id="${t}"]`);(0,l.a)(x,["point","circle","cross"],a.type,a.arrowMarkerAbsolute);let v=a.db.getVertices(),E=a.db.getSubGraphs();n.l.info("Subgraphs - ",E);for(let e=E.length-1;e>=0;e--)c=E[e],a.db.addVertex(c.id,c.title,"group",void 0,c.classes,c.dir);let T=x.insert("g").attr("class","subgraphs"),C=_(a.db);h=f(v,t,w,k,a,C,h);let I=x.insert("g").attr("class","edges edgePath"),P=a.db.getEdges();h=m(P,a,h,x);let O=Object.keys(y);O.forEach(e=>{let t=y[e];t.parent||h.children.push(t),void 0!==C.childrenById[e]&&(t.labels=[{text:t.labelText,layoutOptions:{"nodeLabels.placement":"[H_CENTER, V_TOP, INSIDE]"},width:t.labelData.width,height:t.labelData.height}],delete t.x,delete t.y,delete t.width,delete t.height)}),$(h.children,C),n.l.info("after layout",JSON.stringify(h,null,2));let L=await u.layout(h);B(0,0,L.children,x,T,a,0),n.l.info("after layout",L),null==(i=L.edges)||i.map(e=>{S(I,e,e.edgeData,a,C)}),(0,s.s)({},x,g.diagramPadding,g.useMaxWidth),p.remove()},B=(e,t,r,a,o,l,i)=>{r.forEach(function(r){if(r){if(y[r.id].offset={posX:r.x+e,posY:r.y+t,x:e,y:t,depth:i,width:r.width,height:r.height},"group"===r.type){let a=o.insert("g").attr("class","subgraph");a.insert("rect").attr("class","subgraph subgraph-lvl-"+i%5+" node").attr("x",r.x+e).attr("y",r.y+t).attr("width",r.width).attr("height",r.height);let l=a.insert("g").attr("class","label");l.attr("transform",`translate(${r.labels[0].x+e+r.x}, ${r.labels[0].y+t+r.y})`),l.node().appendChild(r.labelData.labelNode),n.l.info("Id (UGH)= ",r.type,r.labels)}else n.l.info("Id (UGH)= ",r.id),r.el.attr("transform",`translate(${r.x+e+r.width/2}, ${r.y+t+r.height/2})`)}}),r.forEach(function(r){r&&"group"===r.type&&B(e+r.x,t+r.y,r.children,a,o,l,i+1)})},C=e=>{let t="";for(let r=0;r<5;r++)t+=`
      .subgraph-lvl-${r} {
        fill: ${e[`surface${r}`]};
        stroke: ${e[`surfacePeer${r}`]};
      }
    `;return t},I=e=>`.label {
    font-family: ${e.fontFamily};
    color: ${e.nodeTextColor||e.textColor};
  }
  .cluster-label text {
    fill: ${e.titleColor};
  }
  .cluster-label span {
    color: ${e.titleColor};
  }

  .label text,span {
    fill: ${e.nodeTextColor||e.textColor};
    color: ${e.nodeTextColor||e.textColor};
  }

  .node rect,
  .node circle,
  .node ellipse,
  .node polygon,
  .node path {
    fill: ${e.mainBkg};
    stroke: ${e.nodeBorder};
    stroke-width: 1px;
  }

  .node .label {
    text-align: center;
  }
  .node.clickable {
    cursor: pointer;
  }

  .arrowheadPath {
    fill: ${e.arrowheadColor};
  }

  .edgePath .path {
    stroke: ${e.lineColor};
    stroke-width: 2.0px;
  }

  .flowchart-link {
    stroke: ${e.lineColor};
    fill: none;
  }

  .edgeLabel {
    background-color: ${e.edgeLabelBackground};
    rect {
      opacity: 0.5;
      background-color: ${e.edgeLabelBackground};
      fill: ${e.edgeLabelBackground};
    }
    text-align: center;
  }

  .cluster rect {
    fill: ${e.clusterBkg};
    stroke: ${e.clusterBorder};
    stroke-width: 1px;
  }

  .cluster text {
    fill: ${e.titleColor};
  }

  .cluster span {
    color: ${e.titleColor};
  }
  /* .cluster div {
    color: ${e.titleColor};
  } */

  div.mermaidTooltip {
    position: absolute;
    text-align: center;
    max-width: 200px;
    padding: 2px;
    font-family: ${e.fontFamily};
    font-size: 12px;
    background: ${e.tertiaryColor};
    border: 1px solid ${e.border2};
    border-radius: 2px;
    pointer-events: none;
    z-index: 100;
  }

  .flowchartTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${e.textColor};
  }
  .subgraph {
    stroke-width:2;
    rx:3;
  }
  // .subgraph-lvl-1 {
  //   fill:#ccc;
  //   // stroke:black;
  // }
  ${C(e)}
`,P={db:a.d,renderer:{getClasses:function(e,t){n.l.info("Extracting classes"),t.db.clear("ver-2");try{return t.parse(e),t.db.getClasses()}catch(e){return{}}},draw:T},parser:a.p,styles:I}}}]);