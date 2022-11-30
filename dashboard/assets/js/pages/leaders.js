// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 해외여론주도층 분석 > 주요현황 > 주요토픽분석
     *  block : 주요토픽분석
     *  event : 토픽 할성화 상태  1개 미만인 경우 경고창
     *
     */

    class Modal {
      /* 기본값 */
      constructor() {
        this.$fieldset;
        this.$inputs;
        this.isState = false;
      }

      /* 초기화 */
      init(_$fieldset) {
        this.removeEvent();

        this.$fieldset = _$fieldset;
        this.$inputs = this.$fieldset.querySelectorAll("[data-fieldset=주요토픽분석] input");
        this.$inputs && this.$inputs.forEach((_$input) => _$input.addEventListener("click", this.clickEvent));
      }

      /* 이벤트 제거 */
      removeEvent() {
        this.$inputs && this.$inputs.forEach((_$input) => _$input.removeEventListener("click", this.clickEvent));
      }

      /* modal 활성화 */
      clickEvent = (e) => {
        const isProtect = this.$fieldset.classList.contains("form-fieldset--is-protect");

        if (isProtect && this.isState) {
          $.modal({
            className: "alert",
            message: "최소 한 개 이상 선택되어야 합니다.<br> 다른 항목을 선택 후 해제해 주세요. ",
          });
        }
        this.isState = isProtect ? true : false;
      };
    }

    // install
    const $fieldset = document.querySelector("[data-fieldset=주요토픽분석]");
    const modal = new Modal();

    $fieldset.classList.add("form-fieldset--is-active");
    modal.init($fieldset);

    //observer
    let observer = new MutationObserver(() => {
      $fieldset.classList.remove("form-fieldset--is-active");
      setTimeout(() => $fieldset.classList.add("form-fieldset--is-active"), 100);
      modal.init($fieldset);
    });

    observer.observe($fieldset, { childList: true, subtree: true });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 해외여론주도층 분석 > 주요현황 > 세계현황
     *  block : 차트(월드맵)
     *  event : new AmCharts
     *
     */

    if (HOST.develop || HOST.product) return;

    const $chart = document.querySelector("[data-section=주요현황] [data-card=세계현황] .js-chart");

    // Create root
    var root = am5.Root.new($chart);

    // Set themes
    root.setThemes([am5themes_Animated.new(root)]);

    // Create chart
    var chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoNaturalEarth1(),
        // layout: root.horizontalLayout,,
        paddingBottom: 15,
      })
    );

    // Create polygon series
    var polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
        exclude: ["AQ"],
        valueField: "value",
        calculateAggregates: true,
        paddingBottom: 10,
      })
    );

    polygonSeries.mapPolygons.template.setAll({
      tooltipText: "{name}: {value}",
      fill: am5.color(0xdae2ec),
      stroke: am5.color(0xffffff),
    });

    polygonSeries.set("heatRules", [
      {
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color(0xdae2ec),
        max: am5.color(0x10223f),
        key: "fill",
      },
    ]);

    // heatLegend.showValue(500);
    //map에서 마우스 오버 시 하단에 tooltip으로 수치를 띄움
    polygonSeries.mapPolygons.template.events.on("pointerover", function (ev) {
      heatLegend.showValue(ev.target.dataItem.get("value"));
    });

    //map에서 마우스 오버 해제 시 tooltip을 숨김
    polygonSeries.mapPolygons.template.events.on("pointerout", function () {
      heatLegend.getTooltip().hide();
    });

    // map data name 으로 ID 찾는 스크립트
    // am5geodata_worldLow.features.find((data) => {
    //   if (data.properties.name == 'Vanuatu') console.log(data.properties);
    // });

    var data = [
      { id: "AF", name: "Afghanistan", value: 32358260 },
      { id: "AL", name: "Albania", value: 3215988 },
      { id: "DZ", name: "Algeria", value: 35980193 },
      { id: "AO", name: "Angola", value: 19618432 },
      { id: "AR", name: "Argentina", value: 40764561 },
      { id: "AM", name: "Armenia", value: 3100236 },
      { id: "AU", name: "Australia", value: 3100236 },
      { id: "AT", name: "Austria", value: 8413429 },
      { id: "AZ", name: "Azerbaijan", value: 8413429 },
      { id: "BS", name: "Bahamas", value: 1323535 },
      { id: "BH", name: "Bahrain", value: 1323535 },
      { id: "BD", name: "Bangladesh", value: 15049365 },
      { id: "BY", name: "Belarus", value: 9559441 },
      { id: "BE", name: "Belgium", value: 10754056 },
      { id: "BZ", name: "Belize", value: 10754056 },
      { id: "BJ", name: "Benin", value: 9099922 },
      { id: "BT", name: "Bhutan", value: 738267 },
      { id: "BO", name: "Bolivia", value: 738267 },
      { id: "BA", name: "Bosnia and Herzegovina", value: 3752228 },
      { id: "BW", name: "Botswana", value: 738267 },
      { id: "BR", name: "Brazil", value: 738267 },
      { id: "BN", name: "Brunei", value: 405938 },
      { id: "BG", name: "Bulgaria", value: 7446135 },
      { id: "BF", name: "Burkina Faso", value: 16967845 },
      { id: "BI", name: "Burundi", value: 8575172 },
      { id: "KH", name: "Cambodia", value: 14305183 },
      { id: "CM", name: "Cameroon", value: 20030362 },
      { id: "CA", name: "Canada", value: 34349561 },
      { id: "CV", name: "Cape Verde", value: 500585 },
      { id: "CF", name: "Central African Rep.", value: 4486837 },
      { id: "TD", name: "Chad", value: 11525496 },
      { id: "CL", name: "Chile", value: 17269525 },
      { id: "CN", name: "China", value: 1347565324 },
      { id: "CO", name: "Colombia", value: 46927125 },
      { id: "KM", name: "Comoros", value: 753943 },
      { id: "CD", name: "Congo, Dem. Rep.", value: 67757577 },
      { id: "CG", name: "Congo, Rep.", value: 4139748 },
      { id: "CR", name: "Costa Rica", value: 4726575 },
      { id: "CI", name: "Cote d'Ivoire", value: 20152894 },
      { id: "HR", name: "Croatia", value: 4395560 },
      { id: "CU", name: "Cuba", value: 11253665 },
      { id: "CY", name: "Cyprus", value: 1116564 },
      { id: "CZ", name: "Czech Rep.", value: 10534293 },
      { id: "DK", name: "Denmark", value: 5572594 },
      { id: "DJ", name: "Djibouti", value: 905564 },
      { id: "DO", name: "Dominican Rep.", value: 10056181 },
      { id: "EC", name: "Ecuador", value: 14666055 },
      { id: "EG", name: "Egypt", value: 82536770 },
      { id: "SV", name: "El Salvador", value: 6227491 },
      { id: "GQ", name: "Equatorial Guinea", value: 720213 },
      { id: "ER", name: "Eritrea", value: 5415280 },
      { id: "EE", name: "Estonia", value: 1340537 },
      { id: "ET", name: "Ethiopia", value: 84734262 },
      { id: "GF", name: "French Guiana", value: 868406 },
      { id: "FJ", name: "Fiji", value: 868406 },
      { id: "FI", name: "Finland", value: 5384770 },
      { id: "FR", name: "France", value: 63125894 },
      { id: "GA", name: "Gabon", value: 1534262 },
      { id: "GM", name: "Gambia", value: 1776103 },
      { id: "GE", name: "Georgia", value: 4329026 },
      { id: "DE", name: "Germany", value: 82162512 },
      { id: "GH", name: "Ghana", value: 24965816 },
      { id: "GL", name: "Greenland", value: 11390031 },
      { id: "GR", name: "Greece", value: 11390031 },
      { id: "GT", name: "Guatemala", value: 14757316 },
      { id: "GN", name: "Guinea", value: 10221808 },
      { id: "GW", name: "Guinea-Bissau", value: 1547061 },
      { id: "GY", name: "Guyana", value: 756040 },
      { id: "HT", name: "Haiti", value: 10123787 },
      { id: "HN", name: "Honduras", value: 7754687 },
      { id: "HK", name: "Hong Kong, China", value: 7122187 },
      { id: "HU", name: "Hungary", value: 9966116 },
      { id: "IS", name: "Iceland", value: 324366 },
      { id: "IN", name: "India", value: 1241491960 },
      { id: "ID", name: "Indonesia", value: 242325638 },
      { id: "IR", name: "Iran", value: 74798599 },
      { id: "IQ", name: "Iraq", value: 32664942 },
      { id: "IE", name: "Ireland", value: 4525802 },
      { id: "IL", name: "Israel", value: 7562194 },
      { id: "IT", name: "Italy", value: 60788694 },
      { id: "JM", name: "Jamaica", value: 2751273 },
      { id: "JP", name: "Japan", value: 126497241 },
      { id: "JO", name: "Jordan", value: 6330169 },
      { id: "KZ", name: "Kazakhstan", value: 16206750 },
      { id: "KE", name: "Kenya", value: 41609728 },
      { id: "KP", name: "Korea, Dem. Rep.", value: 24451285 },
      { id: "KR", name: "Korea, Rep.", value: 48391343 },
      { id: "XK", name: "Kosovo", value: 24451285 },
      { id: "KW", name: "Kuwait", value: 2818042 },
      { id: "KG", name: "Kyrgyzstan", value: 5392580 },
      { id: "LA", name: "Laos", value: 6288037 },
      { id: "LV", name: "Latvia", value: 2243142 },
      { id: "LB", name: "Lebanon", value: 4259405 },
      { id: "LS", name: "Lesotho", value: 2193843 },
      { id: "LR", name: "Liberia", value: 4128572 },
      { id: "LY", name: "Libya", value: 6422772 },
      { id: "LT", name: "Lithuania", value: 3307481 },
      { id: "LU", name: "Luxembourg", value: 515941 },
      { id: "MK", name: "Macedonia, FYR", value: 2063893 },
      { id: "MG", name: "Madagascar", value: 21315135 },
      { id: "MW", name: "Malawi", value: 15380888 },
      { id: "MY", name: "Malaysia", value: 28859154 },
      { id: "ML", name: "Mali", value: 15839538 },
      { id: "MR", name: "Mauritania", value: 3541540 },
      { id: "MU", name: "Mauritius", value: 1306593 },
      { id: "MX", name: "Mexico", value: 114793341 },
      { id: "MD", name: "Moldova", value: 3544864 },
      { id: "MN", name: "Mongolia", value: 2800114 },
      { id: "ME", name: "Montenegro", value: 632261 },
      { id: "MA", name: "Morocco", value: 32272974 },
      { id: "MZ", name: "Mozambique", value: 23929708 },
      { id: "MM", name: "Myanmar", value: 48336763 },
      { id: "NA", name: "Namibia", value: 2324004 },
      { id: "NP", name: "Nepal", value: 30485798 },
      { id: "NL", name: "Netherlands", value: 16664746 },
      { id: "NC", name: "New Caledonia", value: 4414509 },
      { id: "NZ", name: "New Zealand", value: 4414509 },
      { id: "NI", name: "Nicaragua", value: 5869859 },
      { id: "NE", name: "Niger", value: 16068994 },
      { id: "NG", name: "Nigeria", value: 162470737 },
      { id: "NO", name: "Norway", value: 4924848 },
      { id: "OM", name: "Oman", value: 2846145 },
      { id: "PK", name: "Pakistan", value: 176745364 },
      { id: "PA", name: "Panama", value: 3571185 },
      { id: "PG", name: "Papua New Guinea", value: 7013829 },
      { id: "PY", name: "Paraguay", value: 6568290 },
      { id: "PE", name: "Peru", value: 29399817 },
      { id: "PH", name: "Philippines", value: 94852030 },
      { id: "PL", name: "Poland", value: 38298949 },
      { id: "PT", name: "Portugal", value: 10689663 },
      { id: "PR", name: "Puerto Rico", value: 3745526 },
      { id: "QA", name: "Qatar", value: 1870041 },
      { id: "RO", name: "Romania", value: 21436495 },
      { id: "RU", name: "Russia", value: 142835555 },
      { id: "RW", name: "Rwanda", value: 10942950 },
      { id: "SA", name: "Saudi Arabia", value: 28082541 },
      { id: "SN", name: "Senegal", value: 12767556 },
      { id: "RS", name: "Serbia", value: 9853969 },
      { id: "SL", name: "Sierra Leone", value: 5997486 },
      { id: "SG", name: "Singapore", value: 5187933 },
      { id: "SK", name: "Slovak Republic", value: 5471502 },
      { id: "SI", name: "Slovenia", value: 2035012 },
      { id: "SB", name: "Solomon Islands", value: 552267 },
      { id: "SO", name: "Somalia", value: 9556873 },
      { id: "ZA", name: "South Africa", value: 50459978 },
      { id: "ES", name: "Spain", value: 46454895 },
      { id: "LK", name: "Sri Lanka", value: 21045394 },
      { id: "SS", name: "South Sudan", value: 1210453941 },
      { id: "SD", name: "Sudan", value: 34735288 },
      { id: "SR", name: "Suriname", value: 529419 },
      { id: "SZ", name: "Swaziland", value: 1203330 },
      { id: "SJ", name: "Svalbard and Jan Mayen", value: 111203330 },
      { id: "SE", name: "Sweden", value: 9440747 },
      { id: "CH", name: "Switzerland", value: 7701690 },
      { id: "SY", name: "Syria", value: 20766037 },
      { id: "TW", name: "Taiwan", value: 23072000 },
      { id: "TJ", name: "Tajikistan", value: 6976958 },
      { id: "TZ", name: "Tanzania", value: 46218486 },
      { id: "TH", name: "Thailand", value: 69518555 },
      { id: "TL", name: "Timor-Leste", value: 69518555 },
      { id: "TG", name: "Togo", value: 6154813 },
      { id: "TT", name: "Trinidad and Tobago", value: 1346350 },
      { id: "TN", name: "Tunisia", value: 10594057 },
      { id: "TR", name: "Turkey", value: 73639596 },
      { id: "TM", name: "Turkmenistan", value: 5105301 },
      { id: "UG", name: "Uganda", value: 34509205 },
      { id: "UA", name: "Ukraine", value: 45190180 },
      { id: "AE", name: "United Arab Emirates", value: 7890924 },
      { id: "GB", name: "United Kingdom", value: 62417431 },
      { id: "US", name: "United States", value: 313085380 },
      { id: "UY", name: "Uruguay", value: 3380008 },
      { id: "UZ", name: "Uzbekistan", value: 27760267 },
      { id: "VU", name: "Vanuatu", value: 29436891 },
      { id: "VE", name: "Venezuela", value: 29436891 },
      { id: "EH", name: "Western Sahara", value: 2312152369 },
      { id: "PS", name: "West Bank and Gaza", value: 4152369 },
      { id: "VN", name: "Vietnam", value: 88791996 },
      { id: "YE", name: "Yemen, Rep.", value: 24799880 },
      { id: "ZM", name: "Zambia", value: 13474959 },
      { id: "ZW", name: "Zimbabwe", value: 12754378 },
    ];

    polygonSeries.data.setAll(data);

    var heatLegend = chart.children.push(
      am5.HeatLegend.new(root, {
        orientation: "horizontal",
        position: "absolute",
        x: 0,
        y: am5.percent(95),
        startColor: am5.color(0xdae2ec),
        endColor: am5.color(0x10223f),
        startText: "Lowest",
        endText: "Highest",
        stepCount: 6,
      })
    );

    heatLegend.startLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("startColor"),
    });

    heatLegend.endLabel.setAll({
      fontSize: 12,
      fill: heatLegend.get("endColor"),
    });

    // change this to template when possible
    polygonSeries.events.on("datavalidated", function () {
      heatLegend.set("startValue", polygonSeries.getPrivate("valueLow"));
      heatLegend.set("endValue", polygonSeries.getPrivate("valueHigh"));
    });

    // hover
    polygonSeries.mapPolygons.template.states.create("hover", {
      fill: am5.color(0x356ea6),
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  depth : 해외여론주도층 분석 > 주요현황 > 연관키워드
     *  block : 차트(워드 클라우드)
     *  event : new AmCharts
     *
     */
     if (HOST.develop || HOST.product) return;
    const $chart = document.querySelector("[data-section=주요현황] [data-card=연관키워드] .js-chart");

    am4core.ready(function () {
      var data = [
        { name: "우리", fill: "#d73b9e", value: 1100, fluc: 38.7 },
        { name: "오늘", fill: "#d73b9e", value: 536, fluc: 38.7 },
        { name: "지역", fill: "#d73b9e", value: 368, fluc: 38.7 },
        { name: "지역", fill: "#ffa800", value: 363, fluc: 38.7 },
        { name: "지역", fill: "#5ba1e0", value: 358, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 312, fluc: 38.7 },
        { name: "지역", fill: "#54c2f0", value: 271, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 267, fluc: -40.1 },
        { name: "지역", fill: "#54c2f0", value: 255, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 235, fluc: -40.1 },
        { name: "지역", fill: "#54c2f0", value: 234, fluc: 38.7 },
        { name: "지역", fill: "#f1711b", value: 229, fluc: -36.0 },
        { name: "지역", fill: "#d73b9e", value: 225, fluc: 38.7 },
        { name: "지역", fill: "#d73b9e", value: 211, fluc: 38.7 },
        { name: "지역", fill: "#d73b9e", value: 194, fluc: 38.7 },
        { name: "지역", fill: "#ffa800", value: 190, fluc: 38.7 },
        { name: "지역", fill: "#5ba1e0", value: 188, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 184, fluc: 38.7 },
        { name: "지역", fill: "#54c2f0", value: 183, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 182, fluc: -40.1 },
        { name: "지역", fill: "#54c2f0", value: 171, fluc: 38.7 },
        { name: "지역", fill: "#2cb24a", value: 171, fluc: -40.1 },
        { name: "지역", fill: "#54c2f0", value: 168, fluc: 38.7 },
        { name: "지역", fill: "#f1711b", value: 167, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 163, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 160, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 160, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 153, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 148, fluc: -36.0 },
        { name: "지역", fill: "#f1711b", value: 148, fluc: -36.0 },
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
        console.log("클릭 데이터 >> ");
        console.log($e.target._dataItem._dataContext);
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
}); // DOCUMENT READY...
