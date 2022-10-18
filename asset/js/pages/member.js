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
     */

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
     * 로그인 - 유효성체크
     *
     */
    const $login = document.querySelector('.l-member--login');
    if ($login) {
      const $inpId = $login.querySelector('.form-row[data-row=id] input');
      const $inpPass = $login.querySelector('.form-row[data-row=password] input');
      const $btnEye = $login.querySelector('.btn-eye');
      const $btnLogin = $login.querySelector('.btn-login');

      // ID & Pass, Empity 상태에서 button 비활성화
      [$inpId, $inpPass].forEach((_$el) => {
        _$el.addEventListener('keyup', (e) => {
          if (Boolean($inpId.value) && Boolean($inpPass.value)) $btnLogin.removeAttribute('disabled');
          else $btnLogin.setAttribute('disabled', '');
        });
      });

      // 비밀번호 미리보기
      $btnEye.addEventListener('click', (e) => {
        $btnEye.classList.toggle('btn-eye--is-active');

        const isAcitve = e.target.classList.contains('btn-eye--is-active');

        if (isAcitve) $inpPass.setAttribute('type', 'text');
        else $inpPass.setAttribute('type', 'password');
        $inpPass.dispatchEvent(new Event('change'));
      });
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 2단계 인증
     *
     */

    // 2단계 인증 페이지 element 색인
    const $auth = document.querySelector('.l-member--auth');
    if (!$auth) return;
    const $btnCode = $auth.querySelector('.btn-code');
    const $loginBtn = $auth.querySelector('.btn-login');

    // 2단계 인증 핸드폰 번호 입력시 자동 하이픈 추가 함수
    let autoHypenPhone = function (str) {
      str = str.replace(/[^0-9]/g, '');
      let tmp = '';
      if (str.length < 4) {
        return str;
      } else if (str.length < 7) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3);
        return tmp;
      } else if (str.length < 11) {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 3);
        tmp += '-';
        tmp += str.substr(6);
        return tmp;
      } else {
        tmp += str.substr(0, 3);
        tmp += '-';
        tmp += str.substr(3, 4);
        tmp += '-';
        tmp += str.substr(7);
        return tmp;
      }

      return str;
    };
    // 인풋 키업시 함수 실행
    let $phoneNum = document.getElementById('tel_input');
    $phoneNum.onkeyup = function () {
      this.value = autoHypenPhone(this.value);
    };

    // 코드인풋 키업시 success 처리
    let $codeNum = document.getElementById('code_input');

    $loginBtn.addEventListener('click', function () {
      msgMngr.send('2단계 인증에 실패하였습니다.<br>다시 시도해주세요.', '', 0, 0);
    });
    $codeNum.onkeyup = function () {
      if (this.value.length >= 6) {
        if (this.getAttribute('data-number') == this.value) {
          this.parentElement.classList.add('success');
          this.setAttribute('readonly', '');

          $loginBtn.addEventListener('click', function () {
            location.href = '../../leaders';
          });
        }
      }
    };

    $btnCode.addEventListener('click', (e) => {
      msgMngr.send('코드 발송', '', 0, 0);
    });
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
  {
    /**
     *
     * 상황별 preview 가져오기
     *
     * */
    const name = new URLSearchParams(location.search).get('preview');
    const $loginBtn = document.querySelector('.btn-login');
    const $codeInputRow = document.querySelector('.form-row[data-row="certification"]');
    switch (name) {
      // 팝업 - 코드 인증키 발송
      case 'send':
        msgMngr.send('코드 발송', '', 0, 0);
        break;
      case 'fail':
        // 팝업 - 2단계 인증 실패
        msgMngr.send('2단계 인증에 실패하였습니다.<br>다시 시도해주세요.', '', 0, 0);
        $loginBtn.addEventListener('click', function () {
          msgMngr.send('2단계 인증에 실패하였습니다.<br>다시 시도해주세요.', '', 0, 0);
        });
        break;

      // 인풋 - 코드 입력 성공 시
      case 'success':
        let $codeNum = document.getElementById('code_input');
        $codeInputRow.classList.add('success');
        $codeNum.value = $codeNum.getAttribute('data-number');
        $codeNum.setAttribute('readonly', '');
        $loginBtn.addEventListener('click', function () {
          location.href = `${SERVER.view}/leaders`;
        });
        break;
    }
  }
  /*
  ■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■■
  */
}); // DOCUMENT READY...
