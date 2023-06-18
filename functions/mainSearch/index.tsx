import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    const filteredKeyDada:any = []
    const statistics:any = []
    
    
    data.map((item:any, itemIndex:number) => {
        
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {

            //subcatagory.searchAvarage -> veri tabanındaki cümlelerin aranma ortalaması
            //subcatagory.searchTerm -> veri tabanındaki cümleler

            const dbSentence = subcatagory.searchTerm
            const dbWordArray = dbSentence.split(' ') // veri tabanındaki cümleleri kelime kelime ayırdık ve arraye attık
            const inputword = inputData.toLowerCase().split(' ') // inputtaki cümleleri kelime kelime ayırdık ve arraye attık

            dbWordArray.map((databaseWord:any, wordIndex:number) => {
                const mydata = LevenshteinDistance(inputData.toLowerCase(), databaseWord.toLowerCase())

                if((mydata && Number(mydata) > 40) || (inputData.lenght > 2 && databaseWord.toLowerCase().startsWith(inputword[0]) &&filteredData && !filteredData.includes(subcatagory.searchTerm))){
                    
                    if(!filteredData.includes(subcatagory.searchTerm)){
                        filteredData.push(subcatagory.searchTerm)
                    }
                }
                
               
                if(databaseWord.toLowerCase().startsWith(inputword[0])){
                   
                    if(!filteredData.includes(subcatagory.searchTerm)){
                        filteredData.push(subcatagory.searchTerm)
                    }
                }
            })    
        })
    })
    console.log(filteredData)
    //return filteredData;
    

    
    
    
}

export default MainSearch
