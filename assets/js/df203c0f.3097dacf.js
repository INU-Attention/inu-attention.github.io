"use strict";(self.webpackChunkinu_attention=self.webpackChunkinu_attention||[]).push([[924],{491:(e,t,l)=>{l.r(t),l.d(t,{default:()=>d});var a=l(7294),n=l(6010),r=l(9960),s=l(8824),c=l(1944),o=l(5281),i=l(5999),u=l(7961),g=l(197);function m(e){let{doc:t}=e;return a.createElement("article",{className:"margin-vert--lg"},a.createElement(r.Z,{to:t.permalink},a.createElement("h2",null,t.title)),t.description&&a.createElement("p",null,t.description))}function d(e){let{tag:t}=e;const l=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,i.I)({id:"theme.docs.tagDocListPageTitle.nDocsTagged",description:'Pluralized label for "{count} docs tagged". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One doc tagged|{count} docs tagged"},{count:t}))}(),d=(0,i.I)({id:"theme.docs.tagDocListPageTitle",description:"The title of the page for a docs tag",message:'{nDocsTagged} with "{tagName}"'},{nDocsTagged:l(t.count),tagName:t.label});return a.createElement(c.FG,{className:(0,n.Z)(o.k.wrapper.docsPages,o.k.page.docsTagDocListPage)},a.createElement(c.d,{title:d}),a.createElement(g.Z,{tag:"doc_tag_doc_list"}),a.createElement(u.Z,null,a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("main",{className:"col col--8 col--offset-2"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,d),a.createElement(r.Z,{href:t.allTagsPath},a.createElement(i.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.createElement("section",{className:"margin-vert--lg"},t.items.map((e=>a.createElement(m,{key:e.id,doc:e})))))))))}},8824:(e,t,l)=>{l.d(t,{c:()=>i});var a=l(7294),n=l(2263);const r=["zero","one","two","few","many","other"];function s(e){return r.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function i(){const e=o();return{selectMessage:(t,l)=>function(e,t,l){const a=e.split("|");if(1===a.length)return a[0];a.length>l.pluralForms.length&&console.error(`For locale=${l.locale}, a maximum of ${l.pluralForms.length} plural forms are expected (${l.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=l.select(t),r=l.pluralForms.indexOf(n);return a[Math.min(r,a.length-1)]}(l,t,e)}}}}]);