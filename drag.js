const body = document.querySelector("body");

let el;

function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

body.addEventListener("mousedown", (e) => {
  el = e.target.closest(".item");
  if (el) {
    const position = getOffset(el);
    el.style.top = position.top + "px";
    el.style.left = position.left + "px";
    el.style.position = "fixed";
    el.style.pointerEvents = "none";
    el.style.zIndex = 10;
    dragMouseDown();
  }
});
body.addEventListener("mouseup", (e) => {
  let list = e.target.closest(".list");
  if (el) {
    list.append(el);
  }
});

function elementDrag(e) {
  e = e || window.event;
  e.preventDefault();

  // calculate the new cursor position:
  pos1 = pos3 - e.clientX;
  pos2 = pos4 - e.clientY;
  pos3 = e.clientX;
  pos4 = e.clientY;
  // set the element's new position:
  el.style.top = el.offsetTop - pos2 + "px";
  el.style.left = el.offsetLeft - pos1 + "px";
}

function closeDragElement() {
  // stop moving when mouse button is released:
  document.onmouseup = null;
  document.onmousemove = null;
  el.style.position = "static";
  el.style.pointerEvents = "auto";
  el.style.zIndex = 1;
  el = null;
}

function dragMouseDown(e) {
  e = e || window.event;
  e.preventDefault();
  // get the mouse cursor position at startup:
  pos3 = e.clientX;
  pos4 = e.clientY;
  document.onmouseup = closeDragElement;

  // call a function whenever the cursor moves:
  document.onmousemove = elementDrag;
}
