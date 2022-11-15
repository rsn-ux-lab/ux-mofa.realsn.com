/*!
 *
 * @author: GUNI, h2dlhs@realsn.com
 **/

(function ($) {
  var ds;

  var dsClass = function ($el, $options) {
    var select, select_label;
    var ds, label, list, ul;
    var bubbleCnt = 0;

    var ov;

    this.init = function () {
      select = $el.find("> select");
      select_label = $el.find("> label");

      build();
    };

    // **********		Build		************************************************************************************************ //
    // 최초 생성
    function build() {
      select.hide();
      //select_label.hide();

      buildSelect();
      buildMutation();

      render();
    }

    // 재 생성
    function reBuild() {
      ul.children().remove();
      buildList();

      render();
    }

    // 셀렉트 박스 생성
    function buildSelect() {
      ds = $("<div class='ds' />");
      label = $("<button class='label' type='button'><span>내용</span></button>");
      list = $("<div class='list'></div>");
      ul = $("<ul />");

      list.append(ul);
      ds.append(label);
      ds.append(list);
      $el.append(ds);

      buildList();

      hndl_reSize();
      $(document).click(evt_docClick);
      select.change(render);

      // Fixed
      if ($el.attr("data-fixed")) {
        $(document).scroll(hndl_setPos);
        $("#popup_container .popup_item").scroll(hndl_setPos);
        $(window).resize(hndl_setPos);
      }
    }

    function buildList() {
      select.find("> *").each(function ($idx) {
        if (this.tagName.toUpperCase() == "OPTGROUP") {
          ul.append(buildOption($(this).find("> *:first-child")));
          ul.find("> li > button").addClass("has_sub");
          var sub = $('<div class="sub" />');
          var sub_ul = $("<ul />");
          $(this)
            .find("> *:not(:first-child)")
            .each(function () {
              sub_ul.append(buildOption($(this)));
            });

          sub.append(sub_ul);
          ul.find("> li").eq($idx).append(sub);
        } else {
          ul.append(buildOption($(this)));
        }
      });
    }

    // 옵션 생성
    function buildOption($item) {
      var opt = $("<li></li>");
      var btn = $('<button data-value="' + ($item.val() || $item.text()) + '"><span>' + $item.text() + "</span></button>");
      opt.append(btn);

      if ($item.attr("data-class")) {
        $item
          .attr("data-class")
          .split(" ")
          .filter(function (cl) {
            btn.append("<span class='keyword_cl_icon " + cl + "'></span>").addClass(cl);
          });
      }

      if ($item.attr("data-bubble")) {
        var id = select.attr("id") + "_" + "bubble_" + bubbleCnt;
        bubbleCnt++;
        var data = JSON.parse($item.attr("data-bubble"));
        btn.attr("data-bubble-id", id);

        var bubbleBox = '<div class="ui_bubble_box" data-bubble-for="' + id + '" data-pos="CT" data-arrowcenter="true">';
        bubbleBox += '<span class="arrow" >-</span>';
        bubbleBox += '<div class="tip">';
        bubbleBox += '<strong class="title">' + data.title + "</strong>";
        bubbleBox += '<span class="txt ui_nowrap">' + data.txt + "</span>";
        bubbleBox += "</div>";
        bubbleBox += "</div>";

        opt.append(bubbleBox);

        // Bubble Box
        opt.find(".ui_bubble_box").each(function () {
          var activeChk = false;
          var bubbleBox = $(this);
          var code = $(this).data("bubble-for");
          var btn = $(this)
            .parent()
            .find('*[data-bubble-id="' + code + '"]');

          if (btn.data("action") == "click") {
            btn.click(function () {
              activeChk = !activeChk;
              hndl_bubbleBox();
            });
          } else {
            btn.hover(function ($e) {
              if ($e.type == "mouseenter") activeChk = true;
              else activeChk = false;
              hndl_bubbleBox();
            });
          }

          if (bubbleBox.attr("data-fixed") == "true") {
            $(window, "*").unbind("scroll", hndl_bubbleBox).scroll(hndl_bubbleBox);
            $(window).unbind("resize", hndl_bubbleBox).resize(hndl_bubbleBox);
          }

          function hndl_bubbleBox() {
            if (activeChk) {
              var pos = getPos(bubbleBox.data("pos"));
              bubbleBox.css({ top: pos.top, left: pos.left }).fadeIn(0);
              btn.addClass("on");
            } else {
              bubbleBox.fadeOut(0);
              btn.removeClass("on");
            }
          }

          function getPos($type) {
            var result = {};
            var space = 11;

            if (bubbleBox.attr("data-fixed") == "true") {
              if ($type.indexOf("T") >= 0) {
                result.top = btn[0].getBoundingClientRect().top - bubbleBox.outerHeight() - space;
              } else if ($type.indexOf("B") >= 0) {
                result.top = btn[0].getBoundingClientRect().top + btn.outerHeight() + space;
              }
              if ($type.indexOf("L") >= 0) {
                result.left = btn[0].getBoundingClientRect().left;
                if (bubbleBox.attr("data-arrowcenter") == "true") {
                  var posX = result.left - btn[0].getBoundingClientRect().left + btn.outerWidth() / 2 - bubbleBox.find(".arrow").outerWidth() / 2;
                  bubbleBox.find(".arrow").css("left", posX);
                }
              } else if ($type.indexOf("R") >= 0) {
                result.left = btn[0].getBoundingClientRect().left + btn.outerWidth() - bubbleBox.outerWidth();
                if (bubbleBox.attr("data-arrowcenter") == "true") {
                  var posX = btn[0].getBoundingClientRect().left - result.left + btn.outerWidth() / 2 - bubbleBox.find(".arrow").outerWidth() / 2;
                  bubbleBox.find(".arrow").css("left", posX);
                }
              } else if ($type.indexOf("C") >= 0) {
                result.left = btn[0].getBoundingClientRect().left + btn.outerWidth() / 2 - bubbleBox.outerWidth() / 2;
              }
            } else {
              if ($type.indexOf("T") >= 0) {
                result.top = btn.position().top - bubbleBox.outerHeight() - space;
              } else if ($type.indexOf("B") >= 0) {
                result.top = btn.position().top + btn.outerHeight() + space;
              }

              if ($type.indexOf("L") >= 0) {
                result.left = btn.position().left;
                if (bubbleBox.attr("data-arrowcenter") == "true") {
                  var posX = result.left - btn.position().left + btn.outerWidth() / 2 - bubbleBox.find(".arrow").outerWidth() / 2;
                  bubbleBox.find(".arrow").css("left", posX);
                }
              } else if ($type.indexOf("R") >= 0) {
                result.left = btn.position().left + btn.outerWidth() - bubbleBox.outerWidth();
                if (bubbleBox.attr("data-arrowcenter") == "true") {
                  var posX = btn.position().left - result.left + btn.outerWidth() / 2 - bubbleBox.find(".arrow").outerWidth() / 2;
                  bubbleBox.find(".arrow").css("left", posX);
                }
              } else if ($type.indexOf("C") >= 0) {
                result.left = btn.position().left + btn.outerWidth() / 2 - bubbleBox.outerWidth() / 2;
              }
            }

            return result;
          }
        });
      }

      if ($item.attr("disabled") == "disabled") btn.attr("disabled", "disabled");

      btn.mousedown(btn_mouseDown);

      return opt;
    }

    // Mutation 생성
    function buildMutation() {
      ov = new MutationObserver(function ($e) {
        if ($e[0].attributeName == "value") {
          // value 변경 시
          select[0].value = select.attr("value");
          render();
          select.trigger("change");
        } else {
          // value 외 변경 시 재생성
          reBuild();
        }
      });
      ov.observe(select[0], { attributes: true, childList: true, characterData: true, subtree: true, attributeOldValue: true, characterDataOldValue: true });
    }

    // **********		Hndler		************************************************************************************************ //
    // 사이즈 셋팅
    function hndl_reSize() {
      if (label && list) {
        label.css("width", list.outerWidth());
        list.css("min-width", label.outerWidth());
      }
    }

    // 포지션 셋팅
    function hndl_setPos() {
      if (!$el.attr("data-fixed")) return false;

      var pos = {};
      pos.top = parseInt(label[0].getBoundingClientRect().top + label.outerHeight());
      pos.left = parseInt(label[0].getBoundingClientRect().left);

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

    // 서브 메뉴 포지션 셋팅
    function hndl_setSubPos() {
      ul.find(".sub").each(function () {
        var idx = $(this).parent().index();
        var ulLen = ul.find("> li").length;
        var subLen = $(this).find("> ul > li").length;
        var len = subLen - idx >= ulLen - 1 ? idx : 0;
        $(this).css("margin-top", -20 * len);
      });
    }

    // 렌더링
    function render() {
      list.find("button").removeClass("selected");
      list.find('button[data-value="' + select.val() + '"]').addClass("selected");
      list
        .find('button[data-value="' + select.val() + '"]')
        .parents(".sub")
        .eq(0)
        .prev()
        .addClass("selected");

      var str = "";
      list.find("button.selected").each(function () {
        if (str != "") str += " > ";
        str += $(this).html();
      });
      label.find("span").html(str);
    }

    // **********		Event		************************************************************************************************ //
    // Document Click 시(열기/닫기)
    function evt_docClick($e) {
      if (label[0].contains($e.target)) {
        list.toggleClass("active");
        hndl_setSubPos();
        hndl_setPos();
      } else {
        list.removeClass("active");
      }
    }

    // 아이템 클릭시
    function btn_mouseDown($e) {
      if (!$(this).attr("data-value")) {
        return false;
      }
      select.attr("value", $(this).attr("data-value"));
      list.removeClass("active");
    }

    // **********		Out Method		************************************************************************************************ //
    this.update = function ($value) {
      hndl_reSize();
    };

    this.render = render;
  };

  $.fn.design_select = function ($options) {
    return this.each(function () {
      if (!$.data(this, "design_select")) {
        ds = new dsClass($(this), $options);
        $.data(this, "design_select", ds);
        $(document).ready(ds.init);
      } else {
        $(this).data("design_select").update();
      }
    });
  };
})(jQuery);
