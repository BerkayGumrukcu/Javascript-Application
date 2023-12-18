/*sayıların belirlenmesi için gerekli global değişkenlerin tanımlanması*/
var toplar=[],sayi,sayac=0;
 
while(sayac < 6)
{
	sayi=Math.floor(Math.random()*49)+1;
	if(toplar.indexOf(sayi)==-1)
	{
		toplar.push(sayi);
		sayac++;
	}
}
 
for(i=1;i < 50;i++)
{
	$("<div class='top'>").appendTo($("body")).html(i);	
}
 
$(".top").each(function(index, element) {
  
   var kutuSayi=Number($(element).html());
   if(toplar.indexOf(kutuSayi)>=0)
   {
   		$(element).css({"background":"red"});
   }
});
