import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    const filteredKeyDada:any = []
    const statistics:any = []

    if(inputData.length > 2){
        data.map((item:any, itemIndex:number) => {
            item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {
                
                const dbSentence = subcatagory.searchTerm
                const dbWordArray = dbSentence.split(' ') // veri tabanındaki cümleleri kelime kelime ayırdık ve arraye attık
                const inputword = inputData.toLowerCase().split(' ') // inputtaki cümleleri kelime kelime ayırdık ve arraye attık
    
                dbWordArray.map((databaseWord:any, wordIndex:number) => {
                    const mydata = LevenshteinDistance(inputData.toLowerCase(), databaseWord.toLowerCase())
                    if(Number(mydata) > 50 && subcatagory.searchTerm.length > 2){
                        statistics.push(
                            
                                {

                                    'inputData ': inputData.toLowerCase(),
                                    'databaseWord ': databaseWord.toLowerCase(),
                                    'mydata': mydata,
                                    'subcatagory.searchTerm': subcatagory.searchTerm,
                                    'databaseWord': dbWordArray,
                                    "wordIndex": wordIndex,
                                }
                            
                        )
                    }
                    if(Number(mydata) > 50 && subcatagory.searchTerm.length > 2){
                        
                        if(!filteredData.includes(subcatagory.searchTerm)){
                            filteredData.push(subcatagory.searchTerm)
                        }
                    }
                   
                    if(databaseWord.toLowerCase().startsWith(inputword[0]) && inputData.length > 2){
                       
                        if(!filteredData.includes(subcatagory.searchTerm)){
                            filteredData.push(subcatagory.searchTerm)
                        }
                    }
                })    
            })
        })
        console.log(statistics)
        return filteredData;
    }

    
    
    
}

export default MainSearch
