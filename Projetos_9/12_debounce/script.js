let time; 

window.addEventListener("mousemove", function(e) {
   clearTimeout(time);
   time = setTimeout(function() {
      console.log(e,x);
   }, 500);
});