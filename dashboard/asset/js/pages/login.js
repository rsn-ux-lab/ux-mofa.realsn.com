// DOCUMENT READY...
$(function () {
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * container height 수직 중앙 정렬
     *
     **/

    const $container = document.querySelector("#container");
    const $header = document.querySelector("#header");
    const $footer = document.querySelector("#footer");

    window.fitContainer({
      $target: $container,
      excepts: [$header, $footer], //제외 영역 배열로 지정
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 로그인 - 유효성체크
     *
     **/
    const $login = document.querySelector(".l-member--login");
    const $inpId = $login.querySelector(".form-row[data-row=id] input");
    const $inpPass = $login.querySelector(".form-row[data-row=password] input");
    const $btnEye = $login.querySelector(".btn-eye");
    const $btnLogin = $login.querySelector(".btn-login");

    // ID & Pass, Empity 상태에서 button 비활성화
    [$inpId, $inpPass].forEach((_$el) => {
      _$el.addEventListener("keyup", (e) => {
        if (Boolean($inpId.value) && Boolean($inpPass.value)) $btnLogin.removeAttribute("disabled");
        else $btnLogin.setAttribute("disabled", "");
      });
    });

    // 비밀번호 미리보기
    $btnEye.addEventListener("click", (e) => {
      $btnEye.classList.toggle("btn-eye--is-active");

      const isAcitve = e.target.classList.contains("btn-eye--is-active");

      if (isAcitve) $inpPass.setAttribute("type", "text");
      else $inpPass.setAttribute("type", "password");
      $inpPass.dispatchEvent(new Event("change"));
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /*
     *
     * 상황별 preview 가져오기
     *
     **/
    const name = new URLSearchParams(location.search).get("preview");

    switch (name) {
      case "fail":
        // 팝업 - 로그인 실패
        $.modal({ className: "alert", message: `<p class="text-center">ID 또는 PW를 잘못 입력했습니다.<br> 입력하신 내용을 다시 확인해주세요.</p>` });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
