var btn=document.getElementById("btnHesap");
    btn.onclick=function(){
        let i,j;
        let toplam=0;
        let sayi=Number(document.getElementById("txtSayi").value);
        for(i=1;i<sayi;i++)
         {
             if (sayi%i==0)
             {
                toplam=toplam+i;	
             }
         }
             if (sayi==toplam)
             {
                
                document.getElementById("lblSonuc").innerHTML=sayi + " Sayısı Mükemmel Sayıdır";	 
             }
             else
             {
                document.getElementById("lblSonuc").innerHTML=sayi + " Sayısı Mükemmel Sayı Değildir";
             }
         }

         //! 100.000 den küçük bütün mükemmel sayıların listesini veren uygulama.