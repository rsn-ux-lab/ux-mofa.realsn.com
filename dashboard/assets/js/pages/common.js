// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * ???
     *
     */

    window.designScripts();
    window.tablePublic();
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 검색기간 "30일" input 값 강제로 checked 처리
     *
     */

    setTimeout(() => {
      const $datepicker = document.querySelector(".ui_datepickers .grps");
      const $inpMonth = $datepicker.childNodes.item(2).querySelector("input");

      $inpMonth.checked = true;
    }, 1000);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *  Device 체크 (custom data attributes)
     *
     */

    $("#wrap").wait(100).attr("data-device-detail", $.getDevice().detail);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * wrapper is ready
     *
     */

    const $wrap = document.querySelector("#wrap");
    const $loadingWrap = document.querySelector("#loadingWrap");
    let isState;

    $wrap.style.opacity = 1;
    $wrap.style.visibility = "visible";

    const removeLoading = () => {
      try {
        if (Boolean($loadingWrap) === false) throw new Error("#loadingWrap 찾을 수 없습니다.");
      } catch (_err) {
        console.log(`%c common.js %c ${_err}`, "color:yellow;background:#ffb6c16b", "color:red;");
        return;
      }

      $loadingWrap
        .animate([{ opacity: 1 }, { opacity: 0 }], {
          duration: 300,
          fill: "forwards",
        })
        .finished.then(() => {
          $loadingWrap.remove();
        });
    };

    window.addEventListener("load", () => {
      removeLoading();
      isState = true;
    });

    setTimeout(() => {
      removeLoading();
      !isState && console.log("리소스가 정상적으로 다운로드 되지 않았습니다.");
    }, 2000);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     *   파라미터 값으로 화면 스크롤 이동
     *
     *   [URL 작성 예]
     *   https://도메인/?moveto=data-card=감성추이 // $("[data-card='감성추이']") 위치로 이동
     *   https://도메인/?moveto=section // $("#section") 위치로 이동
     *   https://도메인/?moveto=card // $(".card") 위치로 이동
     *   https://도메인/?moveto=card--.js-sticky // $(".js-sticky") 높이값을 제외한 $(".card") 위치로 이동
     *   https://도메인/?moveto=card--50 // 50px 높이값을 제외한 $(".card") 위치로 이동
     *
     */

    setTimeout(() => $.moveToParams(), 1000);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 스크롤 이동
     *
     */

    $(".js-anchor").anchor();
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * form 요소 인러랙션 일괄 적용
     *
     */

    $("#wrap").formTamplate();
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * data table 인러랙션 일괄 적용
     *
     */
    document.querySelector("#wrap").talbeTamplate();
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * TEXT 말줄임
     *
     */
    // $(".js-clamp-1").clamp(1);
    // $(".js-clamp-2").clamp(2);
    // $(".js-clamp-3").clamp(3);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 데이터 불러오는 동안 대기상태 표시
     *
     * [html 작성 예]
     * <div data-loding-spinner="true"></div> // 로딩 표시
     * <div data-loding-spinner="false"></div> // 로딩 감추기
     * <div data-loding-spinner="true dimmed"></div> // 딤드 효과 추가 및 로딩 컬리 흰색 변경(기본값 : 검은색)
     * <div data-loding-spinner="true 1rem"></div> // rem 단위로 숫자 삽입하는 경우 크기 변경됨(기본값 : 6rem)
     *
     */
    $("[data-loding-spinner]").lodingSpinner();
  }
  /*
      ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
      */
  {
    /**
     *
     *.js-is-appear에 FadeIn 적용 ▼
     *
     *  [html 작성 예]
     *      //기본값 적용시
     *      <div class="js-is-appear">
     *
     *      //scroll.top 사용자값 입력시(예: class 뒤에 숫자 입력)
     *      <div class="js-is-appear50">
     *
     *  [CSS 작성 예]
     *      div {opacity:0;transition:none}
     *      div.appear {opacity:1;transition:opacity 0.3s ease-in-out}
     *
     */
    const $appears = document.querySelectorAll("[class*=js-is-appear]");

    $appears.forEach((_each) => {
      const $this = _each;
      const classNames = $this.getAttribute("class").split(" ");
      const posY = classNames
        .map((_arr) => {
          if (_arr.indexOf("js-is-appear") !== -1) {
            let num = Number(_arr.replace(/[^0-9]/g, ""));

            $this.classList.remove(_arr); //removeClass
            return (num = num !== 0 ? num : 70); //scroll.top 기본값 70 설정함
          }
        })
        .filter((_el) => _el)[0];

      // addClass('js-is-appear')
      $.scrollAction({
        $target: $this,
        top: posY,
        scrollDownAction: function () {
          $this.classList.add("is-appear");
        },
        scrollUpAction: function () {
          $this.classList.remove("is-appear");
        },
      });
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * Sidebar - QuickMenu
     */
    window.setQuickMenu();
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * GNB - active
     *
     */

    const $header = document.querySelector("#header");
    const $links = $header.querySelectorAll("#header [data-file-path]");
    const paths = Array.from($links).map((_$link) => _$link.getAttribute("data-file-path"));
    const url = location.pathname.match(/(?<=\/\s*).*?(?=\s*\/)/gs);
    const hasPath = paths.find((_path) => _path === url[url.length - 1]);

    if (hasPath) $header.querySelector(`[data-file-path="${hasPath}"]`).classList.add("header-gnb__link--is-active");
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * GNB - link up
     *
     */

    const $header = document.querySelector("#header");
    const $links = $header.querySelectorAll("#header [data-file-path]");

    Array.from($links).forEach((_$link) => {
      const href = _$link.getAttribute("data-file-path");

      _$link.setAttribute("href", `../${href}`);
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * #header 숨기기 (custom data attributes)
     *
     */

    const $container = document.querySelector("#container");
    const $header = document.querySelector("#header");
    const isHide = $container.getAttribute("data-header-hide");

    if (isHide) $header.parentNode.removeChild($header);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * #footer 숨기기 (custom data attributes)
     *
     */

    const $container = document.querySelector("#container");
    const $footer = document.querySelector("#footer");
    const isHide = $container.getAttribute("data-footer-hide");

    if (isHide) $footer.parentNode.removeChild($footer);
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * depth : 대시보드 공통
     * event : TEST 파라미터
     *
     */

    const name = new URLSearchParams(location.search).get("preview");

    if (name) {
      switch (name) {
        //  데이터 로딩 예시
        case "loading":
          const $lodings = document.querySelectorAll("[data-loding-spinner]");

          Array.from($lodings).forEach((_$loding) => {
            _$loding.setAttribute("data-loding-spinner", "true");
          });
          break;
        //  데이터 없는 경우
        case "empty":
          const $emptys = document.querySelectorAll("[data-is-empty]");

          Array.from($emptys).forEach((_$empty) => {
            _$empty.setAttribute("data-is-empty", "true");
          });
          break;
        case "notys":
          setInterval(() => notys.info("데이터를 불러오고 있습니다", "right top"), 1500);
          setInterval(() => notys.success("데이터 불러오기가 완료되었습니다.<br>", "right top"), 2500);
          setInterval(() => notys.error("데이터 불러오기에 실패하였습니다.", "right top"), 3500);
          break;
      }
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
