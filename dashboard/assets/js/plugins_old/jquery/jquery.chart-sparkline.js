/*!
 *
 * @author: GUNI, h2dlhs@realsn.com
 *
 * $options
 *      - stroke: 컬러값 | #000000
 *      - strokeWidth: 라인 두께 | 1
 **/

(function ($) {
  var sparklineClass = function ($el, $options) {
    var svg;
    var width, height;
    var x, y;
    var line, path;

    var data_before;
    var data;

    this.init = function () {
      $options.stroke = $options.stroke || '#000000';
      $options.strokeWidth = $options.strokeWidth || 1;

      build();
    };

    // **********		Build		************************************************************************************************ //
    function build() {
      data_before = $options.data_before ? $options.data_before : null;
      data = $options.data;

      svg = d3.select($el[0]).append('svg');
      width = parseInt($el.outerWidth());
      height = parseInt($el.outerHeight());

      x = d3
        .scaleLinear()
        .domain([0, data.length + (data_before ? data_before.length : 0) - 1])
        .range([0, width]);
      y = d3
        .scaleLinear()
        .domain([0, d3.max(data)])
        .range([height, 0]);

      svg.attr('viewBox', [0, 0, width, height]);

      line = d3
        .line()
        .x(function (d, i) {
          return x(i);
        })
        .y(function (d) {
          return y(d);
        })
        .curve(d3.curveBasis);

      path = svg.append('path');
      path
        .data([data_before ? data_before.concat(data) : data])
        .attr('stroke', $options.stroke)
        .attr('stroke-width', $options.strokeWidth)
        // .attr( "stroke-dasharray", function(d, a, b, c){
        //     return 3;
        // })
        .attr('fill', 'none')
        .attr('d', line);

      var dashBetweenX = [0, data_before ? data_before.length : 0];
      (path2 = path.node()), (totalLen = path2.getTotalLength());
      var dashBetweenL = dashBetweenX.map(function (d, i) {
        var beginning = 0,
          end = totalLen,
          target = null,
          d = x(d);

        // find the line lengths the correspond to our X values
        // stolen from @duopixel from http://bl.ocks.org/duopixel/3824661
        while (true) {
          target = Math.floor((beginning + end) / 2);
          pos = path2.getPointAtLength(target);
          if ((target === end || target === beginning) && pos.x !== d) {
            break;
          }
          if (pos.x > d) end = target;
          else if (pos.x < d) beginning = target;
          else break; //position found
        }

        return target;
      });

      // draw the dashes
      var sd = dashBetweenL[0],
        dp = dashBetweenL[0],
        count = 0;
      while (dp < dashBetweenL[1]) {
        dp += 2;
        sd += ', 2';
        count++;
      }
      // per answer below needs odd number of dash array
      if (count % 2 == 0) sd += ', 1';
      sd += ', ' + (totalLen - dashBetweenL[1]);
      path.attr('stroke-dasharray', sd);

      // Shadow
      if ($options.shadow) {
        $options.shadow.x = $options.shadow.x ? $options.shadow.x : '5px';
        $options.shadow.y = $options.shadow.y ? $options.shadow.y : '5px';
        $options.shadow.blur = $options.shadow.blur ? $options.shadow.blur : '5px';
        $options.shadow.fill = $options.shadow.fill ? $options.shadow.fill : '#000000';
        var opts = $options.shadow.x + 'px ' + $options.shadow.y + 'px ' + $options.shadow.blur + 'px ' + $options.shadow.fill;
        $el.find('svg path').css('filter', 'drop-shadow( ' + opts + ' )');
      }
    }

    // **********		Hndler		************************************************************************************************ //

    // **********		Event		************************************************************************************************ //

    // **********		Out Method		************************************************************************************************ //

    this.destroyed = function () {
      if ($el) $el.removeChild();
    };
  };

  $.fn.sparkline = function ($options) {
    return this.each(function () {
      var sparkline = new sparklineClass($(this), $options);
      $.data(this, 'sparkline', sparkline);
      $(document).ready(sparkline.init);
    });
  };
})(jQuery);
