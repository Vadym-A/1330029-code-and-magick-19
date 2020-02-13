'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_COLOR = '#ffffff';
  var CLOUD_SHADOW = 'rgba(0, 0, 0, 0.7)';
  var GAP = 10;
  var TEXT_X = 130;
  var TEXT_Y = 40;
  var TEXT_NAME_Y = 250;
  var TEXT_COLOR = '#000';
  var BAR_WIDTH = 40;
  var BAR_HEIGHT = 150;
  var BAR_GAP = 50;
  var BAR_X = BAR_WIDTH + BAR_GAP;
  var BAR_Y = 240;

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
    ctx.strokeRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, CLOUD_SHADOW);
    renderCloud(ctx, CLOUD_X, CLOUD_Y, CLOUD_COLOR);

    ctx.font = '16px PT Mono';
    ctx.fillStyle = TEXT_COLOR;
    ctx.textBaseline = 'hanging';
    ctx.fillText('Ура вы победили!', TEXT_X - GAP, TEXT_Y - GAP);
    ctx.fillText('Cписок результатов:', TEXT_X - GAP, TEXT_Y + GAP);

    var getMaxTime = function () {
      return Math.max.apply(null, times);
    };

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(names[i], TEXT_X + GAP + BAR_X * i, TEXT_NAME_Y);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(210, ' + Math.floor(Math.random() * 101) + '%, 50%)';
      }

      var barHeight = (-BAR_HEIGHT * times[i]) / getMaxTime();

      ctx.fillRect(CLOUD_X + BAR_GAP - GAP + BAR_X * i, BAR_Y, BAR_WIDTH, barHeight);

      ctx.fillStyle = TEXT_COLOR;
      ctx.fillText(Math.round(times[i]), TEXT_X + GAP + BAR_X * i, barHeight + (CLOUD_HEIGHT - BAR_GAP));
    }
  };
})();