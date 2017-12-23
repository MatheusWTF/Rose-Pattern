//Getting the UI
var d = document.querySelector('#d'),n = document.querySelector('#n'), canvas = document.querySelector('#rose-pattern'), saveBtn = document.querySelector('#saveBtn'), ctx = canvas.getContext('2d'); 
d.addEventListener('change', drawRose);
n.addEventListener('change', drawRose);

//drawRose Function
function drawRose(){
  let k = n.value/d.value; 
  const tau = (Math.PI*2) * d.value;
  console.log(tau)
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.translate(canvas.width / 2, canvas.height / 2);
  ctx.beginPath();
  ctx.strokeStyle = 'black';
  for(let i = 0; i < tau * 4; i+= 0.001){
    r = 225 * Math.cos(k*i)
    x = r * Math.cos(i);
    y = r * Math.sin(i);
    ctx.lineTo(x, y);
  }
  ctx.closePath();
  ctx.stroke();
  ctx.translate(-canvas.width/2, -canvas.height/2);
}

//Save Canvas as Image
saveBtn.addEventListener('click', (e)=>{
  saveBtn.href = canvas.toDataURL();
  saveBtn.download = "mypainting.png";
}, false);