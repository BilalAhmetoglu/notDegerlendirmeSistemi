function kaydet(){
    
    var isim = document.getElementById("isim").value;
            localStorage.setItem('isim', isim)
     var soyisim = document.getElementById("soyisim").value;
     localStorage.setItem('soyisim', soyisim)

}
function getir(){
    var sonuc = document.getElementById("sonuc");
    console.log(localStorage.getItem("isim"));
    console.log(localStorage.getItem("soyisim"));
}


function harfNotu(){
    var vize1=Number(document.getElementById("vize1").value)   
    var vize2=Number(document.getElementById("vize2").value)
    var final=Number(document.getElementById("final").value)
    var harfnotuu="0";

    var hNotu=(vize1/4)+(vize2/4)+(final/2)

    var isim=localStorage.getItem("isim")
    var soyisim=localStorage.getItem("soyisim")
if(hNotu<50){
    harfnotuu="FF"
} else if(hNotu>=50 && hNotu<59){
    harfnotuu="CC"
} else if(hNotu>=60 && hNotu<69){
    harfnotuu="CB"
} else if(hNotu>=70 && hNotu<79){
    harfnotuu="BB"
} else if(hNotu>=80 && hNotu<89){
    harfnotuu="BA"
} else if(hNotu>=90&& hNotu<100){
    harfnotuu="AA"
} else {
    alert("hata oluştu")
}
document.getElementById("p").innerHTML="Sayın "+ isim.toUpperCase() + " " + soyisim.toUpperCase() + "  Harf Notunuz " +harfnotuu  ;
}





