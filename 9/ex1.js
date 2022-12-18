document.addEventListener('DOMContentLoaded', function() {
    let second = document.getElementById('second');
    let knop = document.getElementById('button');
    let sr = document.getElementById('sr');
    let r = 0;
    let i;
  
    function start() {
      sr.textContent = --r;
      
      if (r <= 0)
        i = clearInterval(i);
    }
  
    function onClick() {
      i = clearInterval(i);
      r = +second.value;
  
      if (r) {
        sr.textContent = r;
        i = setInterval(start, 1000);
      }
    }
  
    knop.addEventListener('click', onClick);
  });

