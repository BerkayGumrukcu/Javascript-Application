const dizel = 24.53;
const benzin = 22.25;
const lpg = 11.1;

const yakitMetni = `1-Dizel\n
2-Benzin\n
3-Lpg\n
Yakıt türünüzü seçiniz`;

let yakitTipi = prompt(yakitMetni);

if (yakitTipi === "1" || yakitTipi === "2" || yakitTipi === "3") {
    const yakitLitresi = Number(prompt("Yakıt litresini giriniz"));
    let bakiye = Number(prompt("Bakiyenizi giriniz"));

    let odenecektutar;
    let yakitTur;

    if (yakitTipi === "1") {
        odenecektutar = dizel * yakitLitresi;
        yakitTur = "Dizel";
    } else if (yakitTipi === "2") {
        odenecektutar = benzin * yakitLitresi;
        yakitTur = "Benzin";
    } else if (yakitTipi === "3") {
        odenecektutar = lpg * yakitLitresi;
        yakitTur = "Lpg";
    }

    if (odenecektutar <= bakiye) {
        bakiye -= odenecektutar;
        alert(`Yakıt alma işlemi başarılı\n
        Kalan bakiye : ${bakiye}`);
    } else {
        const eksikTutar = odenecektutar - bakiye;
        alert(`Bakiyeniz yeterli değildir.\n
        Ödenecek tutar : ${odenecektutar}\n
        Bakiye : ${bakiye}\n
        Eksik Tutar : ${eksikTutar}`);
    }
} else {
    alert("Lütfen geçerli bir yakıt türü seçiniz.");
}

//! Chrome Console ve ECS6 ile düzenle