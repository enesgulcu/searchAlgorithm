## arama motur nasıl çalışır ?

1- kullanıcının girdiği input verileri database içerisindeki cümleler içerisinden aratılır.

** aratılırken nelere dikkat edilir ?

1.1   - input ve database verileri kelime kelime birbirleri ile eşleştirilir.
1.2   - her kelimenin [ı-ö-ü-ç-ş] -> [i-o-u-c-s] türkçe karakter uyumu giderilir.
1.3.1 - input verisi database verisi içinde herhangi kelime guruba ile eşleşiyorsa o database verileri seçilir
------- eğer (1.3.1) maddesi olmaz ise
1.3.2 - kelimelerin birbirleri ile benzerlik oranları [%60] üstü ise eşleşen veriler seçilir. (Levenshtein yöntemi)
1.4   - seçilen kelimeler (searchAvarage) puanına göre yukarıdan aşağı doğru array içerisinde sıralanır
1.5   - sıralanan kelimeler listelenmek üzere frontend'e gönderilir...