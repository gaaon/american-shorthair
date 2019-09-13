class DayNightSwitchPainter {
  paint(ctx, geom, properties) {
    console.log(geom);

    ctx.strokeStyle = 'white';
    ctx.fillStyle = 'white';

    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.fillRect(0, 0, 30, 30);
    // ctx.arc(0, 0, 50, 0, 2*Math.PI);
    ctx.stroke();
    ctx.closePath();
  }
}

registerPaint('dayNightSwitch', DayNightSwitchPainter);
