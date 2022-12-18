document.addEventListener("DOMContentLoaded", function () {
    let input = document.createElement("input");
    document.body.append(input);
    let h2 = document.createElement("h2");
    document.body.append(h2);
    let vr;
    
    function enteringText() {
      let tx = input.value;
      if (vr) {
        clearTimeout(vr);
      }
      vr = setTimeout(() => {
        h2.innerHTML = tx;
      }, 300);
    }
  
     input.addEventListener("input", enteringText);
  });