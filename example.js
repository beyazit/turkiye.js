konsol.kayıt("Merhaba", "turkiyejs!");
konsol.hata("Bum!");

const yol = "./kayıt.txt";
try {
  const contents = await turkiyejs.dosyaOku(yol);
  konsol.kayıt("Dosya okundu", contents);
} catch (hata) {
  konsol.hata("Dosya okunamıyor", yol, hata);
}

await turkiyejs.dosyaYaz(yol, "Dosya yazdırabiliyorum");
const contents = await turkiyejs.dosyaOku(yol);
konsol.kayıt("Dosyadan oku", yol, "içerik:", contents);
konsol.kayıt("Dosya kaldırılıyor", yol);
turkiyejs.dosyaKaldır(yol);
konsol.kayıt("Dosya kaldırıldı");
konsol.kayıt(turkiyejs.baskent())
