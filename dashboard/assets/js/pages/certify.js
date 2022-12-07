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

    const $container = document.querySelector('#container');
    const $header = document.querySelector('#header');
    const $footer = document.querySelector('#footer');

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

    // 코드 전송 클릭시 발생하는 인터렉션
    const $codeBtn = document.querySelector('.btn-code');
    const $codeTxt = document.querySelector('.form-text__label'); // 코드전송 완료 텍스트
    const $codeTimeTxt = document.querySelector('.form-text__watch'); // 코드 유효시간 카운트
    const $timeoutTxt = document.getElementById('timeoutTxt'); // 유효시간 만료 텍스트

    $codeBtn.addEventListener('click', function () {
      // 출력되어있던 유효시간 만료 텍스트 제거
      $timeoutTxt.classList.add('visually-hidden');
      // 코드 발송 시 나오는 안내 텍스트 출력
      $codeTxt.classList.remove('visually-hidden');
      $codeTimeTxt.classList.remove('visually-hidden');

      // 코드 발송 후 '재발송' 버튼으로 변경
      $codeBtn.innerHTML = '코드 재전송';
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
    const $codeNum = document.getElementById('code_input');
    const $loginBtn = document.querySelector('.btn-login');

    $codeNum.onkeyup = function () {
      if (this.value.length >= 6) {
        $loginBtn.removeAttribute('disabled'); // 로그인 버튼 disabled 삭제
        $loginBtn.removeEventListener('click', clickBtn); // 이벤트 한번 제거
        $loginBtn.addEventListener('click', clickBtn); // 이벤트 다시 바인딩

        // 인증번호에 맞게 입력 시
        if (this.getAttribute('data-number') == this.value) {
          this.parentElement.classList.add('success'); // 체크 표시 노출
          this.setAttribute('readonly', ''); // 코드 인증 성공 했으므로 입력 막기
          $loginBtn.removeAttribute('disabled'); // 로그인 버튼 disabled 삭제

          $loginBtn.addEventListener('click', function () {
            // 로그인 버튼에 로케이션 활성화
            location.href = '../../leaders';
          });
        }
      } else {
        $loginBtn.setAttribute('disabled', ''); // 로그인 버튼 disabled 삭제
      }
    };

    $codeNum.oninput = function () {
      if (this.value.length > 6) {
        this.value = this.value.substr(0, 6);
      }
    };

    // 버블링 방지를 위해 클릭 이벤트 함수로 설정
    function clickBtn() {
      // 인증 실패 알럿
      $.modal({ className: 'alert', message: `<p class="text-center">2단계 인증에 실패하였습니다.<br> 다시 시도해주세요.</p>` });
    }
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

    const name = new URLSearchParams(location.search).get('preview');
    const $loginBtn = document.querySelector('.btn-login');
    const $codeInputRow = document.querySelector('.form-row[data-row="certification"]');
    const $codeBtn = document.querySelector('.btn-code');
    const $timeoutTxt = document.getElementById('timeoutTxt'); // 유효시간 만료 텍스트
    switch (name) {
      case 'timeout':
        // 2단계 코드 유효시간 만료
        $timeoutTxt.classList.remove('visually-hidden');
        $codeBtn.innerHTML = '코드 재전송';
        break;
      case 'fail':
        // 팝업 - 2단계 인증 실패
        $.modal({ className: 'alert', message: `<p class="text-center">2단계 인증에 실패하였습니다.<br>다시 시도해주세요.</p>` });
        break;
      case 'logout':
        // 팝업 - 중복사용자
        $.modal({
          className: 'confirm',
          message: `<p class="text-center">동일 아이디 사용자가 존재합니다.<br>기존 사용자를 강제 로그아웃 후 로그인하시겠습니까?</p>`,
          btnAgree: '로그인',
          on: {
            complete({ ...args }) {
              const $btnAgree = args.$modal[0].querySelector('.btn-agree');

              $btnAgree.addEventListener('click', () => {
                location.href = '../../leaders';
              });
            },
          },
        });
        break;

      // 인풋 - 코드 입력 성공 시
      case 'success':
        let $codeNum = document.getElementById('code_input');
        $codeInputRow.classList.add('success'); // 체크 표시 노출
        $loginBtn.removeAttribute('disabled'); // 로그인 버튼 disabled 삭제
        $codeNum.value = $codeNum.getAttribute('data-number');
        $codeNum.setAttribute('readonly', ''); // 코드 인증 성공 했으므로 입력 막기
        $loginBtn.addEventListener('click', function () {
          // 로그인 버튼에 로케이션 활성화
          location.href = '../../leaders';
        });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
