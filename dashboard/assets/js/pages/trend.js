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
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 급상승 이슈 분석 > 전체 이슈 현황
     *  block : 전체 이슈 현황 컨텐츠
     *  event : amChart
     *
     */
    if (HOST.develop || HOST.product) return;
    const $charts = document.querySelectorAll('[data-section=전체이슈현황] [data-card=전체이슈현황] .js-chart');

    for (var i = 0; $charts.length > i; i++) {
      //  ------- 차트 그리는 한 사이클 -------
      if ($charts[i].querySelector('svg') !== null) {
        $charts[i].querySelector('svg').removeChild('path');
      }

      $($charts[i]).sparkline({
        stroke: '#18A0FB',
        // data_before: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
        data: [Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random(), Math.random()],
      });
      // ------- 차트 그리는 사이클 끝 -------
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 급상승 이슈 분석 > 전체 이슈 현황 > 이슈 상세 현황 > 기간별 연관어 변화
     *  block : 랭킹리스트
     *  event : tooltip, mouseover - mouseout
     *
     */
    // install
    const $keyword = document.querySelector('[data-section=전체이슈현황] [data-card=이슈상세현황] [data-card=기간별연관어변화] .scroll-container');

    //  같은 키워드 색상 액티브
    let addHoverEvent = function () {
      for (let i = 0; i < $keyword.querySelectorAll('tbody tr').length; i++) {
        // 전체 tr 엘리먼트에 이벤트 생성
        $keyword.querySelectorAll('tbody tr')[i].addEventListener('mouseover', (e) => {
          for (let i2 = 0; i2 < $keyword.querySelectorAll('tbody tr').length; i2++) {
            $keyword.querySelectorAll('tbody tr')[i2].classList.remove('is-hover');
          }
          // tr 엘리먼트 찾을때까지 부모노드 순회
          let targetTr = e.target;
          for (; targetTr.nodeName != 'TR'; targetTr = targetTr.parentElement);
          // tr 태그 data-idx 값 출력 - 같은 키워드 찾는 용도로 사용
          var keyCode = targetTr.getAttribute('data-idx');
          if (e.type == 'mouseover') {
            // keyCode = $(this).find('td:nth-child(2)').attr('data-idx');
            if (keyCode) {
              for (let l = 0; l < $keyword.querySelectorAll('[data-idx="' + keyCode + '"]').length; l++) {
                $keyword.querySelectorAll('[data-idx="' + keyCode + '"]')[l].classList.add('is-hover');
              }
            }
          } else {
            keyCode = null;
          }
        });
      }
    };

    addHoverEvent();

    //observer
    let observer = new MutationObserver(() => {
      // 엘리먼트 새로 생성시 이벤트 추가 - 같은 키워드 색상 액티브
      addHoverEvent();
    });

    observer.observe($keyword, { childList: true, subtree: true });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 급상승 이슈 분석 > 전체 이슈 현황 > 이슈 상세 현황 > 정보량 및 감성 추이
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
    if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector('[data-section=전체이슈현황] [data-card=이슈상세현황] [data-card=정보량및감성추이] .js-chart');
    var chart = AmCharts.makeChart($chart, {
      type: 'serial',
      path: '//public.realsn.com/libs/amcharts/v3',
      categoryField: 'category',
      addClassNames: true,
      fontSize: 12,
      columnWidth: 0.32,
      autoMarginOffset: 10,
      marginRight: 10,
      marginTop: 15,
      colors: ['#5BA1E0', '#EA7070', '#808080', '#424242'],
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
          stackable: false,
          showHandOnHover: true,
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: 'AmGraph-2',
          title: '부정',
          type: 'column',
          valueField: 'column-2',
          stackable: false,
          showHandOnHover: true,
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          fillAlphas: 1,
          id: 'AmGraph-3',
          title: '중립',
          type: 'column',
          valueField: 'column-3',
          stackable: false,
          showHandOnHover: true,
        },
        {
          balloonFunction: get_chartBalloonValueTextAllLine,
          // "balloonText": "<strong>[[title]]</strong> : <span style='font-size: 14px;'>[[value]]</span> <span style='color:#909090'>([[percents]]%)</span>",
          id: 'AmGraph-4',
          title: '전체',
          valueField: 'column-4',
          stackable: false,
          lineThickness: 2,
          bullet: 'round',
          bulletSize: 10,
          bulletColor: '#FFFFFF',
          bulletBorderAlpha: 1,
          bulletBorderColor: '#424242',
          valueAxis: 'ValueAxis-2',
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
        {
          id: 'ValueAxis-2',
          stackType: 'regular',
          position: 'right',
          zeroGridAlpha: 0,
          axisThickness: 0,
          color: '#666666',
          fontSize: 11,
          dashLength: 0,
          gridAlpha: 0,
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
        marginTop: 10,
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
        { category: '2021-09-23', 'column-1': 0, 'column-2': 0, 'column-3': 0, 'column-4': 0 },
        { category: '2021-09-24', 'column-1': 1126, 'column-2': 1127, 'column-3': 1129, 'column-3': 1129, 'column-4': 5129 },
        { category: '2021-09-01 ~ 2021-09-07', 'column-1': 1130, 'column-2': 1233, 'column-3': 1112, 'column-4': 5129 },
        { category: '2021-09-08 ~ 2021-09-14', 'column-1': 1111, 'column-2': 1113, 'column-3': 1110, 'column-4': 5129 },
      ],
    });
    chart.addListener('clickGraphItem', function ($e) {
      $.modal({ isExist: true, className: 'data-table--related' });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 급상승 이슈 분석 > 전체 이슈 현황 > 이슈 상세 현황 > 연관어 비교
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */

    const $scrollEvtNode = document.querySelectorAll('[class*=js-scroll-evt]');

    // 클래스명만 가져오기
    let scrollEvtClass = ($el) => {
      for (let idx of $el.classList) {
        if (idx.indexOf('js-scroll-evt') > -1) {
          return (txt = idx);
        }
      }
    };

    // 지정한 이벤트 시작 지점값 계산
    let getMarginRoot = (className) => {
      // top / center / bottom
      // 1 ~ 100 백분율 계산
      let positionTxt = className.split('js-scroll-evt')[1].split('-')[1]; // 받아온 값의 포지션 또는 백분율 위치 확인
      // let startEvtPos = '0px'; // rootMargin에 넘겨줄 값임.
      let setOption = {};
      // 디폴트값 - 예외처리를 변수자체에서 함
      if (positionTxt) {
        if (positionTxt === 'top') {
          // top 지정
          setOption = {
            root: null,
            rootMargin: '0% 0% -100% 0%',
            threshold: 0,
          };
        } else if (positionTxt === 'center') {
          // center 지정
          setOption = {
            root: null,
            rootMargin: '0% 0% -25% 0%',
            threshold: 1,
          };
        } else if (positionTxt === 'bottom') {
          // bottom 지정
          setOption = {
            root: null,
            rootMargin: '99% 0% 0% 0%',
            threshold: 1,
          };
        } else if (Number(positionTxt)) {
          // 받은 값이 숫자일 경우 백분율 위치 계산
          setOption = {
            root: null,
            rootMargin: '0% 0% ' + -(100 - Number(positionTxt)) + '% 0% ',
            threshold: 0,
          };
        }
      }
      return setOption;
    };

    // js-scroll-evt 노드 감지 - 이벤트 거는 펑션 추가
    for (let i = 0; i < $scrollEvtNode.length; i++) {
      let $node = $scrollEvtNode[i];
      let classTxt = scrollEvtClass($node);
      let setOptions = getMarginRoot(classTxt);

      // 영역에 닿았을 때에 콜백할 함수
      let callbackFx = (obs, ins) => {
        moveTheTreemap(obs);
      };

      // 여기서만 사용 할 함수 ~
      let moveTheTreemap = (obs) => {
        if (obs[0].isIntersecting) $node.querySelector('.keyword-list').classList.add('is-show');
        else $node.querySelector('.keyword-list').classList.remove('is-show');
      };

      let observer = new IntersectionObserver(callbackFx, setOptions);
      observer.observe($node);
    }
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
    const name = new URLSearchParams(location.search).get('preview');

    switch (name) {
      // modal - 관련정보
      case 'modalRelated':
        $.modal({ isExist: true, className: 'data-table--related' });
        break;

      // modal - 유사목록
      case 'modalSimilar':
        $.modal({ isExist: false, className: 'data-table--similar' });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
 
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    
    /*
    *
    * 전체 이슈 현황 tr active
    * 
    *
    */

    let analyze_btns = document.querySelectorAll(".c-table .analyze_btn");

    analyze_btns.forEach(function($each) {
      
      $each.addEventListener("click", function() {
        let $trEl = $each.closest("tr");
        let $trSiblings = $trEl.parentElement.children;

        for (var i=0; i<$trSiblings.length; i++) {
          $trSiblings[i].classList.remove("tr_active");
        }

        $trEl.classList.add("tr_active");
      });
    })

    // var btns = $(".c-table .analyze_btn");

    // btns.click(function(){
    //   $(".c-table tr").removeClass("tr_active");
    //   $(this).closest("tr").addClass("tr_active");
    // });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
