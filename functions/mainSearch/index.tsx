import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

// bir array içerisinde aynı veri var mı yok mu kontrol ediyoruz. // varsa -> true yoksa -> false döner
function isDuplicate(array:any, newObject: { searchTerm: string; searchAvarage: number; }) {
    return array.some((existingObject: { searchTerm: string; searchAvarage: number; }) =>
      existingObject.searchTerm === newObject.searchTerm &&
      existingObject.searchAvarage === newObject.searchAvarage
    );
  }

  // Türkçe karakteri olan kelimeleri global standart (en) karakterlere çevirme fonksiyonu
function turkishToEnglish(word:string) {
    const turkishLetters = ['ı', 'ö', 'ü', 'ğ', 'ç','ş'];
    const englishLetters = ['i', 'o', 'u', 'g', 'c','s'];
  
    let convertedWord = '';
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
      const index = turkishLetters.indexOf(letter);
      if (index !== -1) {
        convertedWord += englishLetters[index];
      } else {
        convertedWord += letter;
      }
    }
    return convertedWord;
  }

  // ##########################################################################

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []

    
    data.map((item:any, itemIndex:number) => {
        
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {

            //subcatagory.searchAvarage -> veri tabanındaki cümlelerin aranma ortalaması
            //subcatagory.searchTerm -> veri tabanındaki cümleler

            const dbSentence = subcatagory.searchTerm
            const dbWordArray = dbSentence.split(' ') // veri tabanındaki cümleleri kelime kelime ayırdık ve arraye attık
            const inputword = inputData.toLowerCase().split(' ') // inputtaki cümleleri kelime kelime ayırdık ve arraye attık
            
            dbWordArray.map((databaseWord:any, wordIndex:number) => {
                let mydata1;

                
                
                inputword.map((inputItem:string)=>{

                    // inpput ve database cümlelerinde [ı-ö-ü-ç-ş] -> [i-o-u-c-s] dönüşümü yaptık
                    const inputWordResult = turkishToEnglish(inputItem)
                    const databaseWordResult = turkishToEnglish(databaseWord)

                    // inputtaki cümle ile veri tabanındaki cümlelerin benzerlik oranını bulduk
                    mydata1 = LevenshteinDistance(inputWordResult.toLowerCase(), databaseWordResult.toLowerCase())
                    
                    if((((mydata1 && Number(mydata1) > 60 || databaseWordResult.toLowerCase().includes(inputWordResult.toLowerCase())) && inputWordResult.length > 1 && databaseWordResult.length > 2))){
                    
                        // filteredData içinde aynı veri varsa ekleme!
                        if(!isDuplicate(filteredData, subcatagory)){
                            filteredData.push(subcatagory) 
                        }
                        
                    }
                })
            })    
        })
    })

    filteredData.sort((a:any, b:any) => b.searchAvarage - a.searchAvarage);
    console.log(filteredData)
    return filteredData;
    
    
}

export default MainSearch
