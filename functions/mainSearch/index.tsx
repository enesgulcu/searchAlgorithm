import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    const filteredKeyDada:any = []
    const statistics:any = []
    let counter1 = 0;
    let counter2 = 0;
    
    data.map((item:any, itemIndex:number) => {
        
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {

            //subcatagory.searchAvarage -> veri tabanındaki cümlelerin aranma ortalaması
            //subcatagory.searchTerm -> veri tabanındaki cümleler

            const dbSentence = subcatagory.searchTerm
            const dbWordArray = dbSentence.split(' ') // veri tabanındaki cümleleri kelime kelime ayırdık ve arraye attık
            const inputword = inputData.toLowerCase().split(' ') // inputtaki cümleleri kelime kelime ayırdık ve arraye attık
            console.log()
            dbWordArray.map((databaseWord:any, wordIndex:number) => {
                let mydata1;
                let mydata2;
                if(wordIndex === 0){
                     mydata1 = LevenshteinDistance(inputData.toLowerCase(), databaseWord.toLowerCase()) // inputtaki cümle ile veri tabanındaki cümlelerin benzerlik oranını bulduk
                }
                else{
                    
                     mydata2 = LevenshteinDistance(inputData.toLowerCase(), databaseWord.toLowerCase()) // inputtaki cümle ile veri tabanındaki cümlelerin benzerlik oranını bulduk
                }
                
                
                if(((mydata1 && Number(mydata1) > 60 && inputData.length > 1 && databaseWord.length <= 4) || (mydata1 && Number(mydata1) > 30 && inputData.length > 1 && databaseWord.length > 4) || (mydata2 && Number(mydata2) > 50 && inputData.length > 1))){
                    console.log("mydata1 :" + mydata1)
                    console.log("mydata2 :" + mydata2)
                    filteredData.push(subcatagory) 
                }
            })    
        })
    })

    filteredData.sort((a:any, b:any) => b.searchAvarage - a.searchAvarage);

    console.log('counter1', counter1)
    console.log('counter2', counter2)

    return filteredData;
    

    
    
    
}

export default MainSearch
