const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let userColor;

canvas.onmousedown = function () {
  ctx.beginPath();
  canvas.onmousemove = function (event) {
    let x = event.offsetX;
    let y = event.offsetY;
    ctx.lineTo(x - 2, y - 3);
    ctx.lineCap = 'round';
    ctx.strokeStyle = userColor;
    ctx.stroke();
  }
  canvas.onmouseup = function () {
    canvas.onmousemove = null;
  }
}

document.getElementById('changeColor').oninput = function () {
  userColor = this.value;
}

document.getElementById('changeWidth').onchange = function () {
  ctx.lineWidth = this.value;
};

document.getElementById('clearCanvas').addEventListener('click', function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});






