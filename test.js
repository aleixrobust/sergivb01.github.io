function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}



var html = document.querySelector(".html"),
        screenshoot = document.querySelector(".screenshoot"),
        generate = document.querySelector(".generate"),
        body = document.querySelector("body"),
        dataurl = document.querySelector(".dataurl");

function init() {
    generateScreenshoot();
    generate.addEventListener('click', generateScreenshoot);
}

function generateScreenshoot() {
    body.classList.toggle("loading");
    html2canvas(html).then(function(canvas) {
        if (screenshoot.childNodes.length>0) {
            screenshoot.childNodes[0].remove();
        }
        screenshoot.appendChild(canvas);
        dataurl.value = canvas.toDataURL();
        body.classList.toggle("loading");
    });
}


ready(init)