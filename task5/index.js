const arr = [    { urunAdi: "Beyaz Ekmek", fiyat: 2.5, stok: 100, kategori: "Ekmek" },
{ urunAdi: "Süt", fiyat: 3.75, stok: 50, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Domates", fiyat: 2.0, stok: 80, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Salatalık", fiyat: 1.5, stok: 60, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Tavuk Göğsü", fiyat: 15.0, stok: 30, kategori: "Et ve Et Ürünleri" },
{ urunAdi: "Muz", fiyat: 4.0, stok: 40, kategori: "Meyve ve Sebzeler" },
{ urunAdi: "Ton Balığı", fiyat: 10.0, stok: 20, kategori: "Konserve ve Hazır Yiyecekler" },
{ urunAdi: "Soda", fiyat: 1.25, stok: 100, kategori: "İçecekler" },
{ urunAdi: "Yoğurt", fiyat: 2.25, stok: 40, kategori: "Süt ve Süt Ürünleri" },
{ urunAdi: "Çikolata", fiyat: 3.0, stok: 60, kategori: "Şekerleme" }
];


function found(arr,arr_urunAdi) {
    return arr.some(x =>x.urunAdi === arr_urunAdi)
}
const ms = found (arr,"Süt")
console.log(ms);