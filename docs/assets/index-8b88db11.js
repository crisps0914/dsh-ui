import{t as p,a as r}from"./tw-merge-fe695a60.js";import{R as i}from"./index-ebeaab24.js";import{c as o}from"./clsx.m-1229b3e0.js";import{i as G}from"./utils-50b96f3f.js";const f=i.forwardRef(({children:a,className:l,...s},t)=>{const e=p("avatar-group -space-x-6",l);return r("div",{"aria-label":`Group of ${a.length} avatar photos`,...s,className:e,ref:t,children:a})}),I=f;try{f.displayName="AvatarGroup",f.__docgenInfo={description:"",displayName:"AvatarGroup",props:{}}}catch{}const g=i.forwardRef(({size:a="md",src:l,letters:s,shape:t,color:e,border:v,borderColor:n,online:q,offline:w,dataTheme:_,className:V,innerClassName:y,children:u,...x},b)=>{const N=p("avatar",V,o({online:q,offline:w,placeholder:!l})),d=o(y,{"ring ring-offset-base-100 ring-offset-2":v,"ring-accent":n==="accent","ring-error":n==="error","ring-info":n==="info","ring-neutral":n==="neutral","ring-primary":n==="primary","ring-secondary":n==="secondary","ring-success":n==="success","ring-warning":n==="warning","rounded-btn":t==="square","rounded-full":t==="circle","w-32 h-32":a==="lg","w-24 h-24":a==="md","w-14 h-14":a==="sm","w-10 h-10":a==="xs"}),A=o(y,{"bg-neutral-focus":!e,"text-neutral-content":!e||e==="neutral","bg-accent":e==="accent","bg-error":e==="error","bg-info":e==="info","bg-neutral":e==="neutral","bg-primary":e==="primary","bg-secondary":e==="secondary","bg-success":e==="success","bg-warning":e==="warning","text-accent-content":e==="accent","text-error-content":e==="error","text-info-content":e==="info","text-primary-content":e==="primary","text-secondary-content":e==="secondary","text-success-content":e==="success","text-warning-content":e==="warning","ring ring-offset-base-100 ring-offset-2":v,"ring-accent":n==="accent","ring-error":n==="error","ring-info":n==="info","ring-neutral":n==="neutral","ring-primary":n==="primary","ring-secondary":n==="secondary","ring-success":n==="success","ring-warning":n==="warning","rounded-btn":t==="square","rounded-full":t==="circle","w-32 h-32 text-3xl":a==="lg","w-24 h-24 text-xl":a==="md","w-14 h-14":a==="sm","w-10 h-10":a==="xs"}),c=typeof a=="number"?{width:a,height:a}:{};return r("div",{"aria-label":"Avatar photo",...x,"data-theme":_,className:N,ref:b,children:(()=>{if(l)return r("div",{className:d,style:c,children:r("img",{src:l})});if(s||G(u))return r("div",{className:A,style:c,children:r("span",{children:s||u})});if(i.Children.count(u)===1){const m=i.Children.only(u);return i.cloneElement(m,{className:p(d,m.props.className),style:{...c,...m.props.style}})}else return r("div",{className:d,style:c,children:u})})()})}),h=Object.assign(g,{Group:I});try{g.displayName="Avatar",g.__docgenInfo={description:"",displayName:"Avatar",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'number | "lg" | "md" | "sm" | "xs"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},offline:{defaultValue:null,description:"",name:"offline",required:!1,type:{name:"boolean"}},innerClassName:{defaultValue:null,description:"",name:"innerClassName",required:!1,type:{name:"string"}}}}}catch{}try{h.displayName="Avatar",h.__docgenInfo={description:"",displayName:"Avatar",props:{dataTheme:{defaultValue:null,description:"",name:"dataTheme",required:!1,type:{name:"string"}},src:{defaultValue:null,description:"",name:"src",required:!1,type:{name:"string"}},letters:{defaultValue:null,description:"",name:"letters",required:!1,type:{name:"string"}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:'number | "lg" | "md" | "sm" | "xs"'}},shape:{defaultValue:null,description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},border:{defaultValue:null,description:"",name:"border",required:!1,type:{name:"boolean"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"accent"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},online:{defaultValue:null,description:"",name:"online",required:!1,type:{name:"boolean"}},offline:{defaultValue:null,description:"",name:"offline",required:!1,type:{name:"boolean"}},innerClassName:{defaultValue:null,description:"",name:"innerClassName",required:!1,type:{name:"string"}}}}}catch{}export{h as A};
//# sourceMappingURL=index-8b88db11.js.map