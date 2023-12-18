function rasteleSembol(uzunluk, semboller) {
    let sifre = '';
    if (semboller.indexOf('a') > -1) sifre += 'abcdefghijklmnopqrstuvwxyz';
    if (semboller.indexOf('A') > -1) sifre += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (semboller.indexOf('0') > -1) sifre += '0123456789';
    if (semboller.indexOf('#') > -1) sifre += '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
    var sonuc = '';
     
    for (var i = uzunluk; i > 0; --i) 
    {
    sonuc += sifre[Math.floor(Math.random() * sifre.length)];
    }
    return sonuc;
    }
     
    //Örnek Kullanım
    alert(rasteleSembol(1, 'aA')); //rastgele harf üretir.
    alert(rasteleSembol(4, '0#')); //4 basamaklı sayı ve sembollerden üretilir.
    alert(rasteleSembol(8, 'aA')); //8 basamaklı küçük büyük harflerin tamamı
    alert(rasteleSembol(5, '#aA'));//5 basamaklı büyük küçük ve sayılardan üretilir.
     
    