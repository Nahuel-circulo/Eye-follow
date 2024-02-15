
const rigthPupil = document.querySelector("#rigth-pupil");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  const pupilRect = rigthPupil.getBoundingClientRect();
  const radius = 10;
  const angle = Math.atan2(y-pupilRect.top,x-pupilRect.left)+Math.PI;
  rigthPupil.setAttribute('transform', `translate(${-radius*Math.cos(angle)},${-radius*Math.sin(angle)})`);

})
const leftPupil = document.querySelector("#left-pupil");

document.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  const pupilRect = leftPupil.getBoundingClientRect();
  const radius = 10;
  const angle = Math.atan2(y-pupilRect.top,x-pupilRect.left)+Math.PI;
  leftPupil.setAttribute('transform', `translate(${-radius*Math.cos(angle)},${-radius*Math.sin(angle)})`);

})

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = [
  "#f7ffe4",
  "#edffc4",
  "#daff90",
  "#bfff50",
  "#84e600",
  "#65b800",
  "#4c8b00",
  "#3e6d07",
  "#355c0b",
  "#193400",
];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function(e){
  coords.x = e.clientX;
  coords.y = e.clientY;
  
});

function animateCircles() {
  
  let x = coords.x;
  let y = coords.y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x  + "px";
    circle.style.top = y  + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    
    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.4;
    y += (nextCircle.y - y) * 0.4;
  });
 
  requestAnimationFrame(animateCircles);
}

animateCircles();

