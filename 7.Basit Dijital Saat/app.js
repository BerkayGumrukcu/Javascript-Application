var saatZemin = document.getElementById("zemin");
 
 
function format(gelen) {
let StrYap = gelen.toString();
if (StrYap.length === 1) {
return "0" + StrYap;
} else {
return StrYap;
}
}
 
function saatGuncelle() {
let dd = new Date();
//console.log(dd.getTime());
let hh = dd.getHours();
let mm = dd.getMinutes();
let ss = dd.getSeconds();
saatZemin.textContent = format(hh) + ":" + format(mm) + ":" + format(ss);
}
 
setInterval(saatGuncelle, 1000);
 
//! w3schools JS date işlemleri.