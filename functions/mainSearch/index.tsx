import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    const myData:any = []

    
    data.map((item:any, itemIndex:number) => {
        
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {

            //subcatagory.searchAvarage -> veri tabanındaki cümlelerin aranma ortalaması
            //subcatagory.searchTerm -> veri tabanındaki cümleler

            const dbSentence = subcatagory.searchTerm
            const dbWordArray = dbSentence.split(' ') // veri tabanındaki cümleleri kelime kelime ayırdık ve arraye attık
            const inputword = inputData.toLowerCase().split(' ') // inputtaki cümleleri kelime kelime ayırdık ve arraye attık

            dbWordArray.map((databaseWord:any, wordIndex:number) => {
                let mydata1;
                let mydata2;
                
                // inputtaki cümle ile veri tabanındaki cümlelerin benzerlik oranını bulduk
                mydata1 = LevenshteinDistance(inputData.toLowerCase(), databaseWord.toLowerCase()) 
                // mydata1 && Number(mydata1) > 50 ||
                if(((( databaseWord.toLowerCase().includes(inputData.toLowerCase())) && inputData.length > 1 && databaseWord.length > 3))){
                    
                    myData.push(mydata1)   
                    filteredData.push(subcatagory) 
                }
            })    
        })
    })

    filteredData.sort((a:any, b:any) => b.searchAvarage - a.searchAvarage);
    
    return filteredData;
    
    
}

export default MainSearch
