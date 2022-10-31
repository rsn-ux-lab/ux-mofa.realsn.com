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
     * 2단계 인증
     *
     **/

    // 코드인풋 키업시 success 처리
    const $codeNum = document.getElementById("code_input");

    $codeNum.onkeyup = function () {
      if (this.value.length >= 6) {
        if (this.getAttribute("data-number") == this.value) {
          this.parentElement.classList.add("success");
          this.setAttribute("readonly", "");

          $loginBtn.addEventListener("click", function () {
            location.href = "../../leaders";
          });
        }
      }
    };

    $codeNum.oninput = function () {
      if (this.value.length > 6) {
        this.value = this.value.substr(0, 6);
      }
    };
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 상황별 preview 가져오기
     *
     **/

    const name = new URLSearchParams(location.search).get("preview");
    const $loginBtn = document.querySelector(".btn-login");
    const $codeInputRow = document.querySelector('.form-row[data-row="certification"]');
    switch (name) {
      case "fail":
        // 팝업 - 2단계 인증 실패
        $.modal({ className: "alert", message: `<p class="text-center">2단계 인증에 실패하였습니다.<br>다시 시도해주세요.</p>` });
        break;
      case "logout":
        // 팝업 - 중복사용자
        $.modal({
          className: "confirm",
          message: `<p class="text-center">동일 아이디 사용자가 존재합니다.<br>기존 사용자를 강제 로그아웃 후 로그인하시겠습니까?</p>`,
          btnAgree: "로그인",
          on: {
            complete({ ...args }) {
              const $btnAgree = args.$modal[0].querySelector(".btn-agree");

              $btnAgree.addEventListener("click", () => {
                location.href = "../../leaders";
              });
            },
          },
        });
        break;

      // 인풋 - 코드 입력 성공 시
      case "success":
        let $codeNum = document.getElementById("code_input");
        $codeInputRow.classList.add("success");
        $codeNum.value = $codeNum.getAttribute("data-number");
        $codeNum.setAttribute("readonly", "");
        $loginBtn.addEventListener("click", function () {
          location.href = "../../leaders";
        });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
