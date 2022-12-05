// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 전체 토픽 현황 > 주요 현황 요약
     *  block : 막대 그래프
     *  event : toggle active
     *
     */

    const $summary = document.querySelector("[data-section=전체토픽현황] [data-card=주요현황요약]");

    $summary.classList.add("l-card--is-active");

    //observer
    const observer = new MutationObserver(() => {
      $summary.classList.remove("l-card--is-active");
      setTimeout(() => $summary.classList.add("l-card--is-active"), 100);
    });

    observer.observe($summary, { childList: true, subtree: true });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 전체 토픽 현황 > 주요이슈
     *  block : 랭킹리스트
     *  event : toggle active
     *
     */

    const $keyword = document.querySelector("[data-section=전체토픽현황] [data-card=주요이슈]");

    $keyword.classList.add("l-card--is-active");

    //observer
    const observer = new MutationObserver(() => {
      $keyword.classList.remove("l-card--is-active");
      setTimeout(() => $keyword.classList.add("l-card--is-active"), 100);
    });

    observer.observe($keyword, { childList: true, subtree: true });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 정보량 점유율
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=토픽상세현황] [data-card=정보량점유율] .js-chart");
    var chart = AmCharts.makeChart($chart, {
      type: "pie",
      path: "//public.realsn.com/libs/amcharts/v3",
      fontSize: 12,
      balloonText: "<strong>[[title]] : [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",
      // '<strong>' + $b.title + ': <span>' + String($a.dataContext[$b['valueField']]).addComma() + '</span> <span style="font-size: 11px;">(' + percents + '%)</span></strong>';
      innerRadius: "40%",
      labelRadius: -30,
      labelText: "[[percents]]%",
      pullOutRadius: "0%",
      radius: "45%",
      startAngle: 0,
      startRadius: "0%",
      colors: ["#8B3244", "#A47E4F", "#4F8058", "#3B448A", "#424242"],
      hideLabelsPercent: 5,
      marginTop: 0,
      marginBottom: 0,
      maxLabelWidth: 100,
      outlineAlpha: 1,
      outlineThickness: 1,
      pullOutDuration: 0,
      startDuration: 0,
      titleField: "category",
      valueField: "column-1",
      accessible: false,
      addClassNames: true,
      autoResize: true,
      color: "#ffffff",
      percentPrecision: 1,
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      legend: {
        enabled: true,
        align: "center",
        equalWidths: true,
        position: "top",
        markerSize: 8,
        markerType: "circle",
        // spacing: 5,
        valueWidth: 80,
        verticalGap: 5,
        marginTop: 0,
        maxColumns: 2,
        // valueText: ': [[value]] ([[percents]]%)', // 밸류 꺼짐시 "표기량 0" 작업 필요함
        valueFunction: get_chartLegendValueTextPie,
      },
      titles: [],
      dataProvider: [
        { category: "한반도", "column-1": "29" },
        { category: "외교/정치/군사", "column-1": "27" },
        { category: "경제/통상", "column-1": "25" },
        { category: "기후환경", "column-1": "33" },
        { category: "기타", "column-1": "10" },
      ],
    });
    chart.addListener("clickSlice", function () {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 정보량 추이
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=토픽상세현황] [data-card=정보량추이] .js-chart");

    var chart = AmCharts.makeChart($chart, {
      type: "serial",
      path: "//public.realsn.com/libs/amcharts/v3",
      categoryField: "category",
      addClassNames: true,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ["#8B3244", "#A47E4F", "#4F8058", "#3B448A", "#424242"],
      fontSize: 12,
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: "#666666",
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: "#EDEDEF",
        gridColor: "#EDEDEF",
        autoGridCount: false,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf("~") > 0) {
            var year = $txt.split("-")[0];
            var days = $txt.split("~")[0];
            var result = year + "_W" + days.getWeekDay() + "\n";

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonColor: "#505050 ",
        categoryBalloonDateFormat: "MM-DD",
        cursorAlpha: 0.1,
        cursorColor: "#000000",
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#8B3244",
          lineThickness: 2,
          stackable: false,
          id: "AmGraph-1",
          title: "한반도",
          valueField: "column-1",
          showHandOnHover: true,
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#A47E4F",
          stackable: false,
          id: "AmGraph-2",
          lineThickness: 2,
          title: "외교/정치/군사",
          valueField: "column-2",
          showHandOnHover: true,
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#4F8058",
          stackable: false,
          id: "AmGraph-3",
          lineThickness: 2,
          title: "경제/통상",
          valueField: "column-3",
          showHandOnHover: true,
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#3B448A",
          stackable: false,
          id: "AmGraph-4",
          lineThickness: 2,
          title: "기후환경",
          valueField: "column-4",
          showHandOnHover: true,
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#424242",
          stackable: false,
          id: "AmGraph-5",
          lineThickness: 2,
          title: "기타",
          valueField: "column-5",
          showHandOnHover: true,
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: "ValueAxis-1",
          stackType: "regular",
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: "#666666",
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: "#EDEDEF",
          tickLength: 0,
          title: "",
        },
      ],
      allLabels: [],
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      chartScrollbar: {
        enabled: true,
        // dragIcon: 'dragIconRoundSmall',
        dragIconHeight: 15,
        dragIconWidth: 15,
        offset: 15, // 변경
        scrollbarHeight: 5, // 변경
      },
      legend: {
        enabled: true,
        align: "center",
        autoMargins: false,
        color: "#333333",
        markerType: "circle",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 10,
        marginLeft: 0,
        markerSize: 8,
        fontSize: 11,
        position: "top",
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 65,
        verticalGap: 0,
        equalWidths: false,
        useGraphSettings: true,
      },
      titles: [],
      dataProvider: [
        { category: "2021-09-23", "column-1": 112, "column-2": 238, "column-3": 330, "column-4": 230, "column-5": 130 },
        { category: "2021-09-23", "column-1": 312, "column-2": 538, "column-3": 400, "column-4": 430, "column-5": 530 },
        { category: "2021-09-23", "column-1": 212, "column-2": 538, "column-3": 400, "column-4": 230, "column-5": 130 },
        { category: "2021-09-23 ~ 2021-09-30", "column-1": 512, "column-2": 538, "column-3": 400, "column-4": 430, "column-5": 530 },
        { category: "2021-10-01 ~ 2021-10-07", "column-1": 212, "column-2": 538, "column-3": 400, "column-4": 230, "column-5": 130 },
        { category: "2021-10-08 ~ 2021-10-14", "column-1": 112, "column-2": 538, "column-3": 400, "column-4": 150, "column-5": 150 },
      ],
    });
    chart.addListener("clickGraphItem", function ($e) {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 감성 추이
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=토픽상세현황] [data-card=감성추이] .js-chart");

    var chart = AmCharts.makeChart($chart, {
      type: "serial",
      path: "//public.realsn.com/libs/amcharts/v3",
      categoryField: "category",
      addClassNames: true,
      fontSize: 12,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ["#5BA1E0", "#EA7070", "#808080"],
      color: "#505050",
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: "#666666",
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: "#EDEDEF",
        gridColor: "#EDEDEF",
        autoGridCount: false,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf("~") > 0) {
            var year = $txt.split("-")[0];
            var days = $txt.split("~")[0];
            var result = year + "_W" + days.getWeekDay() + "\n";

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonDateFormat: "MM-DD",
        categoryBalloonColor: "#505050 ",
        cursorAlpha: 0.1,
        cursorColor: "#000000",
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: "AmGraph-1",
          title: "긍정",
          type: "column",
          valueField: "column-1",
          showHandOnHover: true,
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: "AmGraph-2",
          title: "부정",
          type: "column",
          valueField: "column-2",
          showHandOnHover: true,
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: "AmGraph-3",
          title: "중립",
          type: "column",
          valueField: "column-3",
          showHandOnHover: true,
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: "ValueAxis-1",
          stackType: "regular",
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: "#666666",
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: "#EDEDEF",
          tickLength: 0,
          title: "",
        },
      ],
      allLabels: [],
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      chartScrollbar: {
        enabled: true,
        // dragIcon: 'dragIconRoundSmall',
        dragIconHeight: 15,
        dragIconWidth: 15,
        offset: 15, // 변경
        scrollbarHeight: 5, // 변경
      },
      legend: {
        enabled: true,
        align: "center",
        autoMargins: false,
        color: "#333333",
        markerType: "circle",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 10,
        marginLeft: 0,
        markerSize: 8,
        fontSize: 11,
        position: "top",
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 65,
        verticalGap: 0,
        equalWidths: false,
      },
      titles: [],
      dataProvider: [
        { category: "2021-09-23", "column-1": 0, "column-2": 0, "column-3": 0 },
        { category: "2021-09-24", "column-1": 1126, "column-2": 1127, "column-3": 1129 },
        { category: "2021-09-01 ~ 2021-09-07", "column-1": 1130, "column-2": 1233, "column-3": 1112 },
        { category: "2021-09-08 ~ 2021-09-14", "column-1": 1111, "column-2": 1113, "column-3": 1110 },
      ],
    });
    chart.addListener("clickGraphItem", function ($e) {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 연관키워드 > TOP 30 연관키워드
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */

     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-card=연관키워드] [data-card=TOP30연관키워드] .js-chart");

    am4core.ready(function () {
      /*
        #8B3244 - 한반도
        #A47E4F - 외교/정치/군사
        #4F8058 - 경제/통상
        #3B448A - 기후변화
        #424242 -  기타
      */
      var data = [
        { name: "우리", fill: "#d73b9e", value: 2850, fluc: 38.7 },
        { name: "생각", fill: "#ffa800", value: 183, fluc: 38.7 },
        { name: "좋아하다", fill: "#2cb24a", value: 338, fluc: 38.7 },
        { name: "한국", fill: "#5ba1e0", value: 312, fluc: 38.7 },
        { name: "못한다", fill: "#ffa800", value: 279, fluc: 38.7 },
        { name: "어렵다", fill: "#d73b9e", value: 218, fluc: 38.7 },
        { name: "생각", fill: "#5ba1e0", value: 197, fluc: 38.7 },
        { name: "높다", fill: "#ffa800", value: 80, fluc: -40.1 },
        { name: "현재", fill: "#2cb24a", value: 222, fluc: 38.7 },
        { name: "지역", fill: "#d73b9e", value: 30, fluc: -40.1 },
        { name: "문제", fill: "#ffa800", value: 191, fluc: 38.7 },
        { name: "사업", fill: "#d73b9e", value: 188, fluc: -36.0 },
        { name: "기업", fill: "#2cb24a", value: 125, fluc: 38.7 },
        { name: "대상", fill: "#ffa800", value: 283, fluc: 38.7 },
        { name: "대표", fill: "#54c2f0", value: 132, fluc: 38.7 },
        { name: "국내", fill: "#5ba1e0", value: 232, fluc: 38.7 },
        { name: "기대하다", fill: "#5ba1e0", value: 179, fluc: 38.7 },
        { name: "기준", fill: "#f1711b", value: 188, fluc: 38.7 },
        { name: "나라", fill: "#d73b9e", value: 227, fluc: 38.7 },
        { name: "중요", fill: "#d73b9e", value: 150, fluc: -40.1 },
        { name: "세계", fill: "#f1711b", value: 252, fluc: 38.7 },
        { name: "새로운", fill: "#ffa800", value: 60, fluc: -40.1 },
        { name: "전하", fill: "#d73b9e", value: 80, fluc: 38.7 },
        { name: "중요하다", fill: "#54c2f0", value: 90, fluc: -36.0 },
        { name: "나라", fill: "#5ba1e0", value: 227, fluc: 38.7 },
        { name: "중요", fill: "#d73b9e", value: 150, fluc: -40.1 },
        { name: "세계", fill: "#2cb24a", value: 252, fluc: 38.7 },
        { name: "새로운", fill: "#ffa800", value: 60, fluc: -40.1 },
        { name: "전하", fill: "#d73b9e", value: 80, fluc: 38.7 },
        { name: "중요하다", fill: "#ffa800", value: 90, fluc: -36.0 },
      ];

      var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
      var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series_cloud.accuracy = 6;
      series_cloud.randomness = 0;
      series_cloud.rotationThreshold = 0;
      series_cloud.padding(0, 0, 0, 0);

      series_cloud.data = data;
      series_cloud.id = "wordCloud";

      series_cloud.dataFields.word = "name";
      series_cloud.dataFields.value = "value";
      series_cloud.dataFields.color = "fill";
      series_cloud.minFontSize = 25;
      series_cloud.maxFontSize = 70;

      series_cloud.labels.template.hiddenState.transitionDuration = 0;
      series_cloud.labels.template.defaultState.transitionDuration = 0;
      series_cloud.labels.template.padding(1, 6, 1, 6);
      series_cloud.labels.template.propertyFields.fill = "fill";
      series_cloud.labels.template.zIndex = 0;
      series_cloud.labels.template.adapter.add("text", function ($val, $target) {
        $($target.dom).addClass("word_item");
        return "\r" + $val + "\r";
      });
      series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      series_cloud.labels.template.background.strokeWidth = 0;
      series_cloud.labels.template.background.adapter.add("stroke", function ($val, $target) {
        if ($target.dataItem && $target.dataItem.dataContext) {
          $target.fill = am4core.color($target.dataItem.dataContext.fill);
          return $target.dataItem.dataContext.fill;
        }
        return $val;
      });

      // Tooltip(Bubble)
      series_cloud.tooltip.getFillFromObject = false;
      series_cloud.tooltip.background.fill = am4core.color("#ffffff");
      series_cloud.tooltip.background.cornerRadius = 3;
      series_cloud.tooltip.background.strokeOpacity = 1;
      series_cloud.tooltip.background.strokeWidth = 2;
      series_cloud.tooltip.label.fill = am4core.color("#666666");
      series_cloud.labels.template.tooltipText = "[bold]{name}[/]: {value}";
      series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
        $($target.dom).addClass("word_item");
        $($target.background.dom)
          .find("rect")
          .attr("rx", $target.background.measuredHeight / 2);
        $target.background.dy = -$target.background.measuredHeight * 0.05;

        var flucUpDn = $target.dataItem.dataContext.fluc == null ? "New" : $target.dataItem.dataContext.fluc;
        if (flucUpDn != "New") {
          flucUpDn = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "dn";
        }
        var cateColor;
        var tooltipResult = "";
        tooltipResult += '<div class="chart_tooltip">';
        tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
        if (flucUpDn == "New") {
          tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
        } else {
          tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + "%</span></span>";
        }
        tooltipResult += "</div>";

        if ($target.tooltip) {
          $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
        }
        return tooltipResult;
      });

      var hs = series_cloud.labels.template.states.create("hover");
      hs.properties.zIndex = 1;

      // Event
      series_cloud.labels.template.events.on("over", function ($e) {
        if ($e.target.tooltip.verticalOrientation == "up") $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
        else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
      });
      series_cloud.labels.template.events.on("hit", function ($e) {
        $($e.target.dom).addClass("active").siblings().removeClass("active");
        $("[data-card=HOT30연관키워드]").find(".active").removeClass("active");

        console.log($($e.target.dom).find("tspan").text());
      });
      var indicator;
      var indicatorInterval;

      function showIndicator() {
        if (!indicator) {
          indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
          indicator.background.fill = am4core.color("#fafafa");
          indicator.width = am4core.percent(100);
          indicator.height = am4core.percent(100);

          var indicatorLabel = indicator.createChild(am4core.Label);
          indicatorLabel.text = "Loading...";
          indicatorLabel.fill = "#909090";
          indicatorLabel.align = "center";
          indicatorLabel.valign = "middle";
          indicatorLabel.dy = 1;
        }

        indicator.hide(0);
        indicator.show();

        // clearInterval(indicatorInterval);
        // indicatorInterval = setInterval(function() {
        //         hourglass.animate([{
        //         from: 0,
        //         to: 360,
        //         property: "rotation"                    //         }], 2000);
        //     }, 3000);
      }
      function hideIndicator() {
        indicator.hide();
        clearInterval(indicatorInterval);
      }

      showIndicator();

      series_cloud.events.on("arrangeended", function (ev) {
        hideIndicator();
      });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 연관키워드  > HOT 30 연관키워드
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */

     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-card=연관키워드] [data-card=HOT30연관키워드] .js-chart");

    am4core.ready(function () {
      /*
        #8B3244 - 한반도
        #A47E4F - 외교/정치/군사
        #4F8058 - 경제/통상
        #3B448A - 기후변화
        #424242 -  기타
      */
      var data = [
        { name: "우리", fill: "#d73b9e", value: 2850, fluc: 38.7 },
        { name: "생각", fill: "#ffa800", value: 183, fluc: 38.7 },
        { name: "좋아하다", fill: "#5ba1e0", value: 338, fluc: 38.7 },
        { name: "한국", fill: "#2cb24a", value: 312, fluc: 38.7 },
        { name: "못한다", fill: "#54c2f0", value: 279, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#f1711b", value: 218, fluc: 38.7 },
        { name: "생각", fill: "#d73b9e", value: 197, fluc: 38.7 },
        { name: "높다", fill: "#5ba1e0", value: 80, fluc: -40.1 },
        { name: "어렵다어렵다", fill: "#d73b9e", value: 222, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#54c2f0", value: 30, fluc: -40.1 },
        { name: "어렵다어렵다", fill: "#f1711b", value: 191, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#54c2f0", value: 188, fluc: -36.0 },
        { name: "기업", fill: "#54c2f0", value: 125, fluc: 38.7 },
        { name: "대상", fill: "#d73b9e", value: 283, fluc: 38.7 },
        { name: "대표", fill: "#5ba1e0", value: 132, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#d73b9e", value: 232, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#54c2f0", value: 179, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#f1711b", value: 188, fluc: 38.7 },
        { name: "나라", fill: "#54c2f0", value: 227, fluc: 38.7 },
        { name: "어렵다어렵다", fill: "#d73b9e", value: 150, fluc: -40.1 },
        { name: "세계", fill: "#f1711b", value: 252, fluc: 38.7 },
        { name: "새로운", fill: "#5ba1e0", value: 60, fluc: -40.1 },
        { name: "전하", fill: "#f1711b", value: 80, fluc: 38.7 },
        { name: "중요하다", fill: "#ffa800", value: 10, fluc: -36.0 },
        { name: "기준", fill: "#ffa800", value: 188, fluc: 38.7 },
        { name: "나라", fill: "#5ba1e0", value: 227, fluc: 38.7 },
        { name: "중요", fill: "#f1711b", value: 150, fluc: -40.1 },
        { name: "세계", fill: "#d73b9e", value: 252, fluc: 38.7 },
        { name: "새로운", fill: "#f1711b", value: 60, fluc: -40.1 },
        { name: "전하", fill: "#f1711b", value: 80, fluc: 38.7 },
        { name: "중요하다", fill: "#54c2f0", value: 90, fluc: -36.0 },
      ];

      var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
      var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series_cloud.accuracy = 6;
      series_cloud.randomness = 0;
      series_cloud.rotationThreshold = 0;
      series_cloud.padding(0, 0, 0, 0);

      series_cloud.data = data;
      series_cloud.id = "wordCloud";

      series_cloud.dataFields.word = "name";
      series_cloud.dataFields.value = "value";
      series_cloud.dataFields.color = "fill";
      series_cloud.minFontSize = 20;
      series_cloud.maxFontSize = 70;

      series_cloud.labels.template.hiddenState.transitionDuration = 0;
      series_cloud.labels.template.defaultState.transitionDuration = 0;
      series_cloud.labels.template.padding(1, 6, 1, 6);
      series_cloud.labels.template.propertyFields.fill = "fill";
      series_cloud.labels.template.zIndex = 0;
      series_cloud.labels.template.adapter.add("text", function ($val, $target) {
        $($target.dom).addClass("word_item");
        return "\r" + $val + "\r";
      });
      series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      series_cloud.labels.template.background.strokeWidth = 0;
      series_cloud.labels.template.background.adapter.add("stroke", function ($val, $target) {
        if ($target.dataItem && $target.dataItem.dataContext) {
          $target.fill = am4core.color($target.dataItem.dataContext.fill);
          return $target.dataItem.dataContext.fill;
        }
        return $val;
      });

      // Tooltip(Bubble)
      series_cloud.tooltip.getFillFromObject = false;
      series_cloud.tooltip.background.fill = am4core.color("#ffffff");
      series_cloud.tooltip.background.cornerRadius = 3;
      series_cloud.tooltip.background.strokeOpacity = 1;
      series_cloud.tooltip.background.strokeWidth = 2;
      series_cloud.tooltip.label.fill = am4core.color("#666666");
      series_cloud.labels.template.tooltipText = "[bold]{name}[/]: {value}";
      series_cloud.labels.template.adapter.add("tooltipHTML", function ($value, $target) {
        $($target.dom).addClass("word_item");
        $($target.background.dom)
          .find("rect")
          .attr("rx", $target.background.measuredHeight / 2);
        $target.background.dy = -$target.background.measuredHeight * 0.05;

        var flucUpDn = $target.dataItem.dataContext.fluc == null ? "New" : $target.dataItem.dataContext.fluc;
        if (flucUpDn != "New") {
          flucUpDn = $target.dataItem.dataContext.fluc > 0 ? "up" : $target.dataItem.dataContext.fluc == 0 ? "none" : "dn";
        }
        var cateColor;
        var tooltipResult = "";
        tooltipResult += '<div class="chart_tooltip">';
        tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
        if (flucUpDn == "New") {
          tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
        } else {
          tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + "%</span></span>";
        }
        tooltipResult += "</div>";

        if ($target.tooltip) {
          $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
        }
        return tooltipResult;
      });

      var hs = series_cloud.labels.template.states.create("hover");
      hs.properties.zIndex = 1;

      // Event
      series_cloud.labels.template.events.on("over", function ($e) {
        if ($e.target.tooltip.verticalOrientation == "up") $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
        else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
      });
      series_cloud.labels.template.events.on("hit", function ($e) {
        $($e.target.dom).addClass("active").siblings().removeClass("active");
        $("[data-card=TOP30연관키워드]").find(".active").removeClass("active");

        console.log($($e.target.dom).find("tspan").text());
      });
      var indicator;
      var indicatorInterval;

      function showIndicator() {
        if (!indicator) {
          indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
          indicator.background.fill = am4core.color("#fafafa");
          indicator.width = am4core.percent(100);
          indicator.height = am4core.percent(100);

          var indicatorLabel = indicator.createChild(am4core.Label);
          indicatorLabel.text = "Loading...";
          indicatorLabel.fill = "#909090";
          indicatorLabel.align = "center";
          indicatorLabel.valign = "middle";
          indicatorLabel.dy = 1;
        }

        indicator.hide(0);
        indicator.show();

        // clearInterval(indicatorInterval);
        // indicatorInterval = setInterval(function() {
        //         hourglass.animate([{
        //         from: 0,
        //         to: 360,
        //         property: "rotation"                    //         }], 2000);
        //     }, 3000);
      }
      function hideIndicator() {
        indicator.hide();
        clearInterval(indicatorInterval);
      }

      showIndicator();

      series_cloud.events.on("arrangeended", function (ev) {
        hideIndicator();
      });
    });
  }

  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 토픽 상세 현황 > 정보량 추이
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=토픽상세현황] [data-card=연관키워드정보량] .js-chart");

    var chart = AmCharts.makeChart($chart, {
      type: "serial",
      path: "//public.realsn.com/libs/amcharts/v3",
      categoryField: "category",
      addClassNames: true,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ["#0B396A"],
      fontSize: 12,
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: "#666666",
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: "#EDEDEF",
        gridColor: "#EDEDEF",
        autoGridCount: false,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf("~") > 0) {
            var year = $txt.split("-")[0];
            var days = $txt.split("~")[0];
            var result = year + "_W" + days.getWeekDay() + "\n";

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonColor: "#505050 ",
        categoryBalloonDateFormat: "MM-DD",
        cursorAlpha: 0.1,
        cursorColor: "#000000",
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          balloonText: "<strong>[[category]]</strong> : <strong>[[value]]</strong>",
          // balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: "round",
          bulletSize: 10,
          bulletColor: "#FFFFFF",
          bulletBorderAlpha: 1,
          bulletBorderColor: "#0B396A",
          lineThickness: 2,
          stackable: false,
          id: "AmGraph-1",
          title: "정보량",
          valueField: "column-1",
          showHandOnHover: true,
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: "ValueAxis-1",
          stackType: "regular",
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: "#666666",
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: "#EDEDEF",
          tickLength: 0,
          title: "",
        },
      ],
      allLabels: [],
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      chartScrollbar: {
        enabled: true,
        // dragIcon: 'dragIconRoundSmall',
        dragIconHeight: 15,
        dragIconWidth: 15,
        offset: 15, // 변경
        scrollbarHeight: 5, // 변경
      },
      legend: {
        enabled: true,
        align: "center",
        autoMargins: false,
        color: "#333333",
        markerType: "circle",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        markerSize: 0,
        fontSize: 0,
        position: "top",
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 0,
        verticalGap: 0,
        equalWidths: false,
      },
      titles: [],
      dataProvider: [
        { category: "2021-09-23", "column-1": 112 },
        { category: "2021-09-23", "column-1": 312 },
        { category: "2021-09-23", "column-1": 212 },
        { category: "2021-09-23 ~ 2021-09-30", "column-1": 512 },
        { category: "2021-10-01 ~ 2021-10-07", "column-1": 212 },
        { category: "2021-10-08 ~ 2021-10-14", "column-1": 112 },
      ],
    });
    chart.addListener("clickGraphItem", function ($e) {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 뉴스 매체 현황 > 국가별 보도 점유율
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=뉴스매체현황] [data-card=국가별보도점유율] .js-chart");
    var chart = AmCharts.makeChart($chart, {
      type: "pie",
      path: "//public.realsn.com/libs/amcharts/v3",
      fontSize: 12,
      balloonText: "<strong>[[title]] : [[value]] <span style='font-size: 11px;'>([[percents]]%)</span></strong>",
      innerRadius: "40%",
      labelRadius: -30,
      labelText: "[[percents]]%",
      pullOutRadius: "0%",
      radius: "45%",
      startAngle: 0,
      startRadius: "0%",
      colors: ["#2277DA", "#D12A2A", "#31BAA1", "#E7AB12", "#8940E7"],
      hideLabelsPercent: 5,
      marginTop: 0,
      marginBottom: 0,
      maxLabelWidth: 100,
      outlineAlpha: 1,
      outlineThickness: 1,
      pullOutDuration: 0,
      startDuration: 0,
      titleField: "category",
      valueField: "column-1",
      accessible: false,
      addClassNames: true,
      autoResize: true,
      color: "#ffffff",
      percentPrecision: 1,
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      legend: {
        enabled: true,
        align: "center",
        equalWidths: true,
        position: "top",
        markerSize: 8,
        markerType: "circle",
        // spacing: 5,
        valueWidth: 80,
        verticalGap: 5,
        marginTop: 0,
        maxColumns: 2,
        valueFunction: get_chartLegendValueTextPie,
      },
      titles: [],
      dataProvider: [
        { category: "미국", "column-1": "29" },
        { category: "중국", "column-1": "27" },
        { category: "러시아", "column-1": "25" },
        { category: "대한민국", "column-1": "33" },
        { category: "일본", "column-1": "10" },
      ],
    });
    chart.addListener("clickSlice", function () {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 매체 분석 > 뉴스 매체 현황 > Top10뉴스매체
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=뉴스매체현황] [data-card=Top10뉴스매체] .js-chart");

    var chart = AmCharts.makeChart($chart, {
      type: "serial",
      path: "//public.realsn.com/libs/amcharts/v3",
      categoryField: "category",
      addClassNames: true,
      fontSize: 12,
      columnWidth: 0.7,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ["#0B396A"],
      color: "#505050",
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: "#666666",
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: "#EDEDEF",
        gridColor: "#EDEDEF",
        autoGridCount: true,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf("~") > 0) {
            var year = $txt.split("-")[0];
            var days = $txt.split("~")[0];
            var result = year + "_W" + days.getWeekDay() + "\n";

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonDateFormat: "MM-DD",
        categoryBalloonColor: "#505050 ",
        cursorAlpha: 0.1,
        cursorColor: "#000000",
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          // balloonFunction: get_chartBalloonValueTextAllLine,
          balloonFunction: function (a, b) {
            // 전체 값 더하기
            var sumVal = 0;
            b.data.filter(function (obj) {
              sumVal += Number(obj.dataContext["column-1"]);
            });
            return (
              "<strong>" +
              a.category +
              " : <span style='font-size: 12px;'>" +
              a.dataContext["column-1"] +
              "</span> <span style='font-size: 11px;'>(" +
              ((a.dataContext["column-1"] / sumVal) * 100).toFixed(1) +
              "%)</span></strong>"
            );
          },
          fillAlphas: 1,
          id: "AmGraph-1",
          title: "",
          type: "column",
          valueField: "column-1",
          showHandOnHover: true,
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: "ValueAxis-1",
          stackType: "regular",
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: "#666666",
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: "#EDEDEF",
          tickLength: 0,
          title: "",
        },
      ],
      allLabels: [],
      balloon: {
        fillAlpha: 0.95,
        borderThickness: 1,
        animationDuration: 0,
      },
      legend: {
        enabled: true,
        align: "center",
        autoMargins: false,
        color: "#333333",
        markerType: "circle",
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
        markerSize: 0,
        fontSize: 0,
        position: "top",
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 65,
        verticalGap: 0,
        equalWidths: false,
      },
      titles: [],
      dataProvider: [
        { category: "CNN", "column-1": 56 },
        { category: "BBC", "column-1": 1226 },
        { category: "New york<br>Times", "column-1": 1327 },
        { category: "Fox News", "column-1": 1229 },
        { category: "The<br>Guardian", "column-1": 1126 },
        { category: "Yahoo<br>Finance", "column-1": 1227 },
        { category: "Washington<br>Post", "column-1": 1329 },
        { category: "CNBC", "column-1": 1226 },
        { category: "Daily Mail", "column-1": 1127 },
        { category: "QQ", "column-1": 1129 },
      ],
    });
    chart.addListener("clickGraphItem", function () {
      $.modal({ isExist: true, className: "data-table--related" });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /*
     *
     * 상황별 preview 가져오기
     *
     **/
    const name = new URLSearchParams(location.search).get("preview");

    switch (name) {
      // modal - 관련정보
      case "modalRelated":
        $.modal({ isExist: true, className: "data-table--related" });
        break;

      // modal - 유사목록
      case "modalSimilar":
        $.modal({ isExist: true, className: "data-table--similar" });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
