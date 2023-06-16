import Data from '@/data.json'
import LevenshteinDistance from '@/functions/levenshtein'

const MainSearch = (inputData:any) => {
    const data = Data;
    const filteredData:any = []
    const filteredKeyDada:any = []
    data.map((item:any, itemIndex:number) => {
        item.subcategories.map((subcatagory:any, subcatagoryIndex:number) => {
            
            const word = subcatagory.searchTerm
            const wordArray = word.split(' ')
            const inputword = inputData.toLowerCase().split(' ')
            wordArray.map((a:any, wordIndex:number) => {
                const mydata = LevenshteinDistance(inputData.toLowerCase(), a.toLowerCase())
                
                if(Number(mydata) > 50 && subcatagory.searchTerm.length > 2){
                    
                    if(!filteredData.includes(subcatagory.searchTerm)){
                        filteredData.push(subcatagory.searchTerm)
                    }
                }
               
                if(a.toLowerCase().startsWith(inputword[0]) && inputData.length > 2){
                   
                    if(!filteredData.includes(subcatagory.searchTerm)){
                        filteredData.push(subcatagory.searchTerm)
                    }
                }
            })  


            
           
        })
    })

        return filteredData;

    
    
    
}

export default MainSearch
