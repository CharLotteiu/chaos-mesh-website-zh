(self.webpackChunkchaos_mesh_website=self.webpackChunkchaos_mesh_website||[]).push([[5818],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return u}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},282:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return s}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),o={title:"\u6a21\u62df Pod \u6545\u969c",sidebar_label:"\u6a21\u62df Pod \u6545\u969c"},i={unversionedId:"simulate-pod-chaos-on-kubernetes",id:"simulate-pod-chaos-on-kubernetes",isDocsHomePage:!1,title:"\u6a21\u62df Pod \u6545\u969c",description:"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002",source:"@site/docs/simulate-pod-chaos-on-kubernetes.md",sourceDirName:".",slug:"/simulate-pod-chaos-on-kubernetes",permalink:"/website-zh/docs/simulate-pod-chaos-on-kubernetes",editUrl:"https://github.com/chaos-mesh/website-zh/edit/main/docs/simulate-pod-chaos-on-kubernetes.md",version:"current",sidebar_label:"\u6a21\u62df Pod \u6545\u969c",frontMatter:{title:"\u6a21\u62df Pod \u6545\u969c",sidebar_label:"\u6a21\u62df Pod \u6545\u969c"},sidebar:"docs",previous:{title:"\u68c0\u67e5 Workflow \u72b6\u6001",permalink:"/website-zh/docs/inspect-chaos-mesh-workflow"},next:{title:"\u6a21\u62df\u7f51\u7edc\u6545\u969c",permalink:"/website-zh/docs/simulate-network-chaos-on-kubernetes"}},d=[{value:"PodChaos \u4ecb\u7ecd",id:"podchaos-\u4ecb\u7ecd",children:[]},{value:"\u4f7f\u7528\u9650\u5236",id:"\u4f7f\u7528\u9650\u5236",children:[]},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",children:[]},{value:"\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c",children:[]},{value:"\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",id:"\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c",children:[{value:"pod-failure \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"pod-failure-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:[]},{value:"pod-kill \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"pod-kill-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:[]},{value:"container-kill \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",id:"container-kill-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b",children:[]},{value:"\u5b57\u6bb5\u8bf4\u660e",id:"\u5b57\u6bb5\u8bf4\u660e",children:[]}]}],p={toc:d};function s(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u672c\u6587\u6863\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Chaos Mesh \u4e3a Kubernetes Pod \u6ce8\u5165\u6545\u969c\uff0c\u6a21\u62df Pod \u6216\u5bb9\u5668\u6545\u969c\uff0c\u5e76\u63d0\u4f9b Chaos Dashboard \u548c YAML \u6587\u4ef6\u4e24\u79cd\u65b9\u5f0f\u7528\u4e8e\u521b\u5efa PodChaos \u5b9e\u9a8c\u3002"),(0,l.kt)("h2",{id:"podchaos-\u4ecb\u7ecd"},"PodChaos \u4ecb\u7ecd"),(0,l.kt)("p",null,"PodChaos \u662f Chaos Mesh \u4e2d\u7684\u4e00\u79cd\u6545\u969c\u7c7b\u578b\uff0c\u901a\u8fc7\u521b\u5efa PodChaos \u7c7b\u578b\u7684\u6df7\u6c8c\u5b9e\u9a8c\uff0c\u4f60\u53ef\u4ee5\u6a21\u62df\u6307\u5b9a Pod \u6216\u8005\u5bb9\u5668\u53d1\u751f\u6545\u969c\u7684\u60c5\u666f\u3002\u76ee\u524d\uff0cPodChaos \u652f\u6301\u6a21\u62df\u4ee5\u4e0b\u6545\u969c\u7c7b\u578b\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Pod Failure\uff1a\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165\u6545\u969c\uff0c\u4f7f\u5f97\u8be5 Pod \u5728\u4e00\u6bb5\u65f6\u95f4\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("li",{parentName:"ul"},"Pod Kill\uff1a\u6740\u6b7b\u6307\u5b9a\u7684 Pod \u3002\u4e3a\u4e86\u4fdd\u8bc1 Pod \u80fd\u591f\u6210\u529f\u91cd\u542f\uff0c\u9700\u8981\u914d\u7f6e ReplicaSet \u6216\u8005\u7c7b\u4f3c\u7684\u673a\u5236\u3002"),(0,l.kt)("li",{parentName:"ul"},"Container Kill\uff1a\u6740\u6b7b\u4f4d\u4e8e\u76ee\u6807 Pod \u4e2d\u7684\u6307\u5b9a\u5bb9\u5668\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528\u9650\u5236"},"\u4f7f\u7528\u9650\u5236"),(0,l.kt)("p",null,"\u76ee\u524d Chaos Mesh \u4ec5\u652f\u6301\u5411\u7279\u5b9a\u7c7b\u578b\u7684 Pod \u4e2d\u6ce8\u5165\u6545\u969c\uff0c\u4f8b\u5982 Deployment\u3001Statefulset\u3001Daemonset\u3002Chaos Mesh \u4e0d\u652f\u6301\u5411\u72ec\u7acb\u7684 Pod \u4e2d\u6ce8\u5165\u6545\u969c\uff0c\u72ec\u7acb\u7684 Pod \u6307\u672a\u7ed1\u5b9a\u5230 ReplicaSet \u6216 Deployment \u7684 Pod\u3002"),(0,l.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,l.kt)("p",null,"\u521b\u5efa PodChaos \u5b9e\u9a8c\u524d\uff0c\u8bf7\u786e\u4fdd\u4ee5\u4e0b\u4e8b\u9879\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u76ee\u6807 Pod \u4e0a\u6ca1\u6709\u8fd0\u884c Chaos Mesh \u7684 Control Manager\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u6545\u969c\u7c7b\u578b\u4e3a Pod Kill\uff0c\u914d\u7f6e\u4e86 ReplicaSet \u6216\u8005\u7c7b\u4f3c\u4fdd\u8bc1 Pod \u80fd\u591f\u81ea\u52a8\u91cd\u542f\u7684\u673a\u5236\u3002")),(0,l.kt)("h2",{id:"\u4f7f\u7528-chaos-dashboard-\u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 Chaos Dashboard \u65b9\u5f0f\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u6ce8\u610f")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"\u5728\u4f7f\u7528 Chaos Dashboard \u521b\u5efa\u5b9e\u9a8c\u524d\uff1a"),(0,l.kt)("ul",{parentName:"div"},(0,l.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u5df2\u7ecf\u5b89\u88c5\u4e86 Chaos Dashboard\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5982\u679c\u5df2\u5b89\u88c5 Chaos Dashboard\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u8fd0\u884c ",(0,l.kt)("inlineCode",{parentName:"li"},"kubectl port-forward")," \u547d\u4ee4\u7684\u65b9\u5f0f\u8bbf\u95ee Dashboard\uff1a",(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"```bash\nkubectl port-forward -n chaos-testing svc/chaos-dashboard 2333:2333\n```\n")),"\u7136\u540e\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8f93\u5165 ",(0,l.kt)("a",{parentName:"li",href:"http://localhost:2333"},(0,l.kt)("inlineCode",{parentName:"a"},"http://localhost:2333"))," \u8bbf\u95ee Chaos Dashboard\u3002")))),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u5355\u51fb\u5b9e\u9a8c\u9875\u9762\u4e2d\u7684",(0,l.kt)("strong",{parentName:"li"},"\u65b0\u7684\u5b9e\u9a8c"),"\u6309\u94ae\u521b\u5efa\u5b9e\u9a8c\u3002")),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"img",src:n(7713).Z})),(0,l.kt)("ol",{start:2},(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u5728",(0,l.kt)("strong",{parentName:"p"},"\u9009\u62e9\u76ee\u6807"),"\u5904\u9009\u62e9 ",(0,l.kt)("strong",{parentName:"p"},"POD \u6545\u969c"),"\uff0c\u5e76\u9009\u62e9\u5177\u4f53\u884c\u4e3a\uff0c\u4f8b\u5982 ",(0,l.kt)("strong",{parentName:"p"},"POD FAILURE"),"\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u586b\u5199\u5b9e\u9a8c\u4fe1\u606f\uff0c\u6307\u5b9a\u5b9e\u9a8c\u8303\u56f4\u4ee5\u53ca\u5b9e\u9a8c\u8ba1\u5212\u8fd0\u884c\u65f6\u95f4\u3002")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"\u63d0\u4ea4\u5b9e\u9a8c\u3002"))),(0,l.kt)("h2",{id:"\u4f7f\u7528-yaml-\u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"},"\u4f7f\u7528 YAML \u914d\u7f6e\u6587\u4ef6\u521b\u5efa\u5b9e\u9a8c"),(0,l.kt)("h3",{id:"pod-failure-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"pod-failure \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-failure")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u5728 30 \u79d2\u5185\u5904\u4e8e\u4e0d\u53ef\u7528\u7684\u72b6\u6001\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-failure-example\n  namespace: chaos-testing\nspec:\n  action: pod-failure\n  mode: one\n  duration: '30s'\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,l.kt)("h3",{id:"pod-kill-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"pod-kill \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Pod \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"pod-kill")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Pod \u88ab\u6740\u6b7b\u4e00\u6b21\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: pod-kill-example\n  namespace: chaos-testing\nspec:\n  action: pod-kill\n  mode: one\n  selector:\n    namespaces:\n      - tidb-cluster-demo\n    labelSelectors:\n      'app.kubernetes.io/component': 'tikv'\n")),(0,l.kt)("h3",{id:"container-kill-\u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"},"container-kill \u914d\u7f6e\u6587\u4ef6\u793a\u4f8b"),(0,l.kt)("p",null,"\u4f9d\u636e\u6b64\u914d\u7f6e\u793a\u4f8b\uff0cChaos Mesh \u5c06\u5411\u6307\u5b9a\u7684 Container \u4e2d\u6ce8\u5165 ",(0,l.kt)("inlineCode",{parentName:"p"},"container-kill")," \u6545\u969c\uff0c\u5c06\u4f7f\u8be5 Container \u88ab\u6740\u6b7b\u4e00\u6b21\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: chaos-mesh.org/v1alpha1\nkind: PodChaos\nmetadata:\n  name: container-kill-example\n  namespace: chaos-testing\nspec:\n  action: container-kill\n  mode: one\n  containerNames: ['prometheus']\n  selector:\n    labelSelectors:\n      'app.kubernetes.io/component': 'monitor'\n")),(0,l.kt)("h3",{id:"\u5b57\u6bb5\u8bf4\u660e"},"\u5b57\u6bb5\u8bf4\u660e"),(0,l.kt)("p",null,"\u4e0b\u8868\u4ecb\u7ecd\u4ee5\u4e0a YAML \u914d\u7f6e\u6587\u4ef6\u4e2d\u7684\u5b57\u6bb5\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u53c2\u6570"),(0,l.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"),(0,l.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u5fc5\u586b"),(0,l.kt)("th",{parentName:"tr",align:null},"\u793a\u4f8b"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"action"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u8981\u6ce8\u5165\u7684\u6545\u969c\u7c7b\u578b\uff0c\u4ec5\u652f\u6301 ",(0,l.kt)("inlineCode",{parentName:"td"},"pod-failure"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill"),"\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"container-kill")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"mode"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u8fd0\u884c\u65b9\u5f0f\uff0c\u53ef\u9009\u62e9\u7684\u65b9\u5f0f\u5305\u62ec\uff1a",(0,l.kt)("inlineCode",{parentName:"td"},"one"),"\uff08\u8868\u793a\u968f\u673a\u9009\u51fa\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"all"),"\uff08\u8868\u793a\u9009\u51fa\u6240\u6709\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed"),"\uff08\u8868\u793a\u9009\u51fa\u6307\u5b9a\u6570\u91cf\u4e14\u7b26\u5408\u6761\u4ef6\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09\u3001",(0,l.kt)("inlineCode",{parentName:"td"},"random-max-percent"),"\uff08\u8868\u793a\u9009\u51fa\u5360\u7b26\u5408\u6761\u4ef6\u7684 Pod \u4e2d\u4e0d\u8d85\u8fc7\u6307\u5b9a\u767e\u5206\u6bd4\u7684 Pod\uff09"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"one"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u53d6\u51b3\u4e0e ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u7684\u914d\u7f6e\uff0c\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u63d0\u4f9b\u5bf9\u5e94\u7684\u53c2\u6570\u3002\u4f8b\u5982\uff0c\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"mode")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"fixed-percent")," \u65f6\uff0c",(0,l.kt)("inlineCode",{parentName:"td"},"value")," \u7528\u4e8e\u6307\u5b9a Pod \u7684\u767e\u5206\u6bd4\u3002"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"selector"),(0,l.kt)("td",{parentName:"tr",align:null},"struct"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 Pod\uff0c\u8be6\u60c5\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/website-zh/docs/define-chaos-experiment-scope"},"\u5b9a\u4e49\u5b9e\u9a8c\u8303\u56f4")),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"containerNames"),(0,l.kt)("td",{parentName:"tr",align:null},"[]string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"action")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"container-kill")," \u65f6\uff0c\u6b64\u914d\u7f6e\u4e3a\u5fc5\u586b\uff0c\u7528\u4e8e\u6307\u5b9a\u6ce8\u5165\u6545\u969c\u7684\u76ee\u6807 container \u540d"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"['prometheus']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"gracePeriod"),(0,l.kt)("td",{parentName:"tr",align:null},"int64"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5f53\u4f60\u5c06 ",(0,l.kt)("inlineCode",{parentName:"td"},"action")," \u914d\u7f6e\u4e3a ",(0,l.kt)("inlineCode",{parentName:"td"},"pod-kill")," \u65f6\uff0c\u9700\u8981\u586b\u5199\u6b64\u9879\uff0c\u7528\u4e8e\u6307\u5b9a\u5220\u9664 Pod \u4e4b\u524d\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,l.kt)("td",{parentName:"tr",align:null},"0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"duration"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u5b9e\u9a8c\u7684\u6301\u7eed\u65f6\u95f4"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,l.kt)("td",{parentName:"tr",align:null},"30s")))))}s.isMDXComponent=!0},7713:function(e,t,n){"use strict";t.Z=n.p+"assets/images/create-pod-chaos-on-dashborad-1-8061597bd8deaadfedc8abf3a3685266.jpg"}}]);