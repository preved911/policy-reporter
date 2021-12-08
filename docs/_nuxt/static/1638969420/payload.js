__NUXT_JSONP__("/", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W){return {data:[{document:{slug:"index",description:"What is Policy Reporter",title:"Introduction",position:1,toc:[{id:w,depth:p,text:x},{id:y,depth:p,text:z},{id:A,depth:j,text:B},{id:C,depth:j,text:D},{id:E,depth:j,text:F},{id:G,depth:p,text:H},{id:I,depth:j,text:J},{id:K,depth:j,text:L}],body:{type:"root",children:[{type:b,tag:q,props:{id:w},children:[{type:b,tag:d,props:{href:"#motivation",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:x}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Policy Reporter was created to make the results of your Kyverno validation policies more visible and observable. By default, Kyverno provides the option to create your validation policies in "},{type:b,tag:k,props:{},children:[{type:a,value:M}]},{type:a,value:" or "},{type:b,tag:k,props:{},children:[{type:a,value:N}]},{type:a,value:" mode. While "},{type:b,tag:k,props:{},children:[{type:a,value:N}]},{type:a,value:" blocks to applying a manifests that violate the given policy, "},{type:b,tag:k,props:{},children:[{type:a,value:M}]},{type:a,value:" creates "},{type:b,tag:d,props:{href:"https:\u002F\u002Fkyverno.io\u002Fdocs\u002Fpolicy-reports\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"PolicyReports"}]},{type:a,value:" that provide information about all resources that pass or fail your policies. Because Policy Reports are simple Custom Resource Definitions you can access them with "},{type:b,tag:k,props:{},children:[{type:a,value:"kubectl get\u002Fdiscribe"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"The disadvantages of these PolicyReports are that the results of a policy can be spread across multiple namespaces and both, the passed and failed results of multiple policies, are combined into one PolicyReport. This makes it difficult to find all failed results of a single ClusterPolicy. Since a PolicyReport contains all the results of a namespace, it is also difficult to check for new violations by new policies or resources."}]},{type:a,value:c},{type:b,tag:r,props:{},children:[{type:a,value:"Policy Reporter helps with this problems by providing different features based on PolicyReports:"}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"New violations can be send to different clients like Grafana Loki, Elasticsearch, Slack, Discord or MS Teams"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"The optional metrics endpoint can be used to observe violations in monitoring tools like Grafana"}]},{type:a,value:c},{type:b,tag:n,props:{},children:[{type:a,value:"Policy Reporter provides also a standalone "},{type:b,tag:d,props:{href:"https:\u002F\u002Fgithub.com\u002Fkyverno\u002Fpolicy-reporter-ui",rel:[s,t,u],target:v},children:[{type:a,value:"Dashboard"}]},{type:a,value:" to get a graphical overview of all results with filter and an optional Kyverno Plugin to get also information about your Kyverno policies."}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:q,props:{id:y},children:[{type:b,tag:d,props:{href:"#screenshots",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:z}]},{type:a,value:c},{type:b,tag:l,props:{id:A},children:[{type:b,tag:d,props:{href:"#policy-reporter-ui",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:B}]},{type:a,value:c},{type:b,tag:o,props:{src:"\u002Fpolicy-reporter\u002Fimages\u002Fscreenshots\u002Fdashboard-light.png",style:"border: 1px solid #ccc",className:["light-img"],alt:"Dashboard light"},children:[]},{type:a,value:c},{type:b,tag:o,props:{src:"\u002Fpolicy-reporter\u002Fimages\u002Fscreenshots\u002Fdashboard-dark.png",style:m,className:["dark-img"],alt:"Dashboard dark"},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:C},children:[{type:b,tag:d,props:{href:"#grafana",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:D}]},{type:a,value:c},{type:b,tag:o,props:{src:"\u002Fpolicy-reporter\u002Fimages\u002Fscreenshots\u002Fgrafana.png",style:m,alt:"Grafana: Policy Report Details"},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:E},children:[{type:b,tag:d,props:{href:"#discord",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:F}]},{type:a,value:c},{type:b,tag:o,props:{src:"\u002Fpolicy-reporter\u002Fimages\u002Fscreenshots\u002Fdiscord.png",style:m,alt:"Discord: Policy Report Alert"},children:[]},{type:a,value:c},{type:b,tag:q,props:{id:G},children:[{type:b,tag:d,props:{href:"#resources",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:H}]},{type:a,value:c},{type:b,tag:l,props:{id:I},children:[{type:b,tag:d,props:{href:"#videos",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:J}]},{type:a,value:c},{type:b,tag:P,props:{width:Q,height:R,src:"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002F1mKywg9f5Fw",title:S,frameBorder:T,allow:U,allowFullScreen:V,style:m},children:[]},{type:a,value:c},{type:b,tag:"br",props:{},children:[]},{type:a,value:c},{type:b,tag:P,props:{width:Q,height:R,src:"https:\u002F\u002Fwww.youtube-nocookie.com\u002Fembed\u002FZrOtTELNLyg",title:S,frameBorder:T,allow:U,allowFullScreen:V,style:m},children:[]},{type:a,value:c},{type:b,tag:l,props:{id:K},children:[{type:b,tag:d,props:{href:"#blogs",ariaHidden:e,tabIndex:f},children:[{type:b,tag:g,props:{className:[h,i]},children:[]}]},{type:a,value:L}]},{type:a,value:c},{type:b,tag:O,props:{},children:[{type:a,value:c},{type:b,tag:n,props:{},children:[{type:b,tag:d,props:{href:"https:\u002F\u002Fblog.webdev-jogeleit.de\u002Fblog\u002Fmonitor-security-with-kyverno-and-policy-reporter\u002F",rel:[s,t,u],target:v},children:[{type:a,value:"[Blog] Monitor Security and Best Practices with Kyverno and Policy Reporter"}]}]},{type:a,value:c}]}]},dir:"\u002Fen",path:"\u002Fen\u002Findex",extension:".md",createdAt:W,updatedAt:W,to:"\u002F",category:""},prev:null,next:{title:"Getting started",path:"\u002Fen\u002Fguide\u002F02-getting-started",to:"\u002Fguide\u002F02-getting-started"}}],fetch:{},mutations:[]}}("text","element","\n","a","true",-1,"span","icon","icon-link",3,"code","h3","border: 1px solid #555","li","img",2,"h2","p","nofollow","noopener","noreferrer","_blank","motivation","Motivation","screenshots","Screenshots","policy-reporter-ui","Policy Reporter UI","grafana","Grafana","discord","Discord","resources","Resources","videos","Videos","blogs","Blogs","audit","enforce","ul","iframe","100%",315,"YouTube video player","0","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",true,"2021-12-08T13:16:06.166Z")));