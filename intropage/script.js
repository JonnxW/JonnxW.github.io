window.addEventListener("resize", () => {
    let centerBoxes = document.querySelectorAll(".centerContent");
    centerBoxes.forEach(box => {
        height = box.querySelector(".center").scrollHeight;
        box.style.setProperty("height", height+"px")
    })
})
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
/*var keys = {37: 1, 38: 1, 39: 1, 40: 1};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault)
      e.preventDefault();
  e.returnValue = false;  
}

function preventDefaultForScrollKeys(e) {
    if (keys[e.keyCode]) {
        preventDefault(e);
        return false;
    }
}

let current = 0;
let elementPositions = [];

let move = (step) => () => {
    let from = elementPositions[current];
    current += step;
    let to = elementPositions[current];
    //console.log(elementPositions, current)
    up.classList.remove("disabled")
    down.classList.remove("disabled")
    if(current == 0) up.classList.add("disabled")
    if(current == elementPositions.length - 1) down.classList.add("disabled")
    moveBit(Date.now(), from, to, 300)();
}

let moveBit = (s, f, t, m) => () => {
    let x = Date.now();
    if(x <= s + m){
        window.scrollTo(0, Math.round(((t-f)*x/m) + (f - (s*((t-f)/m)))));
        requestAnimationFrame(moveBit(s,f,t,m))
    }

}

window.addEventListener("DOMContentLoaded", () => {
    document.addEventListener('DOMMouseScroll', preventDefault);
    document.onwheel = preventDefault; // modern standard
    document.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
    document.ontouchmove  = preventDefault; // mobile
    document.onkeydown  = preventDefaultForScrollKeys;

    elementPositions.push(document.querySelector("header").getBoundingClientRect().top)
    let snaps = document.querySelectorAll(".snap");
    snaps.forEach(snap => elementPositions.push(snap.getBoundingClientRect().top))
    //console.log(elementPositions);

    up.onclick = move(-1);
    down.onclick = move(1);
    
    
})
   */
