"use strict";exports.id=606,exports.ids=[606],exports.modules={6606:(e,s,l)=>{l.a(e,async(e,r)=>{try{l.d(s,{U:()=>g});var t=l(997),a=l(1664),i=l.n(a),n=l(6689),x=l(1635),d=l.n(x),o=l(4620),p=l(2080),c=l(6838),h=l(1699),m=l(3902),j=l(6826),u=e([p,c,m,j]);[p,c,m,j]=u.then?(await u)():u;let g=()=>{let e=(0,c.w)(e=>e.loggedIn),s=(0,c.w)(e=>e.lingots),l=(0,c.w)(e=>e.streak),r=(0,c.w)(e=>e.language),a=(0,c.w)(e=>e.lessonsCompleted),[x,j]=(0,n.useState)(!1),[u,g]=(0,n.useState)(!1),[b,y]=(0,n.useState)(d()()),[N,v]=(0,n.useState)(!1),[F,U]=(0,n.useState)("HIDDEN");return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("aside",{className:"sticky top-0 hidden w-96 flex-col gap-6 self-start sm:flex",children:[(0,t.jsxs)("article",{className:"my-6 flex justify-between gap-4",children:[(0,t.jsxs)("div",{className:"relative flex cursor-default items-center gap-2 rounded-xl p-3 font-bold uppercase text-gray-500 hover:bg-gray-100",onMouseEnter:()=>j(!0),onMouseLeave:()=>j(!1),onClick:()=>j(e=>!e),role:"button",tabIndex:0,children:[t.jsx(h.W,{language:r,width:45}),t.jsx("div",{children:r.name}),(0,t.jsxs)("div",{className:"absolute top-full z-10 rounded-2xl border-2 border-gray-300 bg-white",style:{left:"calc(50% - 150px)",width:300,display:x?"block":"none"},children:[t.jsx("h2",{className:"px-5 py-3 font-bold uppercase text-gray-400",children:"My courses"}),(0,t.jsxs)("button",{className:"flex w-full items-center gap-3 border-t-2 border-gray-300 bg-blue-100 px-5 py-3 text-left font-bold",children:[t.jsx(h.W,{language:r,width:45}),t.jsx("span",{className:"text-blue-500",children:r.name})]}),(0,t.jsxs)(i(),{className:"flex w-full items-center gap-3 rounded-b-2xl border-t-2 border-gray-300 px-5 py-3 text-left font-bold hover:bg-gray-100",href:"/register",children:[t.jsx("span",{className:"flex items-center justify-center rounded-lg border-2 border-gray-400 px-2 text-lg font-bold text-gray-400",children:"+"}),t.jsx("span",{className:"text-gray-600",children:"Add new course"})]})]})]}),(0,t.jsxs)("span",{className:"relative flex items-center gap-2 rounded-xl p-3 font-bold text-orange-500 hover:bg-gray-100",onMouseEnter:()=>g(!0),onMouseLeave:()=>{g(!1),y(d()())},onClick:e=>{e.target===e.currentTarget&&(g(e=>!e),y(d()()))},role:"button",tabIndex:0,children:[t.jsx("div",{className:"pointer-events-none",children:l>0?t.jsx(o.Zr,{}):t.jsx(o.V3,{})}),t.jsx("span",{className:l>0?"text-orange-500":"text-gray-300",children:l}),(0,t.jsxs)("div",{className:"absolute top-full z-10 flex flex-col gap-5 rounded-2xl border-2 border-gray-300 bg-white p-5 text-black",style:{left:"calc(50% - 200px)",width:400,display:u?"flex":"none"},children:[t.jsx("h2",{className:"text-center text-lg font-bold",children:"Streak"}),t.jsx("p",{className:"text-center text-sm font-normal text-gray-400",children:"But your streak will reset tomorrow if you don't practice tomorrow. Watch out!"}),t.jsx(p.f,{now:b,setNow:y})]})]}),(0,t.jsxs)("span",{className:"relative flex items-center gap-2 rounded-xl p-3 font-bold text-red-500 hover:bg-gray-100",onMouseEnter:()=>v(!0),onMouseLeave:()=>v(!1),onClick:()=>v(e=>!e),role:"button",tabIndex:0,children:[s>0?t.jsx(o.LW,{}):t.jsx(o.xV,{}),t.jsx("span",{className:s>0?"text-red-500":"text-gray-300",children:s}),(0,t.jsxs)("div",{className:"absolute top-full z-10 flex w-72 items-center gap-3 rounded-2xl border-2 border-gray-300 bg-white p-5",style:{left:"calc(50% - 150px)",display:N?"flex":"none"},children:[t.jsx(o.i8,{className:"w-24"}),(0,t.jsxs)("div",{className:"flex flex-col gap-3",children:[t.jsx("h2",{className:"text-xl font-bold text-black",children:"Lingots"}),(0,t.jsxs)("p",{className:"text-sm font-normal text-gray-400",children:["You have ",s," ",1===s?"lingot":"lingots","."]}),t.jsx(i(),{className:"uppercase text-blue-400 transition hover:brightness-110",href:"/shop",children:"Go to shop"})]})]})]})]}),e&&a<10?t.jsx(f,{}):e&&a>=10?t.jsx(C,{}):null,t.jsx(k,{}),t.jsx(w,{}),!e&&t.jsx(L,{setLoginScreenState:U})]}),t.jsx(m.cf,{loginScreenState:F,setLoginScreenState:U})]})},f=()=>{let e=(0,c.w)(e=>e.lessonsCompleted);if(e>=10)return null;let s=10-e;return(0,t.jsxs)("article",{className:"flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 text-gray-700",children:[t.jsx("h2",{className:"text-xl font-bold",children:"Unlock Leaderboards!"}),(0,t.jsxs)("div",{className:"flex items-center gap-6",children:[t.jsx(b,{}),(0,t.jsxs)("p",{className:"text-sm leading-6 text-gray-500",children:["Complete ",s," more lesson",1===s?"":"s"," to start competing"]})]})]})},C=()=>{let e=(0,c.w)(e=>e.xpThisWeek()),s=(0,j.T)();return(0,t.jsxs)("article",{className:"flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 text-gray-700",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[t.jsx("h2",{className:"text-xl font-bold",children:"Bronze League"}),t.jsx(i(),{href:"/leaderboard",className:"font-bold uppercase text-blue-400",children:"View league"})]}),(0,t.jsxs)("div",{className:"flex gap-6",children:[t.jsx(o.JK,{}),(0,t.jsxs)("div",{className:"flex flex-col gap-5",children:[null!==s&&t.jsx("p",{className:"text-lg font-bold text-gray-700",children:`You're ranked #${s}`}),(0,t.jsxs)("p",{className:"text-sm leading-6 text-gray-500",children:["You earned ",e," XP this week so far"]})]})]})]})},k=()=>{let e=(0,c.w)(e=>e.xpToday()),s=(0,c.w)(e=>e.goalXp);return(0,t.jsxs)("article",{className:"flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700",children:[t.jsx("h2",{className:"text-xl",children:"Daily Quests"}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[t.jsx(o.HW,{}),(0,t.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,t.jsxs)("h3",{children:["Earn ",s," XP"]}),(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsxs)("div",{className:"relative h-5 w-52 rounded-l-full bg-gray-200",children:[t.jsx("div",{className:["relative h-full rounded-l-full bg-yellow-400",0===e?"":"px-2"].join(" "),style:{width:`${100*Math.min(1,e/s)}%`},children:t.jsx("div",{className:"absolute left-2 right-0 top-1 h-2 rounded-l-full bg-yellow-300"})}),(0,t.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 top-0 flex items-center justify-center text-sm text-gray-400",children:[e," / ",s]})]}),t.jsx(o.Bg,{})]})]})]})]})},b=()=>(0,t.jsxs)("svg",{width:"40",height:"46",viewBox:"0 0 40 46",fill:"none",children:[t.jsx("path",{d:"M6.82875 3.41476L33.1701 3.41476C36.9418 3.41476 39.9993 6.47231 39.9993 10.244V26.3415C39.9993 36.8483 31.4819 45.3658 20.975 45.3658H19.0238C8.51698 45.3658 -0.000488281 36.8483 -0.000488281 26.3415L-0.000488281 10.244C-0.000488281 6.47231 3.05707 3.41476 6.82875 3.41476Z",fill:"#AAC1D4"}),t.jsx("path",{d:"M23.544 3.41476L33.1698 3.41476C36.9415 3.41476 39.9991 6.47231 39.9991 10.244V14.554L10.9707 43.5824C4.66224 40.6308 0.240328 34.3187 0.00878906 26.95L23.544 3.41476Z",fill:"#C2D1DD"}),t.jsx("path",{d:"M6.82875 -1.52588e-05L33.1701 -1.52588e-05C36.9418 -1.52588e-05 39.9993 3.05754 39.9993 6.82922V23.9023C39.9993 33.8703 31.9187 41.951 21.9506 41.951H18.0482C8.08019 41.951 -0.000488281 33.8703 -0.000488281 23.9023L-0.000488281 6.82922C-0.000488281 3.05754 3.05707 -1.52588e-05 6.82875 -1.52588e-05Z",fill:"#C2D1DD"}),t.jsx("path",{d:"M6.82875 4.39021C5.48172 4.39021 4.38974 5.48219 4.38974 6.82922L4.38974 23.9023C4.38974 31.4457 10.5048 37.5608 18.0482 37.5608H21.9506C29.494 37.5608 35.6091 31.4457 35.6091 23.9023V6.82922C35.6091 5.48219 34.5171 4.39021 33.1701 4.39021L6.82875 4.39021ZM6.82875 -1.52588e-05L33.1701 -1.52588e-05C36.9418 -1.52588e-05 39.9993 3.05754 39.9993 6.82922V23.9023C39.9993 33.8703 31.9187 41.951 21.9506 41.951H18.0482C8.08019 41.951 -0.000488281 33.8703 -0.000488281 23.9023L-0.000488281 6.82922C-0.000488281 3.05754 3.05707 -1.52588e-05 6.82875 -1.52588e-05Z",fill:"#D6E4EF"}),t.jsx("path",{d:"M26.9597 -1.52588e-05L33.1709 -1.52588e-05C36.9426 -1.52588e-05 40.0002 3.05754 40.0002 6.82922V14.5539L13.2484 41.3056C6.49782 39.4476 1.33102 33.7672 0.221802 26.7379L26.9597 -1.52588e-05Z",fill:"#D1DCE5"}),t.jsx("path",{d:"M4.39056 22.5692V23.9023C4.39056 31.1031 9.96287 37.0024 17.0306 37.5234L13.2484 41.3056C6.49782 39.4476 1.33102 33.7672 0.221802 26.7379L4.39056 22.5692ZM35.6099 18.9441V6.82922C35.6099 5.48219 34.518 4.39021 33.1709 4.39021L22.5695 4.39021L26.9597 -1.52588e-05L33.1709 -1.52588e-05C36.9426 -1.52588e-05 40.0002 3.05754 40.0002 6.82922V14.5539L35.6099 18.9441Z",fill:"#E0EAF3"}),t.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.0277 22.1682C15.8255 21.312 15.0474 19.9455 15.0474 18.4059C15.0474 15.813 17.2544 13.7111 19.9769 13.7111C22.6994 13.7111 24.9064 15.813 24.9064 18.4059C24.9064 19.9765 24.0966 21.3669 22.853 22.2192L24.1155 25.5237C24.4553 26.4131 23.9457 27.3871 22.9772 27.6992C22.7794 27.7629 22.5714 27.7954 22.3619 27.7954H17.4994C16.473 27.7954 15.6409 27.0313 15.6409 26.0887C15.6409 25.8963 15.6764 25.7053 15.7458 25.5237L17.0277 22.1682Z",fill:"#8097AA"})]}),y=e=>(0,t.jsxs)("svg",{width:"76px",height:"76px",viewBox:"0 0 76 76",...e,children:[(0,t.jsxs)("defs",{children:[t.jsx("path",{d:"M3.86139252,0 L68.6938776,0 C70.8264639,0 72.555269,1.71104633 72.555269,3.82172455 L72.555269,37.605593 C72.555269,39.7162712 70.8264639,41.4273175 68.6938776,41.4273175 L3.86139252,41.4273175 C1.72880408,41.4273175 0,39.7162712 0,37.605593 L0,3.82172455 C0,1.71104633 1.72880408,0 3.86139252,0 Z",id:"path-1"}),t.jsx("polygon",{id:"path-3",points:"0 0 52.7674684 0 52.7674684 2.18038513 0 2.18038513"}),t.jsx("polygon",{id:"path-5",points:"0 0 52.7674684 0 52.7674684 2.18038513 0 2.18038513"}),t.jsx("path",{d:"M73.262529,75.2232871 L2.59070681,75.2232871 C1.15989931,75.2232871 0,74.0730206 0,72.6540957 L0,2.56919141 C0,1.15026218 1.15989931,0 2.59070681,0 L12.7998048,0 C14.2306167,0 15.3905116,1.15026218 15.3905116,2.56919141 L15.3905116,35.9763547 L60.4627242,35.9763547 L60.4627242,2.56919141 C60.4627242,1.15026218 61.6226191,0 63.053431,0 L73.262529,0 C74.6933409,0 75.8532358,1.15026218 75.8532358,2.56919141 L75.8532358,72.6540957 C75.8532358,74.0730206 74.6933409,75.2232871 73.262529,75.2232871 Z",id:"path-7"}),t.jsx("polygon",{id:"path-9",points:"0 0 45.0722126 0 45.0722126 17.4430811 0 17.4430811"}),t.jsx("polygon",{id:"path-11",points:"0.0272741852 0.350693145 46.8210364 0.350693145 46.8210364 2.91988456 0.0272741852 2.91988456"}),t.jsx("polygon",{id:"path-13",points:"0 46.28539 0 15.2626959 15.3905116 0 15.3905116 29.4351993 16.9913007 29.4351993"}),t.jsx("path",{d:"M73.7539135,0 L73.7539135,44.0674805 L55.1790391,62.4880958 L55.1782476,62.4873152 L52.2295245,65.411554 L0.491384548,65.411554 C0.326577453,65.411554 0.165365142,65.3962929 0.00910637696,65.3671181 L13.2911894,52.1953457 L13.2911894,57.780206 L58.3634019,57.780206 L58.3634019,40.337125 L29.3189671,40.337125 L37.9821432,31.7458951 L39.8621491,33.6102989 L47.3701794,26.1646216 L58.3634019,26.1646216 L58.3634019,15.2626959 L73.7539135,0 Z",id:"path-15"}),t.jsx("path",{d:"M2.59070681,0 L18.2964161,0 C19.727228,0 20.8871229,1.15026218 20.8871229,2.56919141 L20.8871229,22.5052376 C20.8871229,23.9241669 19.727228,25.074429 18.2964161,25.074429 L2.59070681,25.074429 C1.15989491,25.074429 0,23.9241669 0,22.5052376 L0,2.56919141 C0,1.15026218 1.15989491,0 2.59070681,0 Z",id:"path-17"}),t.jsx("path",{d:"M4.94695016,10.175127 C2.21482654,10.175127 0,7.89735495 0,5.08756894 C0,2.27778294 2.21482654,0 4.94695016,0 C7.67907378,0 9.89390032,2.27778294 9.89390032,5.08756894 C9.89390032,7.89735495 7.67907378,10.175127 4.94695016,10.175127 Z",id:"path-19"}),t.jsx("path",{d:"M7.43585973,2.64571203 L9.10020065,7.34990385 C9.44121041,8.313754 8.92976172,9.36925664 7.95783992,9.70743438 C7.75942325,9.77646537 7.55066195,9.8117331 7.34038359,9.8117331 L2.46067897,9.8117331 C1.43066898,9.8117331 0.595678759,8.98367734 0.595678759,7.96223231 C0.595678759,7.75370028 0.631241834,7.54667271 0.700861912,7.34990385 L2.36520283,2.64571203 C2.85647896,1.25711195 4.38985761,0.526388579 5.79007537,1.01359564 C6.56015061,1.28153226 7.1656793,1.88203213 7.43585973,2.64571203 Z",id:"path-21"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615308,5.45096283 2.74830565,5.45096283 Z",id:"path-23"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.23072338 0,2.72548142 C0,1.22023946 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22023946 5.49661129,2.72548142 C5.49661129,4.23072338 4.26615308,5.45096283 2.74830565,5.45096283 Z",id:"path-25"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.23072338 0,2.72548142 C0,1.22023946 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22023946 5.49661129,2.72548142 C5.49661129,4.23072338 4.26615088,5.45096283 2.74830565,5.45096283 Z",id:"path-27"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615088,5.45096283 2.74830565,5.45096283 Z",id:"path-29"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23045821,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23045821,0 2.74830565,0 C4.26615308,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615308,5.45096283 2.74830565,5.45096283 Z",id:"path-31"}),t.jsx("path",{d:"M2.74830565,5.45096283 C1.23046041,5.45096283 0,4.2307212 0,2.72548142 C0,1.22024164 1.23046041,0 2.74830565,0 C4.26615088,0 5.49661129,1.22024164 5.49661129,2.72548142 C5.49661129,4.2307212 4.26615088,5.45096283 2.74830565,5.45096283 Z",id:"path-33"})]}),t.jsx("g",{id:"PANEL-CHEST",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,t.jsxs)("g",{id:"Group-52-Copy",transform:"translate(38.500000, 38.000000) rotate(-360.000000) translate(-38.500000, -38.000000)",children:[(0,t.jsxs)("g",{id:"Group-3",transform:"translate(1.099322, 4.360770)",children:[t.jsx("mask",{id:"mask-2",fill:"white",children:t.jsx("use",{xlinkHref:"#path-1"})}),t.jsx("g",{id:"Clip-2"}),t.jsx("polygon",{id:"Fill-1",fill:"#AA572A",mask:"url(#mask-2)",points:"-5.49661129 46.8782804 78.0518803 46.8782804 78.0518803 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-6",transform:"translate(10.993223, 9.811733)",children:[t.jsx("mask",{id:"mask-4",fill:"white",children:t.jsx("use",{xlinkHref:"#path-3"})}),t.jsx("g",{id:"Clip-5"}),t.jsx("polygon",{id:"Fill-4",fill:"#904821",mask:"url(#mask-4)",points:"-5.49661129 7.63134797 58.2640797 7.63134797 58.2640797 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-9",transform:"translate(10.993223, 25.074429)",children:[t.jsx("mask",{id:"mask-6",fill:"white",children:t.jsx("use",{xlinkHref:"#path-5"})}),t.jsx("g",{id:"Clip-8"}),t.jsx("polygon",{id:"Fill-7",fill:"#904821",mask:"url(#mask-6)",points:"-5.49661129 7.63134797 58.2640797 7.63134797 58.2640797 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-12",children:[t.jsx("mask",{id:"mask-8",fill:"white",children:t.jsx("use",{xlinkHref:"#path-7"})}),t.jsx("g",{id:"Clip-11"}),t.jsx("polygon",{id:"Fill-10",fill:"#FFBC00",mask:"url(#mask-8)",points:"-5.49661129 80.6742499 81.3498471 80.6742499 81.3498471 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-15",transform:"translate(15.390512, 50.148858)",children:[t.jsx("mask",{id:"mask-10",fill:"white",children:t.jsx("use",{xlinkHref:"#path-9"})}),t.jsx("g",{id:"Clip-14"}),t.jsx("polygon",{id:"Fill-13",fill:"#AA572A",mask:"url(#mask-10)",points:"-5.49661129 22.8940439 50.5688239 22.8940439 50.5688239 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-18",transform:"translate(15.390512, 59.960591)",children:[t.jsx("mask",{id:"mask-12",fill:"white",children:t.jsx("use",{xlinkHref:"#path-11"})}),t.jsx("g",{id:"Clip-17"}),t.jsx("polygon",{id:"Fill-16",fill:"#904821",mask:"url(#mask-12)",points:"-5.4693426 8.37084739 52.3176422 8.37084739 52.3176422 -5.10026969 -5.4693426 -5.10026969"})]}),(0,t.jsxs)("g",{id:"Group-21",transform:"translate(0.000000, 6.541155)",children:[t.jsx("mask",{id:"mask-14",fill:"white",children:t.jsx("use",{xlinkHref:"#path-13"})}),t.jsx("g",{id:"Clip-20"}),t.jsx("polygon",{id:"Fill-19",fill:"#FFD300",mask:"url(#mask-14)",points:"-5.49661129 51.7363529 22.487912 51.7363529 22.487912 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-24",transform:"translate(2.099322, 9.811733)",children:[t.jsx("mask",{id:"mask-16",fill:"white",children:t.jsx("use",{xlinkHref:"#path-15"})}),t.jsx("g",{id:"Clip-23"}),t.jsx("polygon",{id:"Fill-22",fill:"#FFD300",mask:"url(#mask-16)",points:"-5.48750491 70.8625168 79.2505303 70.8625168 79.2505303 -5.45096283 -5.48750491 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-27",transform:"translate(27.483056, 31.615584)",children:[t.jsx("mask",{id:"mask-18",fill:"white",children:t.jsx("use",{xlinkHref:"#path-17"})}),t.jsx("g",{id:"Clip-26"}),t.jsx("polygon",{id:"Fill-25",fill:"#FFBC00",mask:"url(#mask-18)",points:"-5.49661129 30.5253919 26.3837342 30.5253919 26.3837342 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-30",transform:"translate(32.979668, 35.976355)",children:[t.jsx("mask",{id:"mask-20",fill:"white",children:t.jsx("use",{xlinkHref:"#path-19"})}),t.jsx("g",{id:"Clip-29"}),t.jsx("polygon",{id:"Fill-28",fill:"#DB8500",mask:"url(#mask-20)",points:"-5.49661129 15.6260898 15.3905116 15.6260898 15.3905116 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-33",transform:"translate(32.979668, 41.427318)",children:[t.jsx("mask",{id:"mask-22",fill:"white",children:t.jsx("use",{xlinkHref:"#path-21"})}),t.jsx("g",{id:"Clip-32"}),t.jsx("polygon",{id:"Fill-31",fill:"#DB8500",mask:"url(#mask-22)",points:"-4.90093253 15.2626959 14.7025008 15.2626959 14.7025008 -4.58836977 -4.90093253 -4.58836977"})]}),(0,t.jsxs)("g",{id:"Group-36",transform:"translate(4.397289, 39.246932)",children:[t.jsx("mask",{id:"mask-24",fill:"white",children:t.jsx("use",{xlinkHref:"#path-23"})}),t.jsx("g",{id:"Clip-35"}),t.jsx("polygon",{id:"Fill-34",fill:"#F8A201",mask:"url(#mask-24)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-39",transform:"translate(4.397289, 64.321361)",children:[t.jsx("mask",{id:"mask-26",fill:"white",children:t.jsx("use",{xlinkHref:"#path-25"})}),t.jsx("g",{id:"Clip-38"}),t.jsx("polygon",{id:"Fill-37",fill:"#F8A201",mask:"url(#mask-26)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-42",transform:"translate(65.959335, 64.321361)",children:[t.jsx("mask",{id:"mask-28",fill:"white",children:t.jsx("use",{xlinkHref:"#path-27"})}),t.jsx("g",{id:"Clip-41"}),t.jsx("polygon",{id:"Fill-40",fill:"#F8A201",mask:"url(#mask-28)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-45",transform:"translate(65.959335, 39.246932)",children:[t.jsx("mask",{id:"mask-30",fill:"white",children:t.jsx("use",{xlinkHref:"#path-29"})}),t.jsx("g",{id:"Clip-44"}),t.jsx("polygon",{id:"Fill-43",fill:"#F8A201",mask:"url(#mask-30)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-48",transform:"translate(4.397289, 16.352888)",children:[t.jsx("mask",{id:"mask-32",fill:"white",children:t.jsx("use",{xlinkHref:"#path-31"})}),t.jsx("g",{id:"Clip-47"}),t.jsx("polygon",{id:"Fill-46",fill:"#F8A201",mask:"url(#mask-32)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]}),(0,t.jsxs)("g",{id:"Group-51",transform:"translate(65.959335, 16.352888)",children:[t.jsx("mask",{id:"mask-34",fill:"white",children:t.jsx("use",{xlinkHref:"#path-33"})}),t.jsx("g",{id:"Clip-50"}),t.jsx("polygon",{id:"Fill-49",fill:"#F8A201",mask:"url(#mask-34)",points:"-5.49661129 10.9019257 10.9932226 10.9019257 10.9932226 -5.45096283 -5.49661129 -5.45096283"})]})]})})]}),w=()=>{let e=(0,c.w)(e=>e.xpToday()),s=(0,c.w)(e=>e.goalXp);return(0,t.jsxs)("article",{className:"flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold text-gray-700",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[t.jsx("h2",{className:"text-xl",children:"XP Progress"}),t.jsx(i(),{href:"/settings/coach",className:"uppercase text-blue-400",children:"Edit goal"})]}),(0,t.jsxs)("div",{className:"flex gap-5",children:[t.jsx(y,{}),(0,t.jsxs)("div",{className:"flex grow flex-col justify-around",children:[t.jsx("h3",{className:"font-normal text-gray-500",children:"Daily goal"}),(0,t.jsxs)("div",{className:"flex items-center gap-5",children:[t.jsx("div",{className:"relative h-4 w-full grow rounded-full bg-gray-200",children:e>0&&t.jsx("div",{className:"absolute left-0 top-0 h-4 rounded-full bg-yellow-400",style:{width:`${100*Math.min(1,e/s)}%`},children:t.jsx("div",{className:"absolute left-2 right-2 top-1 h-[6px] rounded-full bg-yellow-300"})})}),(0,t.jsxs)("div",{className:"text-md shrink-0 font-normal text-gray-400",children:[e,"/",s," XP"]})]})]})]})]})},L=({setLoginScreenState:e})=>(0,t.jsxs)("article",{className:"flex flex-col gap-5 rounded-2xl border-2 border-gray-200 p-6 font-bold",children:[t.jsx("h2",{className:"text-xl",children:"Create a profile to save your progress!"}),t.jsx("button",{className:"rounded-2xl border-b-4 border-green-600 bg-green-500 py-3 uppercase text-white transition hover:border-green-500 hover:bg-green-400",onClick:()=>e("SIGNUP"),children:"Create a profile"}),t.jsx("button",{className:"rounded-2xl border-b-4 border-blue-500 bg-blue-400 py-3 uppercase text-white transition hover:border-blue-400 hover:bg-blue-300",onClick:()=>e("LOGIN"),children:"Sign in"})]});r()}catch(e){r(e)}})},6826:(e,s,l)=>{l.a(e,async(e,r)=>{try{l.d(s,{T:()=>x,X:()=>n});var t=l(6625),a=l(6838),i=e([a]);a=(i.then?(await i)():i)[0];let n=()=>{let e=(0,a.w)(e=>e.xpThisWeek()),s=(0,a.w)(e=>e.name);return[...t.W,{name:s,xp:e,isCurrentUser:!0}].sort((e,s)=>s.xp-e.xp)},x=()=>{let e=n().findIndex(e=>e.isCurrentUser);return -1===e?null:e+1};r()}catch(e){r(e)}})},6625:(e,s,l)=>{l.d(s,{W:()=>r});let r=[{name:"Aaron",xp:424,isCurrentUser:!1},{name:"Bobby",xp:378,isCurrentUser:!1},{name:"Cathy",xp:249,isCurrentUser:!1},{name:"Derek",xp:216,isCurrentUser:!1},{name:"Ellen",xp:211,isCurrentUser:!1},{name:"Freddy",xp:177,isCurrentUser:!1},{name:"George",xp:152,isCurrentUser:!1},{name:"Helen",xp:87,isCurrentUser:!1},{name:"Isaac",xp:82,isCurrentUser:!1},{name:"Jacob",xp:77,isCurrentUser:!1},{name:"Kevin",xp:72,isCurrentUser:!1},{name:"Luke",xp:71,isCurrentUser:!1},{name:"Mark",xp:65,isCurrentUser:!1},{name:"Norm",xp:62,isCurrentUser:!1},{name:"Olivia",xp:59,isCurrentUser:!1},{name:"Perry",xp:52,isCurrentUser:!1},{name:"Quentin",xp:51,isCurrentUser:!1},{name:"Ryan",xp:45,isCurrentUser:!1},{name:"Steve",xp:40,isCurrentUser:!1},{name:"Theo",xp:30,isCurrentUser:!1},{name:"Uma",xp:20,isCurrentUser:!1},{name:"Vincent",xp:10,isCurrentUser:!1},{name:"Will",xp:10,isCurrentUser:!1},{name:"Xavier",xp:10,isCurrentUser:!1},{name:"Yan",xp:10,isCurrentUser:!1},{name:"Zachary",xp:10,isCurrentUser:!1},{name:"Arnold",xp:10,isCurrentUser:!1},{name:"Bruno",xp:10,isCurrentUser:!1},{name:"Carl",xp:10,isCurrentUser:!1}]}};