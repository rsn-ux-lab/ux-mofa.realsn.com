$((function(){{const a=document.querySelector("[data-section=전체토픽현황] [data-card=주요현황요약]");a.classList.add("l-card--is-active"),new MutationObserver((()=>{a.classList.remove("l-card--is-active"),setTimeout((()=>a.classList.add("l-card--is-active")),100)})).observe(a,{childList:!0,subtree:!0})}{const a=document.querySelector("[data-section=전체토픽현황] [data-card=이슈키워드]");a.classList.add("l-card--is-active"),new MutationObserver((()=>{a.classList.remove("l-card--is-active"),setTimeout((()=>a.classList.add("l-card--is-active")),100)})).observe(a,{childList:!0,subtree:!0})}{const a=document.querySelector("[data-section=토픽상세현황] [data-card=정보량점유율] .js-chart");AmCharts.makeChart(a,{type:"pie",path:"//public.realsn.com/libs/amcharts/v3",fontSize:12,balloonText:"<strong>[[title]] : [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",innerRadius:"40%",labelRadius:-30,labelText:"[[percents]]%",pullOutRadius:"0%",radius:"45%",startAngle:0,startRadius:"0%",colors:["#8B3244","#A47E4F","#4F8058","#3B448A","#424242"],hideLabelsPercent:5,marginTop:0,marginBottom:0,maxLabelWidth:100,outlineAlpha:1,outlineThickness:1,pullOutDuration:0,startDuration:0,titleField:"category",valueField:"column-1",accessible:!1,addClassNames:!0,autoResize:!0,color:"#ffffff",percentPrecision:1,balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},legend:{enabled:!0,align:"center",equalWidths:!0,position:"top",markerSize:8,markerType:"circle",valueWidth:80,verticalGap:5,marginTop:0,maxColumns:2,valueFunction:get_chartLegendValueTextPie},titles:[],dataProvider:[{category:"한반도","column-1":"29"},{category:"외교/정치/군사","column-1":"27"},{category:"경제/통상","column-1":"25"},{category:"기후환경","column-1":"33"},{category:"기타","column-1":"10"}]}).addListener("clickSlice",(function(){$.modal({isExist:!0,className:"data-table--related"})}))}{const a=document.querySelector("[data-section=토픽상세현황] [data-card=정보량추이] .js-chart");AmCharts.makeChart(a,{type:"serial",path:"//public.realsn.com/libs/amcharts/v3",categoryField:"category",addClassNames:!0,columnWidth:.32,autoMarginOffset:10,marginRight:10,marginTop:15,colors:["#8B3244","#A47E4F","#4F8058","#3B448A","#424242"],fontSize:12,categoryAxis:{labelOffset:-2,equalSpacing:!0,color:"#666666",fontSize:11,axisAlpha:1,fillAlpha:1,gridAlpha:1,axisColor:"#EDEDEF",gridColor:"#EDEDEF",autoGridCount:!1,markPeriodChange:!1,labelFunction:function(a,e,l){return a.indexOf("~")>0?a.split("-")[0]+"_W"+a.split("~")[0].getWeekDay()+"\n":a}},chartCursor:{enabled:!0,animationDuration:0,categoryBalloonColor:"#505050 ",categoryBalloonDateFormat:"MM-DD",cursorAlpha:.1,cursorColor:"#000000",fullWidth:!0},trendLines:[],graphs:[{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#8B3244",lineThickness:2,stackable:!1,id:"AmGraph-1",title:"한반도",valueField:"column-1",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#A47E4F",stackable:!1,id:"AmGraph-2",lineThickness:2,title:"외교/정치/군사",valueField:"column-2",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#4F8058",stackable:!1,id:"AmGraph-3",lineThickness:2,title:"경제/통상",valueField:"column-3",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#3B448A",stackable:!1,id:"AmGraph-4",lineThickness:2,title:"기후환경",valueField:"column-4",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#424242",stackable:!1,id:"AmGraph-5",lineThickness:2,title:"기타",valueField:"column-5",showHandOnHover:!0}],guides:[],valueAxes:[{id:"ValueAxis-1",stackType:"regular",zeroGridAlpha:0,axisThickness:0,color:"#666666",fontSize:11,dashLength:0,gridAlpha:1,gridColor:"#EDEDEF",tickLength:0,title:""}],allLabels:[],balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},chartScrollbar:{enabled:!0,dragIconHeight:15,dragIconWidth:15,offset:15,scrollbarHeight:5},legend:{enabled:!0,align:"center",autoMargins:!1,color:"#333333",markerType:"circle",marginTop:0,marginRight:0,marginBottom:10,marginLeft:0,markerSize:8,fontSize:11,position:"top",spacing:15,valueFunction:get_chartLegendValueText,valueWidth:65,verticalGap:0,equalWidths:!1,useGraphSettings:!0},titles:[],dataProvider:[{category:"2021-09-23","column-1":112,"column-2":238,"column-3":330,"column-4":230,"column-5":130},{category:"2021-09-23","column-1":312,"column-2":538,"column-3":400,"column-4":430,"column-5":530},{category:"2021-09-23","column-1":212,"column-2":538,"column-3":400,"column-4":230,"column-5":130},{category:"2021-09-23 ~ 2021-09-30","column-1":512,"column-2":538,"column-3":400,"column-4":430,"column-5":530},{category:"2021-10-01 ~ 2021-10-07","column-1":212,"column-2":538,"column-3":400,"column-4":230,"column-5":130},{category:"2021-10-08 ~ 2021-10-14","column-1":112,"column-2":538,"column-3":400,"column-4":150,"column-5":150}]}).addListener("clickGraphItem",(function(a){$.modal({isExist:!0,className:"data-table--related"})}))}{const a=document.querySelector("[data-section=토픽상세현황] [data-card=감성추이] .js-chart");AmCharts.makeChart(a,{type:"serial",path:"//public.realsn.com/libs/amcharts/v3",categoryField:"category",addClassNames:!0,fontSize:12,columnWidth:.32,autoMarginOffset:10,marginRight:10,marginTop:15,colors:["#5BA1E0","#EA7070","#808080"],color:"#505050",categoryAxis:{labelOffset:-2,equalSpacing:!0,color:"#666666",fontSize:11,axisAlpha:1,fillAlpha:1,gridAlpha:1,axisColor:"#EDEDEF",gridColor:"#EDEDEF",autoGridCount:!1,markPeriodChange:!1,labelFunction:function(a,e,l){return a.indexOf("~")>0?a.split("-")[0]+"_W"+a.split("~")[0].getWeekDay()+"\n":a}},chartCursor:{enabled:!0,animationDuration:0,categoryBalloonDateFormat:"MM-DD",categoryBalloonColor:"#505050 ",cursorAlpha:.1,cursorColor:"#000000",fullWidth:!0},trendLines:[],graphs:[{balloonFunction:get_chartBalloonValueTextAllLine,fillAlphas:1,id:"AmGraph-1",title:"긍정",type:"column",valueField:"column-1",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,fillAlphas:1,id:"AmGraph-2",title:"부정",type:"column",valueField:"column-2",showHandOnHover:!0},{balloonFunction:get_chartBalloonValueTextAllLine,fillAlphas:1,id:"AmGraph-3",title:"중립",type:"column",valueField:"column-3",showHandOnHover:!0}],guides:[],valueAxes:[{id:"ValueAxis-1",stackType:"regular",zeroGridAlpha:0,axisThickness:0,color:"#666666",fontSize:11,dashLength:0,gridAlpha:1,gridColor:"#EDEDEF",tickLength:0,title:""}],allLabels:[],balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},chartScrollbar:{enabled:!0,dragIconHeight:15,dragIconWidth:15,offset:15,scrollbarHeight:5},legend:{enabled:!0,align:"center",autoMargins:!1,color:"#333333",markerType:"circle",marginTop:0,marginRight:0,marginBottom:10,marginLeft:0,markerSize:8,fontSize:11,position:"top",spacing:15,valueFunction:get_chartLegendValueText,valueWidth:65,verticalGap:0,equalWidths:!1},titles:[],dataProvider:[{category:"2021-09-23","column-1":0,"column-2":0,"column-3":0},{category:"2021-09-24","column-1":1126,"column-2":1127,"column-3":1129},{category:"2021-09-01 ~ 2021-09-07","column-1":1130,"column-2":1233,"column-3":1112},{category:"2021-09-08 ~ 2021-09-14","column-1":1111,"column-2":1113,"column-3":1110}]}).addListener("clickGraphItem",(function(a){$.modal({isExist:!0,className:"data-table--related"})}))}{const a=document.querySelector("[data-card=연관키워드] [data-card=TOP30연관키워드] .js-chart");am4core.ready((function(){var e,l=am4core.create(a,am4plugins_wordCloud.WordCloud),t=l.series.push(new am4plugins_wordCloud.WordCloudSeries);t.accuracy=6,t.randomness=0,t.rotationThreshold=0,t.padding(0,0,0,0),t.data=[{name:"우리",fill:"#8B3244",value:285,fluc:38.7},{name:"생각",fill:"#8B3244",value:183,fluc:38.7},{name:"좋아하다",fill:"#8B3244",value:338,fluc:38.7},{name:"한국",fill:"#8B3244",value:312,fluc:38.7},{name:"못한다",fill:"#8B3244",value:279,fluc:38.7},{name:"어렵다",fill:"#8B3244",value:218,fluc:38.7},{name:"생각",fill:"#A47E4F",value:197,fluc:38.7},{name:"높다",fill:"#A47E4F",value:80,fluc:-40.1},{name:"현재",fill:"#A47E4F",value:222,fluc:38.7},{name:"지역",fill:"#A47E4F",value:30,fluc:-40.1},{name:"문제",fill:"#A47E4F",value:191,fluc:38.7},{name:"사업",fill:"#A47E4F",value:188,fluc:-36},{name:"기업",fill:"#4F8058",value:125,fluc:38.7},{name:"대상",fill:"#4F8058",value:283,fluc:38.7},{name:"대표",fill:"#4F8058",value:132,fluc:38.7},{name:"국내",fill:"#4F8058",value:232,fluc:38.7},{name:"기대하다",fill:"#4F8058",value:179,fluc:38.7},{name:"기준",fill:"#4F8058",value:188,fluc:38.7},{name:"나라",fill:"#3B448A",value:227,fluc:38.7},{name:"중요",fill:"#3B448A",value:150,fluc:-40.1},{name:"세계",fill:"#3B448A",value:252,fluc:38.7},{name:"새로운",fill:"#424242",value:60,fluc:-40.1},{name:"전하",fill:"#424242",value:80,fluc:38.7},{name:"중요하다",fill:"#424242",value:90,fluc:-36}],t.id="wordCloud",t.dataFields.word="name",t.dataFields.value="value",t.dataFields.color="fill",t.labels.template.hiddenState.transitionDuration=0,t.labels.template.defaultState.transitionDuration=0,t.labels.template.padding(1,6,1,6),t.labels.template.propertyFields.fill="fill",t.labels.template.zIndex=0,t.labels.template.adapter.add("text",(function(a,e){return $(e.dom).addClass("word_item"),"\r"+a+"\r"})),t.cursorOverStyle=am4core.MouseCursorStyle.pointer,t.labels.template.background.strokeWidth=0,t.labels.template.background.adapter.add("stroke",(function(a,e){return e.dataItem&&e.dataItem.dataContext?(e.fill=am4core.color(e.dataItem.dataContext.fill),e.dataItem.dataContext.fill):a})),t.tooltip.getFillFromObject=!1,t.tooltip.background.fill=am4core.color("#ffffff"),t.tooltip.background.cornerRadius=3,t.tooltip.background.strokeOpacity=1,t.tooltip.background.strokeWidth=2,t.tooltip.label.fill=am4core.color("#666666"),t.labels.template.tooltipText="[bold]{name}[/]: {value}",t.labels.template.adapter.add("tooltipHTML",(function(a,e){$(e.dom).addClass("word_item"),$(e.background.dom).find("rect").attr("rx",e.background.measuredHeight/2),e.background.dy=.05*-e.background.measuredHeight;var l=null==e.dataItem.dataContext.fluc?"New":e.dataItem.dataContext.fluc;"New"!=l&&(l=e.dataItem.dataContext.fluc>0?"up":0==e.dataItem.dataContext.fluc?"none":"dn");var t="";return t+='<div class="chart_tooltip">',t+='<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>',t+="New"==l?'<span class="row"><span class="ui_fluc is-color-negative">New</span></span>':'<span class="row"><span class="ui_fluc before '+l+'">'+Math.abs(e.dataItem.dataContext.fluc)+"%</span></span>",t+="</div>",e.tooltip&&(e.tooltip.background.stroke=e.dataItem.dataContext.fill),t})),t.labels.template.states.create("hover").properties.zIndex=1,t.labels.template.events.on("over",(function(a){"up"==a.target.tooltip.verticalOrientation?a.target.tooltip.dy=-a.target.background.measuredHeight/3:a.target.tooltip.dy=a.target.background.measuredHeight/3})),t.labels.template.events.on("hit",(function(a){$(a.target.dom).addClass("active").siblings().removeClass("active"),$("[data-card=HOT30연관키워드]").find(".active").removeClass("active"),console.log($(a.target.dom).find("tspan").text())})),function(){if(!e){(e=l.tooltipContainer.createChild(am4core.Container)).background.fill=am4core.color("#fafafa"),e.width=am4core.percent(100),e.height=am4core.percent(100);var a=e.createChild(am4core.Label);a.text="Loading...",a.fill="#909090",a.align="center",a.valign="middle",a.dy=1}e.hide(0),e.show()}(),t.events.on("arrangeended",(function(a){e.hide(),clearInterval(void 0)}))}))}{const a=document.querySelector("[data-card=연관키워드] [data-card=HOT30연관키워드] .js-chart");am4core.ready((function(){var e,l=am4core.create(a,am4plugins_wordCloud.WordCloud),t=l.series.push(new am4plugins_wordCloud.WordCloudSeries);t.accuracy=6,t.randomness=0,t.rotationThreshold=0,t.padding(0,0,0,0),t.data=[{name:"우리",fill:"#8B3244",value:285,fluc:38.7},{name:"생각",fill:"#8B3244",value:183,fluc:38.7},{name:"좋아하다",fill:"#8B3244",value:338,fluc:38.7},{name:"한국",fill:"#8B3244",value:312,fluc:38.7},{name:"못한다",fill:"#8B3244",value:279,fluc:38.7},{name:"어렵다",fill:"#8B3244",value:218,fluc:38.7},{name:"생각",fill:"#A47E4F",value:197,fluc:38.7},{name:"높다",fill:"#A47E4F",value:80,fluc:-40.1},{name:"현재",fill:"#A47E4F",value:222,fluc:38.7},{name:"지역",fill:"#A47E4F",value:30,fluc:-40.1},{name:"문제",fill:"#A47E4F",value:191,fluc:38.7},{name:"사업",fill:"#A47E4F",value:188,fluc:-36},{name:"기업",fill:"#4F8058",value:125,fluc:38.7},{name:"대상",fill:"#4F8058",value:283,fluc:38.7},{name:"대표",fill:"#4F8058",value:132,fluc:38.7},{name:"국내",fill:"#4F8058",value:232,fluc:38.7},{name:"기대하다",fill:"#4F8058",value:179,fluc:38.7},{name:"기준",fill:"#4F8058",value:188,fluc:38.7},{name:"나라",fill:"#3B448A",value:227,fluc:38.7},{name:"중요",fill:"#3B448A",value:150,fluc:-40.1},{name:"세계",fill:"#3B448A",value:252,fluc:38.7},{name:"새로운",fill:"#424242",value:60,fluc:-40.1},{name:"전하",fill:"#424242",value:80,fluc:38.7},{name:"중요하다",fill:"#424242",value:90,fluc:-36}],t.id="wordCloud",t.dataFields.word="name",t.dataFields.value="value",t.dataFields.color="fill",t.labels.template.hiddenState.transitionDuration=0,t.labels.template.defaultState.transitionDuration=0,t.labels.template.padding(1,6,1,6),t.labels.template.propertyFields.fill="fill",t.labels.template.zIndex=0,t.labels.template.adapter.add("text",(function(a,e){return $(e.dom).addClass("word_item"),"\r"+a+"\r"})),t.cursorOverStyle=am4core.MouseCursorStyle.pointer,t.labels.template.background.strokeWidth=0,t.labels.template.background.adapter.add("stroke",(function(a,e){return e.dataItem&&e.dataItem.dataContext?(e.fill=am4core.color(e.dataItem.dataContext.fill),e.dataItem.dataContext.fill):a})),t.tooltip.getFillFromObject=!1,t.tooltip.background.fill=am4core.color("#ffffff"),t.tooltip.background.cornerRadius=3,t.tooltip.background.strokeOpacity=1,t.tooltip.background.strokeWidth=2,t.tooltip.label.fill=am4core.color("#666666"),t.labels.template.tooltipText="[bold]{name}[/]: {value}",t.labels.template.adapter.add("tooltipHTML",(function(a,e){$(e.dom).addClass("word_item"),$(e.background.dom).find("rect").attr("rx",e.background.measuredHeight/2),e.background.dy=.05*-e.background.measuredHeight;var l=null==e.dataItem.dataContext.fluc?"New":e.dataItem.dataContext.fluc;"New"!=l&&(l=e.dataItem.dataContext.fluc>0?"up":0==e.dataItem.dataContext.fluc?"none":"dn");var t="";return t+='<div class="chart_tooltip">',t+='<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>',t+="New"==l?'<span class="row"><span class="ui_fluc is-color-negative">New</span></span>':'<span class="row"><span class="ui_fluc before '+l+'">'+Math.abs(e.dataItem.dataContext.fluc)+"%</span></span>",t+="</div>",e.tooltip&&(e.tooltip.background.stroke=e.dataItem.dataContext.fill),t})),t.labels.template.states.create("hover").properties.zIndex=1,t.labels.template.events.on("over",(function(a){"up"==a.target.tooltip.verticalOrientation?a.target.tooltip.dy=-a.target.background.measuredHeight/3:a.target.tooltip.dy=a.target.background.measuredHeight/3})),t.labels.template.events.on("hit",(function(a){$(a.target.dom).addClass("active").siblings().removeClass("active"),$("[data-card=TOP30연관키워드]").find(".active").removeClass("active"),console.log($(a.target.dom).find("tspan").text())})),function(){if(!e){(e=l.tooltipContainer.createChild(am4core.Container)).background.fill=am4core.color("#fafafa"),e.width=am4core.percent(100),e.height=am4core.percent(100);var a=e.createChild(am4core.Label);a.text="Loading...",a.fill="#909090",a.align="center",a.valign="middle",a.dy=1}e.hide(0),e.show()}(),t.events.on("arrangeended",(function(a){e.hide(),clearInterval(void 0)}))}))}{const a=document.querySelector("[data-section=토픽상세현황] [data-card=연관키워드정보량] .js-chart");AmCharts.makeChart(a,{type:"serial",path:"//public.realsn.com/libs/amcharts/v3",categoryField:"category",addClassNames:!0,columnWidth:.32,autoMarginOffset:10,marginRight:10,marginTop:15,colors:["#0B396A"],fontSize:12,categoryAxis:{labelOffset:-2,equalSpacing:!0,color:"#666666",fontSize:11,axisAlpha:1,fillAlpha:1,gridAlpha:1,axisColor:"#EDEDEF",gridColor:"#EDEDEF",autoGridCount:!1,markPeriodChange:!1,labelFunction:function(a,e,l){return a.indexOf("~")>0?a.split("-")[0]+"_W"+a.split("~")[0].getWeekDay()+"\n":a}},chartCursor:{enabled:!0,animationDuration:0,categoryBalloonColor:"#505050 ",categoryBalloonDateFormat:"MM-DD",cursorAlpha:.1,cursorColor:"#000000",fullWidth:!0},trendLines:[],graphs:[{balloonFunction:get_chartBalloonValueTextAllLine,bullet:"round",bulletSize:10,bulletColor:"#FFFFFF",bulletBorderAlpha:1,bulletBorderColor:"#0B396A",lineThickness:2,stackable:!1,id:"AmGraph-1",title:"정보량",valueField:"column-1",showHandOnHover:!0}],guides:[],valueAxes:[{id:"ValueAxis-1",stackType:"regular",zeroGridAlpha:0,axisThickness:0,color:"#666666",fontSize:11,dashLength:0,gridAlpha:1,gridColor:"#EDEDEF",tickLength:0,title:""}],allLabels:[],balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},chartScrollbar:{enabled:!0,dragIconHeight:15,dragIconWidth:15,offset:15,scrollbarHeight:5},legend:{enabled:!0,align:"center",autoMargins:!1,color:"#333333",markerType:"circle",marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,markerSize:0,fontSize:0,position:"top",spacing:15,valueFunction:get_chartLegendValueText,valueWidth:0,verticalGap:0,equalWidths:!1},titles:[],dataProvider:[{category:"2021-09-23","column-1":112},{category:"2021-09-23","column-1":312},{category:"2021-09-23","column-1":212},{category:"2021-09-23 ~ 2021-09-30","column-1":512},{category:"2021-10-01 ~ 2021-10-07","column-1":212},{category:"2021-10-08 ~ 2021-10-14","column-1":112}]}).addListener("clickGraphItem",(function(a){$.modal({isExist:!0,className:"data-table--related"})}))}{const a=document.querySelector("[data-section=뉴스매체현황] [data-card=국가별보도점유율] .js-chart");AmCharts.makeChart(a,{type:"pie",path:"//public.realsn.com/libs/amcharts/v3",fontSize:12,balloonText:"<strong>[[title]] : [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",innerRadius:"40%",labelRadius:-30,labelText:"[[percents]]%",pullOutRadius:"0%",radius:"45%",startAngle:0,startRadius:"0%",colors:["#2277DA","#D12A2A","#31BAA1","#E7AB12","#8940E7"],hideLabelsPercent:5,marginTop:0,marginBottom:0,maxLabelWidth:100,outlineAlpha:1,outlineThickness:1,pullOutDuration:0,startDuration:0,titleField:"category",valueField:"column-1",accessible:!1,addClassNames:!0,autoResize:!0,color:"#ffffff",percentPrecision:1,balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},legend:{enabled:!0,align:"center",equalWidths:!0,position:"top",markerSize:8,markerType:"circle",valueWidth:80,verticalGap:5,marginTop:0,maxColumns:2,valueFunction:get_chartLegendValueTextPie},titles:[],dataProvider:[{category:"미국","column-1":"29"},{category:"중국","column-1":"27"},{category:"러시아","column-1":"25"},{category:"대한민국","column-1":"33"},{category:"일본","column-1":"10"}]}).addListener("clickSlice",(function(){$.modal({isExist:!0,className:"data-table--related"})}))}{const a=document.querySelector("[data-section=뉴스매체현황] [data-card=Top10뉴스매체] .js-chart");AmCharts.makeChart(a,{type:"serial",path:"//public.realsn.com/libs/amcharts/v3",categoryField:"category",addClassNames:!0,fontSize:12,columnWidth:.7,autoMarginOffset:10,marginRight:10,marginTop:15,colors:["#0B396A"],color:"#505050",categoryAxis:{labelOffset:-2,equalSpacing:!0,color:"#666666",fontSize:11,axisAlpha:1,fillAlpha:1,gridAlpha:1,axisColor:"#EDEDEF",gridColor:"#EDEDEF",autoGridCount:!0,markPeriodChange:!1,labelFunction:function(a,e,l){return a.indexOf("~")>0?a.split("-")[0]+"_W"+a.split("~")[0].getWeekDay()+"\n":a}},chartCursor:{enabled:!0,animationDuration:0,categoryBalloonDateFormat:"MM-DD",categoryBalloonColor:"#505050 ",cursorAlpha:.1,cursorColor:"#000000",fullWidth:!0},trendLines:[],graphs:[{balloonFunction:function(a,e){var l=0;return e.data.filter((function(a){l+=Number(a.dataContext["column-1"])})),"<strong>"+a.category+" : <span style='font-size: 12px;'>"+a.dataContext["column-1"]+"</span> <span style='font-size: 11px;'>("+(a.dataContext["column-1"]/l*100).toFixed(1)+"%)</span></strong>"},fillAlphas:1,id:"AmGraph-1",title:"",type:"column",valueField:"column-1",showHandOnHover:!0}],guides:[],valueAxes:[{id:"ValueAxis-1",stackType:"regular",zeroGridAlpha:0,axisThickness:0,color:"#666666",fontSize:11,dashLength:0,gridAlpha:1,gridColor:"#EDEDEF",tickLength:0,title:""}],allLabels:[],balloon:{fillAlpha:.95,borderThickness:1,animationDuration:0},legend:{enabled:!0,align:"center",autoMargins:!1,color:"#333333",markerType:"circle",marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,markerSize:0,fontSize:0,position:"top",spacing:15,valueFunction:get_chartLegendValueText,valueWidth:65,verticalGap:0,equalWidths:!1},titles:[],dataProvider:[{category:"CNN","column-1":56},{category:"BBC","column-1":1226},{category:"New york<br>Times","column-1":1327},{category:"Fox News","column-1":1229},{category:"The<br>Guardian","column-1":1126},{category:"Yahoo<br>Finance","column-1":1227},{category:"Washington<br>Post","column-1":1329},{category:"CNBC","column-1":1226},{category:"Daily Mail","column-1":1127},{category:"QQ","column-1":1129}]}).addListener("clickGraphItem",(function(){$.modal({isExist:!0,className:"data-table--related"})}))}switch(new URLSearchParams(location.search).get("preview")){case"modalRelated":$.modal({isExist:!0,className:"data-table--related"});break;case"modalSimilar":$.modal({isExist:!0,className:"data-table--similar"})}}));