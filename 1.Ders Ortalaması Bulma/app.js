let vize = Number(prompt("Vize Notunuzu Giriniz :"));
let final = Number(prompt("Final Notunuzu Giriniz"));

let ortalama = vize * 0.4 + final * 0.6;

if (vize <= 100 && final <= 100 && vize >= 0 && final >= 0) {
    if (ortalama >= 60) {
        alert("Dersten Geçtiniz." + " Ortalamanız : " + ortalama);
    } else {
        alert("Geçmiş olsun");
    }
} else {
    alert("Lütfen Notlarınızın doğruluğunu kontrol edin.");
}
