function drawCursor(event) {
  ctx.strokeStyle = "#FF00AE";
  ctx.beginPath();
  ctx.arc(event.clientX,event.clientY ,10,0,Math.PI * 2);
  ctx.stroke();
}

function drawLines(event) {
  ctx.strokeStyle = "#FF0000";
  ctx.beginPath();
  ctx.moveTo(0,0);
  ctx.lineTo(event.clientX,event.clientY);
  ctx.stroke();

  ctx.strokeStyle = "#2EFF00";
  ctx.beginPath();
  ctx.moveTo(0,canvas.height);
  ctx.lineTo(event.clientX,event.clientY);
  ctx.stroke();

  ctx.strokeStyle = "#00FFF3";
  ctx.beginPath();
  ctx.moveTo(canvas.width,0);
  ctx.lineTo(event.clientX,event.clientY);
  ctx.stroke();

  ctx.strokeStyle = "#5100FF";
  ctx.beginPath();
  ctx.moveTo(canvas.width,canvas.height);
  ctx.lineTo(event.clientX,event.clientY);
  ctx.stroke();
}
