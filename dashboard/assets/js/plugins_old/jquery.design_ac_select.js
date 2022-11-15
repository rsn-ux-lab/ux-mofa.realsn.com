/*!
 *
 * @author: GUNI, h2dlhs@realsn.com
 **/

(function ($) {
  var ds;

  var dsClass = function ($el, $options) {
    var select, select_label, ori_opts, use_opts;
    var ds, input, label, list, ul;
    var bubbleCnt = 0;
    var inputKey = "";
    var inputBeforeKeyword = "";
    var limitLen = 50;
    var limitCnt = 0;
    var appending = false;
    var inputTimer;

    var ov;

    this.init = function () {
      build();
    };

    // **********		Build		************************************************************************************************ //
    // 최초 생성
    function build() {
      buildSelect();

      /*
			select.hide();
			select_label.hide();

			buildSelect();
			buildMutation();

			render();
			*/
    }

    // 재 생성
    function reBuild() {}

    // 셀렉트 박스 생성
    function buildSelect() {
      ori_opts = $options.opts;
      select = $("<select />");
      ds = $("<div class='ds' />");
      input = $("<input type='text'>");
      clearBtn = $("<button class='ui_btn small only_icon ui_icon btn_clear' title='삭제'><span class='icon x'>삭제</span></button>");
      label = $("<button class='label' type='button'><span>열기/닫기</span></button>");
      list = $("<div class='list'></div>");
      ul = $("<ul />");

      list.append(ul);
      ds.append(input);
      ds.append(clearBtn);
      ds.append(label);
      ds.append(list);
      $el.append(select);
      $el.append(ds);

      buildOpts();

      $(document).click(evt_docClick);
      select.change(evt_selectChange);
      input.on("input", inputChange);
      input.on("focus", inputFocus);
      ul.scroll(listScroll);
      render();

      // Fixed
      if ($el.attr("data-fixed")) {
        $(document).scroll(hndl_setPos);
        $("#popup_container .popup_item").scroll(hndl_setPos);
        $(window).resize(hndl_setPos);
      }

      clearBtn.click(evt_clearClick);
    }

    function buildOpts($inputChk) {
      if ($inputChk == undefined) $inputChk = true;

      select.find("> *").remove();
      use_opts = [];
      if ($inputChk) {
        ori_opts.filter(function ($item) {
          if ($item.name.indexOf(input.val()) >= 0) {
            use_opts.push($item);
          }
        });
      } else {
        use_opts = ori_opts.concat();
      }

      var result = "";
      for (var Loop1 = 0; Loop1 < use_opts.length; ++Loop1) {
        var opt = "<option value=" + use_opts[Loop1].code + " data-date=" + use_opts[Loop1].date + " data-category=" + use_opts[Loop1].category + ">" + use_opts[Loop1].name + "</option>";
        result += opt;
        //select.append( opt );
      }
      select.html(result);

      buildList();
    }

    function buildList() {
      var result = "";
      use_opts.filter(function ($item, $idx) {
        if ($idx > limitLen) return false;
        result += buildOption($item);
        //ul.append( buildOption( $item ) );
      });
      ul.html(result);
      ul.find("button").click(btn_mouseDown);
    }

    function appendOpts() {
      appending = true;
      limitCnt++;

      var result = "";
      use_opts.filter(function ($item, $idx) {
        if ($idx <= limitLen * limitCnt) return false;
        if ($idx > limitLen * (limitCnt + 1)) return false;
        result += buildOption($item);
        //ul.append( buildOption( $item ) );
      });
      ul.append(result);
      ul.find("button").click(btn_mouseDown);

      appending = false;
    }

    // 옵션 생성
    function buildOption($item) {
      var opt = $("<li></li>");
      var btn = $('<button data-value="' + ($item.code == undefined ? $item.name : $item.code) + '" data-date="' + $item.date + '" data-category="' + $item.category + '"><span>' + strToHlStr($item.name, inputKey) + "</span></button>");
      opt.append(btn);

      //if( $item.attr( "disabled" ) == "disabled" ) btn.attr( "disabled", "disabled" );

      //btn.click( btn_mouseDown );

      return opt[0].outerHTML;
    }
    function strToHlStr($val, $txt) {
      return $val;
      // var regx = new RegExp( $txt, "gi" );
      // return $val.replace( regx, "<strong>" + "$&" + "</strong>" );
    }

    // **********		Hndler		************************************************************************************************ //
    // 사이즈 셋팅
    function hndl_reSize() {
      if (label && list) {
        //label.css( "width", list.outerWidth() );
        list.css("min-width", input.outerWidth());
      }
    }

    // 포지션 셋팅
    function hndl_setPos() {
      if (!$el.attr("data-fixed")) return false;

      var pos = {};
      pos.top = parseInt(input[0].getBoundingClientRect().top + input.outerHeight());
      pos.left = parseInt(input[0].getBoundingClientRect().left);

      if (list.hasClass("active")) {
        list.css({
          top: pos.top,
          left: pos.left,
        });
      } else {
        list.css({
          top: -99999,
        });
      }
    }

    // 렌더링
    function render() {
      list.find("button").removeClass("selected");
      list.find('button[data-value="' + select.val() + '"]').addClass("selected");
      input.val(select.find("option:selected").text());
    }

    // Input change
    function inputChange($e) {
      clearTimeout(inputTimer);
      inputTimer = setTimeout(function () {
        inputKey = input.val();
        buildOpts();
        hndl_list(true);
      }, 200);
    }

    // List Open/Close
    function hndl_list($type) {
      if ($type) {
        hndl_reSize();
        list.addClass("active");
        hndl_setPos();
      } else {
        list.removeClass("active");
        appending = false;
        limitCnt = 0;
        inputKey = "";
      }
    }

    // **********		Event		************************************************************************************************ //
    // Document Click 시(열기/닫기)
    function evt_docClick($e) {
      if (label[0].contains($e.target)) {
        hndl_reSize();
        buildOpts(false);
        list.toggleClass("active");
        hndl_setPos();
      } else if ($el[0].contains($e.target)) {
        //list.removeClass( "active" );
        //render();
      } else {
        if (list.hasClass("active")) {
          list.removeClass("active");
          input.val(inputBeforeKeyword);
          inputKey = "";
          buildOpts();
          render();
          appending = false;
          limitCnt = 0;
        }
      }
    }

    // 아이템 클릭시
    function btn_mouseDown($e) {
      if (!$(this).attr("data-value")) {
        return false;
      }

      list.find("> ul").scrollTop(0);
      select.val($(this).attr("data-value"));
      select.trigger("change");
      list.removeClass("active");
      appending = false;
      limitCnt = 0;

      inputBeforeKeyword = input.val();
      inputKey = "";

      return false;
    }

    // Input Focus
    function inputFocus($e) {
      inputBeforeKeyword = input.val() == "선택없음" ? "" : input.val();
    }

    // List Scroll
    function listScroll($e) {
      if ((ul[0].scrollHeight - ul.innerHeight()) * 0.95 < ul.scrollTop()) {
        if (!appending) appendOpts();
      }
    }

    // Clear Button Click
    function evt_clearClick($e) {
      list.removeClass("active");
      input.val("선택없음");
      inputKey = "";
      buildOpts();
      render();
      appending = false;
      limitCnt = 0;
    }

    function evt_selectChange() {
      //if( $( $el.context ).attr( "data-selected" ) ) eval( $( $el.context ).attr( "data-selected" ) )( $( this ).attr( "data-value" ) );

      console.log(select.find("option:selected")[0]);

      render();
    }

    // **********		Out Method		************************************************************************************************ //
    this.update = function ($opts) {
      ori_opts = $opts;
      hndl_reSize();
    };

    this.render = render;
  };

  $.fn.design_ac_select = function ($options) {
    return this.each(function () {
      if (!$.data(this, "design_ac_select")) {
        ds = new dsClass($(this), $options);
        $.data(this, "design_ac_select", ds);
        $(document).ready(ds.init);
      } else {
        $(this).data("design_ac_select").update();
      }
    });
  };
})(jQuery);
