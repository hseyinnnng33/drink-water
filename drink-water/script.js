const kucukbardaklar = document.querySelectorAll(".cup-small");
const kacLitreSpan = document.querySelector("#liters");
const suMiktari = document.querySelector("#percentage");
const kap = document.querySelector(".remained");

kucukbardaklar.forEach((bardak, index)=>{
    bardak.addEventListener("click", function(){
        secilenBardaklar(index);
    })
})

function secilenBardaklar(index){
    if(index == 7 && kucukbardaklar[index].classList.contains("full")){
        index--;
    }
    // TIKLANAN BARDAK DOLU İSE BİR ÖNCEKİ BARDAGA GEÇER
    // KULLANILMASA BARDAGA TIKLANINCA KAYBOLMAZ
    else if(kucukbardaklar[index].classList.contains("full") && !kucukbardaklar[index].nextElementSibling.classList.contains("full")){
        index--;
        // KENDİNDEN SONRAKİ BARDAKLARA BAKAR DOLU VARSA SİLER
        // YOKSA KENDİ KENDİNİ SİLER
    }

    kucukbardaklar.forEach((bardak, index1)=>{
        if(index1 <= index){
            // BENİM SEÇTİGİM BARDAK HER ZAMAN BARDAK İNDEX TEN BÜYÜK OLACAK
            // 5 İ SEÇERSEM SİSTEM 1 DEN BAŞLAYARAK 5 E GELİR
            bardak.classList.add("full")
        }
        else{
            // BENİM BARDAK 5 İSE BİR SONRAKİ SEÇTİGİM BARDAK 1 İSE
            // BU SEFER SİSTEMİN SAYISI 5 OLDUGU (ÖNDE) İÇİN 
            // ELSE BLOGU ÇALIŞACAK
            bardak.classList.remove("full");
        }
    })
    bardakDoldur()
}

function bardakDoldur(){
    const doluBardaklar = document.querySelectorAll(".cup-small.full").length;
    const toplamBardaklar = kucukbardaklar.length;

    if(doluBardaklar == 0){
        // EGER HİÇ BARDAK DOLU DEGİLSE
        suMiktari.style.visibility = "hidden";
        suMiktari.style.height = 0;
    }
    else{
        // TÜM BARDAKLAR DOLU İSE
        suMiktari.style.visibility = "visible";
        // SOLDAN SAGA GİDİLİR = 0 1 ARASINDA BİR SONUÇ ÇIKAR 100 İLE ÇARPILIR
        // HEİGHT DEGERİNİ VERİR
        suMiktari.style.height = `${doluBardaklar / toplamBardaklar * 100}%`;
        suMiktari.innerHTML = `${doluBardaklar / toplamBardaklar *100}%`;
    }
    if(doluBardaklar == toplamBardaklar){
        // EGER TÜM BARDAKLAR DOLU İSE
        kap.style.visibility = "hidden";
        kap.style.height = 0;
    }
    else{
        // DOLU OLANLARI HESAPLIYOR
        kap.style.visibility = "visible";
        kacLitreSpan.innerHTML = `${2 - (250 * doluBardaklar / 1000)}L`;
    }
}

function ozet(){
    console.log(`
    Her bir bardağa tıklandığında secilibardaklar fonksiyonu tetikleniyor ve seçilen bardağın indeksini alıyor.

    secilibardaklar fonksiyonu, seçilen bardağın durumunu güncellemek ve bardaklara uygun CSS 
    sınıflarını eklemek veya kaldırmak için kullanılıyor. İlk olarak, seçilen bardağın durumuna bağlı olarak indeksi 
    güncelleniyor. Eğer seçilen bardak son bardak (indeks 7) ve dolu ise, indeks bir azaltılarak bir önceki bardağa geçiliyor. 
    Aynı şekilde, seçilen bardak dolu ise ve bir sonraki bardak dolu değilse, indeks bir azaltılarak bir önceki bardağa geçiliyor.
    
    Daha sonra, tüm bardaklar üzerinde dönen bir döngü ile bardaklara CSS sınıfları ekleniyor veya kaldırılıyor. 
    İndeks değerine göre, seçilen bardaktan önceki bardaklar "full" sınıfıyla işaretleniyor ve görünümü dolu olarak güncelleniyor. 
    Seçilen bardağın sonrasındaki bardaklar ise "full" sınıfından arındırılıyor ve görünümü dolu olmayan şekilde güncelleniyor.
    
    update fonksiyonu, bardaklardaki doluluk durumunu güncellemek için kullanılıyor. 
    Bu fonksiyon, dolu bardakların sayısını ve toplam bardak sayısını hesaplıyor. Ardından, 
    bu bilgilere göre su miktarı ve kalan miktarın görünürlüğünü ve boyutunu ayarlıyor. 
    Eğer hiçbir bardak dolu değilse, su miktarı bölgesi gizleniyor. 
    Eğer tüm bardaklar dolu ise, kalan miktar bölgesi gizleniyor. 
    Dolu bardaklar varsa, su miktarı ve kalan miktarın boyutu ve içeriği güncelleniyor.
    `)
}
