"use strict";(self.webpackChunkinu_attention=self.webpackChunkinu_attention||[]).push([[13],{1223:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});var l=a(7294),n=a(6010),r=a(5999);const s=()=>(0,r.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});var c=a(1944),i=a(5281),o=a(9058),g=a(3008);const m={tag:"tag_Nnez"};function u(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:m.tag},l.createElement(g.Z,e))))),l.createElement("hr",null))}function p(e){let{tags:t}=e;const a=function(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(u,{key:e.letter,letterEntry:e}))))}var E=a(197);function b(e){let{tags:t,sidebar:a}=e;const r=s();return l.createElement(c.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogTagsListPage)},l.createElement(c.d,{title:r}),l.createElement(E.Z,{tag:"blog_tags_list"}),l.createElement(o.Z,{sidebar:a},l.createElement("h1",null,r),l.createElement(p,{tags:t})))}}}]);