// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 구분
     *  block : 대상
     *  event : 이벤트내용
     *
     */
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
    const $chart = document.querySelector('[data-section=토픽상세현황] [data-card=정보량점유율] .js-chart');
    var chart = AmCharts.makeChart($chart, {
      type: 'pie',
      fontSize: 12,
      balloonText: "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
      innerRadius: '40%',
      labelRadius: -30,
      labelText: '[[percents]]%',
      pullOutRadius: '0%',
      radius: '45%',
      startAngle: 0,
      startRadius: '0%',
      colors: ['#8B3244', '#A47E4F', '#4F8058', '#3B448A', '#424242'],
      hideLabelsPercent: 5,
      marginTop: 0,
      marginBottom: 0,
      maxLabelWidth: 100,
      outlineAlpha: 1,
      outlineThickness: 1,
      pullOutDuration: 0,
      startDuration: 0,
      titleField: 'category',
      valueField: 'column-1',
      accessible: false,
      addClassNames: true,
      autoResize: true,
      color: '#ffffff',
      percentPrecision: 0,
      balloon: {
        fillAlpha: 0.68,
        fixedPosition: false,
        fontSize: 12,
        horizontalPadding: 10,
        pointerWidth: 4,
        shadowAlpha: 0.28,
      },
      legend: {
        enabled: true,
        align: 'center',
        equalWidths: true,
        position: 'top',
        markerSize: 8,
        markerType: 'circle',
        // spacing: 5,
        valueWidth: 80,
        verticalGap: 5,
        marginTop: 0,
        maxColumns: 2,
        valueText: ': [[value]] ([[percents]]%)',
      },
      titles: [],
      dataProvider: [
        {
          category: '한반도',
          'column-1': '29',
        },
        {
          category: '외교/정치/군사',
          'column-1': '27',
        },
        {
          category: '경제/통상',
          'column-1': '25',
        },
        {
          category: '기후환경',
          'column-1': '33',
        },
        {
          category: '기타',
          'column-1': '10',
        },
      ],
    });
    chart.addListener('clickSlice', function () {
      popupMngr.open('#popup_rel_info_detail');
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
    const $chart = document.querySelector('[data-section=토픽상세현황] [data-card=정보량추이] .js-chart');

    var chart = AmCharts.makeChart($chart, {
      type: 'serial',
      categoryField: 'category',
      addClassNames: true,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ['#8B3244', '#A47E4F', '#4F8058', '#3B448A', '#424242'],
      fontSize: 12,
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: '#666666',
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: '#EDEDEF',
        gridColor: '#EDEDEF',
        autoGridCount: false,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf('~') > 0) {
            var year = $txt.split('-')[0];
            var days = $txt.split('~')[0];
            var result = year + '_W' + days.getWeekDay() + '\n';

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonColor: '#505050 ',
        categoryBalloonDateFormat: 'MM-DD',
        cursorAlpha: 0.1,
        cursorColor: '#000000',
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#8B3244',
          lineThickness: 2,
          stackable: false,
          id: 'AmGraph-1',
          title: '한반도',
          valueField: 'column-1',
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#A47E4F',
          stackable: false,
          id: 'AmGraph-2',
          lineThickness: 2,
          title: '외교/정치/군사',
          valueField: 'column-2',
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#4F8058',
          stackable: false,
          id: 'AmGraph-3',
          lineThickness: 2,
          title: '경제/통상',
          valueField: 'column-3',
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#3B448A',
          stackable: false,
          id: 'AmGraph-4',
          lineThickness: 2,
          title: '기후환경',
          valueField: 'column-4',
        },
        {
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          balloonFunction: get_chartBalloonValueTextAllLine,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#424242',
          stackable: false,
          id: 'AmGraph-5',
          lineThickness: 2,
          title: '기타',
          valueField: 'column-5',
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: 'ValueAxis-1',
          stackType: 'regular',
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: '#666666',
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: '#EDEDEF',
          tickLength: 0,
          title: '',
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
        align: 'center',
        autoMargins: false,
        color: '#333333',
        markerType: 'circle',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 10,
        marginLeft: 0,
        markerSize: 8,
        fontSize: 11,
        position: 'top',
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 65,
        verticalGap: 0,
        equalWidths: false,
        useGraphSettings: true,
      },
      titles: [],
      dataProvider: [
        {
          category: '2021-09-23',
          'column-1': 112,
          'column-2': 238,
          'column-3': 330,
          'column-4': 230,
          'column-5': 130,
        },
        {
          category: '2021-09-23',
          'column-1': 312,
          'column-2': 538,
          'column-3': 400,
          'column-4': 430,
          'column-5': 530,
        },
        {
          category: '2021-09-23',
          'column-1': 212,
          'column-2': 538,
          'column-3': 400,
          'column-4': 230,
          'column-5': 130,
        },
        {
          category: '2021-09-23 ~ 2021-09-30',
          'column-1': 512,
          'column-2': 538,
          'column-3': 400,
          'column-4': 430,
          'column-5': 530,
        },
        {
          category: '2021-10-01 ~ 2021-10-07',
          'column-1': 212,
          'column-2': 538,
          'column-3': 400,
          'column-4': 230,
          'column-5': 130,
        },
        {
          category: '2021-10-08 ~ 2021-10-14',
          'column-1': 112,
          'column-2': 538,
          'column-3': 400,
          'column-4': 150,
          'column-5': 150,
        },
      ],
    });
    chart.addListener('clickGraphItem', function ($e) {
      popupMngr.open('#popup_rel_info_detail');
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
    const $chart = document.querySelector('[data-section=토픽상세현황] [data-card=감성추이] .js-chart');

    var chart = AmCharts.makeChart($chart, {
      type: 'serial',
      categoryField: 'category',
      addClassNames: true,
      fontSize: 12,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ['#5BA1E0', '#EA7070', '#808080'],
      color: '#505050',
      categoryAxis: {
        labelOffset: -2,
        equalSpacing: true,
        color: '#666666',
        fontSize: 11,
        // "parseDates": true,
        axisAlpha: 1,
        fillAlpha: 1,
        gridAlpha: 1,
        axisColor: '#EDEDEF',
        gridColor: '#EDEDEF',
        autoGridCount: false,
        markPeriodChange: false,
        labelFunction: function ($txt, $date, $axis) {
          /* 주별일때 */
          if ($txt.indexOf('~') > 0) {
            var year = $txt.split('-')[0];
            var days = $txt.split('~')[0];
            var result = year + '_W' + days.getWeekDay() + '\n';

            return result;
          } else {
            return $txt;
          }
        },
      },
      chartCursor: {
        enabled: true,
        animationDuration: 0,
        categoryBalloonDateFormat: 'MM-DD',
        categoryBalloonColor: '#505050 ',
        cursorAlpha: 0.1,
        cursorColor: '#000000',
        fullWidth: true,
      },
      trendLines: [],
      graphs: [
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: 'AmGraph-1',
          title: '긍정',
          type: 'column',
          valueField: 'column-1',
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: 'AmGraph-2',
          title: '부정',
          type: 'column',
          valueField: 'column-2',
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: 'AmGraph-3',
          title: '중립',
          type: 'column',
          valueField: 'column-3',
        },
      ],
      guides: [],
      valueAxes: [
        {
          id: 'ValueAxis-1',
          stackType: 'regular',
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: '#666666',
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 1,
          gridColor: '#EDEDEF',
          tickLength: 0,
          title: '',
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
        align: 'center',
        autoMargins: false,
        color: '#333333',
        markerType: 'circle',
        marginTop: 0,
        marginRight: 0,
        marginBottom: 10,
        marginLeft: 0,
        markerSize: 8,
        fontSize: 11,
        position: 'top',
        spacing: 15,
        valueFunction: get_chartLegendValueText,
        valueWidth: 65,
        verticalGap: 0,
        equalWidths: false,
      },
      titles: [],
      dataProvider: [
        {
          category: '2021-09-23',
          'column-1': 0,
          'column-2': 0,
          'column-3': 0,
        },
        {
          category: '2021-09-24',
          'column-1': 1126,
          'column-2': 1127,
          'column-3': 1129,
        },
        {
          category: '2021-09-01 ~ 2021-09-07',
          'column-1': 1130,
          'column-2': 1233,
          'column-3': 1112,
        },
        {
          category: '2021-09-08 ~ 2021-09-14',
          'column-1': 1111,
          'column-2': 1113,
          'column-3': 1110,
        },
      ],
    });

    // chart.addListener('clickGraphItem', function ($e) {
    //   popupMngr.open('#popup_rel_info_detail');
    // });
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

    const $chart = document.querySelector('[data-card=연관키워드] [data-card=TOP30연관키워드] .js-chart');

    am4core.ready(function () {
      /*
        #8B3244 - 한반도
        #A47E4F - 외교/정치/군사
        #4F8058 - 경제/통상
        #3B448A - 기후변화
        #424242 -  기타
      */
      var data = [
        { name: '우리', fill: '#8B3244', value: 285, fluc: 38.7 },
        { name: '생각', fill: '#8B3244', value: 183, fluc: 38.7 },
        { name: '좋아하다', fill: '#8B3244', value: 338, fluc: 38.7 },
        { name: '한국', fill: '#8B3244', value: 312, fluc: 38.7 },
        { name: '못한다', fill: '#8B3244', value: 279, fluc: 38.7 },
        { name: '어렵다', fill: '#8B3244', value: 218, fluc: 38.7 },
        { name: '생각', fill: '#A47E4F', value: 197, fluc: 38.7 },
        { name: '높다', fill: '#A47E4F', value: 80, fluc: -40.1 },
        { name: '현재', fill: '#A47E4F', value: 222, fluc: 38.7 },
        { name: '지역', fill: '#A47E4F', value: 30, fluc: -40.1 },
        { name: '문제', fill: '#A47E4F', value: 191, fluc: 38.7 },
        { name: '사업', fill: '#A47E4F', value: 188, fluc: -36.0 },
        { name: '기업', fill: '#4F8058', value: 125, fluc: 38.7 },
        { name: '대상', fill: '#4F8058', value: 283, fluc: 38.7 },
        { name: '대표', fill: '#4F8058', value: 132, fluc: 38.7 },
        { name: '국내', fill: '#4F8058', value: 232, fluc: 38.7 },
        { name: '기대하다', fill: '#4F8058', value: 179, fluc: 38.7 },
        { name: '기준', fill: '#4F8058', value: 188, fluc: 38.7 },
        { name: '나라', fill: '#3B448A', value: 227, fluc: 38.7 },
        { name: '중요', fill: '#3B448A', value: 150, fluc: -40.1 },
        { name: '세계', fill: '#3B448A', value: 252, fluc: 38.7 },
        { name: '새로운', fill: '#424242', value: 60, fluc: -40.1 },
        { name: '전하', fill: '#424242', value: 80, fluc: 38.7 },
        { name: '중요하다', fill: '#424242', value: 90, fluc: -36.0 },
      ];

      var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
      var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series_cloud.accuracy = 6;
      series_cloud.randomness = 0;
      series_cloud.rotationThreshold = 0;
      series_cloud.padding(0, 0, 0, 0);

      series_cloud.data = data;
      series_cloud.id = 'wordCloud';

      series_cloud.dataFields.word = 'name';
      series_cloud.dataFields.value = 'value';
      series_cloud.dataFields.color = 'fill';

      series_cloud.labels.template.hiddenState.transitionDuration = 0;
      series_cloud.labels.template.defaultState.transitionDuration = 0;
      series_cloud.labels.template.padding(1, 6, 1, 6);
      series_cloud.labels.template.propertyFields.fill = 'fill';
      series_cloud.labels.template.zIndex = 0;
      series_cloud.labels.template.adapter.add('text', function ($val, $target) {
        $($target.dom).addClass('word_item');
        return '\r' + $val + '\r';
      });
      series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      series_cloud.labels.template.background.strokeWidth = 0;
      series_cloud.labels.template.background.adapter.add('stroke', function ($val, $target) {
        if ($target.dataItem && $target.dataItem.dataContext) {
          $target.fill = am4core.color($target.dataItem.dataContext.fill);
          return $target.dataItem.dataContext.fill;
        }
        return $val;
      });

      // Tooltip(Bubble)
      series_cloud.tooltip.getFillFromObject = false;
      series_cloud.tooltip.background.fill = am4core.color('#ffffff');
      series_cloud.tooltip.background.cornerRadius = 3;
      series_cloud.tooltip.background.strokeOpacity = 1;
      series_cloud.tooltip.background.strokeWidth = 2;
      series_cloud.tooltip.label.fill = am4core.color('#666666');
      series_cloud.labels.template.tooltipText = '[bold]{name}[/]: {value}';
      series_cloud.labels.template.adapter.add('tooltipHTML', function ($value, $target) {
        $($target.dom).addClass('word_item');
        $($target.background.dom)
          .find('rect')
          .attr('rx', $target.background.measuredHeight / 2);
        $target.background.dy = -$target.background.measuredHeight * 0.05;

        var flucUpDn = $target.dataItem.dataContext.fluc == null ? 'New' : $target.dataItem.dataContext.fluc;
        if (flucUpDn != 'New') {
          flucUpDn = $target.dataItem.dataContext.fluc > 0 ? 'up' : $target.dataItem.dataContext.fluc == 0 ? 'none' : 'dn';
        }
        var cateColor;
        var tooltipResult = '';
        tooltipResult += '<div class="chart_tooltip">';
        tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
        if (flucUpDn == 'New') {
          tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
        } else {
          tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + '%</span></span>';
        }
        tooltipResult += '</div>';

        if ($target.tooltip) {
          $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
        }
        return tooltipResult;
      });

      var hs = series_cloud.labels.template.states.create('hover');
      hs.properties.zIndex = 1;

      // Event
      series_cloud.labels.template.events.on('over', function ($e) {
        if ($e.target.tooltip.verticalOrientation == 'up') $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
        else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
      });
      series_cloud.labels.template.events.on('hit', function ($e) {
        $($e.target.dom).addClass('active').siblings().removeClass('active');
        console.log('클릭 데이터 >> ');
        console.log($e.target._dataItem._dataContext);
      });
      var indicator;
      var indicatorInterval;

      function showIndicator() {
        if (!indicator) {
          indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
          indicator.background.fill = am4core.color('#fafafa');
          indicator.width = am4core.percent(100);
          indicator.height = am4core.percent(100);

          var indicatorLabel = indicator.createChild(am4core.Label);
          indicatorLabel.text = 'Loading...';
          indicatorLabel.fill = '#909090';
          indicatorLabel.align = 'center';
          indicatorLabel.valign = 'middle';
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

      series_cloud.events.on('arrangeended', function (ev) {
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

    const $chart = document.querySelector('[data-card=연관키워드] [data-card=HOT30연관키워드] .js-chart');

    am4core.ready(function () {
      /*
        #8B3244 - 한반도
        #A47E4F - 외교/정치/군사
        #4F8058 - 경제/통상
        #3B448A - 기후변화
        #424242 -  기타
      */
      var data = [
        { name: '우리', fill: '#8B3244', value: 285, fluc: 38.7 },
        { name: '생각', fill: '#8B3244', value: 183, fluc: 38.7 },
        { name: '좋아하다', fill: '#8B3244', value: 338, fluc: 38.7 },
        { name: '한국', fill: '#8B3244', value: 312, fluc: 38.7 },
        { name: '못한다', fill: '#8B3244', value: 279, fluc: 38.7 },
        { name: '어렵다', fill: '#8B3244', value: 218, fluc: 38.7 },
        { name: '생각', fill: '#A47E4F', value: 197, fluc: 38.7 },
        { name: '높다', fill: '#A47E4F', value: 80, fluc: -40.1 },
        { name: '현재', fill: '#A47E4F', value: 222, fluc: 38.7 },
        { name: '지역', fill: '#A47E4F', value: 30, fluc: -40.1 },
        { name: '문제', fill: '#A47E4F', value: 191, fluc: 38.7 },
        { name: '사업', fill: '#A47E4F', value: 188, fluc: -36.0 },
        { name: '기업', fill: '#4F8058', value: 125, fluc: 38.7 },
        { name: '대상', fill: '#4F8058', value: 283, fluc: 38.7 },
        { name: '대표', fill: '#4F8058', value: 132, fluc: 38.7 },
        { name: '국내', fill: '#4F8058', value: 232, fluc: 38.7 },
        { name: '기대하다', fill: '#4F8058', value: 179, fluc: 38.7 },
        { name: '기준', fill: '#4F8058', value: 188, fluc: 38.7 },
        { name: '나라', fill: '#3B448A', value: 227, fluc: 38.7 },
        { name: '중요', fill: '#3B448A', value: 150, fluc: -40.1 },
        { name: '세계', fill: '#3B448A', value: 252, fluc: 38.7 },
        { name: '새로운', fill: '#424242', value: 60, fluc: -40.1 },
        { name: '전하', fill: '#424242', value: 80, fluc: 38.7 },
        { name: '중요하다', fill: '#424242', value: 90, fluc: -36.0 },
      ];

      var chart_cloud = am4core.create($chart, am4plugins_wordCloud.WordCloud);
      var series_cloud = chart_cloud.series.push(new am4plugins_wordCloud.WordCloudSeries());
      series_cloud.accuracy = 6;
      series_cloud.randomness = 0;
      series_cloud.rotationThreshold = 0;
      series_cloud.padding(0, 0, 0, 0);

      series_cloud.data = data;
      series_cloud.id = 'wordCloud';

      series_cloud.dataFields.word = 'name';
      series_cloud.dataFields.value = 'value';
      series_cloud.dataFields.color = 'fill';

      series_cloud.labels.template.hiddenState.transitionDuration = 0;
      series_cloud.labels.template.defaultState.transitionDuration = 0;
      series_cloud.labels.template.padding(1, 6, 1, 6);
      series_cloud.labels.template.propertyFields.fill = 'fill';
      series_cloud.labels.template.zIndex = 0;
      series_cloud.labels.template.adapter.add('text', function ($val, $target) {
        $($target.dom).addClass('word_item');
        return '\r' + $val + '\r';
      });
      series_cloud.cursorOverStyle = am4core.MouseCursorStyle.pointer;
      series_cloud.labels.template.background.strokeWidth = 0;
      series_cloud.labels.template.background.adapter.add('stroke', function ($val, $target) {
        if ($target.dataItem && $target.dataItem.dataContext) {
          $target.fill = am4core.color($target.dataItem.dataContext.fill);
          return $target.dataItem.dataContext.fill;
        }
        return $val;
      });

      // Tooltip(Bubble)
      series_cloud.tooltip.getFillFromObject = false;
      series_cloud.tooltip.background.fill = am4core.color('#ffffff');
      series_cloud.tooltip.background.cornerRadius = 3;
      series_cloud.tooltip.background.strokeOpacity = 1;
      series_cloud.tooltip.background.strokeWidth = 2;
      series_cloud.tooltip.label.fill = am4core.color('#666666');
      series_cloud.labels.template.tooltipText = '[bold]{name}[/]: {value}';
      series_cloud.labels.template.adapter.add('tooltipHTML', function ($value, $target) {
        $($target.dom).addClass('word_item');
        $($target.background.dom)
          .find('rect')
          .attr('rx', $target.background.measuredHeight / 2);
        $target.background.dy = -$target.background.measuredHeight * 0.05;

        var flucUpDn = $target.dataItem.dataContext.fluc == null ? 'New' : $target.dataItem.dataContext.fluc;
        if (flucUpDn != 'New') {
          flucUpDn = $target.dataItem.dataContext.fluc > 0 ? 'up' : $target.dataItem.dataContext.fluc == 0 ? 'none' : 'dn';
        }
        var cateColor;
        var tooltipResult = '';
        tooltipResult += '<div class="chart_tooltip">';
        tooltipResult += '<strong class="title">{name}</strong><span class="dv">{value}&nbsp;</span>';
        if (flucUpDn == 'New') {
          tooltipResult += '<span class="row"><span class="ui_fluc is-color-negative">New</span></span>';
        } else {
          tooltipResult += '<span class="row"><span class="ui_fluc before ' + flucUpDn + '">' + Math.abs($target.dataItem.dataContext.fluc) + '%</span></span>';
        }
        tooltipResult += '</div>';

        if ($target.tooltip) {
          $target.tooltip.background.stroke = $target.dataItem.dataContext.fill;
        }
        return tooltipResult;
      });

      var hs = series_cloud.labels.template.states.create('hover');
      hs.properties.zIndex = 1;

      // Event
      series_cloud.labels.template.events.on('over', function ($e) {
        if ($e.target.tooltip.verticalOrientation == 'up') $e.target.tooltip.dy = -($e.target.background.measuredHeight / 3);
        else $e.target.tooltip.dy = $e.target.background.measuredHeight / 3;
      });
      series_cloud.labels.template.events.on('hit', function ($e) {
        $($e.target.dom).addClass('active').siblings().removeClass('active');
        console.log('클릭 데이터 >> ');
        console.log($e.target._dataItem._dataContext);
      });
      var indicator;
      var indicatorInterval;

      function showIndicator() {
        if (!indicator) {
          indicator = chart_cloud.tooltipContainer.createChild(am4core.Container);
          indicator.background.fill = am4core.color('#fafafa');
          indicator.width = am4core.percent(100);
          indicator.height = am4core.percent(100);

          var indicatorLabel = indicator.createChild(am4core.Label);
          indicatorLabel.text = 'Loading...';
          indicatorLabel.fill = '#909090';
          indicatorLabel.align = 'center';
          indicatorLabel.valign = 'middle';
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

      series_cloud.events.on('arrangeended', function (ev) {
        hideIndicator();
      });
    });
  }
}); // DOCUMENT READY...
