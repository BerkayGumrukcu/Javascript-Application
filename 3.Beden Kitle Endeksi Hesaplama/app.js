let kilo = Number(prompt("Kilonuzu giriniz :"));
let boy = Number(prompt("Boyunuzu m.cm cinsinden giriniz :"));

let sonuc = kilo / (boy * 2);

if (sonuc < 18.5) {
    alert("İdeal Kilonun Altındasınız.");
} else if (sonuc >= 18.5 && sonuc <= 24.9) {
    alert("İdeal Kilodasınız.");
} else if (sonuc >= 25 && sonuc <= 29.9) {
    alert("İdeal Kilonun Üstünde");
} else if (sonuc >= 30 && sonuc <= 39.9) {
    alert("İdeal Kilonun Çok Üstünde");
} else if (sonuc >= 40) {
    alert("İdeal Kilonun Çok Üstünde (Morbid Obez)");
}
