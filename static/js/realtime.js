function realtime(){
  el = getElementsByClassName("realtimeTime")[0].new Date().toLocaleTimeString("ru-RU");
  el.textContent = new Date().toLocaleTimeString("ru-RU");
}
clock();
setInterval(clock, 1000)
